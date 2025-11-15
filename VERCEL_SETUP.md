# Vercel 배포 완벽 가이드

## 1. Vercel 계정 생성

1. https://vercel.com 접속
2. **Sign Up** → **Continue with GitHub** 클릭
3. GitHub 계정으로 로그인

## 2. 프로젝트 Import

1. Vercel 대시보드 → **Add New...** → **Project**
2. GitHub 저장소 **2ndbrush-platform** 선택
3. **Import** 클릭

## 3. 환경 변수 설정 (중요!)

### Firebase Client SDK (필수)

프로젝트 설정에서 다음 환경 변수를 추가하세요:

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=your-actual-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=second-brush.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=second-brush
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=second-brush.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-actual-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-actual-app-id
```

### Firebase Admin SDK (관리자 기능용 - 필수)

관리자 페이지가 작동하려면 다음 환경 변수도 추가해야 합니다:

```bash
FIREBASE_PROJECT_ID=second-brush
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-fbsvc@second-brush.iam.gserviceaccount.com
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC7YVehQsQXxjdP\nwH+RbZRJywC69vmB09bCk8QkGLsuJmWS2Ak10ystPTHv/VhAvcrS94tq0FEadqRg\nuwPMdw4DcP0Zvsw5rwY0SRPZQE+zysWMBm6wc8YbDW9AiBGjyeTbbYMftslSrzJI\nDJ7SmB2IWtxy+O9DldPT8ntDgX5Pml9zjVENX7JHCG2qk+QhLL47fnpb+2P4+iRz\nQLc5JkE6U6i7DC52WeSTzWhjSWEQjXoNoh3WTGS9zogsokcPVRUeyJHZL+es9mii\nKQiPfYTubuOL5rkzPbItvQvh95howKrZfo/v+6CD1XLhbflhVziCQx3t6zuhENxa\nIeSv5UTNAgMBAAECggEAAk9Axi8kRpy96aVhaJP6Hkpxezfl8h02rqhKCNS46598\n0gTjznU/XcdPY3o8JOHbIjWN5W+lLNdBqrWO1BJFmHJDb81M4vjX8c4JpGDyVfnE\no25puQAOmYxVV+1Z/3PAZHVr4h1CS5HSiHqrV+kGgU4br1ti2U4NrUeaoqEowudl\n2JPY7K9GkU3gk4s66JS/1a/29AZ1B/fKj7mBiryPv1b4lUHUNAIOSVARqcSnWroM\njqbUu0L2yzBw3jipbEKnLXNDELp2r3/hstlKx3p20uXHcv8qnbttDqjdz0Y9CsVs\nXzo4sLwMWRgAcde1PNQpYw37wD2K/Tka7jkShM9mqwKBgQD0YpJUNTLSPWvT/9vl\nMo6ivz8Y9ty1fwJUwrMcFzAkzitu8FI4O+NK3I+d9VYx/7qYZ8LUaoPWy6YIgFdU\nfjMIJ/j5RjniQ6fHXMeFwRDTOC3xNx9/i2zERwH2X8PoMpf976Oug6JrreZL4To0\nfLaBB9fkYWyKrt5ZgpZ+injKOwKBgQDESTG+2shyM3B/DF4TI4PgFW0+T6SsfEm5\nhe3i80v0eiU3hhjHCXaHoBWeNBSOlfV+Y8NG2zsC7ggnuQcgi1vz5SDKFXnRRIvY\nV2FP2wv2NaTS2LESwJcRgSktO49KNPhYf4uh5URJUoHN4jSPAXn2Rau7xoh89Jy4\nQF/zQZY0lwKBgQC5cPrcjymrQxRJYEM6Hi0B7eExTlGYH3JjYwKKdEYCB7gJjK63\nISqOKeOI1xu7APRUpZe/m7vDB/FLTif2Y3TR4ZMZhGJ0ASaVLx/vrNrZjC3AdjWe\nkOvN3JvumiiMT6fp9yfbSuO6ldDFD3kdTu0l6A+4qvy0F5F9lowgJW8W9QKBgCkd\nq+3upk5FuCrkzE/2AInP8zI6PKRk5IyYIVyI2kA71c/rpwUKVmnSfrTE9AlqICJ5\ng040XggfFFY9y+BlUL2mIVgzZ3EOirymkRvJJphMZFpGSdFDxmFETPvMnhdNQThI\nf1dKTyOMxOP7nkbWaFXOAkszKyQBmVJ/KZorAuvBAoGBAMORb9bbkN92g75WQny+\nM9lgh6s6x2ztnuAikvoiB9MPCnFXhFD4eopXLOa0Hf0ANeNV7rPuS92TPmvkXqFR\nLboc9De45F977348ci4Hj8jIZ8aW4W/Pqy75yolficr1XxDD4Gk3YjwMf/eoZHa5\nMaKoLm0hbJp1ys/0hNWY7mrr\n-----END PRIVATE KEY-----\n"
```

**⚠️ 중요**:
- `FIREBASE_PRIVATE_KEY`는 전체를 큰따옴표로 감싸야 합니다
- `\n` 문자는 그대로 유지해야 합니다 (실제 줄바꿈으로 바꾸지 마세요)

### Environment 선택

모든 환경에 적용:
- ✅ Production
- ✅ Preview
- ✅ Development

## 4. 빌드 설정 확인

Vercel이 자동으로 감지합니다:

```
Framework Preset: Next.js
Build Command: next build
Output Directory: .next
Install Command: npm install
Root Directory: ./
Node.js Version: 18.x
```

## 5. 배포

**Deploy** 버튼 클릭 → 2-3분 대기

## 6. 배포 확인

배포 완료 후:
- Production URL: `https://2ndbrush-platform.vercel.app`

### 테스트 항목

1. ✅ 메인 페이지 로딩
2. ✅ 언어 변경 (한국어/영어/중국어)
3. ✅ 교육 프로그램 페이지
4. ✅ 쇼핑 페이지
5. ✅ 회원가입 (`dandyjoong@naver.com` 제외)
6. ✅ 로그인
7. ✅ 관리자 로그인 (`dandyjoong@naver.com`으로)
8. ✅ 관리자 대시보드 접근

## 7. 자동 배포

이제 Git Push 시 자동 배포됩니다:

```bash
git add .
git commit -m "feat: 새로운 기능"
git push origin main
```

→ Vercel이 자동으로 감지하여 배포!

## 8. 커스텀 도메인 연결

### Vercel에서 도메인 추가

1. 프로젝트 → **Settings** → **Domains**
2. `www.2ndbrush.com` 입력 → **Add**

### DNS 설정

도메인 등록업체(가비아, Cloudflare 등)에서:

```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: Auto
```

### 루트 도메인 (선택사항)

```
Type: A
Name: @
Value: 76.76.21.21
TTL: Auto
```

### SSL 인증서

Vercel이 자동으로 즉시 발급합니다!

## 9. 환경 변수 업데이트

나중에 환경 변수를 변경하려면:

1. **Settings** → **Environment Variables**
2. 변수 선택 → **Edit**
3. 새 값 입력 → **Save**
4. **Deployments** → 최신 배포 → **Redeploy**

## 10. 문제 해결

### 빌드 실패

**Deployments** → 실패한 배포 → **View Build Logs**

로컬에서 테스트:
```bash
npm run build
```

### 관리자 페이지 500 에러

Firebase Admin SDK 환경 변수 확인:
- `FIREBASE_PROJECT_ID`
- `FIREBASE_CLIENT_EMAIL`
- `FIREBASE_PRIVATE_KEY`

특히 `FIREBASE_PRIVATE_KEY`가 큰따옴표로 감싸져 있는지 확인!

### API Routes 404

- Vercel이 자동으로 API Routes를 Serverless Functions로 변환
- `/api/*` 경로 확인
- Function Logs 확인: **Deployments** → **Function Logs**

## 11. 비용

### Hobby (Free) 플랜

- ✅ 무제한 배포
- ✅ 100 GB 대역폭/월
- ✅ 100 GB-시간 Serverless Functions
- ✅ 커스텀 도메인 무제한
- ✅ SSL 인증서 자동

개인 프로젝트는 무료로 충분합니다!

## 12. 다음 단계

1. Vercel에서 프로젝트 Import
2. 환경 변수 모두 추가 (위 내용 복사)
3. Deploy 클릭
4. 배포 완료 후 모든 기능 테스트
5. www.2ndbrush.com 도메인 연결 (선택)

---

**예상 소요 시간**: 10-15분
**난이도**: ⭐⭐ (쉬움)

문제 발생 시 Vercel 대시보드의 로그를 확인하세요!
