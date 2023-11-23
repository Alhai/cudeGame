import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import './home-button-style.css';
import DialogRules from './rules-dialog'
import { Link } from 'react-router-dom';
const Homebutton = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box display="flex" justifyContent="center" alignItems="center">

            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                <Button variant="contained" className="button" onClick={handleClickOpen} sx={{ marginBottom: '1rem', fontFamily: 'League Spartan, sans-serif', color: 'black' }}>Games Rules</Button >
                <DialogRules open={open} onClose={handleClose} title="Rules of Game" >
                    <div>
                        <h2>Game Objective</h2>
                        <p>Players, representing teams from a communication agency, must collect six project cards (Typography, Colorimetry, Marketing, Theme, Graphic Elements, Website) to complete a project for their client company.</p>

                        <h2>Game Material</h2>
                        <ul>
                            <li>Game board with different spaces (Weeks, Competition, Events)</li>
                            <li>Dice</li>
                            <li>Project Cards</li>
                            <li>Company Cards</li>
                            <li>Event Cards</li>
                            <li>Question Cards (Weeks and Competition)</li>
                        </ul>

                        <h2>Setup</h2>
                        <p>Each team receives a random Company card.</p>

                        <h2>Beginning of the Game</h2>
                        <p>Each team rolls the dice once. The team with the highest number starts. In case of a tie, the concerned teams reroll the dice once to determine the first player.</p>

                        <h2>Course of a Game</h2>
                        <ol>
                            <li>Game Turn: In turn, each team rolls the dice and advances their token the indicated number of spaces.</li>
                            <br />
                            <li>Action According to the Space:
                                <ul>
                                    <li>Week Space: The team draws a Question card from the corresponding category and tries to answer it. A correct answer allows drawing a Project card.</li>
                                    <li>Competition Space: The team chooses an opponent for a duel. The duel consists of a general culture question. The winning team can either draw a Project card or exchange a card with the opponent.</li>
                                    <li>Event Space: The team draws an Event card and follows the instructions, which may include minor penalties.</li>
                                </ul>
                            </li>
                        </ol>

                        <h2>Game Balancing</h2>
                        <ul>
                            <li>Limited Duels: A team cannot be chosen for a duel more than two consecutive times.</li>
                            <li>Balanced Penalties: The penalties of the Event cards should not be too severe to avoid excessively penalizing players.</li>
                        </ul>

                        <h2>End of the Game</h2>
                        <p>The game ends when a team collects all six Project cards. This team is declared the winner.</p>
                        <p>An estimated duration of the game is 60 to 90 minutes.</p>
                    </div>

                </DialogRules>
                <Link to="/quick-start" style={{ textDecoration: 'none' }}>
                    <Button variant="contained" className="button" sx={{ marginBottom: '1rem', fontFamily: 'League Spartan, sans-serif', color: 'black' }}>QuickStart</Button >
                </Link>

            </Box>
        </Box>


    );
};

export default Homebutton;
