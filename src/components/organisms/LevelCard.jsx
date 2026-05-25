import React from 'react';
import { Card } from '../atoms/Card';
import { Typography } from '../atoms/Typography';
import { Badge } from '../atoms/Badge';
import './LevelCard.css';

export const LevelCard = ({ level, onClick, disabled }) => {
  return (
    <Card 
      className={`level-card ${disabled ? 'level-card-disabled' : ''}`}
      onClick={disabled ? undefined : onClick}
    >
      <div className="level-card-header">
        <Typography variant="h3">{level.title}</Typography>
        <Badge variant={
          level.id === 'easy' ? 'success' : 
          level.id === 'medium' ? 'warning' : 'info'
        }>
          {level.badge}
        </Badge>
      </div>
      <Typography variant="p" className="level-card-desc">
        {level.description}
      </Typography>
      <div className="level-card-footer">
        <span className="lesson-count">{level.lessons.length} lecciones</span>
        {!disabled && <span className="action-text">Jugar →</span>}
        {disabled && <span className="action-text disabled-text">Bloqueado</span>}
      </div>
    </Card>
  );
};
