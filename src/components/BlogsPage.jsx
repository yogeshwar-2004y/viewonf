import React from 'react';
import './BlogsPage.css';

const BlogsPage = () => {
  return (
    <div className="blogs-page">
      <header className="header">
        <img src="path/to/logo.png" alt="Viewon Logo" className="logo" />
        <button className="menu-button">☰</button>
      </header>

      <div className="blogs-header">
        <h1>Blogs</h1>
      </div>

      <div className="blog-articles">
        <article className="blog-post">
          <h2>New Launches in the City</h2>
          <p>
            Discover the newest restaurants and hotels that have opened in the city this month. From luxurious five-star hotels to quaint little cafes, find out where you should be heading next.
          </p>
        </article>

        <article className="blog-post">
          <h2>Top 10 Must-Try Dishes</h2>
          <p>
            We've compiled a list of the top 10 must-try dishes from various restaurants around the city. Whether you're a fan of exotic cuisines or traditional comfort food, there's something for everyone.
          </p>
        </article>

        <article className="blog-post">
          <h2>Exclusive Offers</h2>
          <p>
            Check out the exclusive offers and discounts available at some of the best dining spots in the city. Don't miss out on these great deals!
          </p>
        </article>
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

export default BlogsPage;
