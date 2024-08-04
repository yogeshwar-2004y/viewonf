import React from 'react';
import './NewLaunchHotelsPage.css';
import Header from './Header';

const restaurants = [
  {
    name: 'The Cascade Restaurant',
    rating: 4.5,
    cuisines: 'Chinese, Asian',
    location: 'RS Puram',
    offer: 'Buy 1 Get 1 Free on select dishes',
    image: 'src/assets/res2.j',
  },
  {
    name: 'On The Go',
    rating: 4.3,
    cuisines: 'Italian, Continental',
    location: 'Race Course',
    offer: 'Complimentary dessert with dinner',
    image: 'src/assets/res3.jpg',
  },
  {
    name: 'Bird on Tree',
    rating: 4.3,
    cuisines: 'Indian, Continental',
    location: 'Avinashi Road',
    offer: ' 20% off on total bill for couples',
    image: 'src/assets/res2.jpg',
  },
  // Add more restaurants as needed
];

const Couples = () => {
  return (
    <div className="head">
      <Header>
      <header className="header">
        <img src="src/assets/logo.png" alt="Viewon Logo" className="logo" />
      </header>
      </Header>
      <div className="new-launch-hotels-page">
        <h1>Cute Couples</h1>
        <div className="restaurants-list">
          {restaurants.map((restaurant, index) => (
            <div key={index} className="restaurant-card">
              <div className="offer">{restaurant.offer}</div>
              <img src={restaurant.image} alt={restaurant.name} className="restaurant-image" />
              <div className="restaurant-info">
                <h2>{restaurant.name}</h2>
                <p>{restaurant.rating} ★</p>
                <p>{restaurant.cuisines}</p>
                <p>{restaurant.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Couples;
