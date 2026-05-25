import React, { useState } from 'react';
import { Typography } from '../atoms/Typography';
import { Card } from '../atoms/Card';
import { Button } from '../atoms/Button';
import confetti from 'canvas-confetti';
import './ConceptViewer.css';

export const ConceptViewer = ({ lesson }) => {
  return (
    <div className="concept-viewer">
      <Typography variant="h2">{lesson.title}</Typography>
      <Typography variant="p" style={{ fontSize: '1.125rem', marginBottom: '2rem' }}>
        {lesson.content}
      </Typography>

      {(lesson.examples || lesson.interactiveExamples) && (
        <div style={{ marginBottom: '2rem' }}>
          <Typography variant="h3">Ejemplos</Typography>
          <div className="concept-grid">
            
            {lesson.examples && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <Typography variant="h4" style={{ marginBottom: '0.5rem', fontSize: '1rem' }}>Ejemplos resueltos</Typography>
                {lesson.examples.map((ex, i) => (
                  <Card key={i} style={{ padding: '1rem' }}>
                    <Typography variant="p" style={{ marginBottom: '0.5rem', fontWeight: 500 }}>
                      "{ex.text}"
                    </Typography>
                    <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                      ¿Es proposición? <strong>{ex.isProposition ? 'Sí' : 'No'}</strong>
                      {ex.isProposition && (
                        <span style={{ marginLeft: '1rem' }}>
                          Valor: <strong>{ex.value ? 'Verdadero' : 'Falso'}</strong>
                        </span>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            )}

            {lesson.interactiveExamples && (
              <InteractiveExampleList examples={lesson.interactiveExamples} />
            )}

          </div>
        </div>
      )}

      {lesson.connectors && (
        <div style={{ marginBottom: '2rem' }}>
          <Typography variant="h3">Conectores Lógicos</Typography>
          <div className="connectors-grid">
            {lesson.connectors.map((conn, i) => (
              <Card key={i} className="connector-card">
                <div style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--accent-color)' }}>
                  {conn.symbol}
                </div>
                <Typography variant="p" style={{ marginBottom: '0.25rem', fontWeight: 600 }}>{conn.name}</Typography>
                <Typography variant="span" style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{conn.meaning}</Typography>
              </Card>
            ))}
          </div>
        </div>
      )}

      {lesson.concepts && (
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {lesson.concepts.map((concept, i) => (
              <Card key={i} style={{ padding: '1rem' }}>
                <Typography variant="h3" style={{ marginBottom: '0.5rem' }}>{concept.name}</Typography>
                <Typography variant="p" style={{ marginBottom: 0 }}>{concept.desc}</Typography>
              </Card>
            ))}
          </div>
        </div>
      )}

      {lesson.truthTableExamples && (
        <div style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
          {lesson.truthTableExamples.map((tableEx, idx) => (
            <div key={idx} style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="h3" style={{ marginBottom: '1rem' }}>Tabla de Verdad: {tableEx.name}</Typography>
              <table className="concept-truth-table">
                <thead>
                  <tr>
                    {tableEx.headers.map((h, i) => (
                      <th key={i}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tableEx.rows.map((row, i) => (
                    <tr key={i}>
                      {row.map((cell, j) => (
                        <td key={j} className={j === row.length - 1 ? 'result-cell' : ''}>
                          {cell ? 'V' : 'F'}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const InteractiveExampleList = ({ examples }) => {
  const maxRefreshes = 5;
  const examplesPerView = 3;
  const [refreshCount, setRefreshCount] = useState(0);

  const startIndex = refreshCount * examplesPerView;
  const currentExamples = examples.slice(startIndex, startIndex + examplesPerView);

  const handleRefresh = () => {
    if (refreshCount < maxRefreshes) {
      setRefreshCount(prev => prev + 1);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div className="interactive-header">
        <Typography variant="h4" style={{ margin: 0, fontSize: '1rem' }}>¡Tu turno!</Typography>
        {refreshCount < maxRefreshes && (
          <Button variant="outline" onClick={handleRefresh} style={{ padding: '0.25rem 0.5rem', fontSize: '0.875rem' }}>
            🔄 Nuevos ({refreshCount}/5)
          </Button>
        )}
      </div>
      {currentExamples.map((ex, i) => (
        <InteractiveExample key={`${refreshCount}-${i}`} example={ex} />
      ))}
    </div>
  );
};

const InteractiveExample = ({ example }) => {
  const [answered, setAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleAnswer = (answer) => {
    const correct = answer === example.isProposition;
    setAnswered(true);
    setIsCorrect(correct);
    
    if (correct) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  return (
    <Card style={{ padding: '1rem' }}>
      <Typography variant="p" style={{ marginBottom: '0.5rem', fontWeight: 500 }}>
        "{example.text}"
      </Typography>
      {!answered ? (
        <div className="interactive-actions">
          <span>¿Es proposición?</span>
          <Button variant="outline" style={{ padding: '0.25rem 0.5rem', minWidth: '40px' }} onClick={() => handleAnswer(true)}>Sí</Button>
          <Button variant="outline" style={{ padding: '0.25rem 0.5rem', minWidth: '40px' }} onClick={() => handleAnswer(false)}>No</Button>
        </div>
      ) : (
        <div style={{ fontSize: '0.875rem', marginTop: '0.5rem', color: isCorrect ? 'var(--success-color)' : 'var(--error-color)' }}>
          {isCorrect ? '¡Correcto!' : 'Incorrecto.'}
          {' '}
          <span style={{ color: 'var(--text-muted)' }}>
            ({example.isProposition ? 'Es una proposición' : 'No es una proposición'})
          </span>
        </div>
      )}
    </Card>
  );
};
