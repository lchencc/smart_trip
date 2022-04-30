import React from 'react';
import CardItem from './CardItem.jsx';

import './styles/Cards.css';

import waterfall from '../assets/images/img-9.jpg';
import bali from '../assets/images/img-2.jpg';
import camel from '../assets/images/img-8.jpg';
import football from '../assets/images/img-4.jpg';
import ocean from '../assets/images/img-3.jpg';

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these attractions</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={waterfall}
              text="Witness a wedding cerenomy in the Dome"
              label="Happiness"
              path="/plan"
            />
            <CardItem
              src={bali}
              text="Travel through the Islands in a Private Cruise"
              label="Relex"
              path="/plan"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={ocean}
              text="Set Sail in the Ocean visiting Uncharted Waters"
              label="Mystery"
              path="/plan"
            />
            <CardItem
              src={football}
              text="Watch sunset on Top of the Mountains"
              label="Adventure"
              path="/plan"
            />
            <CardItem
              src={camel}
              text="Explore the city during the night"
              label="Thrill"
              path="/plan"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
