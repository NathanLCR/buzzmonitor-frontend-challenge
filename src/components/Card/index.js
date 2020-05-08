import React from 'react';

import { Img } from './styles';

function Card({ data }) {
  return <Img src={data.image} alt={`${data.value} of ${data.suit}`} />;
}

export default Card;
