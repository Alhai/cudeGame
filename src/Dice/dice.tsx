import React, { Component } from 'react';
import './dice-style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons';

type DieProps = {
  face: string;
  rolling: boolean;
};

class Dice extends Component<DieProps> {
  selectIcon(face: string) {
    switch(face) {
      case 'one': return faDiceOne;
      case 'two': return faDiceTwo;
      case 'three': return faDiceThree;
      case 'four': return faDiceFour;
      case 'five': return faDiceFive;
      case 'six': return faDiceSix;
      default: return faDiceOne; 
    }
  }

  render() {
    const { face, rolling } = this.props;
    const icon = this.selectIcon(face); 

    return (
      <div>
        <FontAwesomeIcon icon={icon} className={`Dice ${rolling ? 'Dice-shaking' : ''}  Dice-large`} />
      </div>
    );
  }
}

export default Dice;
