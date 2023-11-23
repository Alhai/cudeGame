import React from 'react';
import questionCard from '../assets/question.png'
import './card-style.css'
import { grey } from '@mui/material/colors';
interface CardProps {
  onClick: () => void;
}

const QuestionCard: React.FC<CardProps> = ({ onClick }) => {
  return (
    <div className="card" 
      style={{ 
        backgroundImage: `url(${questionCard})`,
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
export default QuestionCard;

// -----------------------------------------

// import React, { useState } from 'react';
// import './card-style.css';
// import questionCard from '../assets/question.png';

// interface CardProps {
//   onClick: () => void;
// }

// const QuestionCard: React.FC<CardProps> = ({ onClick }) => {
//   const [isFlipped, setIsFlipped] = useState(false);

//   const handleClick = () => {
//     setIsFlipped(!isFlipped);
//     onClick();
//   };

//   return (
//     <div className="card-container" onClick={handleClick}>
//       <div className={`card ${isFlipped ? 'is-flipped' : ''}`}>
//         <div className="card-front" style={{ backgroundImage: `url(${questionCard})` }}></div>
//         <div className="card-back">
//           {/* Contenu du verso de la carte */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QuestionCard;

