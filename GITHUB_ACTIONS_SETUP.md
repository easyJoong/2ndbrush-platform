# GitHub Actions를 통한 Firebase 자동 배포 설정 가이드

GitHub에 코드를 푸시하면 자동으로 Firebase에 배포되도록 설정하는 방법입니다.

## 1. Firebase Service Account 생성

### Firebase Console에서 Service Account 키 생성

1. [Firebase Console](https://console.firebase.google.com) 접속
2. 프로젝트 선택: **second-brush**
3. 프로젝트 설정 (톱니바퀴 아이콘) → **서비스 계정** 탭 클릭
4. **새 비공개 키 생성** 버튼 클릭
5. JSON 파일 다운로드 (예: `second-brush-firebase-adminsdk.json`)

⚠️ **중요**: 이 JSON 파일은 절대 Git에 커밋하지 마세요!

## 2. GitHub Secrets 설정

### GitHub Repository에 Firebase Service Account 추가

1. GitHub 저장소 페이지로 이동
2. **Settings** → **Secrets and variables** → **Actions** 클릭
3. **New repository secret** 버튼 클릭
4. Secret 추가:
   - **Name**: `FIREBASE_SERVICE_ACCOUNT`
   - **Value**: 다운로드한 JSON 파일의 전체 내용 붙여넣기

```json
{
  "type": "service_account",
  "project_id": "second-brush",
  "private_key_id": "...",
  "private_key": "...",
  ...
}
```

## 3. 워크플로우 동작 방식

### 자동 배포 트리거

- **Main 브랜치에 Push**: 프로덕션 배포 (live)
- **Pull Request 생성**: Preview 배포 (임시 URL 생성)

### 배포 프로세스

```yaml
1. 저장소 체크아웃
2. Node.js 18 설정
3. 의존성 설치 (npm ci)
4. 프로젝트 빌드 (npm run build)
5. Firebase에 배포
```

## 4. 첫 배포 실행

### Git에 변경사항 커밋 및 푸시

```bash
# GitHub Actions 워크플로우 파일 추가
git add .github/workflows/firebase-hosting.yml
git add GITHUB_ACTIONS_SETUP.md
git commit -m "feat: GitHub Actions를 통한 Firebase 자동 배포 설정"
git push origin main
```

### 배포 상태 확인

1. GitHub 저장소의 **Actions** 탭에서 워크플로우 실행 확인
2. 각 단계별 로그 확인 가능
3. 성공 시 Firebase Hosting URL 확인

## 5. 배포 URL

### 프로덕션 (Main 브랜치)
- **Firebase 기본 URL**: https://second-brush.web.app
- **Firebase 앱 URL**: https://second-brush.firebaseapp.com
- **커스텀 도메인**: https://www.2ndbrush.com (설정 후)

### Preview (Pull Request)
- Pull Request 생성 시 자동으로 임시 URL 생성
- PR 코멘트에 URL 자동 추가

## 6. 환경 변수 설정 (선택사항)

만약 프로젝트에 환경 변수가 필요한 경우:

### GitHub Secrets에 환경 변수 추가

```bash
# 예시
NEXT_PUBLIC_FIREBASE_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
...
```

### 워크플로우에서 사용

```yaml
- name: Build project
  run: npm run build
  env:
    NEXT_PUBLIC_FIREBASE_API_KEY: ${{ secrets.NEXT_PUBLIC_FIREBASE_API_KEY }}
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: ${{ secrets.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN }}
```

## 7. 문제 해결

### 빌드 실패

**Actions 탭**에서 실패 로그 확인:

```bash
# 로컬에서 빌드 테스트
npm run build
```

### 배포 실패

1. Firebase Service Account JSON이 올바른지 확인
2. GitHub Secrets에 정확히 복사되었는지 확인
3. Firebase 프로젝트 권한 확인

### 권한 오류

Firebase Console에서 Service Account에 **Firebase Hosting Admin** 역할이 부여되어 있는지 확인

## 8. 수동 배포 (백업)

GitHub Actions가 작동하지 않는 경우, 수동으로 배포:

```bash
# 로컬에서 빌드
npm run build

# Firebase에 배포
firebase deploy --only hosting
```

## 9. 배포 취소 (Rollback)

이전 버전으로 롤백하려면:

```bash
firebase hosting:clone SOURCE_SITE_ID:SOURCE_CHANNEL_ID TARGET_SITE_ID:live
```

또는 Firebase Console에서:
1. **Hosting** → **릴리스 기록**
2. 이전 버전 선택 → **롤백** 버튼 클릭

## 10. 성능 최적화

### 빌드 캐싱

워크플로우에 이미 npm 캐싱이 활성화되어 있습니다:

```yaml
- uses: actions/setup-node@v4
  with:
    cache: 'npm'
```

### 배포 속도

- **평균 빌드 시간**: 2-5분
- **평균 배포 시간**: 1-2분
- **총 소요 시간**: 3-7분

## 참고 자료

- [Firebase Hosting 문서](https://firebase.google.com/docs/hosting)
- [GitHub Actions 문서](https://docs.github.com/en/actions)
- [Firebase GitHub Action](https://github.com/FirebaseExtended/action-hosting-deploy)
