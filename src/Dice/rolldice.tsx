import React, { Component } from 'react';
import './rolldice-style.css';
import Dice from './dice';
import { Button } from '@mui/material';
import '../components/home-button-style.css';

interface RolldiceProps {
    sides: string[];
}

interface RolldiceState {
    dice1: string;
    rolling: boolean;
}

class Rolldice extends Component<RolldiceProps, RolldiceState> {

    static defaultProps: RolldiceProps = {
        sides: ['one', 'two', 'three', 'four', 'five', 'six'],
    };

    constructor(props: RolldiceProps) {

        super(props);

        this.state = {
            dice1: 'one',
            rolling: false,
        };

        this.roll = this.roll.bind(this);
    }

    roll() {
        const { sides } = this.props;
        this.setState({
            dice1: sides[Math.floor(Math.random() * sides.length)],
            rolling: true,
        });

        setTimeout(() => {
            this.setState({ rolling: false });
        }, 1000);
    }

    render() {
        const { dice1, rolling } = this.state;
        const handleBtn = rolling ? 'Rolldice-rolling' : '';

        return (
            <div className='Rolldice'>
                <div className='Rolldice-container'>
                    <Dice face={dice1} rolling={rolling} />
                </div>
                <Button
                    variant="contained"
                    className={handleBtn}
                    disabled={rolling}
                    onClick={this.roll}
                    sx={{
                        width: '15em',
                        padding: '1.5em',
                        borderRadius: '10px',
                        color: 'white',
                        fontFamily: 'League Spartan, sans-serif',
                        backgroundColor: 'black',  
                        border :'1px solid white',              
                        '&:hover': {
                            backgroundColor: 'grey',
                            opacity: 0.7,
                        },
                    }}
                >
                    {rolling ? 'Rolling...' : 'Roll Dice !'}
                </Button>
            </div>
        );
    }
}

export default Rolldice;
