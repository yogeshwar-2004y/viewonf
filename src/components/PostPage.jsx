import React, { useState } from 'react';
import "./PostPage.css";

const initialHotels = [
  {
    name: 'Hotel Luxe',
    description: 'Experience the luxury and comfort at Hotel Luxe.',
    location: 'Downtown',
    offers: '20% off on first booking',
    image: 'path/to/hotel1.jpg',
    reviews: ['Great place!', 'Loved the ambiance.']
  },
  // Add more initial hotels here if needed
];

const PostPage = () => {
  const [hotels, setHotels] = useState(initialHotels);
  const [searchTerm, setSearchTerm] = useState('');
  const [newHotel, setNewHotel] = useState({
    name: '',
    description: '',
    location: '',
    offers: '',
    image: '',
    reviews: []
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewHotel({ ...newHotel, [name]: value });
  };

  const handleAddHotel = () => {
    setHotels([...hotels, { ...newHotel, reviews: [] }]);
    setNewHotel({ name: '', description: '', location: '', offers: '', image: '', reviews: [] });
  };

  const filteredHotels = hotels.filter(hotel =>
    hotel.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="post-page">
      <header className="header">
        <img src="path/to/logo.png" alt="Viewon Logo" className="logo" />
        <input
          type="text"
          placeholder="Search hotels..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
      </header>

      <div className="form-container">
        <h2>Post New Hotel</h2>
        <input
          type="text"
          name="name"
          placeholder="Hotel Name"
          value={newHotel.name}
          onChange={handleInputChange}
        />
        <textarea
          name="description"
          placeholder="Hotel Description"
          value={newHotel.description}
          onChange={handleInputChange}
        ></textarea>
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={newHotel.location}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="offers"
          placeholder="Offers"
          value={newHotel.offers}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={newHotel.image}
          onChange={handleInputChange}
        />
        <button onClick={handleAddHotel}>Post Hotel</button>
      </div>

      <div className="hotels-list">
        {filteredHotels.map((hotel, index) => (
          <div className="hotel-card" key={index}>
            <img src={hotel.image} alt={hotel.name} className="hotel-image" />
            <h2 className="hotel-name">{hotel.name}</h2>
            <p className="hotel-description">{hotel.description}</p>
            <p className="hotel-location">Location: {hotel.location}</p>
            <p className="hotel-offers">Offers: {hotel.offers}</p>
            <div className="hotel-reviews">
              <h3>Reviews:</h3>
              {hotel.reviews.length > 0 ? (
                hotel.reviews.map((review, i) => <p key={i}>{review}</p>)
              ) : (
                <p>No reviews yet</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <footer className="footer">
        <p>© viewon.ptv</p>
        <div className="social-icons">
          <button>Instagram</button>
          <button>Facebook</button>
          <button>LinkedIn</button>
        </div>
      </footer>
    </div>
  );
};

export default PostPage;
