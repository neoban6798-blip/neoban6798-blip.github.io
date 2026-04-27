// 반도체 산업지도 — AI 컴퓨팅 5단계 프레임 × L1-L3 레이어 구조
window.SEMI_DATA = {
  theme: {
    accent: "oklch(58% 0.14 250)",    // semi blue
    accent2: "oklch(62% 0.14 180)",   // cyan
    accent3: "oklch(60% 0.14 140)",   // green
    bg: "#f6f7fa",
    tint1: "#eef2f9",
    tint2: "#eef7f6",
    tint3: "#eff7ef",
  },
  stages: [
    { id: 1, name: "인프라 구축", desc: "LLM 학습용 GPU/HBM 집중 투입", status: "성숙 · NVIDIA·하이닉스 임계점" },
    { id: 2, name: "효율 최적화", desc: "OPEX·전력 병목 해결 (Inference)", status: "성장 초기 · CXL 개화" },
    { id: 3, name: "접점 확산", desc: "스마트폰·PC 내 NPU 실시간 연산", status: "진입 · AI 하드웨어 교체기" },
    { id: 4, name: "물리적 융합", desc: "자율주행·로봇 실시간 지능", status: "태동 · 초저지연 경쟁" },
    { id: 5, name: "지능 주권", desc: "빅테크·국가 전용 ASIC 내재화", status: "조기 진입 · Leapfrog" },
  ],
  paths: [
    { id: "P1", name: "Path 1 · 메모리 주도권", from: "SK하이닉스 (HBM3E 독점)", to: "삼성전자 (HBM4 추격)", desc: "Pathfinder가 증명한 이익 극대화 경로를 Follower가 12단·HBM4로 복제" },
    { id: "P2", name: "Path 2 · 공정 표준화", from: "한미반도체 (TC 본더)", to: "이오테크닉스·레이저셀 (레이저 리플로우)", desc: "HBM4 이후 적층 심화·열관리 위한 차세대 본딩 장비의 표준 경쟁" },
  ],
  layers: [
    {
      id: "L1",
      title: "전방 산업 및 공정 지배자",
      subtitle: "The Standard Bearers",
      note: "글로벌 공급망과 직접 맞닿은 한국 반도체의 심장 — '누가 차세대 공정의 수율과 표준을 쥐고 있는가'",
      sectors: [
        {
          id: "L1-A", name: "메모리 통합 제조", desc: "DRAM/NAND 및 HBM — 공급의 발원지",
          companies: [
            { name: "SK하이닉스", code: "000660", role: "Pathfinder", tag: "HBM3E 독점 · OPM 62%", highlight: true,
              moat: "NVIDIA 파트너십 · HBM4 16단 선행 · eSSD 부활", thesis: "AI 메모리 업황의 상단을 정의. PCIe 6.0 SSD 표준 선점으로 NAND OPM 30%대 수직상승.", risk: "삼성전자의 HBM4 추격 / 용인 클러스터 일정" },
            { name: "삼성전자", code: "005930", role: "Fast Follower", tag: "HBM4 역전 트리거",
              moat: "메모리+파운드리 수직계열화 · 3세대 GAA", thesis: "NVIDIA Vera Rubin향 HBM4E 검증 통과. 2nm SF2P 골든수율 70% 안착이 멀티플 상향의 핵심 변수.", risk: "TSMC와의 파운드리 격차 / 테일러 팹 보조금" },
          ],
        },
        {
          id: "L1-B", name: "시스템 반도체 · 디자인 솔루션", desc: "빅테크 ASIC 내재화의 가교 — 5단계(지능 주권) 수혜",
          companies: [
            { name: "가온칩스", code: "399720", role: "삼성 DSP", tag: "2026 흑자 전환 구간",
              moat: "삼성 파운드리 베스트 DSP · ARM 협력 · 2nm 설계 레퍼런스", thesis: "삼성 파운드리 2nm GAA 수율 안정화 순간 가장 빠른 수혜자. NRE→양산 전환 구간.", risk: "삼성 파운드리 의존도 / 고객사 다변화 부재" },
            { name: "에이직랜드", code: "445090", role: "TSMC VCA", tag: "국내 유일 TSMC 관문",
              moat: "국내 유일 TSMC 공식 파트너 · 7nm/5nm 할당량 확보", thesis: "글로벌 AI 칩 수요의 국내 관문. 미국·말레이시아 거점 확장으로 고객 다변화.", risk: "TSMC 의존도 · 지정학 리스크" },
          ],
        },
        {
          id: "L1-C", name: "수율 및 공정 표준", desc: "'한국의 ASML' — 가격결정권을 쥔 독점 표준 장비·소재",
          badge: "★ 핵심",
          companies: [
            { name: "HPSP", code: "403870", role: "독점 표준", tag: "OPM 51.9% · 고압수소어닐링", highlight: true,
              moat: "전 세계 유일 고압수소어닐링(HPA) · GAA 계면결함 해결 필수", thesis: "2nm 이하 선단공정 수율 확보를 위해 TSMC·삼성·인텔이 반드시 써야 하는 갑(甲)의 위치. 목표 39,130~50,750원.", risk: "최대주주(크레센도) 오버행 / 예스티 특허분쟁" },
            { name: "파크시스템스", code: "140860", role: "글로벌 계측 표준", tag: "산업용 AFM 1위",
              moat: "True Non-contact AFM · GAA/HBM 3D 수직계측 유일 대안", thesis: "과천 신사옥 가동으로 산업용 캐파 2배. 인라인 장비 비중 75%→80%로 OPM 30%대 안착.", risk: "파운드리 2nm 전환 지연 / 브루커 추격" },
            { name: "솔브레인", code: "357780", role: "공정 소재", tag: "GAA 선택적 식각액 독점",
              moat: "3nm 이하 GAA 나노시트 가공 필수 식각액", thesis: "FinFET→GAA 전환에 따라 소재 사용량 정비례 확대. 2026 영업이익 YoY +60%.", risk: "삼성전자 의존도 / 후발주자 퀄테스트" },
            { name: "에스앤에스텍", code: "036990", role: "후보", tag: "EUV 블랭크마스크 국산화", dim: true,
              moat: "일본 독점 영역의 국산 표준화 도전", thesis: "EUV 펠리클 하이퍼스케일러 최종 양산 승인 시점 관찰.", risk: "양산 승인 지연" },
          ],
        },
      ],
    },
    {
      id: "L2",
      title: "공정 인프라 및 공급망",
      subtitle: "The Enablers — 실질적 수확",
      note: "L1의 CAPEX가 집행될 때 가장 직접적으로 매출이 꽂히는 구간",
      sectors: [
        {
          id: "L2-A", name: "HBM·어드밴스드 패키징 장비", desc: "TC 본더 → 레이저 리플로우 → 하이브리드 본딩",
          badge: "★ Path 2",
          companies: [
            { name: "한미반도체", code: "042700", role: "TC 본더 표준", tag: "HBM 본딩 Pathfinder", highlight: true,
              moat: "SK하이닉스향 TC 본더 독점 · HBM 표준 장비", thesis: "HBM 적층 수 확대의 가장 직접적 수혜. 차세대 하이브리드 본딩 전환 전까지 독점 지위 유지.", risk: "레이저 본딩 전환 시점 / 고객사 다변화" },
            { name: "이오테크닉스", role: "레이저 리플로우", tag: "차세대 본딩 경로",
              moat: "레이저 가공 기술 · HBM4+ 열관리 대안", thesis: "TC 본딩 한계점에서 레이저 본딩으로 공정 전이 시 표준 지위 경쟁의 선두.", risk: "기술 표준 경쟁" },
            { name: "피에스케이홀딩스", role: "리플로우", tag: "후공정 장비", dim: true, moat: "리플로우 장비 포트폴리오", thesis: "전공정·후공정 장비 포트폴리오 확장.", risk: "단일 시장 집중도" },
          ],
        },
        {
          id: "L2-B", name: "핵심 소재 · 공정 소모품", desc: "면도날 비즈니스 — 가동률 상승의 직접 수혜",
          companies: [
            { name: "동진쎄미켐", role: "감광액", tag: "포토레지스트 국산화", moat: "EUV PR 국산화 표준", thesis: "선단공정 확대에 따른 PR 사용량 구조적 증가.", risk: "고객사 수율 이슈" },
            { name: "원익QnC", role: "쿼츠", tag: "쿼츠 웨어", moat: "식각장비 쿼츠 소모품", thesis: "가동률 상관관계 높은 안정 현금흐름.", risk: "원재료 가격 변동" },
            { name: "티씨케이", role: "SiC 링", tag: "SiC 포커스링", moat: "3D NAND 적층 심화의 필수 소모품", thesis: "NAND 단수 증가에 따른 교체주기 단축.", risk: "경쟁 심화" },
            { name: "하나머티리얼즈", role: "실리콘 파츠", tag: "식각 실리콘 부품", moat: "식각장비 실리콘 파츠", thesis: "식각 공정 확대와 동행.", risk: "캐파 제약" },
          ],
        },
        {
          id: "L2-C", name: "팹 인프라 · 유틸리티", desc: "공장 건설 초기에 가장 먼저 매출 발생",
          companies: [
            { name: "STI", role: "화학약품 공급", tag: "CCSS", dim: true, moat: "화학약품 중앙공급 시스템", thesis: "신규 팹 착공 선행 지표.", risk: "CAPEX 사이클" },
            { name: "한양이엔지", role: "가스·케미칼", tag: "팹 인프라 EPC", dim: true, moat: "반도체 팹 인프라 시공", thesis: "테일러·용인 팹 확대 수혜.", risk: "프로젝트 지연" },
            { name: "워트", role: "온습도 조절", tag: "THC", dim: true, moat: "노광 공정 환경 제어", thesis: "EUV 노광환경 필수.", risk: "단일고객 집중도" },
          ],
        },
      ],
    },
    {
      id: "L3",
      title: "차세대 패러다임",
      subtitle: "The Paradigm Shifters — 10배 가능성의 진원지",
      note: "CXL·유리기판·온디바이스 AI — 한국이 글로벌 표준을 만드는 섹터",
      sectors: [
        {
          id: "L3-A", name: "CXL · 차세대 인터페이스", desc: "2028년 $16B 시장 · CAGR 100%+",
          badge: "★ 핵심",
          companies: [
            { name: "네오셈", role: "CXL 테스터 1위", tag: "수주잔고 1,150억", highlight: true,
              moat: "CXL 테스터 글로벌 1위 · HBM 장비주 멀티플 경로 추종", thesis: "Intel Xeon 6 CXL 2.0 · MS Azure 메모리 풀링 상용화로 실적 가시화.", risk: "표준 채택 속도 / 장비 리드타임" },
            { name: "파두", role: "SSD 컨트롤러", tag: "eSSD 컨트롤러", moat: "기업용 SSD 컨트롤러 국산화", thesis: "PCIe 5.0/6.0 eSSD 확산의 직접 수혜.", risk: "고객사 검증 / 경쟁" },
          ],
        },
        {
          id: "L3-B", name: "유리 기판 (Glass Substrate)", desc: "FC-BGA 한계 돌파 · 상용화 First Mover",
          badge: "★ Game Changer",
          companies: [
            { name: "SKC", code: "011790", role: "First Mover", tag: "앱솔릭스 조지아팹", highlight: true,
              moat: "세계 최초 유리기판 전용팹 · AMAT 협력 · AMD/Intel/Amazon 퀄", thesis: "기존 대비 두께 25%↓ 전력 30%↓. CHIPS 7,500만달러+NAPMP 1억달러. 유리기판 사업가치 1.8조.", risk: "초기 수율 / 동박 본업 부진" },
            { name: "삼성전기", code: "009150", role: "통합 지배자", tag: "세종 파일럿 · 2026 양산",
              moat: "FC-BGA 대면적 평탄도 노하우 · 삼성그룹 패키징 허브", thesis: "MLCC 캐시카우 기반 유리기판 CAPEX 선제 투입. 2026 하반기 영업이익 질적 퀀텀점프.", risk: "앱솔릭스 선점 경쟁 / MLCC 수요" },
            { name: "필옵틱스", code: "161580", role: "TGV 독점", tag: "앱솔릭스 독점 공급", highlight: true,
              moat: "TGV 레이저 가공 세계 최초 양산화 · 앱솔릭스 독점 공급", thesis: "유리기판 상용화의 절대적 열쇠. 2026F EPS 1,196원(+488% YoY) · 목표 P/E 25배.", risk: "시장 개화 지연 / 경쟁 가공기술" },
          ],
        },
        {
          id: "L3-C", name: "온디바이스 AI · NPU IP", desc: "PIM·엣지 AI 핵심 설계자산",
          companies: [
            { name: "오픈엣지테크놀로지", code: "394280", role: "NPU+메모리 IP", tag: "AI 가속기 IP 통합",
              moat: "NPU + DDR/LPDDR 통합 IP 솔루션", thesis: "에너지 병목 80% 절감 · 엣지 NPU 필수화 수요 폭증. 로열티 매출 성장 주목.", risk: "라이선스→로열티 전환 속도" },
            { name: "칩스앤미디어", code: "094360", role: "비디오+AI IP", tag: "글로벌 비디오 코덱 강자",
              moat: "온디바이스용 고성능 비디오 코덱 + AI IP", thesis: "멀티 가속기 대응 · 글로벌 팹리스 직접 라이선싱.", risk: "IP 시장 경쟁" },
          ],
        },
      ],
    },
  ],
};
