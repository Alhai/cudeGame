import React from 'react';
import eventCard from '../assets/event.png'
import './card-style.css'

interface CardProps {
  onClick: () => void;
}

const EventCard: React.FC<CardProps> = ({ onClick }) => {
  return (
    <div className="card" 
      style={{ 
        backgroundImage: `url(${eventCard})`,
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
export default EventCard;
