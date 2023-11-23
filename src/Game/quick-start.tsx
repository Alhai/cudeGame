import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Rolldice from '../Dice/rolldice';
import { Box } from '@mui/material';
import QuestionCard from '../Cards/question-card';
import DuelCard from '../Cards/duel-card';
import EventCard from '../Cards/event-card';
import CardDialog from '../Cards/card-dialog';
import EventDialog from '../Cards/card-event-dialog';
import data from '../JSON/data.json';
import duelData from '../JSON/duel.json';
import eventData from '../JSON/event.json';
import '../Game/quick-start-style.css';

const Quickstart = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [duels, setDuels] = useState<Duel[]>(duelData.duel);
    const [events, setEvents] = useState<Event[]>(eventData.eventList);
    const [currentQuestion, setCurrentQuestion] = useState<{ question: string; answer: string } | null>(null);
    const [currentDuel, setCurrentDuelQuestion] = useState<{ question: string; answer: string } | null>(null);
    const [currentEvent, setCurrentEvent] = useState<{ event: string; } | null>(null);
    const [currentDuelDomain, setCurrentDuelDomain] = useState(""); 
    const [currentEventDomain, setCurrentEventDomain] = useState(""); 
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    type Category = {
        color: string;
        domain: string;
        questions: { question: string; answer: string }[];
    };
    
    type Duel = {
        color: string;
        domain: string;
        questions: { question: string; answer: string }[];
    };
    
    type Event = {
        color: string;
        domain: string;
        events: { event: string }[];
    };

    useEffect(() => {
        setCategories(data.categories);
        setDuels(duelData.duel);
        setEvents(eventData.eventList);
    }, []);

    const handleQuestionCardClick = (category : any) => {
        if (category.questions && category.questions.length > 0) {
            const randomIndex = Math.floor(Math.random() * category.questions.length);
            setCurrentQuestion(category.questions[randomIndex]);
            setIsDialogOpen(true);
        }
    };

    const handleDuelCardClick = () => {
        const randomDuel = duels[Math.floor(Math.random() * duels.length)];
        const randomIndex = Math.floor(Math.random() * randomDuel.questions.length);
        setCurrentDuelQuestion(randomDuel.questions[randomIndex]);
        setCurrentDuelDomain(randomDuel.domain); 
        setIsDialogOpen(true);
    };

    const handleEventCardClick = () => {
        const randomEvent = events[Math.floor(Math.random() * events.length)];
        const randomIndex = Math.floor(Math.random() * randomEvent.events.length);
        setCurrentEvent(randomEvent.events[randomIndex]);
        setCurrentEventDomain(randomEvent.domain); 
        setIsDialogOpen(true);
    };

    const handleCloseModal = () => {
        setCurrentQuestion(null);
        setCurrentDuelQuestion(null);
        setCurrentEvent(null);
        setCurrentDuelDomain("");
        setCurrentEventDomain("");
        setIsDialogOpen(false);
    };

    return (
        <Box display="flex" flexDirection="column" minHeight="100vh" className="quickstart-background">
            <Header />
            <Box display="flex" justifyContent="center" marginTop="1rem">
                <Rolldice />
            </Box>
            <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-around"
                alignItems="flex-start"
                marginTop="1rem"
                flexWrap="wrap"
                gap="20px"
            >
                {categories.map((category) => (
                    <Box key={category.color} textAlign="center">
                        <QuestionCard onClick={() => handleQuestionCardClick(category)} />
                        <div style={{ fontFamily: 'League Spartan, sans-serif', color : 'white',fontWeight: 'bold' }}>
                            {category.domain}
                        </div>
                    </Box>
                ))}
                {currentQuestion && (
                    <CardDialog
                        question={currentQuestion.question}
                        answer={currentQuestion.answer}
                        open={isDialogOpen}
                        onClose={handleCloseModal} />
                )}
                <Box textAlign="center">
                    <DuelCard onClick={handleDuelCardClick} />
                    {currentDuelDomain && (
                        <div style={{ fontFamily: 'League Spartan, sans-serif', color : 'white', fontWeight: 'bold' }}>
                            {currentDuelDomain} 
                        </div>
                    )}
                </Box>
                <Box textAlign="center">
                    <EventCard onClick={handleEventCardClick} />
                    {currentEventDomain && (
                        <div style={{ fontFamily: 'League Spartan, sans-serif', color : 'white', fontWeight: 'bold' }}>
                            {currentEventDomain}
                        </div>
                    )}
                </Box>
                {currentEvent && (
                    <EventDialog
                        eventText={currentEvent.event}
                        open={isDialogOpen}
                        onClose={handleCloseModal} />
                )}
            </Box>
            <Footer />
              </Box>  
    )    
                }
export default Quickstart;
