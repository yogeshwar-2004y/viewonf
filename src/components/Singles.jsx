import React from 'react';
import './NewLaunchHotelsPage.css';
import Header from './Header';

const restaurants = [
  {
    name: 'CHILLUM CAFE',
    rating: 4.9,
    cuisines: 'Chinese, Asian, Tibetan',
    location: 'Peelamedu',
    offer: 'Items at ₹199',
    image: 'src/assets/res1.jpg',
  },
  {
    name: 'RedDoor Cafe’s The Game Hub',
    rating: 4.3,
    cuisines: 'Italian, Barbecue',
    location: 'Saibaba Colony',
    offer: 'combos at ₹399',
    image: 'src/assets/res3.jpg',
  },
  {
    name: 'Boomers gaming café',
    rating: 4.3,
    cuisines: 'Italian, Barbecue,Chicken',
    location: 'Nava India',
    offer: '₹150 off above ₹500',
    image: 'src/assets/res2.jpg',
  },
  // Add more restaurants as needed
];

const NewLaunchHotelsPage = () => {
  return (
    <div className="head">
      <Header>
      <header className="header">
        <img src="src/assets/logo.png" alt="Viewon Logo" className="logo" />
      </header>
      </Header>
      <div className="new-launch-hotels-page">
        <h1>New Launch Hotels</h1>
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

export default NewLaunchHotelsPage;
