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
            description: '한국어/영어와 다른 스페인어 고유의 문법 규칙입니다.',
            examples: [
              {
                es: 'el profesor (남선생님) / la periodista (여자기자)',
                ko: '명사에 남성/여성의 성별 구분이 존재하여 관사와 형용사가 일치합니다.',
              },
              {
                es: 'Yo voy a la escuela. (나는 학교에 간다)',
                ko: '시제와 인칭(1인칭~3인칭 단/복수)에 따라 동사의 형태가 정밀하게 변화합니다.',
              },
              {
                es: '¿Cómo estás? / ¡Feliz cumpleaños!',
                ko: '문장 앞뒤로 거꾸로 된 물음표(¿)와 느낌표(¡)가 쌍으로 붙습니다.',
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
                ['멕시코 (México)', '북아메리카 유일의 스페인어권 국가, 인구 최다, 메스티소(백인+인디오 혼혈)', '마야/아스테카 문명, 죽은 자들의 날 (Día de Muertos)'],
                ['페루 (Perú)', '15세기 잉카제국 건설, 남아메리카 위치', '쿠스코(Cuzco), 마추픽추(Machu Picchu), 대표음식 세비체(Ceviche), 꾸이(Cuy), 작가 마리오 바르가스 요사'],
                ['아르헨티나 (Argentina)', '남미 대륙 최남단, "중남미 속의 유럽" (다수의 백인+메스티소)', '유목 목동 가우초(El Gaucho), 탱고(아스토르 피아졸라), 체 게바라, 메시, 대표음식 아사도(Asado)'],
                ['도미니카 공화국', '이스빠뇰라 섬(Isla Hispañola) 위치, 물라토(백인+흑인 혼혈) 인구 50% 이상', '라틴댄스 메렝게(Merengue), 바차타(Bachata), 콜마도(colmado), 데레초(직진택시), 반데라(La bandera)'],
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
                es: 'España: Dos besos (두 번 인사)',
                ko: '스페인은 양 볼에 각각 한 번씩 총 두 번 인사합니다.',
              },
              {
                es: 'América Latina: Un beso (한 번 인사)',
                ko: '중남미에서는 보통 한쪽 볼에 한 번만 합니다.',
              },
            ],
          },
          {
            title: '스페인의 하루 식사 주기 5단계',
            description: '스페인은 하루에 5번 식사하는 독특한 식문화를 가지고 있습니다.',
            table: {
              headers: ['식사 명칭', '시간대 및 특징', '주요 음식'],
              rows: [
                ['El desayuno (아침)', '기상 직후 가볍게', '비스킷 + 주스 혹은 커피'],
                ['El almuerzo (오전 간식)', '오전 11시경 인근 카페', '간단한 샌드위치나 간식 타임'],
                ['La comida (점심)', '오후 2시부터 시작 (하루 중 가장 중요)', 'Menú del día (메뉴 델 디아: 코스 요리)'],
                ['La merienda (오후 간식)', '오후 5~6시경', '간단한 음료 + 타파스 (Tapas)'],
                ['La cena (저녁)', '보통 밤 8시~9시 이후 늦게 시작', '가벼운 요리나 타파스'],
              ],
            },
          },
          {
            title: '스페인 대표 음식 & Bar(바르) 필수 어휘',
            description: '바르는 술집과 카페가 합쳐진 친목 사교의 중심지입니다.',
            table: {
              headers: ['구분', '스페인어 단어', '한국어 의미'],
              rows: [
                ['대표 요리', 'Gambas al ajillo / La paella / Tortilla de patatas', '감바스 알 아히요 / 빠에야 / 스페인식 감자 오믈렛'],
                ['대표 요리', 'El gazpacho / El jamón / El cochinillo asado', '가스파초(차가운 토마토 스프) / 하몽(돼지 뒷다리 생햄) / 새끼돼지 구이'],
                ['디저트/음료', 'La Sangría / Arroz con leche / Los Churros', '상그리아 / 쌀 푸딩 / 추로스'],
                ['맥주/와인', 'cerveza / caña de cerveza / vino / tinto de verano', '맥주 / 생맥주 / 와인(blanco 화이트, tinto 레드) / 띤또 데 베라노'],
                ['커피', 'café con leche / café sólo / café americano / café con hielo', '카페라떼 / 에스프레소 / 아메리카노 / 냉커피(얼음 커피)'],
                ['주스/물', 'zumo (수모, 스페인) / jugo (후고, 중남미) / agua mineral / agua con gas', '오렌지(naranja), 사과(manzana), 파인애플(piña), 딸기(fresa) 주스 / 미네랄 워터 / 탄산수'],
              ],
            },
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
        title: '2.1 모음(Vocales)과 이중/삼중모음',
        subtitle: '강모음과 약모음의 결합 체계',
        rules: [
          {
            title: '5대 모음과 강약 구분',
            description: '스페인어 모음은 5개이며 발음이 명확합니다.',
            table: {
              headers: ['구분', '모음', '발음 및 대표 단어 예시'],
              rows: [
                ['강모음 (Vocales fuertes)', 'a, e, o', 'A a [아] agua, amarillo / E e [에] España, entrada / O o [오] oso, orden'],
                ['약모음 (Vocales débiles)', 'i, u', 'I i [이] isla, información / U u [우] Uruguay, uno'],
              ],
            },
          },
          {
            title: '이중모음과 삼중모음',
            description: '모음이 결합하여 하나의 음절을 구성하는 원리입니다.',
            examples: [
              { es: '강모음 + 약모음', ko: 'aire [아이레] 공기, Europa [에우로빠] 유럽' },
              { es: '약모음 + 강모음', ko: 'piano [삐아노] 피아노, bueno [부에노] 좋은' },
              { es: '약모음 + 약모음', ko: 'viudo [비우도] 홀아비, huida [우이다] 도망' },
              { es: '삼중모음 (약+강+약)', ko: 'Uruguay [우루구아이] 우루과이, buey [부에이] 소 (하나의 모음으로 간주)' },
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
            title: '음절 분해 4대 원칙',
            description: '강의 교재 기준 정확한 음절 분해 공식입니다.',
            table: {
              headers: ['원칙 번호', '규칙 내용', '실제 기출 예시'],
              rows: [
                ['규칙 1', '모음과 모음 사이에 자음 1개가 있으면 뒤의 모음에 붙음', 'verano -> ve-ra-no (여름), aire -> ai-re (공기)'],
                ['규칙 2', '모음 사이에 자음 2개가 있으면 앞뒤 음절로 분리됨. (단, 이중자음 및 ch, ll, rr은 절대 분리 불가)', 'verde -> ver-de (녹색), puerto -> puer-to (항구)\ncrisis -> cri-sis (위기), gloria -> glo-ria (영광)'],
                ['규칙 3', '연속된 강모음(a, e, o)은 이중모음이 아니므로 무조건 분리', 'idea -> i-de-a (생각), poema -> po-e-ma (시)'],
                ['규칙 4', '이중모음에서 약모음(i, u)에 강세표시(띨데)가 있으면 강모음으로 간주되어 분리', 'río -> rí-o (강), país -> pa-ís (나라)'],
              ],
            },
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
            title: '강세 판별 4법칙',
            description: '단어 끝 철자를 보고 1초 만에 강세 위치를 찾는 공식입니다.',
            table: {
              headers: ['법칙', '단어 끝 철자 조건', '강세 위치', '대표 예시'],
              rows: [
                ['법칙 1', '모음(a,e,i,o,u) 또는 자음 n, s로 끝남', '끝에서 2번째 음절 (Penúltima sílaba)', 'cama -> ca-ma [까마], Carmen -> Car-men [까르멘]'],
                ['법칙 2', 'n, s를 제외한 모든 자음(l, r, d, z 등)으로 끝남', '마지막 음절 (Última sílaba)', 'hospital -> hos-pi-tal [오스피딸], comer -> co-mer [꼬메르]'],
                ['법칙 3', '이중모음이 포함된 음절의 강세', '강+약/약+강은 강모음에, 약+약은 뒤의 약모음에 위치', 'diario -> dia-rio (a에 강세), jueves -> jue-ves (e에 강세)\nruido -> rui-do (뒤 i에 강세), triunfo -> triun-fo (뒤 u에 강세)'],
                ['법칙 4', '띨데(tilde, 강세 부호)가 있는 단어', '규칙과 상관없이 띨데가 표시된 음절에 강세', 'nación -> na-ción [나씨온], café -> ca-fé [까페], adiós -> a-diós [아디오스]'],
              ],
            },
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
        subtitle: '영어와 비교하는 스페인어 인칭 체계',
        rules: [
          {
            title: '인칭대명사 표',
            description: '스페인어는 우리들/너희들/그들 모두 남성형과 여성형이 나뉩니다.',
            table: {
              headers: ['인칭', '단수 (Singular)', '복수 (Plural)'],
              rows: [
                ['1인칭', 'Yo (나 / I)', 'Nosotros (우리들-남성/혼성) / Nosotras (우리들-여성)'],
                ['2인칭', 'Tú (너 / You)', 'Vosotros (너희들-남성/혼성) / Vosotras (너희들-여성)'],
                ['3인칭', 'Él (그 / He)\nElla (그녀 / She)\nUsted (Ud. 당신-존칭)', 'Ellos (그들 / They-남성/혼성)\nEllas (그녀들 / They-여성)\nUstedes (Uds. 당신들-존칭)'],
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
              headers: ['인칭', '단수형', '복수형'],
              rows: [
                ['1인칭', '(Yo) soy', '(Nosotros/as) somos'],
                ['2인칭', '(Tú) eres', '(Vosotros/as) sois'],
                ['3인칭', '(Él, Ella, Ud.) es', '(Ellos, Ellas, Uds.) son'],
              ],
            },
            examples: [
              { es: 'Yo soy Álvaro. Soy médico.', ko: '저는 알바로입니다. 의사입니다.' },
              { es: 'Juan y yo somos de México.', ko: '후안과 나(우리들)는 멕시코 출신입니다. (1인칭 복수 somos)' },
              { es: '¿De dónde son ustedes?', ko: '당신들은 어디 출신입니까? (3인칭 복수 son)' },
              { es: 'Mis hermanos y tú sois optimistas.', ko: '내 형제들과 너(너희들)는 낙천적이다. (2인칭 복수 sois)' },
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
              headers: ['인칭', '재귀대명사 + 동사 단수형', '재귀대명사 + 동사 복수형'],
              rows: [
                ['1인칭', 'me llamo (내 이름은 ~이다)', 'nos llamamos (우리 이름은 ~이다)'],
                ['2인칭', 'te llamas (네 이름은 ~이다)', 'os llamáis (너희들 이름은 ~이다)'],
                ['3인칭', 'se llama (그/그녀/당신 이름은 ~이다)', 'se llaman (그들/당신들 이름은 ~이다)'],
              ],
            },
            examples: [
              { es: '¿Cómo te llamas? - Me llamo Minsoo.', ko: '너 이름이 뭐니? - 내 이름은 민수야.' },
              { es: '¿Cómo se llama Usted?', ko: '당신의 성함은 어떻게 되십니까? (존칭 3인칭)' },
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
              headers: ['성별', '대표 어미', '단어 예시'],
              rows: [
                ['남성명사 (Masculino)', '-o\n-자음\n-aje\n일부 -e', 'edificio (건물), libro (책), vestido (원피스)\nhotel (호텔), ratón (마우스)\ngaraje (차고), viaje (여행)\ncine (영화), coche (자동차)'],
                ['여성명사 (Femenino)', '-a\n-ción / -sión\n-d\n일부 -z\n일부 -e', 'casa (집), mesa (테이블), silla (의자)\ncanción (노래), pasión (열정)\nverdad (사실, 진실), ciudad (도시), pared (벽)\npaz (평화), cruz (십자가)\nleche (우유), noche (밤), clase (수업, 교실)'],
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
              headers: ['단어', '형태 특징', '실제 문법적 성', '관사 결합 예시'],
              rows: [
                ['día (날, 하루)', '-a로 끝나지만 남성', '남성 (Masc.)', 'el día / un día (좋은 하루: un buen día)'],
                ['mapa (지도)', '-a로 끝나지만 남성', '남성 (Masc.)', 'el mapa / un mapa'],
                ['problema (문제)', '-a로 끝나지만 남성 (그리스 기원)', '남성 (Masc.)', 'el problema / un problema'],
                ['tema (주제)', '-a로 끝나지만 남성 (그리스 기원)', '남성 (Masc.)', 'el tema / un tema'],
                ['programa (프로그램)', '-a로 끝나지만 남성 (그리스 기원)', '남성 (Masc.)', 'el programa / un programa'],
                ['sistema (시스템)', '-a로 끝나지만 남성 (그리스 기원)', '남성 (Masc.)', 'el sistema / un sistema'],
                ['clima (기후)', '-a로 끝나지만 남성', '남성 (Masc.)', 'el clima / un clima'],
                ['mano (손)', '-o로 끝나지만 여성', '여성 (Fem.)', 'la mano / una mano'],
                ['foto (사진)', '-o로 끝나지만 여성 (fotografía의 약어)', '여성 (Fem.)', 'la foto / una foto'],
                ['moto (오토바이)', '-o로 끝나지만 여성 (motocicleta의 약어)', '여성 (Fem.)', 'la moto / una moto'],
              ],
            },
          },
          {
            title: '강세 a-(á-)로 시작하는 여성명사의 특수 규칙',
            description: '첫 음절에 강세가 오는 a-로 시작하는 여성단수 명사는 발음 충돌(la a...)을 막기 위해 남성관사 el, un을 취합니다.',
            table: {
              headers: ['단어', '단수 정관사/부정관사', '복수 정관사/부정관사 (성 복귀!)', '형용사 수식 시 성별'],
              rows: [
                ['agua (물)', 'el agua / un agua', 'las aguas / unas aguas', 'El agua está limpia. (형용사는 본래 성인 여성형 limpia!)'],
                ['arma (무기)', 'el arma / un arma', 'las armas / unas armas', 'las armas (여성 복수)'],
                ['águila (독수리)', 'el águila / un águila', 'las águilas / unas águilas', 'las águilas (여성 복수)'],
              ],
            },
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
            title: '복수형 변형 공식',
            description: '스페인어 명사 복수화 규칙입니다.',
            table: {
              headers: ['조건', '규칙', '단수 -> 복수 예시'],
              rows: [
                ['모음으로 끝남', '+ -s', 'el libro -> los libros, la casa -> las casas'],
                ['자음으로 끝남', '+ -es', 'el hotel -> los hoteles, el papel -> los papeles'],
                ['-z로 끝남', '-z를 없애고 + -ces', 'la cruz -> las cruces, el lápiz -> los lápices, la voz -> las voces, la paz -> las paces'],
                ['-s로 끝남 (복합명사/요일)', '형태 불변 (관사만 복수화)', 'el cortauñas -> los cortauñas, el sacapuntas -> los sacapuntas, el lunes -> los lunes'],
                ['항상 복수로 쓰임', '단수형 없이 복수 전용', 'las tijeras (가위), los guantes (장갑), las gafas (안경), los pantalones (바지)'],
                ['악센트(띨데) 부호 변화', '추가되거나 삭제됨', 'el limón -> los limones (악센트 탈락)\nel examen -> los exámenes (강세 유지를 위해 악센트 추가)'],
              ],
            },
          },
        ],
      },
      {
        id: 'sec-4-4',
        title: '4.4 정관사와 부정관사 (Artículos)',
        subtitle: '특정 대상(정관사)과 불특정 대상(부정관사)',
        rules: [
          {
            title: '정관사와 부정관사 표',
            description: '명사의 성과 수에 따라 4가지씩 존재합니다.',
            table: {
              headers: ['구분', '남성 단수', '여성 단수', '남성 복수', '여성 복수'],
              rows: [
                ['정관사 (Artículos definidos)', 'el (el coche)', 'la (la pluma)', 'los (los coches)', 'las (las plumas)'],
                ['부정관사 (Artículos indefinidos)', 'un (un coche)', 'una (una pluma)', 'unos (unos coches)', 'unas (unas plumas)'],
              ],
            },
            tip: '연습문제 빈출:\n- el agua / la cruz / la voz / la estación / el arma / el lápiz / las águilas / la clase / la pared / la información / el limón / las gafas / la ciudad / el programa / la foto / el clima / la mano / el mapa / el tema / los lunes\n- un libro / una canción / un arma / una paz / un cortauñas / un examen / un día / un problema / un melón / una estación / una silla / una cuestión / unas tijeras / un reloj / unos sacapuntas / un mapa / una tarde / un sistema / un papel / una puerta',
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
            title: 'ESTAR 동사 인칭별 변화표',
            description: '1인칭 estoy를 제외하고 2·3인칭 단수 및 복수에 띨데(á)가 들어갑니다.',
            table: {
              headers: ['인칭', '단수형', '복수형'],
              rows: [
                ['1인칭', '(Yo) estoy', '(Nosotros/as) estamos'],
                ['2인칭', '(Tú) estás', '(Vosotros/as) estáis'],
                ['3인칭', '(Él, Ella, Ud.) está', '(Ellos, Ellas, Uds.) están'],
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
            title: 'SER vs ESTAR 비교 요약표',
            description: '주어와 보어의 관계가 "본질"인가 "일시적 상태/위치"인가를 따집니다.',
            table: {
              headers: ['구분', 'SER 동사', 'ESTAR 동사'],
              rows: [
                ['기본 의미', '~이다 (본질)', '~에 있다 (위치), ~한 상태이다'],
                ['주요 용법', '변하지 않는 속성:\n- 이름: Yo soy Álvaro.\n- 국적: Soy argentino.\n- 직업: Soy médico.\n- 성격: Soy optimista.\n- 사물의 특성/크기: La mesa es pequeña. La película es divertida.\n- 출신/재료: Este vino es de España.', '변하기 쉬운 속성:\n- 위치: Perú está en América del Sur. Pedro está en la universidad. Nosotros estamos en el teatro.\n- 신체/감정 상태: Estoy un poco cansado. Mis padres están cansados.\n- 가변적 물리 상태: La puerta está cerrada. La ventana está abierta. El café está caliente. El agua está limpia. Las sillas están sucias.'],
              ],
            },
            tip: '교수님 연습문제 기출 정답 공식:\n- La puerta está cerrada (문 닫힘 상태 = estar)\n- María es simpática (성격 = ser)\n- ¿De dónde son ustedes? (출신 = ser)\n- Juan y yo somos de México (출신 = ser)\n- Mis hermanos y tú sois optimistas (성격 = ser)\n- El agua está limpia (청결 상태 = estar)\n- La mesa es pequeña (크기 속성 = ser)\n- La ventana está abierta (열림 상태 = estar)\n- El café está caliente (온도 상태 = estar)\n- Mis padres están cansados (피곤 상태 = estar)\n- ¿Dónde están ellos ahora? (위치 = estar)\n- Pedro está en la universidad (위치 = estar)\n- Mis hermanas son altas y delgadas (신체 불변 특징 = ser)\n- Mis abuelos son de Estados Unidos (출신 = ser)\n- Nosotros estamos en el teatro (위치 = estar)\n- Este vino es de España (산지/출신 = ser)\n- Las sillas están sucias (오염 상태 = estar)',
          },
        ],
      },
      {
        id: 'sec-5-3',
        title: '5.3 형용사의 구분 & 위치에 따른 의미 변화',
        subtitle: '품질형용사 vs 한정형용사, 주관적 vs 객관적 뉘앙스',
        rules: [
          {
            title: '형용사의 성수 변화',
            description: '형용사는 수식하는 명사의 성과 수에 반드시 일치해야 합니다.',
            table: {
              headers: ['형용사 어미 형태', '성별에 따른 변화', '명사의 수에 따른 변화', '예시'],
              rows: [
                ['-o로 끝나는 형용사 (alto 등)', '남성 -o / 여성 -a (변화 O)', '단수 / 복수 -s (변화 O)', 'un hombre alto, una mujer alta\nunos hombres altos, unas mujeres altas'],
                ['-o 이외의 어미로 끝나는 형용사 (inteligente 등)', '남녀 형태 동일 (변화 X)', '단수 / 복수 -s/-es (변화 O)', 'un chico inteligente, una chica inteligente\nunos chicos inteligentes, unas chicas inteligentes'],
              ],
            },
          },
          {
            title: '형용사 위치에 따른 의미 변화 4인방',
            description: '명사 앞은 "주관적/감정적 뉘앙스", 명사 뒤는 "객관적/사실적 뉘앙스"입니다.',
            table: {
              headers: ['형용사', '명사 앞 (주관적 뉘앙스)', '명사 뒤 (객관적 뉘앙스)'],
              rows: [
                ['viejo', '오래된, 정든 (un viejo amigo: 오랜 친구)', '나이 든, 늙은 (un hombre viejo: 노인)'],
                ['nuevo', '새로운, 또 하나의 (un nuevo coche: 새로 산 차)', '갓 만들어진, 신품의 (un coche nuevo: 새 제품인 차)'],
                ['pobre', '가련한, 불쌍한 (un pobre hombre: 불쌍한 남자)', '가난한, 돈이 없는 (un hombre pobre: 빈곤한 남자)'],
                ['grande', '위대한 (un gran hombre: 위인)', '물리적으로 거대한, 큰 (un hombre grande: 체격이 큰 사람)'],
              ],
            },
          },
        ],
      },
      {
        id: 'sec-5-4',
        title: '5.4 형용사의 어미 탈락 (Apócope)',
        subtitle: '남성 단수명사 앞 -o, -to, -de 탈락 규칙과 예외',
        rules: [
          {
            title: '3대 어미 탈락 규칙',
            description: '명사 앞에서 특정 어미가 떨어져 나가는 현상입니다.',
            table: {
              headers: ['탈락 유형', '대상 형용사', '탈락 조건 및 규칙', '실제 기출 예문'],
              rows: [
                ['-o 탈락', 'uno, bueno, malo, primero, tercero 등', '남성 단수 명사 바로 앞에서 -o 탈락\n(여성단수나 복수 앞에서는 탈락 안 됨!)', 'un libro\nbuen amigo (bueno -> buen)\nmal día (malo -> mal)\nprimer día (primero -> primer)\ntercer piso (tercero -> tercer)'],
                ['-to 탈락', 'santo', '남성 성인 이름 앞에서 san으로 탈락\n★ 예외: 성인의 이름이 Do- 또는 To-로 시작하면 탈락되지 않고 Santo 유지!', 'San Diego, San Francisco, San Pedro\n★ Santo Domingo (도미니카 공화국 수도)\n★ Santo Tomás (토마스 성인)'],
                ['-de 탈락', 'grande', '남성단수 및 여성단수 명사 앞 모두에서 -de 탈락하여 "gran"으로 변화', 'Teresa es una gran mujer. (여성단수 앞 gran)\nJuan es un gran hombre. (남성단수 앞 gran)'],
              ],
            },
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
            title: 'SER DE 관용 구문',
            description: 'SER 동사에 전치사 de를 결합하여 출신지나 원산지를 표현합니다.',
            examples: [
              { es: '¿De dónde eres? - Soy de Corea.', ko: '너는 어디 출신이니? - 나는 한국 출신이야.' },
              { es: 'Juan y yo somos de México.', ko: '후안과 나는 멕시코 출신입니다.' },
              { es: 'Este vino es de España.', ko: '이 와인은 스페인산입니다.' },
            ],
          },
        ],
      },
      {
        id: 'sec-6-2',
        title: '6.2 25개 주요국 국명과 국적 형용사',
        subtitle: '시험에 나오는 모든 국적 형용사 남성형 / 여성형 표',
        rules: [
          {
            title: '국가별 국적 형용사 대조표',
            description: '자음으로 끝나는 남성형 국적은 여성형에서 -a를 붙이고 띨데가 삭제되는 점에 유의하세요.',
            table: {
              headers: ['국가 이름 (País)', '남성형 (Masculino)', '여성형 (Femenino)', '규칙 포인트'],
              rows: [
                ['Corea (한국)', 'coreano', 'coreana', '-o / -a 기본형'],
                ['España (스페인)', 'español', 'española', '자음 + a'],
                ['Francia (프랑스)', 'francés', 'francesa', '-és 자음 + a (띨데 탈락)'],
                ['Alemania (독일)', 'alemán', 'alemana', '-án 자음 + a (띨데 탈락)'],
                ['Inglaterra (영국)', 'inglés', 'inglesa', '-és 자음 + a (띨데 탈락)'],
                ['Japón (일본)', 'japonés', 'japonesa', '-és 자음 + a (띨데 탈락)'],
                ['China (중국)', 'chino', 'china', '-o / -a 기본형'],
                ['Estados Unidos (미국)', 'estadounidense', 'estadounidense', '-ense 남녀 동일!'],
                ['Bélgica (벨기에)', 'belga', 'belga', '-a 남녀 동일!'],
                ['Vietnam (베트남)', 'vietnamita', 'vietnamita', '-ita 남녀 동일!'],
                ['Irak (이라크) / Irán (이란)', 'iraquí / iraní', 'iraquí / iraní', '-í 남녀 동일!'],
                ['Marruecos (모로코)', 'marroquí', 'marroquí', '-í 남녀 동일!'],
                ['México (멕시코)', 'mexicano', 'mexicana', '-o / -a 기본형'],
                ['Perú (페루)', 'peruano', 'peruana', '-o / -a 기본형'],
                ['Chile (칠레)', 'chileno', 'chilena', '-o / -a 기본형'],
                ['Argentina (아르헨티나)', 'argentino', 'argentina', '-o / -a 기본형'],
                ['Brasil (브라질)', 'brasileño', 'brasileña', '-o / -a 기본형'],
                ['Colombia (콜롬비아)', 'colombiano', 'colombiana', '-o / -a 기본형'],
                ['Italia (이탈리아)', 'italiano', 'italiana', '-o / -a 기본형'],
                ['Rusia (러시아)', 'ruso', 'rusa', '-o / -a 기본형'],
                ['Polonia (폴란드)', 'polaco', 'polaca', '-o / -a 기본형'],
                ['Portugal (포르투갈)', 'portugués', 'portuguesa', '-és 자음 + a (띨데 탈락)'],
                ['Tailandia (태국)', 'tailandés', 'tailandesa', '-és 자음 + a (띨데 탈락)'],
                ['Turquía (터키)', 'turco', 'turca', '-o / -a 기본형'],
                ['Venezuela (베네수엘라)', 'venezolano', 'venezolana', '-o / -a 기본형'],
              ],
            },
            tip: '교수님 연습문제 기출:\n- Él es francés (프랑스 남자)\n- Ellos son chinos (중국인들 복수)\n- Nosotras somos coreanas (한국 여자들 복수)\n- Uds.(남성 복수) son mexicanos (멕시코인들 복수)\n- Ellas son chilenas (칠레 여자들 복수)\n- La profesora es mexicana\n- El periodista es japonés\n- Los turistas son ingleses (turista는 양성명사, 복수는 ingleses)\n- La actriz es española\n- La abogada es francesa',
          },
        ],
      },
      {
        id: 'sec-6-3',
        title: '6.3 스페인어 호칭 명사 (Tratamientos)',
        subtitle: '성(Family name) 앞 vs 중년 이름(Given name) 앞 호칭 구분',
        rules: [
          {
            title: '호칭 구분 공식',
            description: '한국의 "~씨", "~선생님"에 해당하는 호칭 체계입니다.',
            table: {
              headers: ['붙는 위치', '호칭 스페인어 (약어)', '한국어 번역 및 예문'],
              rows: [
                ['특정인의 성 (Family name) 앞', 'el señor (Sr.)\nla señora (Sra.)\nla señorita (Srta.)', 'el señor (Sr.) Gonzáles (곤살레스 씨)\nla señora (Sra.) Díaz (디아스 여사)\nla señorita (Srta.) López (로뻬스 양)'],
                ['중년 남성/여성의 이름 (First name) 앞', 'Don\nDoña', 'Don Quijote (끼호떼 님 / 세르반테스 소설 주인공)\nDoña Carmen (까르멘 님)'],
              ],
            },
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
            title: '지시사 전체 표',
            description: '화자와 청자 사이의 거리에 따라 3단계로 구분됩니다.',
            table: {
              headers: ['거리 구분', '남성 단수 / 복수', '여성 단수 / 복수', '중성형 (대명사 전용)'],
              rows: [
                ['이, 이것 (화자 가까이)', 'este / estos', 'esta / estas', 'esto (이것)'],
                ['그, 그것 (청자 가까이)', 'ese / esos', 'esa / esas', 'eso (그것)'],
                ['저, 저것 (화자·청자 모두 먼)', 'aquel / aquellos', 'aquella / aquellas', 'aquello (저것)'],
              ],
            },
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
            title: '소유사 체계표',
            description: '소유자의 인칭과 소유물의 성·수에 따라 일치합니다.',
            table: {
              headers: ['주격 인칭', '소유형용사 (전치형: 명사 앞)', '소유형용사 (후치형: 명사 뒤)', '소유대명사 (~의 것)'],
              rows: [
                ['Yo (나)', 'mi / mis (내)', 'mío / mía / míos / mías', 'el mío / la mía / los míos / las mías'],
                ['Tú (너)', 'tu / tus (네)', 'tuyo / tuya / tuyos / tuyas', 'el tuyo / la tuya / los tuyos / las tuyas'],
                ['Él/Ella/Ud.', 'su / sus (그의, 그녀의, 당신의)', 'suyo / suya / suyos / suyas', 'el suyo / la suya / los suyos / las suyas'],
                ['Nosotros/as', 'nuestro/a / nuestros/as (우리의)', 'nuestro/a / nuestros/as', 'el nuestro / la nuestra / los nuestros...'],
                ['Vosotros/as', 'vuestro/a / vuestros/as (너희들의)', 'vuestro/a / vuestros/as', 'el vuestro / la vuestra / los vuestros...'],
                ['Ellos/Ellas/Uds.', 'su / sus (그들의, 당신들의)', 'suyo / suya / suyos / suyas', 'el suyo / la suya / los suyos / las suyas'],
              ],
            },
            examples: [
              { es: 'Este es mi amigo.', ko: '이 사람은 내 친구입니다. (전치형 mi)' },
              { es: 'Un amigo mío.', ko: '내 친구 중 한 명. (후치형 mío)' },
              { es: '¿Este libro es tuyo? - Sí, es el mío.', ko: '이 책 네 것이니? - 응, 내 거야. (소유대명사 el mío)' },
            ],
          },
        ],
      },
      {
        id: 'sec-7-3',
        title: '7.3 동요 "Tiburón bebé" & 필수 어휘',
        subtitle: '노래로 익히는 가족 명칭과 핵심 동사/형용사',
        rules: [
          {
            title: 'Tiburón bebé 핵심 어휘 목록',
            description: '강의 슬라이드에 수록된 필수 어휘입니다.',
            table: {
              headers: ['스페인어 단어', '품사 및 의미', '노래 가사 예시'],
              rows: [
                ['tiburón', '명사: 상어', 'Tiburón bebé (아기 상어)'],
                ['bebé', '명사: (한 살 미만의) 갓난 아이', 'Tiburón bebé'],
                ['mamá / papá', '명사: 엄마 / 아빠', 'Tiburón mamá / Tiburón papá'],
                ['abuela / abuelo', '명사: 할머니 / 할아버지', 'Tiburón abuela / Tiburón abuelo'],
                ['cazar', '동사: 사냥하다, 잡다', '¡A cazar! (사냥하러 가자!)'],
                ['escapar', '동사: 도망치다', '¡A escapar! (도망치자!)'],
                ['salvo', '형용사: 무사한, 안전한', '¡Salvos ya! (이제 다 살았다!)'],
                ['ya', '부사: 이미, 이제', 'Salvos ya!'],
                ['acabar', '동사: 끝나다', '¡Se acabó! (끝났다!)'],
              ],
            },
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
        subtitle: '시험 기출 16문제 100% 정답 비법',
        rules: [
          {
            title: 'Hay와 ESTAR 비교 표',
            description: '대상이 특정된 것인가(정관사/소유사/이름) 불특정한 것인가(부정관사/수량/숫자)가 유일한 판별 기준입니다.',
            table: {
              headers: ['동사', '의미', '뒤에 오는 명사의 특징', '기출 예문'],
              rows: [
                ['Hay (haber 무인칭)', '~이 있다 (존재 유무)', '불특정 명사:\n- 부정관사: un, una, unos, unas\n- 수량: mucho, poco, varios\n- 숫자: uno, dos, tres...\n- 무관사 명사\n★ 정관사(el, la)나 소유사(mi, tu) 절대 불가!', 'Delante del hospital hay una ambulancia.\nHay un árbol delante de mi casa.\nEn la plaza hay una iglesia.\nHay mucha gente en la calle.\n¿Hay una farmacia cerca de aquí?\n¿Cuántos estudiantes hay en la clase? - Hay unos cinco estudiantes.\nHay un supermercado enfrente de mi casa.'],
                ['ESTAR', '~에 있다 (특정 대상의 위치)', '특정 명사:\n- 정관사: el, la, los, las\n- 소유사: mi, tu, su...\n- 고유명사: Cheil, Seúl 등', '¿Dónde están las llaves? (las = 정관사)\nEl cine está a la derecha. (el = 정관사)\nAl lado del hotel está el banco. (el = 정관사)\nLas botellas están sobre la mesa. (las = 정관사)\nEl cuarto de baño está al fondo del pasillo.\n¿Dónde están mis libros? (mis = 소유사)\n¿Dónde está el supermercado Cheil? (고유명사)\n¿Está la farmacia Seúl cerca de aquí? (la + 고유명사)\nNuestra oficina está detrás de aquel edificio.'],
              ],
            },
            tip: '초간단 공식: 빈칸 뒤나 주어에 el, la, los, las, mis, 고유명사가 보이면 무조건 ESTAR! un, una, muchos, 숫자, 의문사 Cuántos가 보이면 무조건 HAY입니다!',
          },
        ],
      },
      {
        id: 'sec-8-2',
        title: '8.2 위치와 관련된 전치사구 표현',
        subtitle: '방향과 위치를 나타내는 필수 관용구',
        rules: [
          {
            title: '위치 표현 목록',
            description: '장소와 사물의 위치를 설명할 때 필수적인 표현들입니다.',
            table: {
              headers: ['스페인어 표현', '한국어 의미', '예문'],
              rows: [
                ['delante de', '~의 앞에', 'Delante del hospital hay una ambulancia.'],
                ['detrás de', '~의 뒤에', 'Nuestra oficina está detrás de aquel edificio.'],
                ['al lado de', '~의 옆에', 'Al lado del hotel está el banco.'],
                ['enfrente de', '~의 맞은편에', 'Hay un supermercado enfrente de mi casa.'],
                ['sobre', '~의 위에', 'Las botellas están sobre la mesa.'],
                ['a la derecha', '오른쪽에', 'El cine está a la derecha.'],
                ['a la izquierda', '왼쪽에', 'La farmacia está a la izquierda.'],
                ['al fondo del pasillo', '복도 끝(깊숙한 곳)에', 'El cuarto de baño está al fondo del pasillo.'],
                ['cerca de / lejos de', '~근처에 / ~에서 먼', '¿Hay una farmacia cerca de aquí?'],
              ],
            },
          },
        ],
      },
      {
        id: 'sec-8-3',
        title: '8.3 의문사 Cuánto & 스페인어 숫자 (0~100)',
        subtitle: '수량 묻기와 0부터 100까지의 철자 암기법',
        rules: [
          {
            title: '의문사 Cuánto의 성수변화',
            description: '명사의 수량과 가격을 물어볼 때 명사의 성과 수에 일치합니다.',
            examples: [
              { es: '¿Cuántos estudiantes hay en la clase?', ko: '교실에 학생(남성복수)이 몇 명 있습니까?' },
              { es: '¿Cuántas plumas hay?', ko: '펜(여성복수)이 몇 자루 있습니까?' },
              { es: '¿Cuánto cuesta?', ko: '얼마입니까? (가격)' },
            ],
          },
          {
            title: '스페인어 숫자 0부터 100까지 철자표',
            description: '철자가 불규칙한 11~15, 16~19, 20대 합성어에 특별히 유의하세요.',
            table: {
              headers: ['숫자 범위', '스페인어 철자', '특징 및 주의점'],
              rows: [
                ['0 ~ 10', '0 cero, 1 uno/a, 2 dos, 3 tres, 4 cuatro, 5 cinco, 6 seis, 7 siete, 8 ocho, 9 nueve, 10 diez', '1은 남성명사 앞 un, 여성 앞 una'],
                ['11 ~ 15', '11 once, 12 doce, 13 trece, 14 catorce, 15 quince', '고유 불규칙 어형'],
                ['16 ~ 19', '16 dieciséis, 17 diecisiete, 18 dieciocho, 19 diecinueve', 'dieci- 로 시작하는 한 단어 (dieciséis 띨데 주의!)'],
                ['20 ~ 29', '20 veinte, 21 veintiuno/a, 22 veintidós, 23 veintitrés, 24 veinticuatro, 25 veinticinco, 26 veintiséis, 27 veintiocho, 29 veintinueve', 'veinti- 로 시작하는 한 단어 (22, 23, 26 띨데 주의!)'],
                ['30 ~ 39', '30 treinta, 31 treinta y uno, 32 treinta y dos ...', '30대부터는 "십단위 + y + 일단위"로 띄어씀'],
                ['40 ~ 100', '40 cuarenta, 50 cincuenta, 60 sesenta, 70 setenta, 80 ochenta, 90 noventa, 100 cien', '60(sesenta)와 70(setenta) 철자 혼동 주의!'],
              ],
            },
          },
        ],
      },
    ],
  },
];
