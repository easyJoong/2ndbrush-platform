# 2ndBrush Beauty Platform

회원제 기반 프리미엄 뷰티 시술, 교육, 디바이스 판매 통합 플랫폼

![Next.js](https://img.shields.io/badge/Next.js-14.0.4-black)
![React](https://img.shields.io/badge/React-18-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-38B2AC)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)

## 🌟 주요 기능

### 🔐 회원제 시스템
- **간편 회원가입**: 최소 정보만 입력 (5초 이내 완료)
- **다양한 소셜 로그인**: Google, Kakao, Naver, Instagram
- **Instagram 특별 혜택**: 팔로우 시 10% 할인 쿠폰 자동 지급

### 💄 시술 서비스
- **눈썹 시술**: 반영구 문신, 리터치, 제거
- **피부 관리**: 기본 관리부터 문제성 피부 집중 케어
- **두피 문신**: 헤어라인 교정, 밀도 보강, 상처 커버
- **온라인 예약**: 회원 전용 예약 시스템

### 🎓 교육 프로그램
- **기초 과정** (4주): 뷰티 업계 입문자 대상
- **심화 과정** (8주): 전문 기술 향상
- **창업 과정** (12주): 독립 창업 지원
- **원데이 클래스**: 체험형 단기 과정

### 🛒 프리미엄 스토어
- **시술 도구**: 전문가용 고급 도구
- **홈케어 디바이스**: 가정용 뷰티 기기
- **화장품/앰플**: 고농축 전문 제품
- **교육 교재**: 체계적인 학습 자료

### 📝 회원 전용 블로그
- 전문가 칼럼 및 뷰티 팁
- 최신 트렌드 정보
- 시술 전후 관리법
- 고객 후기 및 사례

## 🚀 기술 스택

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Database**: Firestore (Firebase)
- **Authentication**: Firebase Auth
- **Storage**: Firebase Storage
- **Hosting**: Firebase Hosting
- **CI/CD**: GitHub Actions

## 📱 반응형 디자인

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

모바일 우선 설계로 모든 디바이스에서 최적화된 사용자 경험 제공

## 🎨 디자인 시스템

### 컬러 팔레트
- **Primary**: 따뜻한 오렌지 톤 (#ee8b5a)
- **Secondary**: 중성적인 그레이 톤
- **Accent**: 그라디언트 효과 (Instagram 연동)

### 타이포그래피
- **Font**: Inter (Google Fonts)
- **Weight**: 300, 400, 500, 600, 700

## 🔒 보안 및 접근 제어

### Firestore Security Rules
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // 블로그는 회원만 읽기 가능
    match /blog_posts/{document} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && 
        request.auth.token.admin == true;
    }
    
    // 예약은 본인 것만 접근
    match /appointments/{document} {
      allow read: if request.auth != null && 
        (request.auth.uid == resource.data.userId || 
         request.auth.token.admin == true);
      allow create: if request.auth != null;
    }
  }
}
```

## 📦 설치 및 실행

### 필요 조건
- Node.js 18.0 이상
- npm 또는 yarn
- Git

### 설치 과정

1. **레포지토리 클론**
```bash
git clone https://github.com/2ndBrush/SecondBrush.git
cd SecondBrush
```

2. **의존성 설치**
```bash
npm install
# 또는
yarn install
```

3. **환경 변수 설정**
`.env.local` 파일 생성:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

4. **개발 서버 실행**
```bash
npm run dev
# 또는
yarn dev
```

5. **브라우저에서 확인**
[http://localhost:3000](http://localhost:3000)

## 📁 프로젝트 구조

```
src/
├── app/                          # Next.js App Router
│   ├── layout.js                # 전역 레이아웃
│   ├── page.js                  # 홈페이지
│   ├── globals.css              # 전역 스타일
│   ├── auth/                    # 인증 관련 페이지
│   │   ├── login/               # 로그인
│   │   └── signup/              # 회원가입
│   ├── services/                # 시술 서비스
│   ├── education/               # 교육 프로그램
│   ├── shop/                    # 쇼핑
│   └── blog/                    # 블로그 (회원 전용)
└── components/
    └── layout/
        ├── Header.js            # 상단 네비게이션
        └── Footer.js            # 하단 정보
```

## 🌟 핵심 특징

### 회원제 중심 운영
- 모든 핵심 기능은 회원 전용
- 비회원은 정보 확인만 가능
- 회원가입 유도를 위한 UX 최적화

### Instagram 연동 마케팅
- 소셜 로그인으로 자동 팔로우
- 팔로워 전용 혜택 제공
- Instagram 피드 연동 표시

### 모바일 우선 설계
- 모바일 사용자 60% 이상 고려
- 터치 친화적 인터페이스
- 빠른 로딩 및 반응성

## 🎯 비즈니스 목표

- **회원 가입 수**: 500명 (3개월 목표)
- **월간 활성 사용자**: 200명
- **예약 전환율**: 15%
- **블로그 체류 시간**: 3분 이상

## 📈 성능 목표

- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Lighthouse Score**: > 90
- **모바일 성능**: 최적화

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'feat: Add amazing feature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### 커밋 컨벤션
- `feat:` 새로운 기능
- `fix:` 버그 수정
- `docs:` 문서 수정
- `style:` 코드 포맷팅
- `refactor:` 코드 리팩토링
- `test:` 테스트 코드

## 📄 라이선스

This project is licensed under the MIT License

## 📞 연락처

**2ndBrush Team**
- Email: contact@2ndbrush.com
- Instagram: [@2ndbrush_official](https://instagram.com/2ndbrush_official)
- Website: [www.2ndbrush.com](https://www.2ndbrush.com)

---

**프리미엄 뷰티의 새로운 경험, 2ndBrush에서 시작하세요! ✨**