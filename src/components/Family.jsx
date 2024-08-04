import React from 'react';
import './NewLaunchHotelsPage.css';
import Header from './Header';

const restaurants = [
  {
    name: 'Shree Anandhaas',
    rating: 4.5,
    cuisines: 'South Indian, North Indian',
    location: 'RS Puram',
    offer: 'Kids eat free on weekends',
    image: 'src/assets/res2.j',
  },
  {
    name: 'Junior Kuppanna',
    rating: 4.3,
    cuisines: 'South Indian, Chettinad',
    location: 'Avinashi Road',
    offer: '10% off for families of four or more',
    image: 'src/assets/res3.jpg',
  },
  {
    name: 'Haribhavanam',
    rating: 4.3,
    cuisines: 'South Indian, North Indian',
    location: 'Peelamedu',
    offer: 'Complimentary dessert with family meals',
    image: 'src/assets/res2.jpg',
  },
  // Add more restaurants as needed
];

const Family = () => {
  return (
    <div className="head">
      <Header>
      <header className="header">
        <img src="src/assets/logo.png" alt="Viewon Logo" className="logo" />
      </header>
      </Header>
      <div className="new-launch-hotels-page">
        <h1>Forever Family</h1>
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

export default Family;
