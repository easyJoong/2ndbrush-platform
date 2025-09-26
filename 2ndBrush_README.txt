2ndBrush Beauty Platform
========================

회원제 기반 프리미엄 뷰티 시술, 교육, 디바이스 판매 통합 플랫폼

공식 웹사이트: www.2ndbrush.com
Instagram: @2ndbrush_official

=====================================
Quick Start
=====================================

Prerequisites
-------------
- Node.js 18.0 이상
- npm 또는 yarn
- Firebase CLI
- Git

Installation
------------

1. 레포지토리 클론
git clone https://github.com/2ndBrush/SecondBrush.git
cd SecondBrush

2. 의존성 설치
npm install
# or
yarn install

3. Firebase 설정
# Firebase CLI 로그인
firebase login

# Firebase 프로젝트 초기화
firebase init

# Firestore, Authentication, Storage, Hosting 선택

4. 환경 변수 설정
.env.local 파일 생성:

NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# 소셜 로그인 (선택사항)
NEXT_PUBLIC_KAKAO_CLIENT_ID=your_kakao_client_id

5. 개발 서버 실행
npm run dev
# or
yarn dev

=====================================
인증 시스템
=====================================

회원가입 방식
-------------
1. 이메일 간편 가입 - 최소 정보만 입력
2. Google 로그인 - 원클릭 가입
3. Kakao 로그인 - 원클릭 가입
4. Naver 로그인 - 원클릭 가입
5. Instagram 로그인 - 원클릭 가입 + 자동 팔로우

Instagram 가입 특별 혜택
------------------------
- @2ndbrush_official 자동 팔로우
- 팔로워 전용 10% 할인 쿠폰 즉시 지급
- 인스타그램 스토리 공유 시 추가 포인트

접근 권한 관리
--------------
// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  const path = request.nextUrl.pathname;
  
  // 회원 전용 페이지
  const protectedPaths = [
    '/blog',
    '/shop/checkout',
    '/services/booking',
    '/education/apply'
  ];
  
  // 관리자 전용 페이지
  const adminPaths = ['/admin'];
  
  // 인증 체크 로직
  if (protectedPaths.some(p => path.startsWith(p))) {
    // 로그인 페이지로 리다이렉트
  }
}

=====================================
Project Structure
=====================================

SecondBrush/
├── .github/
│   └── workflows/
│       └── firebase-hosting.yml    # GitHub Actions 배포 설정
├── public/
│   ├── images/                     # 정적 이미지
│   └── favicon.ico
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── layout.js
│   │   ├── page.js                 # 홈페이지
│   │   ├── auth/                   # 인증 페이지
│   │   │   ├── login/              # 로그인
│   │   │   ├── signup/             # 회원가입
│   │   │   └── forgot-password/    # 비밀번호 찾기
│   │   ├── services/               # 시술 서비스
│   │   │   ├── page.js            # 서비스 목록
│   │   │   └── booking/           # 예약 (회원 전용)
│   │   ├── education/              # 교육 프로그램
│   │   │   ├── page.js            # 교육 소개
│   │   │   └── apply/             # 신청 (회원 전용)
│   │   ├── shop/                   # 쇼핑
│   │   │   ├── page.js            # 상품 목록
│   │   │   ├── [productId]/       # 상품 상세
│   │   │   └── checkout/          # 구매 (회원 전용)
│   │   ├── blog/                   # 블로그 (회원 전용)
│   │   └── admin/                  # 관리자 페이지
│   ├── components/
│   │   ├── auth/
│   │   │   ├── LoginForm.js       # 로그인 폼
│   │   │   ├── SignupForm.js      # 간편 가입 폼
│   │   │   ├── SocialLogin.js     # 소셜 로그인 버튼
│   │   │   └── ProtectedRoute.js  # 인증 체크 컴포넌트
│   │   ├── common/
│   │   └── layout/
│   ├── lib/
│   │   ├── firebase.js             # Firebase 설정
│   │   └── auth.js                 # 인증 관련 함수
│   ├── hooks/
│   │   └── useAuth.js              # 인증 상태 관리 Hook
│   └── middleware.js               # Next.js 미들웨어
├── firebase.json
├── firestore.rules
├── package.json
└── README.md

=====================================
주요 기능
=====================================

회원 전용 기능
--------------
- 블로그 열람: 뷰티 팁, 트렌드 정보 (회원 전용)
- 시술 예약: 온라인 예약 시스템 (로그인 필수)
- 상품 구매: 디바이스 구매 (로그인 필수)
- 교육 신청: 전문가 과정 신청 (로그인 필수)

간편 회원가입
-------------
// 최소 정보 수집 예시
const signupData = {
  email: 'user@example.com',
  password: 'password123',
  name: '홍길동',
  phone: '010-1234-5678'
};

// 소셜 로그인 - 추가 정보 없이 바로 가입
const googleSignup = async () => {
  const provider = new GoogleAuthProvider();
  await signInWithPopup(auth, provider);
};

=====================================
Deployment
=====================================

GitHub Actions를 통한 자동 배포
-------------------------------

1. GitHub Secrets 설정
Repository Settings > Secrets and variables > Actions
- FIREBASE_SERVICE_ACCOUNT: Firebase 서비스 계정 JSON

2. main 브랜치에 push하면 자동 배포
git add .
git commit -m "feat: Add new feature"
git push origin main

수동 배포
---------
npm run build
firebase deploy

=====================================
Firebase Security Rules
=====================================

Firestore Rules (회원제 적용)
-----------------------------

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // 블로그는 회원만 읽기 가능
    match /blog_posts/{document} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && 
        request.auth.token.admin == true;
    }
    
    // 예약은 로그인 사용자만
    match /appointments/{document} {
      allow read: if request.auth != null && 
        (request.auth.uid == resource.data.userId || 
         request.auth.token.admin == true);
      allow create: if request.auth != null;
      allow update: if request.auth != null && 
        request.auth.uid == resource.data.userId;
    }
    
    // 상품은 누구나 보기, 구매는 회원만
    match /products/{document} {
      allow read: if true;
      allow write: if request.auth != null && 
        request.auth.token.admin == true;
    }
    
    // 주문은 본인 것만
    match /orders/{document} {
      allow read, write: if request.auth != null && 
        request.auth.uid == resource.data.userId;
      allow read, write: if request.auth != null && 
        request.auth.token.admin == true;
    }
  }
}

=====================================
회원가입 UI/UX
=====================================

간편 가입 폼 구성
-----------------
- 이메일 입력
- 비밀번호 입력 (8자 이상)
- 이름 입력
- 전화번호 입력
- 약관 동의 체크박스

소셜 로그인 버튼
----------------
- Google 로그인 (가장 상단)
- Kakao 로그인
- 구분선
- 이메일 가입 옵션

=====================================
Tech Stack
=====================================

- Frontend: Next.js 14, React 18
- Styling: Tailwind CSS
- Authentication: Firebase Auth (Email + Social)
- Database: Firestore
- Storage: Firebase Storage
- Hosting: Firebase Hosting
- CI/CD: GitHub Actions

=====================================
Analytics & Monitoring
=====================================

- Firebase Analytics 통합
- 회원가입 전환율 추적
- 페이지별 접근 통계

=====================================
Contributing
=====================================

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'feat: Add amazing feature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

Commit Convention
-----------------
- feat: 새로운 기능
- fix: 버그 수정
- docs: 문서 수정
- style: 코드 포맷팅
- refactor: 코드 리팩토링
- test: 테스트 코드
- chore: 빌드 업무 수정

=====================================
License
=====================================

This project is licensed under the MIT License

=====================================
Contact
=====================================

2ndBrush Team - contact@2ndbrush.com

Project Link: https://github.com/2ndBrush/SecondBrush

=====================================
Acknowledgments
=====================================

- Firebase for backend services
- Next.js team for the amazing framework
- Tailwind CSS for utility-first CSS framework
- Vercel for inspiration