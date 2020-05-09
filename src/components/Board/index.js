import React, { useEffect, useState } from 'react';

import api from '../../services/api';
import Pile from '../Pile';
import Card from '../Card';
import {
  Container,
  RestartButton,
  Title,
  Subtitle,
  BoardContainer,
} from './styles';

function Main({ language }) {
  const [deck, setDeck] = useState([]);
  //State to store the cards.

  const [rounds, setRounds] = useState(0);
  //State with the number of rounds played

  const [instructionIndex, setInstructionsIndex] = useState(0);

  useEffect(() => {
    /*
    This function make an api request to get 21 cards from deckofcardsapi,
    then and divide the in 3 arrays with 7 cards each
    */

    api.get('new/draw/?count=21').then((response) => {
      const cards = response.data.cards;

      const pile1 = cards.slice(0, 7);
      const pile2 = cards.slice(7, 14);
      const pile3 = cards.slice(14, 21);

      const newDeck = [];
      newDeck.push(pile1);
      newDeck.push(pile2);
      newDeck.push(pile3);

      setDeck([[...pile1], [...pile2], [...pile3]]);
    });
  }, []);

  function restart() {
    /*
      This function restart the game by shuffling the cards and , set the rounds
      back to 0 and set the instructions to the initial instruction
    */
    shuffleCards();

    setRounds(0);

    setInstructionsIndex(0);
  }

  function playRound(midPileIndex) {
    /*
      this function is called to play a round, when the user click the button
      of pile, receiving the mid pile index, that is passed to the shuffle cards
      function, increase the number of rounds, and verify if is either the first
      or the last round, to change the instruction
    */
    const newRounds = rounds + 1;
    setRounds(newRounds);
    shuffleCards(midPileIndex);
    if (rounds >= 0) {
      setInstructionsIndex(1);
    }

    if (rounds >= 2) {
      setInstructionsIndex(2);
    }
  }

  function shuffleCards(midPileIndex = 0) {
    /* 
      This function is where the magic is done, arranging the cards, putting
      the items of the selected pile in the middle of a new array of cards
      ,and rearraging the cards.
    */
    const a = [0, 1, 2];
    a.splice(midPileIndex, 1);

    const [firstPileIndex, lastPileIndex] = a;

    const fullDeck = [
      ...deck[firstPileIndex],
      ...deck[midPileIndex],
      ...deck[lastPileIndex],
    ];

    const newDeck = [[], [], []];

    fullDeck.forEach((card, index) => {
      newDeck[index % 3].push(card);
    });

    setDeck(newDeck);
  }

  return (
    <Container>
      <Title>{language.title}</Title>
      {rounds <= 2 && <Subtitle>{language.subtitle}</Subtitle>}
      <Subtitle>{language.instructions[instructionIndex]}</Subtitle>
      <BoardContainer>
        {rounds <= 2 &&
          deck.map((pile, index) => (
            <Pile
              cards={pile}
              key={index}
              index={index}
              playRound={playRound}
            />
          ))}
      </BoardContainer>
      {rounds > 2 && (
        <>
          <Card data={deck[1][3]} />
          <RestartButton onClick={restart}>
            {language.restartButton}
          </RestartButton>
        </>
      )}
    </Container>
  );
}

export default Main;
