import React from 'react';
import PropTypes from 'prop-types';

import Card from '../Card';

export default function Board({ cards, flipped, handleClick }) {
    return (
        <div className="board">
            {cards.map((card) => (
                <Card 
                    key={card.id}    
                    id={card.id}
                    type={card.type}
                    width={100}
                    height={100}
                    flipped={flipped.includes(card.id)}
                    handleClick={() => handleClick(card.id)}
                />
            ))}
        </div>
    )
}

Board.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    flipped: PropTypes.arrayOf(PropTypes.number).isRequired,
    handleClick: PropTypes.func.isRequired
}