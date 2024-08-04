import React from 'react';
import './NewLaunchHotelsPage.css';
import Header from './Header';

const restaurants = [
  {
    name: ' Tiki Takko',
    rating: 4.9,
    cuisines: 'Bar Food, Continental, Mexican',
    location: 'Peelamedu',
    offer: '1+1 on select cocktails during happy hours',
    image: 'src/assets/res1.jpg',
  },
  {
    name: 'Z-Bar',
    rating: 4.3,
    cuisines: 'Bar Food, Continental',
    location: 'Avinashi Roady',
    offer: 'Weekend DJ nights',
    image: 'src/assets/res3.jpg',
  },
  {
    name:'Deep Purple',
    rating: 4.3,
    cuisines:'Bar Food, Indian',
    location:'Gandhipuram',
    offer:'Karaoke nights on Thursdays',
    image: 'src/assets/res2.jpg',
  },
  // Add more restaurants as needed
];

const Pubs = () => {
  return (
    <div className="head">
      <Header>
      <header className="header">
        <img src="src/assets/logo.png" alt="Viewon Logo" className="logo" />
      </header>
      </Header>
      <div className="new-launch-hotels-page">
        <h1>Pub Culture</h1>
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

export default Pubs;
