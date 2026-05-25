import React, { useState } from 'react';
import { MainMenu } from './pages/MainMenu';
import { LessonView } from './pages/LessonView';

function App() {
  const [currentLevel, setCurrentLevel] = useState(null);

  const handleSelectLevel = (level) => {
    setCurrentLevel(level);
  };

  const handleBackToMenu = () => {
    setCurrentLevel(null);
  };

  return (
    <>
      {!currentLevel ? (
        <MainMenu onSelectLevel={handleSelectLevel} />
      ) : (
        <LessonView level={currentLevel} onBack={handleBackToMenu} />
      )}
    </>
  );
}

export default App;
