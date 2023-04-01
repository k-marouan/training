import React from 'react';
import Card from '../Card/Card';

const CardList = ({ namesList, deleteHandler }) => {
    const cards = namesList.map(({ id, ...otherProps }) => (
        <Card key={id} {...otherProps} id={id} deleteElemnt={ deleteHandler } />
    ));
  return (
    <div>{ cards }</div>
  )
}

export default CardList