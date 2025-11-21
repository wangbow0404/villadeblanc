# 네이버 검색 최적화 가이드

## 완료된 작업

✅ **메타 태그 최적화**
- 검색 엔진 최적화된 title, description, keywords 추가
- Open Graph 태그 (소셜 미디어 공유 최적화)
- Twitter Card 태그
- Canonical URL 설정

✅ **구조화된 데이터 (JSON-LD)**
- Organization 스키마 추가
- LocalBusiness (BeautySalon) 스키마 추가
- 검색 엔진이 사이트 정보를 더 잘 이해할 수 있도록 구성

✅ **Sitemap 생성**
- `/sitemap.xml` 자동 생성
- 모든 주요 페이지 포함

✅ **Robots.txt 생성**
- 검색 엔진 크롤링 최적화
- 네이버 검색봇(Yeti) 지원

## 추가로 필요한 작업

### 1. 네이버 웹마스터 도구 등록 (필수)

1. **네이버 서치어드바이저 접속**
   - https://searchadvisor.naver.com/ 접속
   - 네이버 계정으로 로그인

2. **사이트 등록**
   - "웹마스터 도구" → "사이트 추가"
   - 사이트 URL 입력: `https://villadeblanc.com` (또는 실제 도메인)
   - 소유 확인 방법 선택

3. **소유 확인**
   - HTML 태그 방식 선택 시:
     - 네이버에서 제공하는 메타 태그 코드를 복사
     - `src/app/layout.tsx` 파일의 `metadata.other` 부분에 추가:
     ```typescript
     other: {
       "naver-site-verification": "여기에_네이버에서_받은_코드_입력",
     },
     ```
   - 또는 파일 업로드 방식 선택

4. **사이트맵 제출**
   - 등록 완료 후 "요청" → "사이트맵 제출"
   - `https://villadeblanc.com/sitemap.xml` 입력

### 2. 도메인 설정 확인

`src/app/layout.tsx`, `src/app/sitemap.ts`, `src/app/robots.ts` 파일에서 
`https://villadeblanc.com` 부분을 실제 도메인으로 변경하세요.

### 3. 구조화된 데이터 좌표 수정

`src/components/common/StructuredData.tsx` 파일에서 
압구정 본점의 정확한 위도/경도를 입력하세요:
- 현재: `latitude: 37.5208, longitude: 127.0283`
- 네이버 지도에서 정확한 좌표 확인 후 수정

### 4. 소셜 미디어 링크 추가

`src/components/common/StructuredData.tsx` 파일의 `sameAs` 배열에 
인스타그램, 네이버 블로그 등 소셜 미디어 링크를 추가하세요.

### 5. 콘텐츠 최적화

- **키워드 포함**: 페이지 내용에 "빌라드블랑", "VILLA de BLANC", "압구정 미용실" 등 주요 키워드 자연스럽게 포함
- **이미지 alt 텍스트**: 모든 이미지에 의미 있는 alt 텍스트 추가
- **내부 링크**: 관련 페이지 간 내부 링크 추가

### 6. 정기적인 업데이트

- **블로그/뉴스 섹션**: 정기적으로 콘텐츠 업데이트
- **사이트맵**: 새 페이지 추가 시 자동으로 업데이트됨
- **구조화된 데이터**: 정보 변경 시 업데이트

## 검색 결과 개선을 위한 추가 팁

1. **네이버 블로그 운영**: 네이버 블로그에 정기적으로 포스팅하고 홈페이지 링크 추가
2. **네이버 지도 등록**: 네이버 지도에 정확한 위치 정보 등록
3. **고객 리뷰**: 네이버 플레이스에 고객 리뷰 유도
4. **백링크**: 다른 웹사이트에서 홈페이지로 링크 유도
5. **모바일 최적화**: 모바일 친화적인 사이트 유지 (이미 완료됨)

## 확인 방법

1. **네이버 검색**: "빌라드블랑" 검색 후 결과 확인
2. **구조화된 데이터 테스트**: 
   - https://search.google.com/test/rich-results 에서 테스트
   - https://validator.schema.org/ 에서 스키마 검증
3. **사이트맵 확인**: `https://villadeblanc.com/sitemap.xml` 접속하여 확인
4. **Robots.txt 확인**: `https://villadeblanc.com/robots.txt` 접속하여 확인

## 주의사항

- 검색 결과 상위 노출은 시간이 걸릴 수 있습니다 (보통 1-2주)
- 네이버 웹마스터 도구 등록은 필수입니다
- 정기적인 콘텐츠 업데이트가 중요합니다
- SEO는 지속적인 작업입니다

