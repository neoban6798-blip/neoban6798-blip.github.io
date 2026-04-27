// K컬쳐 산업지도 — 레이어/섹터/기업 데이터
window.KCULTURE_DATA = {
  stages: [
    { id: 1, name: "콘텐츠 소비", desc: "드라마·K팝 시청", status: "동남아·남미 성숙 / 유럽 성장" },
    { id: 2, name: "정체성 채택", desc: "'나는 K컬처를 즐기는 사람'", status: "전 지역 확산 중" },
    { id: 3, name: "라이프스타일 소비", desc: "뷰티·음식·패션", status: "동남아 성숙 / 서구 진입 초기" },
    { id: 4, name: "미적 기준 내면화", desc: "'한국적 세련됨' 인식", status: "형성 중" },
    { id: 5, name: "프리미엄 지불 의향", desc: "한국산이라서 더 비싸도 산다", status: "미도달" },
  ],
  layers: [
    {
      id: "L1",
      name: "레이어 1",
      title: "K컬처 직접 수혜",
      subtitle: "대기 포지션 — 5단계 도달 시 재진입",
      note: "이미 시장이 K컬처 기업으로 분류해 밸류에이션에 반영",
      sectors: [
        {
          id: "L1-A",
          name: "K뷰티 브랜드",
          companies: [
            { name: "아모레퍼시픽", tag: "중저가 포지션" },
            { name: "LG생활건강", tag: "프리미엄 진행" },
            { name: "에이피알", tag: "APR · 디바이스+화장품 낙수효과", highlight: true, detail: { code: "278470", market: "KOSPI", opm: "24.8% (26F)", moat: "수직계열화 · 아마존 상위 SKU 8.3개" } },
            { name: "달바글로벌", tag: "단일 브랜드 · 5년 13배", highlight: true, owned: true, detail: { code: "483650", market: "KOSPI", opm: "26% (25F)", moat: "12개국 아마존 스토어 · 무차입 현금 800억", stage: "3→4단계 전환 선두" } },
          ],
        },
        {
          id: "L1-B",
          name: "K푸드 브랜드",
          companies: [
            { name: "삼양식품", tag: "불닭 · 해외 70%+", detail: { code: "003230", market: "KOSPI", moat: "TikTok 바이럴 · 마케팅비 제로" } },
            { name: "오리온", tag: "현지 생산 · 다국적", detail: { code: "271560", market: "KOSPI", moat: "중·베·러 현지법인 · 습관 소비" } },
            { name: "농심", tag: "탐색 중", dim: true },
          ],
        },
        {
          id: "L1-C",
          name: "K엔터테인먼트",
          companies: [
            { name: "HYBE", tag: "위버스 · 팬덤 커머스" },
            { name: "JYP엔터", tag: "탐색 중", dim: true },
          ],
        },
      ],
    },
    {
      id: "L2",
      name: "레이어 2",
      title: "인프라·플랫폼 수혜",
      subtitle: "아직 할인받는 구조적 수혜 영역",
      note: "어떤 브랜드가 이겨도 반드시 쓰이는 인프라",
      sectors: [
        {
          id: "L2-A",
          name: "K뷰티 ODM·OEM",
          companies: [
            { name: "코스맥스", tag: "세계 최대 ODM · 1,300+ 고객사", highlight: true, owned: true, detail: { code: "192820", market: "KOSPI", opm: "8.5% (26E)", moat: "한·중·미·인도네시아 생산 · 로레알/에스티로더 고객사", target: "244,600원 (P/E 19.5배)" } },
            { name: "한국콜마", tag: "ODM 양대 과점 · 제약 겸업", detail: { code: "161890", market: "KOSPI", moat: "뷰티+헬스케어 교차 수혜" } },
          ],
        },
        {
          id: "L2-B",
          name: "팬덤 커머스 인프라",
          companies: [
            { name: "위버스 (HYBE)", tag: "북미 51.7% · 유럽 19.4%" },
            { name: "K팝 굿즈 물류", tag: "235개국 배송", dim: true },
            { name: "글로벌 결제 (EBANX 등)", tag: "탐색 중", dim: true },
          ],
        },
        {
          id: "L2-C",
          name: "학습 플랫폼",
          companies: [
            { name: "세종학당", tag: "수강생 23.9만" },
            { name: "Duolingo 한국어", tag: "미국 +22% YoY" },
            { name: "AI 한국어 학습 앱", tag: "탐색 중", dim: true },
          ],
        },
      ],
    },
    {
      id: "L3",
      name: "레이어 3",
      title: "문화+기술 융합 신산업",
      subtitle: "10배 가능성의 진원지",
      note: "한국이 새로운 글로벌 산업 표준을 만드는 섹터",
      sectors: [
        {
          id: "L3-A",
          name: "K의료미용 기술 수출",
          badge: "★ 핵심",
          companies: [
            { name: "클래시스", tag: "HIFU/RF · 해외 67%", highlight: true, detail: { code: "214150", market: "KOSDAQ", opm: "50.7% (25)", moat: "80개국 진출 · 소모품 스톡 효과" } },
            { name: "원텍", tag: "올리지오 · 소모품 24%", owned: true, detail: { code: "336570", market: "KOSDAQ", opm: "33% (25)", moat: "클래시스 패스트팔로워 · 해외 71% · 중동 집중", target: "11,800원 (P/E 20배) · 텐배거 시나리오" } },
            { name: "휴젤", tag: "레티보 FDA · 미국 직판", owned: true, detail: { code: "145020", market: "KOSPI", opm: "41% (26F) → 48% (28F)", moat: "FDA 승인 완료 · 2028 M/S 8~9% 목표", target: "400,000원 (P/E 28.8배)" } },
            { name: "대웅제약", tag: "주보 미국 14%", detail: { code: "069620", market: "KOSPI", moat: "아시아 최초 FDA · 미국 점유율 14%" } },
            { name: "메디톡스", tag: "FDA 신청 준비", detail: { code: "086900", market: "KOSDAQ", moat: "뉴럭스(비동물성) · BLA 제출 준비" } },
          ],
        },
        {
          id: "L3-B",
          name: "웹툰 IP 밸류체인",
          companies: [
            { name: "WEBTOON Ent.", tag: "나스닥 WBTN" },
            { name: "네이버웹툰 IP", tag: "탐색 중", dim: true },
          ],
        },
        {
          id: "L3-C",
          name: "K패션-테크 융합",
          companies: [
            { name: "젠틀몬스터", tag: "구글 XR · 비상장", dim: true },
            { name: "광학 부품사", tag: "탐색 중", dim: true },
          ],
        },
        {
          id: "L3-D",
          name: "AI × K콘텐츠",
          companies: [
            { name: "AI 번역·더빙", tag: "탐색 중", dim: true },
            { name: "AI 제작 플랫폼", tag: "탐색 중", dim: true },
          ],
        },
      ],
    },
  ],
};
