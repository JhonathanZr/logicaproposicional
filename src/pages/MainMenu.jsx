import React from 'react';
import { Typography } from '../components/atoms/Typography';
import { LevelCard } from '../components/organisms/LevelCard';
import { levels } from '../data/lessons';
import './MainMenu.css';

export const MainMenu = ({ onSelectLevel }) => {
  return (
    <div className="main-menu-container">
      <div className="main-menu-header">
        <Typography variant="h1">Lógica Proposicional</Typography>
        <Typography variant="p" className="subtitle">
          Aprende y pon a prueba tus conocimientos sobre tablas de verdad y proposiciones en esta experiencia interactiva.
        </Typography>
      </div>
      
      <div className="levels-grid">
        {levels.map((level) => (
          <LevelCard 
            key={level.id}
            level={level}
            onClick={() => onSelectLevel(level)}
          />
        ))}
      </div>
    </div>
  );
};
