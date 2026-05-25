import React, { useState, useEffect } from 'react';
import { Typography } from '../atoms/Typography';
import { Button } from '../atoms/Button';
import { Card } from '../atoms/Card';
import confetti from 'canvas-confetti';
import './QuizViewer.css';

export const QuizViewer = ({ lesson, onComplete }) => {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  // States for Truth Table Quiz
  const [tableAnswers, setTableAnswers] = useState({});
  const [tableValidated, setTableValidated] = useState(false);
  const [tableErrors, setTableErrors] = useState({});

  // States for Identify Phase
  const [identifyTypeSelected, setIdentifyTypeSelected] = useState(null);
  const [isTypeCorrect, setIsTypeCorrect] = useState(null);

  useEffect(() => {
    setCurrentQuestionIdx(0);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setTableAnswers({});
    setTableValidated(false);
    setTableErrors({});
    setIdentifyTypeSelected(null);
    setIsTypeCorrect(null);
  }, [lesson.id]);

  const resetState = () => {
    setSelectedAnswer(null);
    setIsCorrect(null);
    setIdentifyTypeSelected(null);
    setIsTypeCorrect(null);
  };

  const handleSelect = (option, answer) => {
    if (isCorrect) return; // prevent changing after correct
    const correct = option === answer;
    setSelectedAnswer(option);
    setIsCorrect(correct);

    if (correct) {
      triggerConfetti();
    }
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleNextQuestion = () => {
    if (lesson.questions && currentQuestionIdx < lesson.questions.length - 1) {
      setCurrentQuestionIdx(currentQuestionIdx + 1);
      resetState();
    } else {
      onComplete();
    }
  };

  const renderMappingQuiz = () => {
    const q = lesson.questions[currentQuestionIdx];
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div className="quiz-question-box">
          <Typography variant="h3" dangerouslySetInnerHTML={{ __html: `"${q.sentence}"` }} />
          <div style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>
            {['p', 'q', 'r', 's'].map(prop => q[prop] ? <p key={prop}>{prop} = {q[prop]}</p> : null)}
          </div>
        </div>

        <div className="quiz-options-grid">
          {q.options.map((opt) => (
            <Card 
              key={opt} 
              active={selectedAnswer === opt}
              onClick={() => handleSelect(opt, q.answer)}
              style={{ textAlign: 'center', fontSize: '1.25rem', padding: '1rem' }}
            >
              {opt}
            </Card>
          ))}
        </div>
      </div>
    );
  };

  const renderIdentifyQuiz = () => {
    const q = lesson.questions[currentQuestionIdx];
    
    // Extract variables dynamically from the first row
    const firstRow = q.table[0];
    const variables = Object.keys(firstRow).filter(k => k !== 'result');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div className="quiz-question-box">
          <Typography variant="h2">{q.expression}</Typography>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
            <table style={{ borderCollapse: 'collapse', width: 'auto', minWidth: '200px' }}>
              <thead>
                <tr>
                  {variables.map(v => (
                    <th key={v} style={{ borderBottom: '1px solid var(--border-color)', padding: '0.5rem' }}>{v}</th>
                  ))}
                  <th style={{ borderBottom: '1px solid var(--border-color)', padding: '0.5rem' }}>Result</th>
                </tr>
              </thead>
              <tbody>
                {q.table.map((row, i) => (
                  <tr key={i}>
                    {variables.map(v => (
                      <td key={v} style={{ textAlign: 'center', padding: '0.5rem' }}>{row[v] ? 'V' : 'F'}</td>
                    ))}
                    <td style={{ textAlign: 'center', padding: '0.5rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>{row.result ? 'V' : 'F'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="quiz-identify-options-grid">
          {q.options.map((opt) => (
            <Card 
              key={opt} 
              active={selectedAnswer === opt}
              onClick={() => handleSelect(opt, q.answer)}
              style={{ textAlign: 'center', padding: '1rem' }}
            >
              {opt}
            </Card>
          ))}
        </div>
      </div>
    );
  };

  const handleTableToggle = (rowIndex, colName) => {
    if (tableValidated && Object.keys(tableErrors).length === 0) return; // All correct

    const key = `${rowIndex}_${colName}`;
    setTableAnswers(prev => {
      const current = prev[key];
      // Toggle logic: undefined -> true -> false -> undefined
      let nextValue;
      if (current === undefined) nextValue = true;
      else if (current === true) nextValue = false;
      else nextValue = undefined;

      return { ...prev, [key]: nextValue };
    });
  };

  const validateTable = () => {
    let errors = {};
    let isAllCorrect = true;

    const interactiveCols = lesson.fillAll 
      ? [...lesson.variables, ...(lesson.intermediateColumns || []), lesson.expression]
      : [lesson.expression];

    lesson.expectedTable.forEach((row, i) => {
      interactiveCols.forEach(col => {
        const key = `${i}_${col}`;
        const userAnswer = tableAnswers[key];
        
        const expectedValue = col === lesson.expression ? row.result : row[col];

        if (userAnswer !== expectedValue) {
          errors[key] = true;
          isAllCorrect = false;
        }
      });
    });

    setTableErrors(errors);
    setTableValidated(true);

    if (isAllCorrect) {
      triggerConfetti();
    }
  };

  const renderTruthTableQuiz = () => {
    const isSuccess = tableValidated && Object.keys(tableErrors).length === 0;

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
        <Typography variant="h3">Construye la Tabla para {lesson.expression}</Typography>
        
        <div style={{ width: '100%', overflowX: 'auto' }}>
          <table className="interactive-truth-table" style={{ margin: '0 auto' }}>
            <thead>
              <tr>
                {lesson.variables.map(v => (
                  <th key={v}>{v}</th>
                ))}
                {lesson.intermediateColumns && lesson.intermediateColumns.map(c => (
                  <th key={c}>{c}</th>
                ))}
                <th>{lesson.expression}</th>
              </tr>
            </thead>
            <tbody>
              {lesson.expectedTable.map((row, i) => {
                const interactiveCols = lesson.fillAll 
                  ? [...lesson.variables, ...(lesson.intermediateColumns || []), lesson.expression]
                  : [lesson.expression];

                const hasRowError = interactiveCols.some(col => tableValidated && tableErrors[`${i}_${col}`]);
                const isCorrectRow = tableValidated && interactiveCols.every(col => !tableErrors[`${i}_${col}`]);

                const renderCell = (col, isFinal) => {
                  const key = `${i}_${col}`;
                  const isInteractive = lesson.fillAll || isFinal;
                  
                  if (isInteractive) {
                    const userAnswer = tableAnswers[key];
                    let cellDisplay = '';
                    if (userAnswer === true) cellDisplay = 'V';
                    if (userAnswer === false) cellDisplay = 'F';
                    const hasCellError = tableValidated && tableErrors[key];

                    return (
                      <td key={col} className={isFinal ? "action-cell" : "var-cell"}>
                        <button 
                          className={`table-toggle-btn ${userAnswer !== undefined ? 'has-value' : ''} ${hasCellError ? 'btn-error' : (tableValidated ? 'btn-success' : '')}`}
                          onClick={() => handleTableToggle(i, col)}
                          disabled={isSuccess}
                        >
                          {cellDisplay}
                        </button>
                      </td>
                    );
                  } else {
                    return <td key={col} className="var-cell">{row[col] ? 'V' : 'F'}</td>;
                  }
                };

                return (
                  <tr key={i} className={hasRowError ? 'row-error' : (isCorrectRow ? 'row-success' : '')}>
                    {lesson.variables.map(v => renderCell(v, false))}
                    {lesson.intermediateColumns && lesson.intermediateColumns.map(c => renderCell(c, false))}
                    {renderCell(lesson.expression, true)}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {!isSuccess ? (
          <Button variant="primary" onClick={validateTable}>
            Verificar Tabla
          </Button>
        ) : lesson.identifyOptions ? (
          <div style={{ textAlign: 'center', marginTop: '1rem', width: '100%' }}>
            <Typography variant="h3" style={{ color: 'var(--success-color)', marginBottom: '1rem' }}>
              ¡Tabla Correcta!
            </Typography>
            <Typography variant="h4" style={{ marginBottom: '1rem' }}>
              ¿Qué tipo de resultado es?
            </Typography>
            <div className="quiz-identify-options-grid" style={{ marginBottom: '1rem' }}>
              {lesson.identifyOptions.map(opt => (
                <Card 
                  key={opt} 
                  active={identifyTypeSelected === opt}
                  onClick={() => {
                    if (isTypeCorrect) return;
                    setIdentifyTypeSelected(opt);
                    const correct = opt === lesson.identifyAnswer;
                    setIsTypeCorrect(correct);
                    if (correct) triggerConfetti();
                  }}
                  style={{ textAlign: 'center', padding: '1rem' }}
                >
                  {opt}
                </Card>
              ))}
            </div>
            {identifyTypeSelected && (
              <div style={{ marginBottom: '1rem' }}>
                <Typography variant="p" style={{ color: isTypeCorrect ? 'var(--success-color)' : 'var(--error-color)', fontWeight: 'bold' }}>
                  {isTypeCorrect ? '¡Correcto!' : 'Incorrecto, intenta de nuevo.'}
                </Typography>
              </div>
            )}
            {isTypeCorrect && <Button onClick={onComplete}>Continuar</Button>}
          </div>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <Typography variant="h3" style={{ color: 'var(--success-color)', marginBottom: '1rem' }}>
              ¡Tabla Correcta!
            </Typography>
            <Button onClick={onComplete}>Continuar</Button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="quiz-viewer">
      <div className="quiz-viewer-header">
        <Typography variant="h2" style={{ margin: 0 }}>{lesson.title}</Typography>
        {lesson.questions && (
          <Typography variant="span" style={{ color: 'var(--text-muted)', fontWeight: 500, backgroundColor: 'var(--surface-color)', padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
            Ejercicio {currentQuestionIdx + 1} / {lesson.questions.length}
          </Typography>
        )}
      </div>
      
      {lesson.type === 'quiz-mapping' && renderMappingQuiz()}
      {lesson.type === 'quiz-identify' && renderIdentifyQuiz()}
      {lesson.type === 'quiz-truthtable' && renderTruthTableQuiz()}

      {selectedAnswer && lesson.type !== 'quiz-truthtable' && (
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Typography variant="h3" style={{ color: isCorrect ? 'var(--success-color)' : 'var(--error-color)' }}>
            {isCorrect ? '¡Correcto!' : 'Incorrecto, intenta de nuevo.'}
          </Typography>
          {isCorrect && (
            <Button onClick={handleNextQuestion} style={{ marginTop: '1rem' }}>
              Continuar
            </Button>
          )}
        </div>
      )}
    </div>
  );
};
