import React from 'react';
import Card from '../Card';

import { PileContainer, PileIndex } from './styles';

function Pile({ cards, index, playRound }) {
  return (
    <PileContainer onClick={() => playRound(index)}>
      <PileIndex>{index + 1}</PileIndex>
      {cards.map((card, index) => (
        <Card key={index} data={card} />
      ))}
    </PileContainer>
  );
}

export default Pile;
