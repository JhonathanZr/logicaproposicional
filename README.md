# 🧠 LogicGame - Lógica Proposicional Interactiva

¡Bienvenido a **LogicGame**! Una plataforma web educativa y sumamente interactiva diseñada para dominar los fundamentos de la **Lógica Proposicional** de forma gamificada, intuitiva y progresiva.

Desarrollado con **React + Vite** y con un diseño estructurado bajo la metodología de **Diseño Atómico (Atomic Design)**, este proyecto guía a los estudiantes desde los conceptos más básicos (como identificar proposiciones) hasta la resolución avanzada de tablas de verdad de hasta 4 variables (16 combinaciones), finalizando con la clasificación en tautologías, contradicciones y contingencias.

---

## 🚀 Cómo Inicializar el Proyecto (Paso a Paso)

Sigue estos sencillos pasos para tener la aplicación corriendo en tu entorno local:

### 1. Prerrequisitos
Asegúrate de tener instalado **Node.js** (versión 18 o superior recomendada) y **npm** (que viene junto a Node.js). Puedes verificar tus versiones instaladas corriendo:
```bash
node -v
npm -v
```

### 2. Clonar o descargar el repositorio
Si estás utilizando Git, clona el repositorio en tu máquina local:
```bash
git clone https://github.com/JhonathanZr/logicaproposicional.git
cd logic_game
```
*(Si lo descargaste en un archivo ZIP, simplemente descomprímelo y abre una terminal dentro de la carpeta `logic_game`).*

### 3. Instalar las dependencias
Instala todos los paquetes requeridos especificados en el `package.json` (incluyendo React, Vite, ESLint y los efectos visuales como Canvas Confetti):
```bash
npm install
```

### 4. Ejecutar el servidor de desarrollo
Inicia el entorno de desarrollo local con recarga rápida (HMR):
```bash
npm run dev
```
Una vez ejecutado, la consola te mostrará una dirección local (usualmente **`http://localhost:5173`**). Abre este enlace en tu navegador para empezar a jugar.

### 5. Compilar para Producción (Opcional)
Si deseas generar una versión optimizada lista para producción, ejecuta:
```bash
npm run build
```
Esto creará una carpeta `dist` con los archivos HTML, CSS y JS optimizados y listos para ser desplegados en cualquier servidor web (como Netlify, Vercel, GitHub Pages, etc.).

Para previsualizar la compilación de producción de forma local:
```bash
npm run preview
```

---

## 🎮 Explicación del Proyecto y Niveles de Aprendizaje

**LogicGame** divide la enseñanza en tres grandes etapas diseñadas para que el usuario aprenda jugando y gane badges a medida que avanza:

### 🟢 1. Nivel Fácil (Principiante)
*   **Enfoque**: Introducción y conceptos fundamentales.
*   **Temas**:
    *   Definición de qué es una proposición (identificar oraciones declarativas frente a preguntas o exclamaciones).
    *   Uso de simbología básica ($p$, $q$, $r$, $s$).
    *   Conectores lógicos: Conjunción ($\land$), Disyunción ($\lor$), Negación ($\neg$), Condicional ($\rightarrow$) y Bicondicional ($\leftrightarrow$).
*   **Práctica**: Quiz interactivo de mapeo, donde el estudiante traduce frases en lenguaje natural (ej. *"Si llueve, entonces me mojo"*) a su representación simbólica formal (ej. $p \rightarrow q$).

### 🟡 2. Nivel Medio (Intermedio)
*   **Enfoque**: Tablas de Verdad e interacción lógica.
*   **Temas**:
    *   La regla exponencial $2^n$ para calcular el número de filas necesarias según la cantidad de variables.
    *   Comportamiento de cada conector lógico.
*   **Práctica (Interactive Truth-Table Solver)**:
    *   El usuario se enfrenta a un simulador interactivo de tablas de verdad donde debe rellenar manualmente los valores de verdad ($V$ o $F$) para expresiones simples y compuestas.
    *   **Desafío**: Se introducen retos de 3 variables ($2^3 = 8$ filas) como $p \land (q \lor r)$ y $(p \land q) \rightarrow \neg r$, donde el estudiante debe calcular columnas intermedias antes del resultado final.

### 🔴 3. Nivel Difícil (Avanzado)
*   **Enfoque**: Clasificación Lógica y Tablas de Verdad complejas.
*   **Temas**:
    *   **Tautologías**: Fórmulas siempre verdaderas.
    *   **Contradicciones**: Fórmulas siempre falsas.
    *   **Contingencias**: Fórmulas que pueden ser verdaderas o falsas.
*   **Práctica**:
    *   Quiz interactivo para clasificar tablas de verdad resueltas.
    *   **Reto Supremo**: Construir la tabla de verdad y clasificar una expresión compleja de 4 variables ($2^4 = 16$ filas) como $(p \land q) \rightarrow (r \lor s)$, poniendo a prueba toda la lógica adquirida.

---

## 🛠️ Arquitectura y Tecnologías Utilizadas

El proyecto destaca por su limpieza de código, responsividad y su estructura modular basada en **Diseño Atómico (Atomic Design)**:

```bash
logic_game/
├── public/                 # Recursos públicos estáticos
├── src/
│   ├── assets/             # Imágenes y recursos multimedia
│   ├── components/         # Componentes organizados jerárquicamente
│   │   ├── atoms/          # Componentes básicos (Badge, Button, Card, Typography)
│   │   └── organisms/      # Estructuras más complejas (ConceptViewer, LevelCard, QuizViewer)
│   ├── data/
│   │   └── lessons.js      # Base de datos local con las lecciones, preguntas y respuestas
│   ├── pages/              # Vistas completas del juego
│   │   ├── MainMenu.jsx    # Menú principal de selección de nivel
│   │   └── LessonView.jsx  # Vista y lógica central del flujo de la lección
│   ├── App.jsx             # Enrutamiento y estado del nivel actual
│   ├── index.css           # Estilos globales y variables de diseño CSS
│   └── main.jsx            # Punto de entrada de React
├── package.json            # Dependencias y scripts
└── vite.config.js          # Configuración del bundler Vite
```

### Tecnologías principales:
*   **React 19**: Biblioteca de UI moderna y eficiente para el manejo de estados dinámicos del juego.
*   **Vite 8**: Servidor de desarrollo extremadamente veloz y empaquetador eficiente.
*   **CSS Limpio y Responsivo**: Todo el diseño visual, cuadrículas, tablas interactivas y paletas de colores sofisticadas se manejan mediante CSS puro para garantizar la máxima compatibilidad y rendimiento.
*   **Canvas Confetti**: Integrado para disparar confeti en la pantalla al completar lecciones y quizzes de manera satisfactoria, mejorando el feedback positivo al usuario.
*   **ESLint**: Para asegurar buenas prácticas y un estándar de código limpio y consistente.

---
