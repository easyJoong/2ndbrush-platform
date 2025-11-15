# 커스텀 도메인 설정 가이드

## 도메인 정보
- **커스텀 도메인**: www.2ndbrush.com
- **루트 도메인**: 2ndbrush.com

## Firebase 호스팅에 커스텀 도메인 연결하기

### 1. Firebase Console에서 도메인 추가

1. [Firebase Console](https://console.firebase.google.com) 접속
2. 프로젝트 선택: **2ndbrush-platform**
3. 좌측 메뉴에서 **Hosting** 클릭
4. **도메인 추가** 버튼 클릭
5. 도메인 입력: `www.2ndbrush.com`

### 2. 도메인 소유권 확인

Firebase가 제공하는 TXT 레코드를 도메인 DNS 설정에 추가합니다.

#### DNS 설정 (도메인 등록 업체에서 설정)

**TXT 레코드 추가:**
```
호스트: @
종류: TXT
값: [Firebase에서 제공하는 값]
TTL: 3600
```

**참고**: Firebase Console에서 정확한 TXT 레코드 값을 확인하세요.

### 3. DNS A 레코드 설정

도메인 소유권 확인 후, 다음 A 레코드를 추가합니다:

**www.2ndbrush.com → Firebase 호스팅:**
```
호스트: www
종류: A
값: Firebase에서 제공하는 IP 주소들
TTL: 3600
```

Firebase 호스팅 IP 주소는 Firebase Console의 도메인 설정 페이지에서 확인할 수 있습니다.

**루트 도메인 리다이렉트 (선택사항):**

2ndbrush.com → www.2ndbrush.com으로 리다이렉트하려면:

```
호스트: @
종류: A
값: Firebase에서 제공하는 IP 주소들
TTL: 3600
```

### 4. SSL 인증서 자동 발급

Firebase는 Let's Encrypt를 사용하여 자동으로 SSL 인증서를 발급합니다.

- 도메인 연결 후 **최대 24시간** 소요
- 인증서 발급 상태는 Firebase Console에서 확인 가능
- 발급 완료 시 자동으로 HTTPS 활성화

### 5. 도메인 연결 확인

```bash
# DNS 전파 확인
nslookup www.2ndbrush.com

# HTTPS 접속 테스트
curl -I https://www.2ndbrush.com
```

## DNS 설정 예시

### 가비아/호스팅케이알 등 국내 업체

```
레코드 타입    호스트        값                           TTL
TXT          @           [Firebase 제공 값]           3600
A            www         [Firebase IP 1]              3600
A            www         [Firebase IP 2]              3600
A            @           [Firebase IP 1]              3600
A            @           [Firebase IP 2]              3600
```

### Cloudflare

```
Type    Name    Content              Proxy status    TTL
TXT     @       [Firebase 제공 값]   DNS only        Auto
A       www     [Firebase IP 1]      DNS only        Auto
A       www     [Firebase IP 2]      DNS only        Auto
A       @       [Firebase IP 1]      DNS only        Auto
A       @       [Firebase IP 2]      DNS only        Auto
```

**중요**: Cloudflare 사용 시 Proxy를 비활성화 (DNS only)해야 합니다.

## 일반적인 문제 해결

### 1. DNS 전파 지연
- DNS 변경 사항이 전파되는 데 **최대 48시간** 소요 가능
- `nslookup` 또는 `dig` 명령어로 전파 상태 확인

```bash
# Windows
nslookup www.2ndbrush.com

# macOS/Linux
dig www.2ndbrush.com
```

### 2. SSL 인증서 발급 실패
- DNS 설정이 올바른지 확인
- CAA 레코드가 Let's Encrypt를 차단하지 않는지 확인
- Firebase Console에서 에러 메시지 확인

### 3. 리다이렉트 루프
- Firebase 호스팅과 Cloudflare를 함께 사용하는 경우
- Cloudflare SSL 설정을 "Full" 또는 "Full (Strict)"로 변경

### 4. 도메인 소유권 확인 실패
- TXT 레코드가 올바르게 추가되었는지 확인
- DNS 전파 완료 후 다시 시도

```bash
# TXT 레코드 확인
nslookup -type=TXT 2ndbrush.com
```

## 배포 후 확인사항

### 1. 모든 URL에서 접근 가능한지 확인
- ✅ https://www.2ndbrush.com
- ✅ https://2ndbrush.com (루트 도메인)
- ✅ http://www.2ndbrush.com → https://www.2ndbrush.com (자동 리다이렉트)
- ✅ http://2ndbrush.com → https://www.2ndbrush.com (자동 리다이렉트)

### 2. SSL 인증서 확인
```bash
# SSL 인증서 정보 확인
openssl s_client -connect www.2ndbrush.com:443 -servername www.2ndbrush.com
```

### 3. 성능 테스트
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)

## Firebase CLI로 도메인 관리

### 현재 연결된 도메인 확인
```bash
firebase hosting:channel:list
```

### 도메인 상태 확인
Firebase Console에서 확인하는 것을 권장합니다.

## 참고 자료

- [Firebase 호스팅 커스텀 도메인 공식 문서](https://firebase.google.com/docs/hosting/custom-domain)
- [DNS 레코드 설정 가이드](https://support.google.com/domains/answer/3290350)

## 주의사항

1. **DNS 변경은 신중하게**: 잘못된 설정은 웹사이트를 다운시킬 수 있습니다
2. **백업 설정 저장**: 변경 전 현재 DNS 설정을 기록해두세요
3. **단계별 진행**: 한 번에 하나씩 변경하고 확인하세요
4. **시간 여유**: DNS 전파와 SSL 발급에 시간이 걸립니다

## 빠른 시작 체크리스트

- [ ] Firebase Console에서 도메인 추가
- [ ] TXT 레코드로 도메인 소유권 확인
- [ ] A 레코드 추가 (www)
- [ ] A 레코드 추가 (@, 선택사항)
- [ ] DNS 전파 대기 (최대 48시간)
- [ ] SSL 인증서 발급 대기 (최대 24시간)
- [ ] HTTPS 접속 테스트
- [ ] 모든 리다이렉트 테스트

---

문제가 발생하면 Firebase Console의 도메인 설정 페이지에서 상세한 에러 메시지와 해결 방법을 확인할 수 있습니다.
