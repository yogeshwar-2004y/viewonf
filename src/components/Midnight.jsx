import React from 'react';
import './NewLaunchHotelsPage.css';
import Header from './Header';

const restaurants = [
  {
    name: 'Black Box Kitchen',
    rating: 4.5,
    cuisines: 'Continental, Italian',
    location: 'RS Puram',
    offer: 'Late-night combo deals',
    image: 'src/assets/res2.j',
  },
  {
    name: 'Latitude Restaurant',
    rating: 4.3,
    cuisines:'Multi-cuisine',
    location:'Race Course',
    offer: '20% off after 10 PM',
    image: 'src/assets/res3.jpg',
  },
  {
    name:'WXYZ Bar & Lounge',
    rating: 4.3,
    cuisines: ' Bar Food, Continental',
    location: 'Peelamedu',
    offer: 'Midnight happy hour specials',
    image: 'src/assets/res2.jpg',
  },
  // Add more restaurants as needed
];

const Midnight = () => {
  return (
    <div className="head">
      <Header>
      <header className="header">
        <img src="src/assets/logo.png" alt="Viewon Logo" className="logo" />
      </header>
      </Header>
      <div className="new-launch-hotels-page">
        <h1>Midnight Vibes</h1>
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

export default Midnight;
