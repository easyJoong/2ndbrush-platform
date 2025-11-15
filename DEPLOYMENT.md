# Firebase 호스팅 배포 가이드

## 사전 준비

### 1. Firebase CLI 설치 확인
```bash
firebase --version
```

### 2. Firebase 로그인
```bash
firebase login
```

### 3. Firebase 프로젝트 확인
현재 프로젝트: **2ndbrush-platform**

```bash
firebase projects:list
```

## 배포 방법

### 옵션 1: 자동 배포 (권장)
```bash
npm run deploy
```

이 명령어는 다음을 수행합니다:
1. Next.js 프로젝트 빌드 (`next build`)
2. Static 파일 생성 (`/out` 폴더)
3. Firebase 호스팅에 배포

### 옵션 2: 수동 배포
```bash
# 1. 빌드
npm run build

# 2. Firebase 배포
firebase deploy --only hosting
```

## 배포 설정

### Next.js 설정 (next.config.js)
```javascript
{
  output: 'export',  // Static Export 모드
  images: {
    unoptimized: true  // Firebase 호스팅용 이미지 최적화 비활성화
  }
}
```

### Firebase 호스팅 설정 (firebase.json)
```json
{
  "hosting": {
    "public": "out",  // Next.js Static Export 폴더
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"  // SPA 라우팅
      }
    ]
  }
}
```

## 배포 후 확인

### 배포 URL
- **커스텀 도메인**: https://www.2ndbrush.com (설정 필요)
- **Firebase 기본 URL**: https://2ndbrush-platform.web.app
- **Firebase 앱 URL**: https://2ndbrush-platform.firebaseapp.com
- **Preview**: 배포 시 제공되는 URL

### 커스텀 도메인 설정
자세한 커스텀 도메인 설정 방법은 [CUSTOM_DOMAIN.md](CUSTOM_DOMAIN.md)를 참고하세요.

### 배포 상태 확인
```bash
firebase hosting:channel:list
```

## 주의사항

### 1. 환경 변수
Firebase 환경 변수는 `.env.local` 파일에 저장되어 있습니다.
배포 전 Firebase Console에서 환경 변수를 설정해야 합니다.

### 2. 빌드 시간
프로젝트 크기에 따라 빌드에 2-5분 소요될 수 있습니다.

### 3. 캐시 무효화
배포 후 브라우저 캐시를 지워야 최신 버전이 표시될 수 있습니다.

### 4. Static Export 제한사항
- Server-side Rendering (SSR) 사용 불가
- API Routes 사용 불가 (Firebase Functions 사용 권장)
- Dynamic Routes는 빌드 시 사전 생성 필요

## 문제 해결

### 빌드 실패
```bash
# 캐시 삭제 후 재시도
rm -rf .next
npm run build
```

### 배포 실패
```bash
# Firebase 로그인 재시도
firebase logout
firebase login
```

### 이미지 로딩 문제
Firebase 호스팅에서는 Next.js Image Optimization을 사용할 수 없습니다.
`next.config.js`에서 `unoptimized: true` 설정이 필요합니다.

## 추가 리소스

- [Next.js Static Export 문서](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [Firebase 호스팅 문서](https://firebase.google.com/docs/hosting)
