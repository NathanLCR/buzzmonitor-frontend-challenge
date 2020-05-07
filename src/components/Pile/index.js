import React from 'react';
import Card from '../Card';

function Pile({ cards, time }) {
  return (
    <>
      {cards.map((card, index) => (
        <Card key={index} data={card} />
      ))}
    </>
  );
}

export default Pile;
