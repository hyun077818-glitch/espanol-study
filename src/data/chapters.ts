import { Chapter } from '../types';

export const CHAPTERS_DATA: Chapter[] = [
  {
    id: 1,
    title: '제1장: 스페인어 개요 & 스페인어권 문화',
    subtitle: '스페인어의 세계적 위상, 22개국 문화, Dos besos 인사법 및 스페인의 5단계 식문화',
    lectureWeek: '1주차 & 3주차 & 5주차',
    badge: '기초 & 문화',
    summary:
      '세계 2위의 공용어인 스페인어의 기본 특성과 라틴아메리카 및 스페인의 역사·문화적 배경, 인사법(Dos besos), 식사 주기(Desayuno~Cena) 및 대표 음식을 학습합니다.',
    keyTakeaways: [
      '스페인어는 22개국에서 모국어로 사용되며 전 세계 2위 사용 언어입니다.',
      '문장부호는 앞뒤로 쌍을 이룹니다: 물음표(¿ ?), 느낌표(¡ !).',
      '스페인 인사법 "Dos besos": 스페인은 양 볼 2회, 중남미는 한 볼 1회 볼을 대며 쪽 소리를 냅니다.',
      '스페인의 식문화: Desayuno(아침) → Almuerzo(간식) → Comida(점심/오후 2시, 메뉴 델 디아) → Merienda(오후 간식) → Cena(저녁/8~9시).',
      '시험 구성: 중간(30%) + 기말(30%), 각 40문제(객관식 20문항 2점 + 주관식 단답/작문 20문항 3점 = 총점 100점).',
    ],
    sections: [
      {
        id: 'sec-1-1',
        title: '1.1 강의 정보 & 시험 평가 기준',
        subtitle: '2026-2학기 한림대학교 스페인어 강의계획서 핵심',
        rules: [
          {
            title: '수업 및 평가 구성',
            description:
              '김태영 교수님 강의로, 대면 지필시험 형태의 중간고사(30%)와 기말고사(30%)가 핵심입니다.',
            table: {
              headers: ['평가 항목', '비율', '시험 형태 및 문항 배점'],
              rows: [
                ['중간고사', '30%', '총 40문제: 객관식 20문제(각 2점) + 주관식 단답/작문 20문제(각 3점) = 100점'],
                ['기말고사', '30%', '총 40문제: 객관식 20문제(각 2점) + 주관식 단답/작문 20문제(각 3점) = 100점'],
                ['기말보고서', '20%', '스페인어권 문화 주제 선정, A4 3장 이상, 기말 전날 23:59까지 메일 제출'],
                ['출석', '20%', '호명 출석 확인 (대면 미출석 시 전자출석부 상관없이 결석 처리)'],
              ],
            },
            tip: '시험 40문제 중 절반인 20문제가 주관식 작문 및 단답형이므로, 스페인어 철자(스펠링), 악센트(띨데), 관사 및 동사 변형을 직접 정확하게 쓸 수 있어야 합니다.',
          },
        ],
      },
      {
        id: 'sec-1-2',
        title: '1.2 스페인어의 특징 & 스페인어권 국가',
        subtitle: '스페인, 멕시코, 페루, 아르헨티나, 도미니카 공화국의 핵심 지식',
        rules: [
          {
            title: '스페인어의 3대 문법적 특징',
            description: '한국어/영어와 다른 스페인어 고유의 문법 규칙입니다. 스피커 버튼을 눌러 원어민 발음을 들을 수 있습니다.',
            examples: [
              {
                es: 'el profesor / la periodista',
                pronunciation: '엘 프로페소르 / 라 페리오디스타',
                ko: '남선생님 / 여자기자 (명사의 성별에 따라 관사와 명사 어미가 변화)',
              },
              {
                es: 'Yo voy a la escuela.',
                pronunciation: '요 보이 아 라 에스꾸엘라',
                ko: '나는 학교에 간다 (1인칭 시제·인칭에 따라 동사 voy 형태가 결정됨)',
              },
              {
                es: '¿Cómo estás?',
                pronunciation: '꼬모 에스따스?',
                ko: '잘 지내니? (문장 앞뒤로 거꾸로 된 물음표 ¿와 ? 부호가 붙음)',
              },
              {
                es: '¡Feliz cumpleaños!',
                pronunciation: '펠리스 쿰쁠레아뇨스!',
                ko: '생일 축하해! (문장 앞뒤로 거꾸로 된 느낌표 ¡와 ! 부호가 붙음)',
              },
            ],
          },
          {
            title: '주요 스페인어권 5개국 핵심 정리',
            description: '시험에 자주 출제되는 각 국가의 역사·문화적 랜드마크입니다.',
            table: {
              headers: ['국가명', '수도 및 지리/역사 특징', '문화·음식·대표 인물'],
              rows: [
                ['스페인 (España)', '800년간 이슬람 지배(카톨릭+이슬람 문화 혼재), 1492년 콜럼버스 신대륙 발견, 1898년 식민지 완전 상실', '세비야/톨레도/부르고스 성당, 가우디 건축, 세르반테스(돈키호테), 플라멩코, 투우, 시에스타, 빠에야, 하몽'],
                ['멕시코 (México [메히꼬])', '북아메리카 유일의 스페인어권 국가, 인구 최다, 메스티소(백인+인디오 혼혈)', '마야/아스테카 문명, 죽은 자들의 날 (Día de Muertos [디아 데 무에르또스])'],
                ['페루 (Perú [뻬루])', '15세기 잉카제국 건설, 남아메리카 위치', '쿠스코(Cuzco), 마추픽추(Machu Picchu), 대표음식 세비체(Ceviche [세비체]), 꾸이(Cuy [꾸이]), 작가 마리오 바르가스 요사'],
                ['아르헨티나 (Argentina [아르헨띠나])', '남미 대륙 최남단, "중남미 속의 유럽" (다수의 백인+메스티소)', '유목 목동 가우초(El Gaucho [엘 가우초]), 탱고(El Tango [엘  tango]), 아스토르 피아졸라, 체 게바라, 메시, 대표음식 아사도(Asado [아사도])'],
                ['도미니카 공화국 (República Dominicana)', '이스빠뇰라 섬(Isla Hispañola) 위치, 물라토(mulato: 백인+흑인 혼혈) 인구 50% 이상', '라틴댄스 메렝게(Merengue [메렝게]), 바차타(Bachata [바차타]), 콜마도(colmado), 데레초(derecho: 직진택시), 반데라(La bandera)'],
              ],
            },
          },
        ],
      },
      {
        id: 'sec-1-3',
        title: '1.3 인사법 (Dos besos) & 스페인의 식문화',
        subtitle: '양 볼 인사와 하루 5번의 스페인 식사 주기, Bar 문화',
        rules: [
          {
            title: '스페인어권의 인사법: Dos besos',
            description:
              '상대방과 짧게 양쪽 볼을 번갈아 대면서 입술로 "쪽" 소리를 내는 친근한 인사법입니다.',
            examples: [
              {
                es: 'Dos besos',
                pronunciation: '도스 베소스',
                ko: '스페인은 양 볼에 각각 한 번씩 총 두 번 인사합니다.',
              },
              {
                es: 'Un beso',
                pronunciation: '운 베소',
                ko: '중남미에서는 보통 한쪽 볼에 한 번만 인사합니다.',
              },
            ],
          },
          {
            title: '스페인의 하루 식사 주기 5단계',
            description: '스페인은 하루에 5번 식사하는 독특한 식문화를 가지고 있습니다.',
            table: {
              headers: ['식사 명칭', '한글 발음', '시간대 및 특징', '주요 음식'],
              rows: [
                ['El desayuno', '엘 데사유노', '기상 직후 가볍게', '비스킷 + 주스 혹은 커피'],
                ['El almuerzo', '엘 알무에르소', '오전 11시경 인근 카페', '간단한 샌드위치나 간식 타임'],
                ['La comida', '라 꼬미다', '오후 2시부터 시작 (하루 중 가장 중요)', 'Menú del día (메뉴 델 디아: 코스 요리)'],
                ['La merienda', '라 메리엔다', '오후 5~6시경', '간단한 음료 + 타파스 (Tapas)'],
                ['La cena', '라 세나', '보통 밤 8시~9시 이후 늦게 시작', '가벼운 요리나 타파스'],
              ],
            },
          },
          {
            title: '스페인 대표 음식 & 음료 어휘 듣기',
            description: '바르(Bar)는 술집과 카페가 합쳐진 친목 사교의 중심지입니다. 스피커 버튼을 눌러 정확한 원어민 발음을 들어보세요.',
            examples: [
              {
                es: 'La paella',
                pronunciation: '라 빠에야',
                ko: '스페인을 대표하는 전통 쌀 해산물/고기 요리',
              },
              {
                es: 'Gambas al ajillo',
                pronunciation: '감바스 알 아히요',
                ko: '마늘과 고추, 올리브 오일에 끓인 새우 요리',
              },
              {
                es: 'Tortilla de patatas',
                pronunciation: '또르띠야 데 빠따따스',
                ko: '감자와 계란으로 만든 스페인식 오믈렛',
              },
              {
                es: 'El jamón',
                pronunciation: '엘 하몬',
                ko: '스페인 전통 돼지 뒷다리 생햄 (하몽)',
              },
              {
                es: 'El gazpacho',
                pronunciation: '엘 가스파초',
                ko: '토마토, 피망, 오이 등을 갈아 시원하게 마시는 차가운 채소 스프',
              },
              {
                es: 'La Sangría',
                pronunciation: '라 상그리아',
                ko: '레드와인에 과일과 탄산수를 넣어 만든 스페인 대표 음료',
              },
              {
                es: 'Los Churros',
                pronunciation: '로스 추로스',
                ko: '진한 핫초콜릿에 찍어 먹는 스페인 대표 전통 디저트',
              },
              {
                es: 'caña de cerveza',
                pronunciation: '까냐 데 세르베사',
                ko: '바(Bar)에서 마시는 시원한 생맥주 (cerveza: 맥주)',
              },
              {
                es: 'vino tinto / vino blanco',
                pronunciation: '비노 띤또 / 비노 블랑꼬',
                ko: '레드 와인 / 화이트 와인',
              },
              {
                es: 'café con leche',
                pronunciation: '까페 꼰 레체',
                ko: '따뜻한 우유를 넣은 스페인식 카페라떼 (café sólo: 에스프레소)',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: '제2장: 모음과 자음, 음절 분해 & 강세 규칙',
    subtitle: '강모음/약모음 구분, 음절 분해 4대 원칙, 강세 위치 4대 법칙',
    lectureWeek: '2주차',
    badge: '발음 & 규칙',
    summary:
      '스페인어의 5개 모음(강모음 a,e,o / 약모음 i,u)과 이중/삼중모음, 음절을 나누는 규칙(Reglas de silabación) 및 강세 위치(Acentuación)의 4대 법칙을 마스터합니다.',
    keyTakeaways: [
      '강모음: a, e, o / 약모음: i, u (약모음에 띨데가 붙으면 강모음으로 승격: río, país).',
      '음절분해: 모음 사이 자음 1개는 뒷모음(ve-ra-no), 자음 2개는 분리(ver-de), 단 이중자음 및 ch, ll, rr은 분리 불가(cri-sis).',
      '강모음이 연속되면 무조건 음절 분리: idea -> i-de-a, poema -> po-e-ma.',
      '강세 규칙 1: 모음 또는 n, s로 끝나면 끝에서 2번째 음절 (ca-ma, Car-men).',
      '강세 규칙 2: n, s 제외 자음으로 끝나면 마지막 음절 (hos-pi-tal, co-mer).',
      '강세 규칙 3: 띨데(tilde)가 있으면 규칙 불문하고 해당 음절에 강세 (na-ción, ca-fé).',
    ],
    sections: [
      {
        id: 'sec-2-1',
        title: '2.1 모음(Vocales)과 이중/삼중모음 단어',
        subtitle: '모든 대표 단어의 한글 발음과 원어민 음성을 직접 듣고 익히기',
        rules: [
          {
            title: '5대 기본 모음 대표 단어',
            description: '스페인어 모음은 5개(a, e, i, o, u)이며, 발음 기호대로 정직하게 소리 납니다.',
            examples: [
              { es: 'agua', pronunciation: '아구아', ko: '물 (A a [아] 강모음)' },
              { es: 'amarillo', pronunciation: '아마리요', ko: '노란색' },
              { es: 'España', pronunciation: '에스빠냐', ko: '스페인 (E e [에] 강모음)' },
              { es: 'entrada', pronunciation: '엔뜨라다', ko: '입구' },
              { es: 'isla', pronunciation: '이슬라', ko: '섬 (I i [이] 약모음)' },
              { es: 'información', pronunciation: '인포르마시온', ko: '정보' },
              { es: 'oso', pronunciation: '오소', ko: '곰 (O o [오] 강모음)' },
              { es: 'orden', pronunciation: '오르덴', ko: '순서' },
              { es: 'Uruguay', pronunciation: '우루구아이', ko: '우루과이 (U u [우] 약모음)' },
              { es: 'uno', pronunciation: '우노', ko: '숫자 1' },
            ],
          },
          {
            title: '이중모음과 삼중모음 핵심 단어 (개별 오디오 듣기)',
            description: '강모음(a, e, o)과 약모음(i, u)의 결합 원리를 확인하고 각 단어의 스피커 버튼을 눌러보세요.',
            examples: [
              { es: 'aire', pronunciation: '아이레', ko: '공기 (강모음 a + 약모음 i 결합)' },
              { es: 'Europa', pronunciation: '에우로빠', ko: '유럽 (강모음 e + 약모음 u 결합)' },
              { es: 'piano', pronunciation: '삐아노', ko: '피아노 (약모음 i + 강모음 a 결합)' },
              { es: 'bueno', pronunciation: '부에노', ko: '좋은 (약모음 u + 강모음 e 결합)' },
              { es: 'viudo', pronunciation: '비우도', ko: '홀아비 (약모음 i + 약모음 u 결합)' },
              { es: 'huida', pronunciation: '우이다', ko: '도망 (약모음 u + 약모음 i 결합 / h는 묵음)' },
              { es: 'Uruguay', pronunciation: '우루구아이', ko: '우루과이 (삼중모음: 약 u + 강 a + 약 y[i])' },
              { es: 'buey', pronunciation: '부에이', ko: '소 (삼중모음: 약 u + 강 e + 약 y[i], 하나의 모음으로 간주)' },
            ],
          },
        ],
      },
      {
        id: 'sec-2-2',
        title: '2.2 음절 분해 규칙 (Reglas de silabación)',
        subtitle: '시험 주관식 단골! 정확한 하이픈 음절 나누기 4대 원칙',
        rules: [
          {
            title: '음절 분해 4대 원칙과 기출 단어 오디오',
            description: '스피커를 누르면 단어 전체의 발음을 듣고, 하이픈(-) 음절 분해 표기를 확인할 수 있습니다.',
            examples: [
              { es: 'verano', pronunciation: '베라노', ko: '여름: ve-ra-no (규칙 1: 모음 사이 자음 1개는 뒷모음에 붙음)' },
              { es: 'aire', pronunciation: '아이레', ko: '공기: ai-re (이중모음 ai는 한 음절)' },
              { es: 'verde', pronunciation: '베르데', ko: '녹색: ver-de (규칙 2: 모음 사이 자음 2개는 앞뒤로 분리)' },
              { es: 'puerto', pronunciation: '뿌에르또', ko: '항구: puer-to (r과 t 분리)' },
              { es: 'crisis', pronunciation: '끄리시스', ko: '위기: cri-sis (cr 이중자음은 분리 불가)' },
              { es: 'gloria', pronunciation: '글로리아', ko: '영광: glo-ria (gl 이중자음은 분리 불가)' },
              { es: 'idea', pronunciation: '이데아', ko: '생각: i-de-a (규칙 3: 연속된 강모음 e-a는 무조건 분리!)' },
              { es: 'poema', pronunciation: '뽀에마', ko: '시: po-e-ma (연속된 강모음 o-e는 무조건 분리!)' },
              { es: 'río', pronunciation: 'ㄹ리오', ko: '강: rí-o (규칙 4: 약모음 i에 강세 띨데가 있어 강모음 승격 분리!)' },
              { es: 'país', pronunciation: '빠이스', ko: '나라: pa-ís (약모음 i에 띨데가 있어 강모음 승격 분리!)' },
            ],
            tip: 'río를 rio 한 음절로 쓰면 오답입니다! rí-o 2음절이며, país 역시 pa-ís 2음절입니다. 연속 강모음 idea는 3음절(i-de-a)입니다.',
          },
        ],
      },
      {
        id: 'sec-2-3',
        title: '2.3 스페인어 강세 규칙 (La acentuación)',
        subtitle: '단어 어디에 악센트가 붙는지 판별하는 4가지 절대 법칙',
        rules: [
          {
            title: '강세 판별 4법칙 대표 단어 & 발음',
            description: '단어 끝 철자에 따라 강세 위치가 정해집니다. 볼드 처리된 음절에 강세를 두어 발음하세요.',
            examples: [
              { es: 'cama', pronunciation: '까마', ko: '침대: ca-ma (법칙 1: 모음 끝 -> 끝에서 2번째 ca에 강세)' },
              { es: 'Carmen', pronunciation: '까르멘', ko: '까르멘: Car-men (법칙 1: 자음 n 끝 -> 끝에서 2번째 Car에 강세)' },
              { es: 'hospital', pronunciation: '오스피딸', ko: '병원: hos-pi-tal (법칙 2: 자음 l 끝 -> 마지막 음절 tal에 강세)' },
              { es: 'comer', pronunciation: '꼬메르', ko: '먹다: co-mer (법칙 2: 자음 r 끝 -> 마지막 음절 mer에 강세)' },
              { es: 'diario', pronunciation: '디아리오', ko: '일기: dia-rio (법칙 3: 이중모음 dia의 강모음 a에 강세)' },
              { es: 'jueves', pronunciation: '후에베스', ko: '목요일: jue-ves (이중모음 jue의 강모음 e에 강세)' },
              { es: 'ruido', pronunciation: 'ㄹ루이도', ko: '소음: rui-do (약+약 이중모음은 뒤쪽 i에 강세)' },
              { es: 'triunfo', pronunciation: '뜨리운포', ko: '승리: triun-fo (약+약 이중모음은 뒤쪽 u에 강세)' },
              { es: 'nación', pronunciation: '나씨온', ko: '국가: na-ción (법칙 4: 띨데가 있는 음절에 무조건 강세)' },
              { es: 'café', pronunciation: '까페', ko: '커피: ca-fé (띨데가 있는 음절에 강세)' },
              { es: 'adiós', pronunciation: '아디오스', ko: '안녕: a-diós (띨데가 있는 음절에 강세)' },
            ],
            tip: 'examen은 n으로 끝나므로 끝에서 2번째인 ex-a-men의 a에 강세가 옵니다. 복수가 되면 exámenes로 음절이 늘어나 본래 a의 강세를 유지하기 위해 띨데가 생깁니다!',
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: '제3장: 주격 인칭대명사, SER 동사, Llamarse 재귀동사',
    subtitle: '스페인어의 6개 인칭 구분, SER 동사 현재형, 이름 묻고 답하기',
    lectureWeek: '3주차 & 4주차',
    badge: '필수 문법',
    summary:
      '스페인어 기본 주어(1인칭~3인칭 단/복수, 존칭 Usted/Ustedes)와 핵심 불규칙 동사 SER(soy, eres, es...), 그리고 재귀대명사를 동반하는 Llamarse 동사 변화를 배웁니다.',
    keyTakeaways: [
      '주격 인칭대명사: yo, tú, él/ella/Usted, nosotros/as, vosotros/as, ellos/ellas/Ustedes.',
      'Usted(Ud.)와 Ustedes(Uds.)는 문법적으로 3인칭 취급을 합니다 (동사도 3인칭 형태 사용).',
      'SER 동사 현재형: soy, eres, es, somos, sois, son.',
      '재귀동사 Llamarse: "재귀대명사 + 동사 현재형" (me llamo, te llamas, se llama, nos llamamos, os llamáis, se llaman).',
    ],
    sections: [
      {
        id: 'sec-3-1',
        title: '3.1 스페인어 주격 인칭대명사 (Pronombres personales)',
        subtitle: '영어와 비교하는 스페인어 인칭 체계 및 한글 발음',
        rules: [
          {
            title: '인칭대명사 표 & 한글 발음',
            description: '스페인어는 우리들/너희들/그들 모두 남성형과 여성형이 나뉩니다.',
            table: {
              headers: ['인칭', '단수 (Singular)', '단수 발음', '복수 (Plural)', '복수 발음'],
              rows: [
                ['1인칭', 'Yo (나 / I)', '[요]', 'Nosotros / Nosotras (우리들)', '[노소뜨로스 / 노소뜨라스]'],
                ['2인칭', 'Tú (너 / You)', '[뚜]', 'Vosotros / Vosotras (너희들)', '[보소뜨로스 / 보소뜨라스]'],
                ['3인칭', 'Él / Ella / Usted (그/그녀/당신)', '[엘 / 에야 / 우스뗏]', 'Ellos / Ellas / Ustedes (그들/그녀들/당신들)', '[에요스 / 에야스 / 우스떼데스]'],
              ],
            },
            tip: '스페인어는 동사 변형만으로 주어가 누구인지 대부분 알 수 있으므로, 강조나 명확성이 필요한 경우가 아니면 주어(yo, tú 등)를 생략하는 것이 자연스럽습니다.',
          },
        ],
      },
      {
        id: 'sec-3-2',
        title: '3.2 SER 동사의 현재 인칭 변화',
        subtitle: '가장 중요한 기초 계사(Copula) 동사',
        rules: [
          {
            title: 'SER 동사 인칭별 변화표',
            description: '"~이다"를 뜻하는 SER 동사의 6개 형태를 완벽히 암기해야 합니다.',
            table: {
              headers: ['인칭', '단수형', '단수 발음', '복수형', '복수 발음'],
              rows: [
                ['1인칭', '(Yo) soy', '[소이]', '(Nosotros/as) somos', '[소모스]'],
                ['2인칭', '(Tú) eres', '[에레스]', '(Vosotros/as) sois', '[소이스]'],
                ['3인칭', '(Él, Ella, Ud.) es', '[에스]', '(Ellos, Ellas, Uds.) son', '[손]'],
              ],
            },
            examples: [
              {
                es: 'Yo soy Álvaro. Soy médico.',
                pronunciation: '요 소이 알바로. 소이 메디꼬.',
                ko: '저는 알바로입니다. 의사입니다.',
              },
              {
                es: 'Juan y yo somos de México.',
                pronunciation: '후안 이 요 소모스 데 메히꼬.',
                ko: '후안과 나(우리들)는 멕시코 출신입니다. (1인칭 복수 somos)',
              },
              {
                es: '¿De dónde son ustedes?',
                pronunciation: '데 돈데 손 우스떼데스?',
                ko: '당신들은 어디 출신입니까? (3인칭 복수 son)',
              },
              {
                es: 'Mis hermanos y tú sois optimistas.',
                pronunciation: '미스 에르마노스 이 뚜 소이스 옵띠미스따스.',
                ko: '내 형제들과 너(너희들)는 낙천적이다. (2인칭 복수 sois)',
              },
            ],
          },
        ],
      },
      {
        id: 'sec-3-3',
        title: '3.3 Llamarse 동사 (~라고 불리다 / 이름 말하기)',
        subtitle: '재귀동사(Verbo reflexivo)의 기본 구조',
        rules: [
          {
            title: 'Llamarse 동사변형 공식: 재귀대명사 + 동사형',
            description: 'Llamar(부르다) + se(재귀대명사) 결합 형태입니다.',
            table: {
              headers: ['인칭', '재귀대명사 + 동사 단수형', '단수 발음', '재귀대명사 + 동사 복수형', '복수 발음'],
              rows: [
                ['1인칭', 'me llamo', '[메 야모]', 'nos llamamos', '[노스 야마모스]'],
                ['2인칭', 'te llamas', '[떼 야마스]', 'os llamáis', '[오스 야마이스]'],
                ['3인칭', 'se llama', '[세 야마]', 'se llaman', '[세 야만]'],
              ],
            },
            examples: [
              {
                es: '¿Cómo te llamas? - Me llamo Minsoo.',
                pronunciation: '꼬모 떼 야마스? - 메 야모 민수.',
                ko: '너 이름이 뭐니? - 내 이름은 민수야.',
              },
              {
                es: '¿Cómo se llama Usted?',
                pronunciation: '꼬모 세 야마 우스뗏?',
                ko: '당신의 성함은 어떻게 되십니까? (존칭 3인칭)',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: '제4장: 명사의 성과 수, 관사 체계',
    subtitle: '자연적/문법적 성, 시험 단골 불규칙 명사, el agua 특수 규칙, 정관사/부정관사',
    lectureWeek: '3주차 & 4주차 & 5주차',
    badge: '시험 1순위',
    summary:
      '남성/여성 명사 어미 규칙과 예외(el día, el mapa, el problema, el tema, la mano, la foto), 여성단수 명사 앞 남성관사(el agua, el arma), 복수형 규칙(-s, -es, -ces), 정관사(el, la, los, las) 및 부정관사(un, una, unos, unas)를 마스터합니다.',
    keyTakeaways: [
      '일반적으로 -o, -자음, -aje, 일부 -e는 남성 / -a, -ción, -sión, -d, 일부 -z는 여성.',
      '시험 최다 빈출 불규칙: 남성명사 el día, el mapa, el problema, el tema, el programa, el sistema, el clima / 여성명사 la mano, la foto, la moto.',
      '강세 있는 a-(á-)로 시작하는 여성단수 명사는 발음 충돌 방지를 위해 남성관사 el, un을 씀: el agua, el arma, el águila (단, 복수는 본래 성으로 복귀: las aguas, las armas, las águilas!).',
      '복수형: 모음+-s, 자음+-es, -z는 -ces로 변환(cruz -> cruces, lápiz -> lápices, voz -> voces, paz -> paces).',
      '-s로 끝나는 복합명사/요일은 단복수 불변: el cortauñas -> los cortauñas, el sacapuntas -> los sacapuntas, el lunes -> los lunes.',
      '항상 복수로 쓰이는 명사: las tijeras(가위), los guantes(장갑), las gafas(안경), los pantalones(바지).',
    ],
    sections: [
      {
        id: 'sec-4-1',
        title: '4.1 명사의 성 (자연적 성 vs 문법적 성)',
        subtitle: '사물명사의 기본 성별 구분 공식',
        rules: [
          {
            title: '문법적 성별 판별 규칙',
            description: '사물명사의 어미를 통해 남성과 여성을 판별합니다.',
            table: {
              headers: ['성별', '대표 어미', '단어 예시', '한글 발음 및 의미'],
              rows: [
                ['남성명사 (Masculino)', '-o\n-자음\n-aje\n일부 -e', 'edificio, libro, vestido\nhotel, ratón\ngaraje, viaje\ncine, coche', '[에디피시오] 건물, [리브로] 책, [베스띠도] 원피스\n[오뗄] 호텔, [라똔] 마우스\n[가라헤] 차고, [비아헤] 여행\n[시네] 영화, [꼬체] 자동차'],
                ['여성명사 (Femenino)', '-a\n-ción / -sión\n-d\n일부 -z\n일부 -e', 'casa, mesa, silla\ncanción, pasión\nverdad, ciudad, pared\npaz, cruz\nleche, noche, clase', '[까사] 집, [메사] 테이블, [시야] 의자\n[깐시온] 노래, [빠시온] 열정\n[베르다드] 진실, [시우다드] 도시, [빠레드] 벽\n[빠스] 평화, [끄루스] 십자가\n[레체] 우유, [노체] 밤, [끌라세] 수업'],
              ],
            },
          },
        ],
      },
      {
        id: 'sec-4-2',
        title: '4.2 시험 단골! 불규칙 성별 사물명사 10선',
        subtitle: '형태와 반대되는 성별을 가진 명사 완벽 암기',
        rules: [
          {
            title: '불규칙 성별 명사 리스트',
            description: '시험에서 가장 많은 감점이 발생하는 핵심 함정 단어들입니다.',
            table: {
              headers: ['단어', '한글 발음', '형태 특징', '실제 성', '관사 결합 예시'],
              rows: [
                ['día', '[디아]', '-a로 끝나지만 남성', '남성', 'el día / un buen día [엘 디아 / 운 부엔 디아]'],
                ['mapa', '[마빠]', '-a로 끝나지만 남성', '남성', 'el mapa / un mapa [엘 마빠 / 운 마빠]'],
                ['problema', '[쁘로블레마]', '-a로 끝나지만 남성', '남성', 'el problema / un problema [엘 쁘로블레마]'],
                ['tema', '[떼마]', '-a로 끝나지만 남성', '남성', 'el tema / un tema [엘 떼마]'],
                ['programa', '[쁘로그라마]', '-a로 끝나지만 남성', '남성', 'el programa / un programa [엘 쁘로그라마]'],
                ['sistema', '[시스떼마]', '-a로 끝나지만 남성', '남성', 'el sistema / un sistema [엘 시스떼마]'],
                ['clima', '[끌리마]', '-a로 끝나지만 남성', '남성', 'el clima / un clima [엘 끌리마]'],
                ['mano', '[마노]', '-o로 끝나지만 여성', '여성', 'la mano / una mano [라 마노 / 우나 마노]'],
                ['foto', '[포또]', '-o로 끝나지만 여성', '여성', 'la foto / una foto [라 포또 / 우나 포또]'],
                ['moto', '[모또]', '-o로 끝나지만 여성', '여성', 'la moto / una moto [라 모또 / 우나 모또]'],
              ],
            },
            examples: [
              {
                es: 'El agua está limpia.',
                pronunciation: '엘 아구아 에스따 림삐아.',
                ko: '물이 깨끗하다. (단수에서는 발음 충돌 방지로 남성관사 el, 형용사는 본래 여성형 limpia 유지!)',
              },
              {
                es: 'Las aguas están limpias.',
                pronunciation: '라스 아구아스 에스딴 림삐아스.',
                ko: '물들이 깨끗하다. (복수에서는 본래 여성관사 las로 복귀!)',
              },
            ],
            tip: '강세 águila의 복수는 las águilas입니다! 형용사 역시 본래 여성성이 유지되므로 "El agua está limpia"처럼 여성형 형용사를 써야 합니다.',
          },
        ],
      },
      {
        id: 'sec-4-3',
        title: '4.3 단수명사를 복수로 만드는 5가지 규칙',
        subtitle: '자음, 모음, -z 탈락, 불변 명사, 악센트 변화',
        rules: [
          {
            title: '복수형 변형 공식 & 대표 예시',
            description: '스페인어 명사 복수화 규칙입니다.',
            examples: [
              {
                es: 'el libro -> los libros',
                pronunciation: '엘 리브로 -> 로스 리브로스',
                ko: '모음으로 끝남: + -s 붙임 (책 -> 책들)',
              },
              {
                es: 'el hotel -> los hoteles',
                pronunciation: '엘 오뗄 -> 로스 오뗄레스',
                ko: '자음으로 끝남: + -es 붙임 (호텔 -> 호텔들)',
              },
              {
                es: 'la cruz -> las cruces',
                pronunciation: '라 끄루스 -> 라스 끄루세스',
                ko: '-z로 끝남: -z 제거 후 + -ces (십자가 -> 십자가들)',
              },
              {
                es: 'el lápiz -> los lápices',
                pronunciation: '엘 라삐스 -> 로스 라삐세스',
                ko: '-z로 끝남: -z 제거 후 + -ces (연필 -> 연필들)',
              },
              {
                es: 'el cortauñas -> los cortauñas',
                pronunciation: '엘 꼬르따우냐스 -> 로스 꼬르따우냐스',
                ko: '-s로 끝나는 복합명사: 형태 불변, 관사만 복수화 (손톱깎이)',
              },
              {
                es: 'las tijeras / las gafas',
                pronunciation: '라스 띠헤라스 / 라스 가파스',
                ko: '항상 복수로 쓰이는 명사: 가위 / 안경',
              },
              {
                es: 'el limón -> los limones',
                pronunciation: '엘 리몬 -> 로스 리모네스',
                ko: '복수가 될 때 강세 유지 법칙에 따라 악센트 띨데 삭제',
              },
              {
                es: 'el examen -> los exámenes',
                pronunciation: '엘 엑사멘 -> 로스 엑사메네스',
                ko: '복수가 될 때 음절이 늘어나 a의 강세를 유지하기 위해 띨데 추가',
              },
            ],
          },
        ],
      },
      {
        id: 'sec-4-4',
        title: '4.4 정관사와 부정관사 (Artículos)',
        subtitle: '특정 대상(정관사)과 불특정 대상(부정관사)',
        rules: [
          {
            title: '정관사와 부정관사 표 & 한글 발음',
            description: '명사의 성과 수에 따라 4가지씩 존재합니다.',
            table: {
              headers: ['구분', '남성 단수', '여성 단수', '남성 복수', '여성 복수'],
              rows: [
                ['정관사 (Artículos definidos)', 'el [엘] (el coche [엘 꼬체])', 'la [라] (la pluma [라 쁠루마])', 'los [로스] (los coches [로스 꼬체스])', 'las [라스] (las plumas [라스 쁠루마스])'],
                ['부정관사 (Artículos indefinidos)', 'un [운] (un coche [운 꼬체])', 'una [우나] (una pluma [우나 쁠루마])', 'unos [우노스] (unos coches [우노스 꼬체스])', 'unas [우나스] (unas plumas [우나스 쁠루마스])'],
              ],
            },
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: '제5장: SER vs ESTAR 동사 완벽 비교 & 형용사 및 어미탈락',
    subtitle: '본질 vs 상태/위치 구별, 형용사 성수일치, 위치별 의미변화, 어미탈락(Apócope)',
    lectureWeek: '4주차 & 5주차',
    badge: '킬러 문항',
    summary:
      '스페인어 최고의 난관인 SER vs ESTAR의 완벽한 용법 구분, ESTAR 현재형(estoy, estás...), 형용사의 전치/후치 수식, 위치에 따라 뜻이 바뀌는 형용사(viejo, nuevo, pobre, grande), 그리고 남성단수 앞 어미탈락(buen, mal, primer, tercer, gran, san)을 철저히 분석합니다.',
    keyTakeaways: [
      'SER: 변하지 않는 본질적 속성 (이름, 국적, 직업, 성격, 사물의 고유 속성/크기, 재료, 출신 SER DE).',
      'ESTAR: 변하기 쉬운 상태 (일시적 신체/감정 상태, 문 닫힘/열림, 청결/오염, 온도, 위치).',
      'ESTAR 현재형: estoy, estás, está, estamos, estáis, están.',
      '형용사 위치에 따른 의미: viejo, nuevo, pobre, grande는 명사 앞에서는 주관적 평가, 명사 뒤에서는 객관적 사실.',
      '어미탈락(Apócope): 남성단수명사 앞 bueno -> buen, malo -> mal, primero -> primer, tercero -> tercer, uno -> un.',
      'Santo 탈락: Santo -> San (단, Do-, To-로 시작하는 성인 이름 앞에서는 탈락 안 됨: Santo Domingo, Santo Tomás vs San Diego).',
      'Grande 탈락: grande -> gran (남성단수와 여성단수 명사 앞 모두 탈락: un gran hombre, una gran mujer).',
    ],
    sections: [
      {
        id: 'sec-5-1',
        title: '5.1 ESTAR 동사의 현재 인칭 변화',
        subtitle: '위치와 상태를 나타내는 불규칙 동사',
        rules: [
          {
            title: 'ESTAR 동사 인칭별 변화표 & 한글 발음',
            description: '1인칭 estoy를 제외하고 2·3인칭 단수 및 복수에 띨데(á)가 들어갑니다.',
            table: {
              headers: ['인칭', '단수형', '단수 발음', '복수형', '복수 발음'],
              rows: [
                ['1인칭', '(Yo) estoy', '[에스또이]', '(Nosotros/as) estamos', '[에스따모스]'],
                ['2인칭', '(Tú) estás', '[에스따스]', '(Vosotros/as) estáis', '[에스따이스]'],
                ['3인칭', '(Él, Ella, Ud.) está', '[에스따]', '(Ellos, Ellas, Uds.) están', '[에스딴]'],
              ],
            },
          },
        ],
      },
      {
        id: 'sec-5-2',
        title: '5.2 SER 동사 vs. ESTAR 동사 비교 판별법',
        subtitle: '시험 연습문제 18문항 완벽 정복 공식',
        rules: [
          {
            title: 'SER vs ESTAR 핵심 기출 예문 오디오',
            description: '각 예문의 스피커 버튼을 눌러 정확한 원어민 억양과 한글 발음을 함께 확인하세요.',
            examples: [
              {
                es: 'Yo soy Álvaro. Soy argentino.',
                pronunciation: '요 소이 알바로. 소이 아르헨띠노.',
                ko: '저는 알바로입니다. 아르헨티나 사람입니다. (이름·국적 불변 속성: SER)',
              },
              {
                es: 'Soy médico. Soy optimista.',
                pronunciation: '소이 메디꼬. 소이 옵띠미스따.',
                ko: '의사입니다. 나는 낙천적입니다. (직업·성격: SER)',
              },
              {
                es: 'La mesa es pequeña.',
                pronunciation: '라 메사 에스 뻬께냐.',
                ko: '그 테이블은 작습니다. (사물의 고유 크기/특성: SER)',
              },
              {
                es: 'Este vino es de España.',
                pronunciation: '에스떼 비노 에스 데 에스빠냐.',
                ko: '이 와인은 스페인산입니다. (원산지/출신: SER)',
              },
              {
                es: 'Mis hermanas son altas y delgadas.',
                pronunciation: '미스 에르마나스 손 알따스 이 델가다스.',
                ko: '내 여동생들은 키가 크고 날씬하다. (신체 고유 특징: SER)',
              },
              {
                es: 'Estoy un poco cansado.',
                pronunciation: '에스또이 운 뽀꼬 깐사도.',
                ko: '나는 조금 피곤합니다. (일시적 신체/피로 상태: ESTAR)',
              },
              {
                es: 'Perú está en América del Sur.',
                pronunciation: '뻬루 에스따 엔 아메리카 델 수르.',
                ko: '페루는 남미에 있습니다. (물리적 지리 위치: ESTAR)',
              },
              {
                es: 'Pedro está en la universidad.',
                pronunciation: '뻬드로 에스따 엔 라 우니베르시다드.',
                ko: '페드로는 대학교에 있습니다. (사람의 위치: ESTAR)',
              },
              {
                es: 'Nosotros estamos en el teatro.',
                pronunciation: '노소뜨로스 에스따모스 엔 엘 떼아뜨로.',
                ko: '우리는 극장에 있습니다. (위치: ESTAR)',
              },
              {
                es: 'La puerta está cerrada.',
                pronunciation: '라 뿌에르따 에스따 세르라다.',
                ko: '문이 닫혀 있습니다. (가변적 닫힘 상태: ESTAR)',
              },
              {
                es: 'La ventana está abierta.',
                pronunciation: '라 벤따나 에스따 아비에르따.',
                ko: '창문이 열려 있습니다. (가변적 열림 상태: ESTAR)',
              },
              {
                es: 'El café está caliente.',
                pronunciation: '엘 까페 에스따 까리엔떼.',
                ko: '커피가 뜨겁습니다. (가변적 온도 상태: ESTAR)',
              },
              {
                es: 'El agua está limpia.',
                pronunciation: '엘 아구아 에스따 림삐아.',
                ko: '물이 깨끗합니다. (가변적 청결 상태: ESTAR)',
              },
              {
                es: 'Las sillas están sucias.',
                pronunciation: '라스 시야스 에스딴 수시아스.',
                ko: '의자들이 더럽습니다. (가변적 오염 상태: ESTAR)',
              },
              {
                es: 'Mis padres están cansados.',
                pronunciation: '미스 빠드레스 에스딴 깐사도스.',
                ko: '부모님께서 피곤해하십니다. (피로 상태: ESTAR)',
              },
            ],
          },
        ],
      },
      {
        id: 'sec-5-3',
        title: '5.3 형용사의 구분 & 위치에 따른 의미 변화',
        subtitle: '품질형용사 vs 한정형용사, 주관적 vs 객관적 뉘앙스',
        rules: [
          {
            title: '위치에 따른 의미 변화 4인방 (소리 및 발음)',
            description: '명사 앞은 "주관적/감정적 뉘앙스", 명사 뒤는 "객관적/사실적 뉘앙스"입니다.',
            examples: [
              {
                es: 'un viejo amigo',
                pronunciation: '운 비에호 아미고',
                ko: '오랜 친구 (정든, 오랜 사이 - 명사 앞 주관적 의미)',
              },
              {
                es: 'un hombre viejo',
                pronunciation: '운 옴브레 비에호',
                ko: '나이 든 노인 (실제 나이가 늙은 - 명사 뒤 객관적 의미)',
              },
              {
                es: 'un nuevo coche',
                pronunciation: '운 누에보 꼬체',
                ko: '새로 산 차 (또 하나의 새로운 차 - 명사 앞 주관적 의미)',
              },
              {
                es: 'un coche nuevo',
                pronunciation: '운 꼬체 누에보',
                ko: '신품 차 (갓 출고된 신차 - 명사 뒤 객관적 의미)',
              },
              {
                es: 'un pobre hombre',
                pronunciation: '운 뽀브레 옴브레',
                ko: '불쌍한 남자 (가련한 - 명사 앞 주관적 의미)',
              },
              {
                es: 'un hombre pobre',
                pronunciation: '운 옴브레 뽀브레',
                ko: '가난한 남자 (돈이 없는 빈곤한 - 명사 뒤 객관적 의미)',
              },
              {
                es: 'un gran hombre',
                pronunciation: '운 그란 옴브레',
                ko: '위인 / 위대한 사람 (훌륭한 인물 - 명사 앞 주관적 의미)',
              },
              {
                es: 'un hombre grande',
                pronunciation: '운 옴브레 그란데',
                ko: '체격이 큰 사람 (물리적으로 덩치가 큰 - 명사 뒤 객관적 의미)',
              },
            ],
          },
        ],
      },
      {
        id: 'sec-5-4',
        title: '5.4 형용사의 어미 탈락 (Apócope)',
        subtitle: '남성 단수명사 앞 -o, -to, -de 탈락 규칙과 예외',
        rules: [
          {
            title: '3대 어미 탈락 규칙 기출 예문',
            description: '스피커를 눌러 정확한 원어민 발음과 탈락 형태를 확인하세요.',
            examples: [
              {
                es: 'buen amigo',
                pronunciation: '부엔 아미고',
                ko: '좋은 친구 (bueno -> buen 탈락 / 남성 단수 앞)',
              },
              {
                es: 'mal día',
                pronunciation: '말 디아',
                ko: '나쁜 하루 (malo -> mal 탈락 / 남성 단수 앞)',
              },
              {
                es: 'el primer día',
                pronunciation: '엘 쁘리메르 디아',
                ko: '첫째 날 (primero -> primer 탈락 / 남성 단수 앞)',
              },
              {
                es: 'el tercer piso',
                pronunciation: '엘 떼르세르 삐소',
                ko: '3층 (tercero -> tercer 탈락 / 남성 단수 앞)',
              },
              {
                es: 'Santo Domingo',
                pronunciation: '산또 도밍고',
                ko: '도미니카 공화국 수도 (Do-로 시작하여 -to 탈락 안 됨!)',
              },
              {
                es: 'San Diego',
                pronunciation: '산 디에고',
                ko: '샌디에이고 (Di-이므로 San으로 정상 탈락)',
              },
              {
                es: 'Teresa es una gran mujer.',
                pronunciation: '떼레사 에스 우나 그란 무헤르.',
                ko: '테레사는 위대한 여성이다. (grande는 여성 단수 앞에서도 gran으로 탈락!)',
              },
            ],
            tip: '시험 1순위 함정:\n1. Santo Domingo는 Do-로 시작하므로 탈락되지 않습니다!\n2. San Diego는 Di-이므로 탈락하여 San이 됩니다.\n3. Teresa es una gran mujer: grande는 여성단수 앞에서도 gran으로 탈락합니다!\n4. primer día: 첫째 날은 primero día가 아니라 primer día입니다.',
          },
        ],
      },
    ],
  },
  {
    id: 6,
    title: '제6장: 국명과 국적 형용사, 출신 표현 & 호칭',
    subtitle: 'SER DE + 지명, 25개국 국적 형용사 남녀형, 성 앞과 이름 앞 호칭 구분',
    lectureWeek: '5주차',
    badge: '어휘 & 표현',
    summary:
      '출신을 나타내는 SER DE 구문과 25개 주요국의 남성형/여성형 국적 형용사 규칙, 그리고 성(family name) 앞에 붙는 señor/señora/señorita와 이름 앞에 붙는 Don/Doña 호칭법을 배웁니다.',
    keyTakeaways: [
      '출신 표현: SER DE + 지명 (ej: Juan y yo somos de México, Mis abuelos son de Estados Unidos).',
      '국적 형용사는 명사의 성에 맞춰 남성형과 여성형으로 일치시켜야 합니다 (자음으로 끝나는 남성 국적형용사는 뒤에 -a를 붙이며 자음 위의 띨데가 탈락: español/española, francés/francesa, alemán/alemana, inglés/inglesa, japonés/japonesa).',
      '-í로 끝나는 국적은 남녀 동일: iraquí, iraní, marroquí.',
      '-ense, -ita로 끝나는 국적은 남녀 동일: estadounidense, vietnamita, belga.',
      '호칭명사 1: 성(family name) 앞 -> señor (Sr.), señora (Sra.), señorita (Srta.).',
      '호칭명사 2: 중년 남녀의 이름(First name) 앞 -> Don, Doña (Don Quijote, Doña Carmen).',
    ],
    sections: [
      {
        id: 'sec-6-1',
        title: '6.1 출신 표현 (SER DE + 지명)',
        subtitle: '¿De dónde eres? (너 어디 출신이니?) 묻고 답하기',
        rules: [
          {
            title: 'SER DE 관용 구문 예문 & 발음',
            description: 'SER 동사에 전치사 de를 결합하여 출신지나 원산지를 표현합니다.',
            examples: [
              {
                es: '¿De dónde eres? - Soy de Corea.',
                pronunciation: '데 돈데 에레스? - 소이 데 꼬레아.',
                ko: '너는 어디 출신이니? - 나는 한국 출신이야.',
              },
              {
                es: 'Juan y yo somos de México.',
                pronunciation: '후안 이 요 소모스 데 메히꼬.',
                ko: '후안과 나는 멕시코 출신입니다. [메히꼬 주의!]',
              },
              {
                es: 'Mis abuelos son de Estados Unidos.',
                pronunciation: '미스 아부엘로스 손 데 에스따도스 우니도스.',
                ko: '내 조부모님은 미국 출신이십니다.',
              },
              {
                es: 'Este vino es de España.',
                pronunciation: '에스떼 비노 에스 데 에스빠냐.',
                ko: '이 와인은 스페인산입니다.',
              },
            ],
          },
        ],
      },
      {
        id: 'sec-6-2',
        title: '6.2 25개 주요국 국명과 국적 형용사',
        subtitle: '시험에 나오는 모든 국적 형용사 남성형 / 여성형 표 및 한글 발음',
        rules: [
          {
            title: '국가별 국적 형용사 대조표',
            description: '자음으로 끝나는 남성형 국적은 여성형에서 -a를 붙이고 띨데가 삭제되는 점에 유의하세요.',
            table: {
              headers: ['국가 이름 (País)', '국가 발음', '남성형 [발음]', '여성형 [발음]'],
              rows: [
                ['Corea (한국)', '[꼬레아]', 'coreano [꼬레아노]', 'coreana [꼬레아나]'],
                ['España (스페인)', '[에스빠냐]', 'español [에스빠뇰]', 'española [에스빠뇰라]'],
                ['Francia (프랑스)', '[프랑시아]', 'francés [프랑세스]', 'francesa [프랑세사]'],
                ['Alemania (독일)', '[알레마니아]', 'alemán [알레만]', 'alemana [알레마나]'],
                ['Inglaterra (영국)', '[잉글라떼르라]', 'inglés [잉글레스]', 'inglesa [잉글레사]'],
                ['Japón (일본)', '[하뽄]', 'japonés [하포네스]', 'japonesa [하포네사]'],
                ['China (중국)', '[치나]', 'chino [치노]', 'china [치나]'],
                ['Estados Unidos (미국)', '[에스따도스 우니도스]', 'estadounidense [에스따도우니덴세]', 'estadounidense (남녀 동일)'],
                ['Bélgica (벨기에)', '[벨히까]', 'belga [벨가]', 'belga (남녀 동일)'],
                ['Vietnam (베트남)', '[비엣남]', 'vietnamita [비엣나미따]', 'vietnamita (남녀 동일)'],
                ['Irak / Irán (이라크/이란)', '[이라크 / 이란]', 'iraquí / iraní [이라끼 / 이라니]', 'iraquí / iraní (남녀 동일)'],
                ['Marruecos (모로코)', '[마르루에꼬스]', 'marroquí [마르로끼]', 'marroquí (남녀 동일)'],
                ['México (멕시코)', '[메히꼬]', 'mexicano [메히까노]', 'mexicana [메히까나]'],
                ['Perú (페루)', '[뻬루]', 'peruano [뻬루아노]', 'peruana [뻬루아나]'],
                ['Chile (칠레)', '[칠레]', 'chileno [칠레노]', 'chilena [칠레나]'],
                ['Argentina (아르헨티나)', '[아르헨띠나]', 'argentino [아르헨띠노]', 'argentina [아르헨띠나]'],
                ['Brasil (브라질)', '[브라실]', 'brasileño [브라실레뇨]', 'brasileña [브라실레냐]'],
                ['Colombia (콜롬비아)', '[꼴롬비아]', 'colombiano [꼴롬비아노]', 'colombiana [꼴롬비아나]'],
                ['Italia (이탈리아)', '[이딸리아]', 'italiano [이딸리아노]', 'italiana [이딸리아나]'],
                ['Rusia (러시아)', '[루시아]', 'ruso [루소]', 'rusa [루사]'],
                ['Polonia (폴란드)', '[뽈로니아]', 'polaco [뽈라꼬]', 'polaca [뽈라까]'],
                ['Portugal (포르투갈)', '[뽀르뚜갈]', 'portugués [뽀르뚜게스]', 'portuguesa [뽀르뚜게사]'],
                ['Tailandia (태국)', '[따이란디아]', 'tailandés [따이란데스]', 'tailandesa [따이란데사]'],
                ['Turquía (터키)', '[뚜르끼아]', 'turco [뚜르꼬]', 'turca [뚜르까]'],
                ['Venezuela (베네수엘라)', '[베네수엘라]', 'venezolano [베네수엘라노]', 'venezolana [베네수엘라나]'],
              ],
            },
            examples: [
              {
                es: 'Él es francés. / Ella es francesa.',
                pronunciation: '엘 에스 프랑세스. / 에야 에스 프랑세사.',
                ko: '그는 프랑스인이다. / 그녀는 프랑스인이다. (자음 복수화 시 띨데 탈락)',
              },
              {
                es: 'Ellos son chinos. / Ellas son chilenas.',
                pronunciation: '에요스 손 치노스. / 에야스 손 칠레나스.',
                ko: '그들은 중국인들이다. / 그녀들은 칠레인들이다.',
              },
              {
                es: 'Nosotras somos coreanas.',
                pronunciation: '노소뜨라스 소모스 꼬레아나스.',
                ko: '우리 여성들은 한국인이다.',
              },
              {
                es: 'La profesora es mexicana.',
                pronunciation: '라 쁘로페소라 에스 메히까나.',
                ko: '그 여성 교수님은 멕시코인입니다.',
              },
              {
                es: 'El periodista es japonés.',
                pronunciation: '엘 뻬리오디스따 에스 하포네스.',
                ko: '그 기자는 일본인입니다.',
              },
              {
                es: 'Los turistas son ingleses.',
                pronunciation: '로스 뚜리스따스 손 잉글레세스.',
                ko: '그 관광객들은 영국인들입니다. (turista 양성명사)',
              },
            ],
          },
        ],
      },
      {
        id: 'sec-6-3',
        title: '6.3 스페인어 호칭 명사 (Tratamientos)',
        subtitle: '성(Family name) 앞 vs 중년 이름(Given name) 앞 호칭 구분',
        rules: [
          {
            title: '호칭 구분 공식 & 발음',
            description: '한국의 "~씨", "~선생님"에 해당하는 호칭 체계입니다.',
            examples: [
              {
                es: 'el señor Gonzáles (Sr.)',
                pronunciation: '엘 세뇨르 곤살레스',
                ko: '곤살레스 씨 (특정인의 성 앞에 붙는 남성 호칭)',
              },
              {
                es: 'la señora Díaz (Sra.)',
                pronunciation: '라 세뇨라 디아스',
                ko: '디아스 여사 (특정인의 성 앞에 붙는 여성 호칭)',
              },
              {
                es: 'la señorita López (Srta.)',
                pronunciation: '라 세뇨리따 로뻬스',
                ko: '로뻬스 양 (특정인의 성 앞에 붙는 미혼 여성 호칭)',
              },
              {
                es: 'Don Quijote',
                pronunciation: '돈 끼호떼',
                ko: '돈키호테 님 (중년 남성의 이름 First name 앞에 붙는 존칭)',
              },
              {
                es: 'Doña Carmen',
                pronunciation: '도냐 까르멘',
                ko: '까르멘 님 (중년 여성의 이름 First name 앞에 붙는 존칭)',
              },
            ],
            tip: 'Don Gonzáles라고 쓰면 오답입니다! 성 앞에는 señor이며, 이름 Carmen 앞에는 Doña를 씁니다.',
          },
        ],
      },
    ],
  },
  {
    id: 7,
    title: '제7장: 지시사 & 소유사 & 의문사 & 동요 어휘',
    subtitle: 'este/ese/aquel, 중성 esto/eso/aquello, 소유형용사 전치/후치, Tiburón bebé',
    lectureWeek: '6주차',
    badge: '표현 & 어휘',
    summary:
      '지시형용사(명사 수식)와 지시대명사(주어), 지시사의 중성형(esto, eso, aquello)의 특징, 소유형용사 전치형(mi, tu, su...)과 후치형 및 소유대명사(el mío...), 동요 "Tiburón bebé"의 핵심 단어를 정리합니다.',
    keyTakeaways: [
      '지시사 거리: 이(este/esta), 그(ese/esa), 저(aquel/aquella).',
      '지시사의 중성형(esto, eso, aquello)은 "사물의 정체를 모를 때" 쓰이며 지시대명사로만 존재하고 지시형용사로는 쓸 수 없습니다 (명사 앞 수식 불가).',
      '소유형용사 전치형: mi(s), tu(s), su(s), nuestro/a(s), vuestro/a(s), su(s) - 명사 앞에 위치.',
      '소유대명사: el mío, el tuyo, el suyo, el nuestro, el vuestro, el suyo - "~의 것".',
      '동요 어휘: tiburón(상어), bebé(갓난아이), cazar(사냥하다), escapar(도망치다), salvo(무사한), ya(이미), acabar(끝나다).',
    ],
    sections: [
      {
        id: 'sec-7-1',
        title: '7.1 스페인어 지시사 (Demostrativos)',
        subtitle: '지시형용사, 지시대명사, 중성 지시대명사 완벽 정리',
        rules: [
          {
            title: '지시사 전체 표 & 발음',
            description: '화자와 청자 사이의 거리에 따라 3단계로 구분됩니다.',
            table: {
              headers: ['거리 구분', '남성 단수 [발음]', '여성 단수 [발음]', '남성 복수 [발음]', '여성 복수 [발음]', '중성형 [발음]'],
              rows: [
                ['이, 이것 (화자 가까이)', 'este [에스떼]', 'esta [에스따]', 'estos [에스또스]', 'estas [에스따스]', 'esto [에스또]'],
                ['그, 그것 (청자 가까이)', 'ese [에세]', 'esa [에사]', 'esos [에소스]', 'esas [에사스]', 'eso [에소]'],
                ['저, 저것 (둘 다 먼 곳)', 'aquel [아껠]', 'aquella [아께야]', 'aquellos [아께요스]', 'aquellas [아께야스]', 'aquello [아께요]'],
              ],
            },
            examples: [
              {
                es: 'Este es mi amigo.',
                pronunciation: '에스떼 에스 미 아미고.',
                ko: '이 사람은 내 친구입니다. (남성 단수 지시대명사)',
              },
              {
                es: '¿Qué es esto?',
                pronunciation: '께 에스 에스또?',
                ko: '이것은 무엇입니까? (정체를 모르는 사물: 중성 지시대명사 esto)',
              },
              {
                es: 'estos libros',
                pronunciation: '에스또스 리브로스',
                ko: '이 책들 (남성 복수 명사 앞 지시형용사 estos)',
              },
            ],
            tip: 'esto libro는 문법적으로 불가능합니다! esto, eso, aquello는 중성 지시대명사로 뒤에 명사가 올 수 없습니다. 명사를 수식할 때는 este libro처럼 남성 단수 지시형용사를 써야 합니다.',
          },
        ],
      },
      {
        id: 'sec-7-2',
        title: '7.2 소유형용사 및 소유대명사 (Posesivos)',
        subtitle: '전치형 소유형용사, 후치형 소유형용사, 소유대명사',
        rules: [
          {
            title: '소유사 체계 예문 & 발음',
            description: '소유자의 인칭과 소유물의 성·수에 따라 일치합니다.',
            examples: [
              {
                es: 'Este es mi amigo.',
                pronunciation: '에스떼 에스 미 아미고.',
                ko: '이 사람은 내 친구입니다. (명사 앞 전치형: mi)',
              },
              {
                es: 'Un amigo mío.',
                pronunciation: '운 아미고 미오.',
                ko: '내 친구 중 한 명. (명사 뒤 후치형: mío)',
              },
              {
                es: '¿Este libro es tuyo? - Sí, es el mío.',
                pronunciation: '에스떼 리브로 에스 뚜요? - 시, 에스 엘 미오.',
                ko: '이 책 네 것이니? - 응, 내 거야. (소유대명사: el mío)',
              },
            ],
          },
        ],
      },
      {
        id: 'sec-7-3',
        title: '7.3 동요 "Tiburón bebé" & 필수 어휘',
        subtitle: '노래로 익히는 가족 명칭과 핵심 동사/형용사 발음',
        rules: [
          {
            title: 'Tiburón bebé 핵심 어휘 & 가사 오디오',
            description: '강의 슬라이드에 수록된 필수 어휘입니다. 스피커를 눌러 원어민 발음을 들어보세요.',
            examples: [
              {
                es: 'Tiburón bebé, du ru du ru',
                pronunciation: '띠부론 베베, 두 루 두 루',
                ko: '아기 상어, 뚜 루 뚜 루 (tiburón: 상어, bebé: 갓난아이)',
              },
              {
                es: 'Tiburón mamá / Tiburón papá',
                pronunciation: '띠부론 마마 / 띠부론 파파',
                ko: '엄마 상어 / 아빠 상어',
              },
              {
                es: 'Tiburón abuela / Tiburón abuelo',
                pronunciation: '띠부론 아부엘라 / 띠부론 아부엘로',
                ko: '할머니 상어 / 할아버지 상어',
              },
              {
                es: '¡A cazar!',
                pronunciation: '아 까사르!',
                ko: '사냥하러 가자! (cazar: 사냥하다, 잡다)',
              },
              {
                es: '¡A escapar!',
                pronunciation: '아 에스까빠르!',
                ko: '도망치자! (escapar: 도망치다)',
              },
              {
                es: '¡Salvos ya!',
                pronunciation: '살보스 야!',
                ko: '이제 다 살았다! (salvo: 무사한/안전한, ya: 이미/이제)',
              },
              {
                es: '¡Se acabó!',
                pronunciation: '세 아까보!',
                ko: '끝났다! (acabar: 끝나다)',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 8,
    title: '제8장: 무인칭동사 Hay vs ESTAR, 의문사 Cuánto & 숫자(0~100)',
    subtitle: '존재 유무(불특정) vs 위치(특정), 위치 표현 전치사구, 숫자 철자 0부터 100',
    lectureWeek: '7주차',
    badge: '시험 1순위',
    summary:
      '무인칭동사 Hay(불특정 대상의 존재 유무, 수량)와 ESTAR(특정 대상의 위치)의 완벽 구분 공식, 위치 전치사구(delante de, detrás de 등), 의문사 Cuánto의 성수변화, 그리고 0~100까지의 스페인어 숫자 철자를 총정리합니다.',
    keyTakeaways: [
      'Hay 공식: "불특정 대상"의 존재 여부 -> 뒤에 부정관사(un/una), 수량형용사(muchos/pocos), 숫자, 또는 무관사 명사가 옴 (정관사나 소유사 절대 불가!).',
      'ESTAR 공식: "특정 대상"의 위치 -> 뒤나 앞에 정관사(el/la/los/las), 소유사(mi/tu/su), 고유명사가 결합.',
      '위치 전치사구: delante de(~앞에), detrás de(~뒤에), al lado de(~옆에), enfrente de(~맞은편에), sobre(~위에), al fondo de(~끝/안쪽에), cerca de(~근처에).',
      '숫자 16~19, 21~29는 한 단어로 합성: dieciséis, veintiuno, veintidós, veintitrés, veinticuatro, veinticinco...',
      '숫자 30부터는 "십단위 + y + 일단위"로 분리: treinta y uno, cuarenta y dos...',
    ],
    sections: [
      {
        id: 'sec-8-1',
        title: '8.1 무인칭동사 Hay vs ESTAR 판별 공식',
        subtitle: '시험 기출 16문제 100% 정답 비법 & 한글 발음',
        rules: [
          {
            title: 'Hay vs ESTAR 기출 예문 오디오',
            description: '불특정 대상(Hay)과 특정 대상(ESTAR)의 차이를 원어민 음성으로 직접 들어보세요.',
            examples: [
              {
                es: 'Delante del hospital hay una ambulancia.',
                pronunciation: '델란떼 델 오스피딸 아이 우나 암불란시아.',
                ko: '병원 앞에 앰뷸런스 한 대가 있습니다. (불특정 대상 una: hay)',
              },
              {
                es: '¿Dónde están las llaves?',
                pronunciation: '돈데 에스딴 라스 야베스?',
                ko: '열쇠들이 어디 있습니까? (정관사 특정 대상 las: están)',
              },
              {
                es: 'Hay un árbol delante de mi casa.',
                pronunciation: '아이 운 아르볼 델란떼 데 미 까사.',
                ko: '내 집 앞에 나무 한 그루가 있습니다. (불특정: hay)',
              },
              {
                es: 'El cine está a la derecha.',
                pronunciation: '엘 시네 에스따 아 라 데레차.',
                ko: '그 영화관은 오른쪽에 있습니다. (정관사 특정 대상 el: está)',
              },
              {
                es: 'En la plaza hay una iglesia.',
                pronunciation: '엔 라 쁠라사 아이 우나 이글레시아.',
                ko: '광장에 교회 하나가 있습니다. (불특정: hay)',
              },
              {
                es: 'Al lado del hotel está el banco.',
                pronunciation: '알 라도 델 오뗄 에스따 엘 방꼬.',
                ko: '호텔 옆에 그 은행이 있습니다. (정관사: está)',
              },
              {
                es: 'Las botellas están sobre la mesa.',
                pronunciation: '라스 보떼야스 에스딴 소브레 라 메사.',
                ko: '그 병들은 테이블 위에 있습니다. (정관사: están)',
              },
              {
                es: 'Hay mucha gente en la calle.',
                pronunciation: '아이 무차 헨떼 엔 라 까예.',
                ko: '거리에 많은 사람이 있습니다. (수량 mucha: hay)',
              },
              {
                es: '¿Hay una farmacia cerca de aquí?',
                pronunciation: '아이 우나 파르마시아 세르까 데 아끼?',
                ko: '이 근처에 약국이 하나 있나요? (불특정 약국: hay)',
              },
              {
                es: '¿Está la farmacia Seúl cerca de aquí?',
                pronunciation: '에스따 라 파르마시아 세울 세르까 데 아끼?',
                ko: '서울 약국이 이 근처에 있나요? (특정 상호 약국: está)',
              },
              {
                es: 'El cuarto de baño está al fondo del pasillo.',
                pronunciation: '엘 꾸아르또 데 바뇨 에스따 알 폰도 델 빠시요.',
                ko: '화장실은 복도 끝에 있습니다. (특정 대상: está)',
              },
              {
                es: '¿Dónde están mis libros?',
                pronunciation: '돈데 에스딴 미스 리브로스?',
                ko: '내 책들이 어디 있나요? (소유사 mis: están)',
              },
              {
                es: '¿Cuántos estudiantes hay en la clase?',
                pronunciation: '꽌또스 에스뚜디안떼스 아이 엔 라 끌라세?',
                ko: '교실에 학생이 몇 명 있습니까? (수량 존재 여부: hay)',
              },
              {
                es: 'Hay unos cinco estudiantes en la clase.',
                pronunciation: '아이 우노스 싱꼬 에스뚜디안떼스 엔 라 끌라세.',
                ko: '교실에 약 다섯 명의 학생이 있습니다. (숫자 수량: hay)',
              },
              {
                es: 'Hay un supermercado enfrente de mi casa.',
                pronunciation: '아이 운 수뻬르메르까도 엔프렌떼 데 미 까사.',
                ko: '내 집 맞은편에 슈퍼마켓 하나가 있습니다. (불특정: hay)',
              },
              {
                es: '¿Dónde está el supermercado Cheil?',
                pronunciation: '돈데 에스따 엘 수뻬르메르까도 제일?',
                ko: '제일 슈퍼마켓은 어디 있나요? (특정 상호: está)',
              },
              {
                es: 'Nuestra oficina está detrás de aquel edificio.',
                pronunciation: '누에스뜨라 오피시나 에스따 데뜨라스 데 아껠 에디피시오.',
                ko: '우리 사무실은 저 건물 뒤에 있습니다. (소유사 특정: está)',
              },
            ],
            tip: '초간단 공식: 빈칸 뒤나 주어에 el, la, los, las, mis, 고유명사가 보이면 무조건 ESTAR! un, una, muchos, 숫자, 의문사 Cuántos가 보이면 무조건 HAY입니다!',
          },
        ],
      },
      {
        id: 'sec-8-2',
        title: '8.2 위치와 관련된 전치사구 표현',
        subtitle: '방향과 위치를 나타내는 필수 관용구 & 한글 발음',
        rules: [
          {
            title: '위치 표현 목록',
            description: '장소와 사물의 위치를 설명할 때 필수적인 표현들입니다.',
            table: {
              headers: ['스페인어 표현', '한글 발음', '한국어 의미', '예문'],
              rows: [
                ['delante de', '[델란떼 데]', '~의 앞에', 'Delante del hospital hay una ambulancia.'],
                ['detrás de', '[데뜨라스 데]', '~의 뒤에', 'Nuestra oficina está detrás de aquel edificio.'],
                ['al lado de', '[알 라도 데]', '~의 옆에', 'Al lado del hotel está el banco.'],
                ['enfrente de', '[엔프렌떼 데]', '~의 맞은편에', 'Hay un supermercado enfrente de mi casa.'],
                ['sobre', '[소브레]', '~의 위에', 'Las botellas están sobre la mesa.'],
                ['a la derecha', '[아 라 데레차]', '오른쪽에', 'El cine está a la derecha.'],
                ['a la izquierda', '[아 라 이스끼에르다]', '왼쪽에', 'La farmacia está a la izquierda.'],
                ['al fondo del pasillo', '[알 폰도 델 빠시요]', '복도 끝(안쪽)에', 'El cuarto de baño está al fondo del pasillo.'],
                ['cerca de / lejos de', '[세르까 데 / 레호스 데]', '~근처에 / ~에서 먼', '¿Hay una farmacia cerca de aquí?'],
              ],
            },
          },
        ],
      },
      {
        id: 'sec-8-3',
        title: '8.3 의문사 Cuánto & 스페인어 숫자 (0~100)',
        subtitle: '수량 묻기와 0부터 100까지의 철자 및 한글 발음 암기법',
        rules: [
          {
            title: '스페인어 숫자 0부터 100까지 철자 & 한글 발음표',
            description: '철자가 불규칙한 11~15, 16~19, 20대 합성어에 특별히 유의하세요.',
            table: {
              headers: ['숫자', '스페인어 철자', '한글 발음', '규칙 포인트'],
              rows: [
                ['0 ~ 10', '0 cero, 1 uno/a, 2 dos, 3 tres, 4 cuatro, 5 cinco, 6 seis, 7 siete, 8 ocho, 9 nueve, 10 diez', '[세로, 우노, 도스, 뜨레스, 꾸아뜨로, 싱꼬, 세이스, 시에떼, 오초, 누에베, 디에스]', '1은 남성명사 앞 un, 여성 앞 una'],
                ['11 ~ 15', '11 once, 12 doce, 13 trece, 14 catorce, 15 quince', '[온세, 도세, 뜨레세, 까또르세, 낀세]', '고유 불규칙 어형'],
                ['16 ~ 19', '16 dieciséis, 17 diecisiete, 18 dieciocho, 19 diecinueve', '[디에시세이스, 디에시시에떼, 디에시오초, 디에시누에베]', 'dieci- 로 시작하는 한 단어 (16 dieciséis 띨데!)'],
                ['20 ~ 29', '20 veinte, 21 veintiuno, 22 veintidós, 23 veintitrés, 24 veinticuatro, 25 veinticinco, 26 veintiséis, 27 veintisiete, 28 veintiocho, 29 veintinueve', '[베인떼, 베인띠우노, 베인띠도스, 베인띠뜨레스, 베인띠꾸아뜨로, 베인띠싱꼬, 베인띠세이스, 베인띠시에떼, 베인띠오초, 베인띠누에베]', 'veinti- 로 시작하는 한 단어 (22, 23, 26 띨데!)'],
                ['30 ~ 39', '30 treinta, 31 treinta y uno, 32 treinta y dos ...', '[뜨레인따, 뜨레인따 이 우노, 뜨레인따 이 도스...]', '30대부터는 "십단위 + y + 일단위"로 띄어씀'],
                ['40 ~ 100', '40 cuarenta, 50 cincuenta, 60 sesenta, 70 setenta, 80 ochenta, 90 noventa, 100 cien', '[꾸아렌따, 싱꾸엔따, 세센따, 세뗀따, 오첸따, 노벤따, 시엔]', '60(sesenta)와 70(setenta) 철자 혼동 주의!'],
              ],
            },
            examples: [
              {
                es: 'dieciséis / veintidós / veinticinco',
                pronunciation: '디에시세이스 / 베인띠도스 / 베인띠싱꼬',
                ko: '16 (띨데 필수) / 22 (띨데 필수) / 25',
              },
              {
                es: 'treinta y uno',
                pronunciation: '뜨레인따 이 우노',
                ko: '31 (30대부터는 띄어쓰기)',
              },
              {
                es: 'sesenta / setenta / cien',
                pronunciation: '세센따 / 세뗀따 / 시엔',
                ko: '60 / 70 / 100',
              },
            ],
          },
        ],
      },
    ],
  },
];
