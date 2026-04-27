// 방산 산업지도 — 면도기-면도날 모델 × L1-L4 레이어
window.DEFENSE_DATA = {
  theme: {
    accent: "oklch(52% 0.14 35)",    // defense olive-rust
    accent2: "oklch(45% 0.08 260)",  // steel blue
    accent3: "oklch(55% 0.12 140)",  // field green
    bg: "#f6f5f1",
    tint1: "#f7f0ea",
    tint2: "#edf0f5",
    tint3: "#eff4ec",
  },
  thesis: [
    { id: "T1", title: "면도기-면도날 모델", desc: "플랫폼(전투기·함정·발사대)이 면도기, 정밀 유도무기가 면도날. 30~40년 수명주기 동안 지속 공급되는 구독형 구조.", weight: "유도무기 7 : 공중플랫폼 3" },
    { id: "T2", title: "신뢰의 사다리", desc: "Cash Cow 천궁-II(중동 실전 검증) → Growth L-SAM(2025 양산 진입) → Alpha 항공무장 천룡(KF-21 통합)", weight: "단가·마진 계단식 상승" },
    { id: "T3", title: "리트머스 전략", desc: "LIG넥스원 수주 공시 후 주가 조정 시 = 하부 청바지(아이쓰리시스템·퍼스텍) 최적 진입 구간", weight: "6~12개월 시차 수익" },
  ],
  ladder: [
    { phase: "현재 (Cash Cow)", weapon: "천궁-II", market: "중동 (UAE·사우디)", status: "대규모 수주 잔고 · 실전 레퍼런스" },
    { phase: "미래 (Growth)", weapon: "L-SAM", market: "고고도 요격", status: "2025년 양산 진입 · 단가 점프" },
    { phase: "확장 (Alpha)", weapon: "천룡 (공대지)", market: "KF-21 통합", status: "외산 무장 국산 대체 · 마진 극대화" },
  ],
  layers: [
    {
      id: "L1",
      title: "리트머스 & 플랫폼",
      subtitle: "The Razor — 수요 창출",
      note: "수주 신호의 발신지 · 하부 L2/L3의 '확정된 미래 일감'",
      sectors: [
        {
          id: "L1-A", name: "유도무기 리트머스", desc: "전체 생태계의 선행지표",
          badge: "★ 핵심",
          companies: [
            { name: "LIG넥스원", code: "079550", role: "체계종합 · 컨트롤타워", tag: "수주잔고 26.2조", highlight: true,
              moat: "천궁-II/L-SAM/현궁 체계종합 · 고스트로보틱스 시너지", thesis: "2026 매출 4.7조/영업익 4,360억(+35%). 중동 천궁-II 본격 인도 + L-SAM 양산 진입.", risk: "인도네시아 저마진 종료 / 고스트로보틱스 흑자전환 속도" },
          ],
        },
        {
          id: "L1-B", name: "지상 플랫폼", desc: "발사대 · 기동 인프라",
          companies: [
            { name: "한화에어로스페이스", role: "K-9·천무 발사대", tag: "수주잔고 30조+",
              moat: "K-9 글로벌 점유율 50%+ · 그룹 방산 수직계열화", thesis: "폴란드 수출 본격 인도 · OPM 10%대 안착. 유도무기 '이동식 매대' 패키지 수출.", risk: "한화 거버넌스 · 지배구조 개편 불확실성" },
          ],
        },
        {
          id: "L1-C", name: "공중·해상 플랫폼", desc: "국산 무장의 독점 매대",
          companies: [
            { name: "KAI 한국항공우주", code: "047810", role: "공중 면도기", tag: "KF-21 블록1 양산",
              moat: "KF-21·FA-50 완제기 수출 · MUM-T 유무인 복합", thesis: "완제기 수출 비중 35~40% · OPM 두 자릿수 시도. 천룡 등 국산무장 통합으로 부가가치 내재화.", risk: "무장 통합 일정 / R&D 종료 효과" },
            { name: "한화오션", code: "042660", role: "해상 면도기", tag: "KSS-III 잠수함",
              moat: "3,000톤급 독자설계 · 미국 MRO 시장 진입(존스법 돌파)", thesis: "2026E 매출 15.8조 · 영업익 1.82조(OPM 11.5%). 2027E EPS 7,400원 · 목표 PER 28배.", risk: "한화그룹 거버넌스 · 초기 수주 마진" },
            { name: "HD현대중공업", code: "329180", role: "블루워터 면도기", tag: "이지스·필리핀 해군",
              moat: "이지스 시스템 통합 · KDDX 설계 · 아비커스 USV", thesis: "특수선 수주잔고 8~10조. 자율운항 스마트 플랫폼 리레이팅.", risk: "조선 업황 사이클" },
          ],
        },
      ],
    },
    {
      id: "L2",
      title: "핵심 하부 시스템 · 모듈",
      subtitle: "The Sub-System — 기능적 덩어리",
      note: "L1의 금액이 L2의 개수(Quantity)로 전환 — L3 낙수 물량 예측 필터",
      sectors: [
        {
          id: "L2-A", name: "전투체계 · 항공전자", desc: "두뇌 · 신경망 시스템",
          companies: [
            { name: "한화시스템", code: "272210", role: "The Brain", tag: "수주잔고 13~14조", highlight: true,
              moat: "KF-21 AESA 레이다 국산화 독점 · 해상 CMS 100%", thesis: "천궁-II 레이다 사우디·UAE 수출 · 원웹 저궤도 위성 · Overair UAM. OPM 7~9%대 안착.", risk: "R&D 투자 부담 · 우주사업 상용화 속도" },
          ],
        },
        {
          id: "L2-B", name: "추진 · 기동 시스템", desc: "심장(엔진) · 발(변속기)",
          companies: [
            { name: "SNT다이내믹스", code: "003570", role: "The Muscle", tag: "방산 매출 70%+",
              moat: "유도탄 정밀 구동장치 · 천무 발사대 변속기 독점", thesis: "넥스원 천궁·현궁·천룡 독점 레퍼런스. 수주잔고 1조 돌파 시도 · OPM 10% 초반.", risk: "체계업체 단가 인하 압력" },
            { name: "STX엔진", role: "플랫폼 동력", tag: "함정·장갑차 엔진", dim: true,
              moat: "함정·발사차량 고출력 디젤엔진", thesis: "플랫폼 보급 확대 + 오버홀 교체주기.", risk: "조선 사이클 연동" },
          ],
        },
        {
          id: "L2-C", name: "탄체 · 탄두 · 구조물", desc: "카트리지 소모성 외형",
          companies: [
            { name: "한일단조", code: "002220", role: "The Lethal Blade", tag: "레디얼 포징 국내 최초", highlight: true,
              moat: "레디얼 포징 공법 · 천궁-II/현궁/천룡 탄체 공급", thesis: "넥스원과 상관도 0.9+. M107 155mm 탄체 174억 수주. 영업레버리지 극대화 구간.", risk: "원자재 가격 · 체계업체 단가 협상" },
            { name: "한국카본", code: "017960", role: "Advanced Blade", tag: "탄소복합재 경량탄체",
              moat: "탄소섬유 복합재 · 알루미늄 대비 중량 30%↓", thesis: "L-SAM 고고도 요격 필수. LNG 보냉재 캐시카우 + 방산 YoY +20%.", risk: "소재 국산화 인증 속도" },
            { name: "풍산", code: "103140", role: "The Warhead", tag: "유도탄 탄두 독점",
              moat: "천궁·현궁·천룡 탄두 사실상 독점 · 155mm 풀라인업", thesis: "방산 이익 비중 60%+ · 사거리연장탄·GPS 유도탄약으로 '기술사' 리레이팅.", risk: "구리 가격 변동성" },
          ],
        },
      ],
    },
    {
      id: "L3",
      title: "핵심 부품 · 소부장",
      subtitle: "Blue Jeans — 실적의 정점",
      note: "① 플랫폼 범용성 ② 소모품 비중 ③ 대체 불가능성 — 3단 SOP 통과 기업",
      sectors: [
        {
          id: "L3-A", name: "센서 (The Eye)", desc: "적외선 영상센서 · 탐색기",
          badge: "★ 청바지",
          companies: [
            { name: "아이쓰리시스템", code: "074130", role: "독점 양산", tag: "방산 매출 90%+", highlight: true,
              moat: "국내 유일 IR 영상센서 양산 · 미사일 1발=센서 1개", thesis: "역대 최대 수주잔고 갱신. L-SAM + 위성용 확장 · OPM 10%대 후반 진입.", risk: "단일 기술 영역 집중" },
          ],
        },
        {
          id: "L3-B", name: "구동 (The Muscle)", desc: "조종날개 정밀 제어",
          companies: [
            { name: "퍼스텍", code: "010820", role: "구동장치", tag: "천궁·현궁·신궁 레퍼런스",
              moat: "유도탄 구동장치 수십년 레퍼런스 · T-50/KF-21 양쪽 발판", thesis: "유도무기 70% + 공중플랫폼 30% 이중 수혜. 무인화 시스템 확장성.", risk: "체계업체 의존도" },
          ],
        },
        {
          id: "L3-C", name: "신경 (The Nerve)", desc: "데이터링크 · RF 연결",
          companies: [
            { name: "제노코", code: "361390", role: "데이터링크", tag: "수주잔고 1,000억+",
              moat: "넥스원·KAI·한화시스템 골고루 분포 · 위성 탑재체", thesis: "KF-21·T-50 동반 수출. 군용 저궤도 위성망 뉴스페이스 알파.", risk: "위성 사업 초기 투자" },
            { name: "센서뷰", code: "352480", role: "mmWave RF", tag: "초저손실 RF",
              moat: "불소수지 압출 세계 수준 · 미군 Tier-1 공급망", thesis: "5G 범용→방산 특수 이익 질 개선 · KF-21 무인기 패키지.", risk: "글로벌 공급망 편입 속도" },
          ],
        },
        {
          id: "L3-D", name: "지능 · 생명유지", desc: "임베디드 컴퓨터 · 전원 · 전자전",
          companies: [
            { name: "코츠테크놀로지", code: "448710", role: "SBC·임베디드", tag: "방산 매출 95%+",
              moat: "국산 SBC 선두 · MIL-STD 신뢰성 · 폴란드 K-2 탑재", thesis: "넥스원·한화시스템·현대로템 다변화. 방산 소프트웨어화 트렌드의 하드웨어 수혜.", risk: "프로젝트 양산 전환 속도" },
            { name: "빅텍", code: "065450", role: "PSU·전자전", tag: "방산 95%+",
              moat: "SONATA 함정 전자전 · 천궁·현궁·해성 PSU · HEMP 방호", thesis: "넥스원 비중 40~50% · 양산 가동률 상승으로 OPM 두 자릿수 진입 시도.", risk: "중소형 소부장 규모" },
          ],
        },
      ],
    },
    {
      id: "L4",
      title: "미래 파이프라인",
      subtitle: "The Growth Pipeline — 시간차 공격",
      note: "R&D의 수익화 · 밸류에이션 상단 개방",
      sectors: [
        {
          id: "L4-A", name: "차세대 고고도 요격", desc: "한국형 사드 · KAMD",
          companies: [
            { name: "L-SAM / L-SAM II", role: "핵심 품목", tag: "2025 양산 전환",
              moat: "천궁-II 대비 정밀·단가 점프 · 훈련사격 성공", thesis: "센서·구동부 단가 상승으로 밸류체인 OPM 리베이싱.", risk: "양산 전환 일정" },
          ],
        },
        {
          id: "L4-B", name: "국산 항공무장 독립", desc: "KF-21 × 국산 카트리지",
          companies: [
            { name: "천룡 · 국산 공대공", role: "핵심 품목", tag: "KF-21 블록1·2 통합",
              moat: "외산 미사일 국산 대체 · 플랫폼 락인 극대화", thesis: "기체+무장 패키지 수출로 밸류체인 마진 총량 비약적 확대.", risk: "무장 통합 검증" },
          ],
        },
      ],
    },
  ],
};
