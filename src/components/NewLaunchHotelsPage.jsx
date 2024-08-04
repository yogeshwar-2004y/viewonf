import React from 'react';
import './NewLaunchHotelsPage.css';

const restaurants = [
  {
    name: 'Chinese Wok',
    rating: 4.3,
    deliveryTime: '20-25 mins',
    cuisines: 'Chinese, Asian, Tibetan',
    location: 'Peelamedu',
    offer: 'Items at ₹199',
    image: 'src/assets/res1.jpg',
  },
  {
    name: 'Barbeque Nation',
    rating: 4.3,
    deliveryTime: '30-35 mins',
    cuisines: 'North Indian, Barbecue',
    location: 'Avinashi Road',
    offer: 'Items at ₹199',
    image: 'src/assets/res3.jpg',
  },
  {
    name: 'HMR - Biryani Hut',
    rating: 4.3,
    deliveryTime: '20-25 mins',
    cuisines: 'Biryani, Indian',
    location: 'Ramanathapuram',
    offer: '₹150 off above ₹500',
    image: 'src/assets/res2.jpg',
  },
  // Add more restaurants as needed
];

const NewLaunchHotelsPage = () => {
  return (
    <div className="head">
      <header className="header">
        <img src="src/assets/logo.png" alt="Viewon Logo" className="logo" />
        <div className="search-bar">
          <input type="text" placeholder="Enter hotel names" />
          <button>Search</button>
        </div>
        <div className="header-icons">
          <a href="http://www.googlemaps.com/">
            <button>Locate Me</button>
          </a>
          <a href="/intro">
            <button>Account</button>
          </a>
        </div>
      </header>

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
                <p>{restaurant.deliveryTime}</p>
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
