export const levels = [
  {
    id: 'easy',
    title: 'Nivel Fácil',
    description: 'Aprende proposiciones simples y su simbología básica.',
    badge: 'Principiante',
    lessons: [
      {
        id: 'easy-1',
        title: '¿Qué es una proposición?',
        content: 'Una proposición es una oración declarativa que puede ser verdadera (V) o falsa (F), pero no ambas a la vez.',
        examples: [
          { text: 'París es la capital de Francia.', isProposition: true, value: true },
          { text: '¿Qué hora es?', isProposition: false },
          { text: '2 + 2 = 5', isProposition: true, value: false }
        ],
        interactiveExamples: [
          { text: 'El cielo es verde.', isProposition: true, value: false },
          { text: '¡Cierra la puerta!', isProposition: false },
          { text: '5 es mayor que 3.', isProposition: true, value: true },
          { text: 'Roma es la capital de Italia.', isProposition: true, value: true },
          { text: '¿Cuántos años tienes?', isProposition: false },
          { text: 'El agua hierve a 50 grados Celsius.', isProposition: true, value: false },
          { text: 'Ojalá llueva mañana.', isProposition: false },
          { text: '7 es un número par.', isProposition: true, value: false },
          { text: 'La Tierra gira alrededor del Sol.', isProposition: true, value: true },
          { text: '¡Qué hermoso día!', isProposition: false },
          { text: '10 + 10 = 20', isProposition: true, value: true },
          { text: 'Por favor, siéntate.', isProposition: false },
          { text: 'Un triángulo tiene 4 lados.', isProposition: true, value: false },
          { text: 'Edison inventó la bombilla.', isProposition: true, value: true },
          { text: '¿Dónde está la biblioteca?', isProposition: false },
          { text: 'Silencio, por favor.', isProposition: false },
          { text: 'El oro es un metal.', isProposition: true, value: true },
          { text: '2 multiplicado por 3 es 5.', isProposition: true, value: false }
        ],
        type: 'concept'
      },
      {
        id: 'easy-2',
        title: 'Simbología y Tipos',
        content: 'Las proposiciones simples se representan con letras minúsculas (p, q, r...). Se pueden unir con conectores lógicos para formar proposiciones compuestas.',
        connectors: [
          { symbol: '∧', name: 'Conjunción', meaning: 'Y' },
          { symbol: '∨', name: 'Disyunción', meaning: 'O' },
          { symbol: '¬', name: 'Negación', meaning: 'No' },
          { symbol: '→', name: 'Condicional', meaning: 'Si... entonces' },
          { symbol: '↔', name: 'Bicondicional', meaning: 'Si y solo si' }
        ],
        type: 'concept'
      },
      {
        id: 'easy-quiz',
        title: 'Práctica de Simbología',
        type: 'quiz-mapping',
        questions: [
          {
            sentence: 'Te llevaré flores <span class="highlight-connector">y</span> dulces',
            options: ['p ∨ q', 'p ∧ q', 'p → q', '¬p'],
            answer: 'p ∧ q',
            p: 'Te llevaré flores',
            q: 'Dulces'
          },
          {
            sentence: '<span class="highlight-connector">Si</span> llueve, <span class="highlight-connector">entonces</span> me mojo',
            options: ['p ∧ q', 'p ↔ q', 'p → q', 'p ∨ q'],
            answer: 'p → q',
            p: 'Llueve',
            q: 'Me mojo'
          },
          {
            sentence: 'Estudio <span class="highlight-connector">o</span> juego videojuegos',
            options: ['p ∧ q', 'p ∨ q', 'p → q', 'p ↔ q'],
            answer: 'p ∨ q',
            p: 'Estudio',
            q: 'Juego videojuegos'
          },
          {
            sentence: '<span class="highlight-connector">No</span> es cierto que la tierra es plana',
            options: ['p', '¬p', 'p ∧ q', 'p ∨ q'],
            answer: '¬p',
            p: 'La tierra es plana'
          },
          {
            sentence: 'Iré a la fiesta <span class="highlight-connector">si y solo si</span> tú vas',
            options: ['p → q', 'p ∧ q', 'p ↔ q', 'p ∨ q'],
            answer: 'p ↔ q',
            p: 'Iré a la fiesta',
            q: 'Tú vas'
          },
          {
            sentence: 'Compro manzanas <span class="highlight-connector">y</span> peras, <span class="highlight-connector">o</span> compro plátanos',
            options: ['(p ∧ q) ∨ r', 'p ∧ (q ∨ r)', 'p ∨ (q ∧ r)', '(p ∨ q) ∧ r'],
            answer: '(p ∧ q) ∨ r',
            p: 'Compro manzanas',
            q: 'Compro peras',
            r: 'Compro plátanos'
          },
          {
            sentence: '<span class="highlight-connector">Si</span> hace sol <span class="highlight-connector">y</span> tengo dinero, <span class="highlight-connector">entonces</span> viajo',
            options: ['p ∧ (q → r)', '(p ∧ q) → r', '(p ∨ q) → r', 'p → (q ∧ r)'],
            answer: '(p ∧ q) → r',
            p: 'Hace sol',
            q: 'Tengo dinero',
            r: 'Viajo'
          },
          {
            sentence: '<span class="highlight-connector">No</span> saldré <span class="highlight-connector">o</span> pediré pizza <span class="highlight-connector">y</span> veré una película',
            options: ['¬p ∨ (q ∧ r)', '¬(p ∨ q) ∧ r', '¬p ∧ (q ∨ r)', '(¬p ∨ q) ∧ r'],
            answer: '¬p ∨ (q ∧ r)',
            p: 'Saldré',
            q: 'Pediré pizza',
            r: 'Veré una película'
          },
          {
            sentence: '<span class="highlight-connector">Si</span> estudio <span class="highlight-connector">y</span> apruebo, <span class="highlight-connector">entonces</span> celebro <span class="highlight-connector">y</span> descanso',
            options: ['(p ∧ q) → (r ∧ s)', '(p ∨ q) → (r ∨ s)', 'p ∧ (q → r) ∧ s', '(p → q) ∧ (r → s)'],
            answer: '(p ∧ q) → (r ∧ s)',
            p: 'Estudio',
            q: 'Apruebo',
            r: 'Celebro',
            s: 'Descanso'
          },
          {
            sentence: 'Viajo a Roma <span class="highlight-connector">o</span> a París, <span class="highlight-connector">si y solo si</span> tengo vacaciones <span class="highlight-connector">y</span> compro el boleto',
            options: ['(p ∨ q) ↔ (r ∧ s)', '(p ∧ q) ↔ (r ∨ s)', '(p ↔ q) ∨ (r ↔ s)', 'p ∨ (q ↔ r) ∧ s'],
            answer: '(p ∨ q) ↔ (r ∧ s)',
            p: 'Viajo a Roma',
            q: 'Viajo a París',
            r: 'Tengo vacaciones',
            s: 'Compro el boleto'
          },
          {
            sentence: '<span class="highlight-connector">No</span> es el caso que trabajo <span class="highlight-connector">y</span> estudio, <span class="highlight-connector">o</span> descanso',
            options: ['¬(p ∧ q) ∨ r', '¬p ∧ (q ∨ r)', '¬(p ∨ q) ∧ r', '¬p ∨ (q ∧ r)'],
            answer: '¬(p ∧ q) ∨ r',
            p: 'Trabajo',
            q: 'Estudio',
            r: 'Descanso'
          },
          {
            sentence: '<span class="highlight-connector">Si</span> llueve <span class="highlight-connector">o</span> nieva, <span class="highlight-connector">entonces</span> me quedo en casa <span class="highlight-connector">y</span> leo un libro',
            options: ['(p ∨ q) → (r ∧ s)', '(p ∧ q) → (r ∨ s)', '(p → q) ∨ (r → s)', 'p ∨ (q → r) ∧ s'],
            answer: '(p ∨ q) → (r ∧ s)',
            p: 'Llueve',
            q: 'Nieva',
            r: 'Me quedo en casa',
            s: 'Leo un libro'
          }
        ]
      },
      {
        id: 'easy-summary',
        title: '¡Felicidades! Nivel Completado',
        content: 'Has superado el Nivel Fácil con éxito. Has aprendido a identificar proposiciones y cómo representarlas mediante símbolos lógicos. Aquí tienes un breve repaso:',
        concepts: [
          { name: 'Proposición', desc: 'Una oración declarativa que tiene un valor de verdad garantizado (puede ser verdadera o falsa, pero no ambas).' },
          { name: 'Simbología Básica', desc: 'Las proposiciones se representan tradicionalmente con letras minúsculas matemáticas como p, q, r, s.' },
          { name: 'Conectores Lógicos', desc: 'Operadores que unen proposiciones para crear sentencias más complejas. Entre ellos: Conjunción (∧), Disyunción (∨), Negación (¬), Condicional (→) y Bicondicional (↔).' }
        ],
        type: 'concept'
      }
    ]
  },
  {
    id: 'medium',
    title: 'Nivel Medio',
    description: 'Domina las proposiciones compuestas y las tablas de verdad.',
    badge: 'Intermedio',
    lessons: [
      {
        id: 'medium-1',
        title: 'Tablas de Verdad',
        content: 'Una tabla de verdad muestra todos los posibles valores de verdad de una proposición compuesta. Cada fila representa una combinación posible de Verdadero (V) o Falso (F) para las proposiciones simples.',
        concepts: [
          { name: 'Fórmula 2ⁿ', desc: 'La cantidad de filas se calcula con la fórmula 2ⁿ, donde "n" es el número de proposiciones simples. Por ejemplo, si tienes "p" y "q" (n=2), la tabla tendrá 2² = 4 filas. Si tienes "p", "q" y "r" (n=3), tendrá 2³ = 8 filas.' }
        ],
        type: 'concept'
      },
      {
        id: 'medium-2',
        title: 'Negación (¬) y Conjunción (∧)',
        content: 'Veamos cómo funcionan las tablas de verdad para los conectores más básicos:',
        concepts: [
          { name: 'Negación (¬p)', desc: 'Invierte el valor de verdad. Si p es V, ¬p es F. Si p es F, ¬p es V.' },
          { name: 'Conjunción (p ∧ q)', desc: 'El resultado es Verdadero (V) ÚNICAMENTE cuando ambas proposiciones son Verdaderas. En cualquier otro caso es Falso (F).' }
        ],
        truthTableExamples: [
          {
            name: 'Negación (¬p)',
            headers: ['p', '¬p'],
            rows: [
              [true, false],
              [false, true]
            ]
          },
          {
            name: 'Conjunción (p ∧ q)',
            headers: ['p', 'q', 'p ∧ q'],
            rows: [
              [true, true, true],
              [true, false, false],
              [false, true, false],
              [false, false, false]
            ]
          }
        ],
        type: 'concept'
      },
      {
        id: 'medium-3',
        title: 'Disyunción (∨)',
        content: 'La disyunción representa la letra "o". En lógica, solemos usar la disyunción inclusiva.',
        concepts: [
          { name: 'Disyunción (p ∨ q)', desc: 'El resultado es Falso (F) ÚNICAMENTE cuando ambas proposiciones son Falsas. En cualquier otro caso (si al menos una es V), el resultado es Verdadero (V).' }
        ],
        truthTableExamples: [
          {
            name: 'Disyunción (p ∨ q)',
            headers: ['p', 'q', 'p ∨ q'],
            rows: [
              [true, true, true],
              [true, false, true],
              [false, true, true],
              [false, false, false]
            ]
          }
        ],
        type: 'concept'
      },
      {
        id: 'medium-4',
        title: 'Condicional (→) y Bicondicional (↔)',
        content: 'Estos son los conectores que suelen causar más confusión, ¡presta mucha atención!',
        concepts: [
          { name: 'Condicional (p → q)', desc: 'El resultado es Falso (F) ÚNICAMENTE cuando la primera (p) es Verdadera y la segunda (q) es Falsa. En todos los demás casos es Verdadero (V).' },
          { name: 'Bicondicional (p ↔ q)', desc: 'El resultado es Verdadero (V) cuando ambas proposiciones tienen el MISMO valor (ambas V o ambas F). Si son diferentes, es Falso (F).' }
        ],
        truthTableExamples: [
          {
            name: 'Condicional (p → q)',
            headers: ['p', 'q', 'p → q'],
            rows: [
              [true, true, true],
              [true, false, false],
              [false, true, true],
              [false, false, true]
            ]
          },
          {
            name: 'Bicondicional (p ↔ q)',
            headers: ['p', 'q', 'p ↔ q'],
            rows: [
              [true, true, true],
              [true, false, false],
              [false, true, false],
              [false, false, true]
            ]
          }
        ],
        type: 'concept'
      },
      {
        id: 'medium-quiz-1',
        title: 'Construye: Conjunción',
        type: 'quiz-truthtable',
        expression: 'p ∧ q',
        variables: ['p', 'q'],
        expectedTable: [
          { p: true, q: true, result: true },
          { p: true, q: false, result: false },
          { p: false, q: true, result: false },
          { p: false, q: false, result: false }
        ]
      },
      {
        id: 'medium-quiz-2',
        title: 'Construye: Disyunción',
        type: 'quiz-truthtable',
        expression: 'p ∨ q',
        variables: ['p', 'q'],
        expectedTable: [
          { p: true, q: true, result: true },
          { p: true, q: false, result: true },
          { p: false, q: true, result: true },
          { p: false, q: false, result: false }
        ]
      },
      {
        id: 'medium-quiz-3',
        title: 'Construye: Condicional',
        type: 'quiz-truthtable',
        expression: 'p → q',
        variables: ['p', 'q'],
        expectedTable: [
          { p: true, q: true, result: true },
          { p: true, q: false, result: false },
          { p: false, q: true, result: true },
          { p: false, q: false, result: true }
        ]
      },
      {
        id: 'medium-quiz-4',
        title: 'Construye: Expresión Compuesta',
        type: 'quiz-truthtable',
        expression: '¬p ∨ q',
        variables: ['p', 'q'],
        intermediateColumns: ['¬p'],
        expectedTable: [
          { p: true, q: true, '¬p': false, result: true },
          { p: true, q: false, '¬p': false, result: false },
          { p: false, q: true, '¬p': true, result: true },
          { p: false, q: false, '¬p': true, result: true }
        ]
      },
      {
        id: 'medium-interstitial',
        title: '¡Excelente trabajo!',
        content: 'Has dominado las tablas de verdad con 2 variables (p y q). Tienes la opción de finalizar aquí, o puedes aceptar el reto y seguir con tablas de 3 variables (p, q, r) que tienen mayor dificultad (8 filas).',
        concepts: [
          { name: 'Consejo: Orden de Resolución', desc: 'Para tablas complejas, identificar el orden de resolución es clave. Primero se resuelven los paréntesis, luego las negaciones, y finalmente los conectores principales que unen todo.' }
        ],
        type: 'concept',
        isCheckpoint: true
      },
      {
        id: 'medium-quiz-5',
        title: 'Reto: 3 Variables',
        type: 'quiz-truthtable',
        fillAll: true,
        expression: 'p ∧ (q ∨ r)',
        variables: ['p', 'q', 'r'],
        intermediateColumns: ['q ∨ r'],
        expectedTable: [
          { p: true, q: true, r: true, 'q ∨ r': true, result: true },
          { p: true, q: true, r: false, 'q ∨ r': true, result: true },
          { p: true, q: false, r: true, 'q ∨ r': true, result: true },
          { p: true, q: false, r: false, 'q ∨ r': false, result: false },
          { p: false, q: true, r: true, 'q ∨ r': true, result: false },
          { p: false, q: true, r: false, 'q ∨ r': true, result: false },
          { p: false, q: false, r: true, 'q ∨ r': true, result: false },
          { p: false, q: false, r: false, 'q ∨ r': false, result: false }
        ]
      },
      {
        id: 'medium-quiz-6',
        title: 'Reto: Condicional con 3 Variables',
        type: 'quiz-truthtable',
        fillAll: true,
        expression: '(p ∧ q) → ¬r',
        variables: ['p', 'q', 'r'],
        intermediateColumns: ['p ∧ q', '¬r'],
        expectedTable: [
          { p: true, q: true, r: true, 'p ∧ q': true, '¬r': false, result: false },
          { p: true, q: true, r: false, 'p ∧ q': true, '¬r': true, result: true },
          { p: true, q: false, r: true, 'p ∧ q': false, '¬r': false, result: true },
          { p: true, q: false, r: false, 'p ∧ q': false, '¬r': true, result: true },
          { p: false, q: true, r: true, 'p ∧ q': false, '¬r': false, result: true },
          { p: false, q: true, r: false, 'p ∧ q': false, '¬r': true, result: true },
          { p: false, q: false, r: true, 'p ∧ q': false, '¬r': false, result: true },
          { p: false, q: false, r: false, 'p ∧ q': false, '¬r': true, result: true }
        ]
      },
      {
        id: 'medium-summary',
        title: '¡Felicidades! Nivel Medio Completado',
        content: 'Has superado el Nivel Medio con éxito. Ahora dominas la construcción de tablas de verdad complejas, incluso con 3 variables. ¡Estás listo para enfrentarte al Nivel Difícil!',
        type: 'concept'
      }
    ]
  },
  {
    id: 'hard',
    title: 'Nivel Difícil',
    description: 'Tautologías, contradicciones y contingencias.',
    badge: 'Avanzado',
    lessons: [
      {
        id: 'hard-1',
        title: 'Resultados Lógicos',
        content: 'Dependiendo de los resultados finales en la columna de la derecha de una tabla de verdad, una proposición compuesta puede clasificarse en tres tipos:',
        concepts: [
          { name: 'Tautología', desc: 'Todos los resultados son Verdaderos (V). Representa una verdad absoluta, independientemente del valor de sus proposiciones simples.' },
          { name: 'Contradicción', desc: 'Todos los resultados son Falsos (F). Representa una falsedad lógica.' },
          { name: 'Contingencia', desc: 'Hay resultados Verdaderos y Falsos mezclados. Su valor de verdad depende del valor de las proposiciones simples que la componen.' }
        ],
        type: 'concept'
      },
      {
        id: 'hard-quiz',
        title: 'Identifica el Tipo',
        type: 'quiz-identify',
        questions: [
          {
            expression: 'p ∨ ¬p',
            table: [
              { p: true, result: true },
              { p: false, result: true }
            ],
            options: ['Tautología', 'Contradicción', 'Contingencia'],
            answer: 'Tautología'
          },
          {
            expression: 'p ∧ ¬p',
            table: [
              { p: true, result: false },
              { p: false, result: false }
            ],
            options: ['Tautología', 'Contradicción', 'Contingencia'],
            answer: 'Contradicción'
          },
          {
            expression: '(p ∧ q) → p',
            table: [
              { p: true, q: true, result: true },
              { p: true, q: false, result: true },
              { p: false, q: true, result: true },
              { p: false, q: false, result: true }
            ],
            options: ['Tautología', 'Contradicción', 'Contingencia'],
            answer: 'Tautología'
          },
          {
            expression: '(p ∨ q) ∧ ¬p',
            table: [
              { p: true, q: true, result: false },
              { p: true, q: false, result: false },
              { p: false, q: true, result: true },
              { p: false, q: false, result: false }
            ],
            options: ['Tautología', 'Contradicción', 'Contingencia'],
            answer: 'Contingencia'
          }
        ]
      },
      {
        id: 'hard-quiz-2',
        title: 'Reto: Construye e Identifica (3 Variables)',
        type: 'quiz-truthtable',
        fillAll: true,
        expression: '(p → q) ↔ r',
        variables: ['p', 'q', 'r'],
        intermediateColumns: ['p → q'],
        identifyOptions: ['Tautología', 'Contradicción', 'Contingencia'],
        identifyAnswer: 'Contingencia',
        expectedTable: [
          { p: true, q: true, r: true, 'p → q': true, result: true },
          { p: true, q: true, r: false, 'p → q': true, result: false },
          { p: true, q: false, r: true, 'p → q': false, result: false },
          { p: true, q: false, r: false, 'p → q': false, result: true },
          { p: false, q: true, r: true, 'p → q': true, result: true },
          { p: false, q: true, r: false, 'p → q': true, result: false },
          { p: false, q: false, r: true, 'p → q': true, result: true },
          { p: false, q: false, r: false, 'p → q': true, result: false }
        ]
      },
      {
        id: 'hard-quiz-3',
        title: 'Reto Final: 4 Variables',
        type: 'quiz-truthtable',
        fillAll: true,
        expression: '(p ∧ q) → (r ∨ s)',
        variables: ['p', 'q', 'r', 's'],
        intermediateColumns: ['p ∧ q', 'r ∨ s'],
        identifyOptions: ['Tautología', 'Contradicción', 'Contingencia'],
        identifyAnswer: 'Contingencia',
        expectedTable: [
          { p: true, q: true, r: true, s: true, 'p ∧ q': true, 'r ∨ s': true, result: true },
          { p: true, q: true, r: true, s: false, 'p ∧ q': true, 'r ∨ s': true, result: true },
          { p: true, q: true, r: false, s: true, 'p ∧ q': true, 'r ∨ s': true, result: true },
          { p: true, q: true, r: false, s: false, 'p ∧ q': true, 'r ∨ s': false, result: false },
          { p: true, q: false, r: true, s: true, 'p ∧ q': false, 'r ∨ s': true, result: true },
          { p: true, q: false, r: true, s: false, 'p ∧ q': false, 'r ∨ s': true, result: true },
          { p: true, q: false, r: false, s: true, 'p ∧ q': false, 'r ∨ s': true, result: true },
          { p: true, q: false, r: false, s: false, 'p ∧ q': false, 'r ∨ s': false, result: true },
          { p: false, q: true, r: true, s: true, 'p ∧ q': false, 'r ∨ s': true, result: true },
          { p: false, q: true, r: true, s: false, 'p ∧ q': false, 'r ∨ s': true, result: true },
          { p: false, q: true, r: false, s: true, 'p ∧ q': false, 'r ∨ s': true, result: true },
          { p: false, q: true, r: false, s: false, 'p ∧ q': false, 'r ∨ s': false, result: true },
          { p: false, q: false, r: true, s: true, 'p ∧ q': false, 'r ∨ s': true, result: true },
          { p: false, q: false, r: true, s: false, 'p ∧ q': false, 'r ∨ s': true, result: true },
          { p: false, q: false, r: false, s: true, 'p ∧ q': false, 'r ∨ s': true, result: true },
          { p: false, q: false, r: false, s: false, 'p ∧ q': false, 'r ∨ s': false, result: true }
        ]
      },
      {
        id: 'hard-summary',
        title: '¡Juego Completado!',
        content: '¡Felicidades! Has completado el nivel más difícil. Ahora eres un experto en lógica proposicional. Puedes estar orgulloso de tu capacidad para analizar tautologías, contradicciones y contingencias, incluso con tablas de verdad de 16 filas.',
        type: 'concept'
      }
    ]
  }
];
