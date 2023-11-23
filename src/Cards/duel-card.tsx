import React from 'react';
import duelCard from '../assets/duel.png'
import './card-style.css'

interface CardProps {
  onClick: () => void;
}

const DuelCard: React.FC<CardProps> = ({ onClick }) => {
  return (
    <div className="card" 
      style={{ 
        backgroundImage: `url(${duelCard})`,
        backgroundSize: 'cover',
        width: '150px', 
        height: '250px',
        borderRadius: 15,
        borderWidth : '5px',
        borderStyle: 'solid',
        borderColor: 'grey',

      }} 
      onClick={onClick}
    >
    </div>
  );
};
export default DuelCard;
