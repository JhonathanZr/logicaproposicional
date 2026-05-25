import React, { useState } from 'react';
import { Typography } from '../components/atoms/Typography';
import { Button } from '../components/atoms/Button';
import { ConceptViewer } from '../components/organisms/ConceptViewer';
import { QuizViewer } from '../components/organisms/QuizViewer';
import './LessonView.css';

export const LessonView = ({ level, onBack }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const lessons = level.lessons;
  const currentLesson = lessons[currentIndex];

  const handleNext = () => {
    if (currentIndex < lessons.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onBack();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="lesson-view-container">
      <div className="lesson-header">
        <Button variant="ghost" onClick={onBack}>← Volver</Button>
        <Typography variant="span" className="lesson-progress">
          Lección {currentIndex + 1} de {lessons.length}
        </Typography>
      </div>

      <div className="lesson-content">
        {currentLesson.type === 'concept' ? (
          <ConceptViewer lesson={currentLesson} />
        ) : (
          <QuizViewer lesson={currentLesson} onComplete={handleNext} />
        )}
      </div>

      <div className="lesson-footer">
        <Button
          variant="outline"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          Anterior
        </Button>
        {currentLesson.isCheckpoint ? (
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Button variant="outline" onClick={() => { alert('¡Nivel completado!'); onBack(); }}>
              Finalizar Nivel
            </Button>
            <Button variant="primary" onClick={handleNext}>
              Seguir con mayor dificultad
            </Button>
          </div>
        ) : (
          currentLesson.type === 'concept' && (
            <Button variant="primary" onClick={handleNext}>
              {currentIndex === lessons.length - 1 ? 'Finalizar' : 'Siguiente'}
            </Button>
          )
        )}
      </div>
    </div>
  );
};
