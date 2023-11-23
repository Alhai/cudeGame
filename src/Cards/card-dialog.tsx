import React, { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import './card-style.css'; 

interface CardDialogProps {
  question: string;
  answer: string;
  open: boolean;
  onClose: () => void;
}

const CardDialog: React.FC<CardDialogProps> = ({ question, answer, open, onClose }) => {
    const [timer, setTimer] = useState(30);
    const [showAnswer, setShowAnswer] = useState(false);

    let intervalId: NodeJS.Timeout;

    useEffect(() => {

        if (open && timer > 0) {
            intervalId = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
        } else if (timer === 0) {
            setShowAnswer(true);
            clearInterval(intervalId);
        }

        return () => clearInterval(intervalId);
    }, [timer, open]);

    const handleClose = () => {
        setTimer(30);
        setShowAnswer(false);
        onClose();
    };

    return (
        <Dialog 
          open={open} 
          onClose={handleClose}
          PaperProps={{
            className: 'dialog-appear',
            style: {
              width: '250px', 
              height: '350px', 
              overflow: 'hidden',
              borderRadius: '15px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }
          }}
        >
            <DialogTitle >{question}</DialogTitle>
            <DialogContent>
                {!showAnswer ? (
                    <h2 style={{ color: timer <= 10 ? 'red' : 'black' }}>{timer} sec</h2>
                ) : (
                    <p>{answer}</p>
                )}
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Fermer</Button>
            </DialogActions>
        </Dialog>
    );
};

export default CardDialog;

// --------------------------------------------

// import React, { useState, useEffect } from 'react';
// import Dialog from '@mui/material/Dialog';
// import DialogTitle from '@mui/material/DialogTitle';
// import DialogContent from '@mui/material/DialogContent';
// import DialogActions from '@mui/material/DialogActions';
// import Button from '@mui/material/Button';
// import './card-dialog-style.css';
// import questionCard from '../assets/question.png';

// interface CardDialogProps {
//   question: string;
//   answer: string;
//   open: boolean;
//   onClose: () => void;
// }

// const CardDialog: React.FC<CardDialogProps> = ({ question, answer, open, onClose }) => {
//     const [isFlipped, setIsFlipped] = useState(false);

//     useEffect(() => {
//         if (open) {
//             setIsFlipped(true);
//         } else {
//             setIsFlipped(false);
//         }
//     }, [open]);

//     const handleClose = () => {
//         onClose();
//     };

//     return (
//         <Dialog open={open} onClose={handleClose} style={{ overflow: 'hidden' }}>
//             <div className={`card ${isFlipped ? 'is-flipped' : ''}`}>
//                 <div className="card-front" style={{ backgroundImage: `url(${questionCard})` }}>
//                     <DialogTitle>{question}</DialogTitle>
//                 </div>
//                 <div className="card-back">
//                     <DialogContent>
//                         <p>{answer}</p>
//                     </DialogContent>
//                     <DialogActions>
//                         <Button onClick={handleClose}>Fermer</Button>
//                     </DialogActions>
//                 </div>
//             </div>
//         </Dialog>
//     );
// };

// export default CardDialog;

// // --------------------------------------------

