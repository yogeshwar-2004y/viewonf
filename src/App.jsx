import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import OffersZonePage from './components/OffersZonePage';
import NewLaunchHotelsPage from './components/NewLaunchHotelsPage';
import BlogsPage from './components/BlogsPage';
import AboutPage from './components/AboutPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import PostPage from './components/PostPage';
import IntroPage from './components/IntroPage';
import AccountPage from './components/AccountPage';
import ViewPost from './components/ViewPost'; // Import ViewPost
import Singles from './components/Singles';
import Couples from './components/Couples';
import Family from './components/Family';
import Midnight from './components/Midnight';
import Pubs from './components/Pubs';


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (isOwner) => {
    setIsAuthenticated(true);
    // additional logic if needed, like setting a user role
  };

  return (
    <Router>
      <div>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/offers" element={<OffersZonePage />} />
            <Route path="/new-launches" element={<NewLaunchHotelsPage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/post" element={<PostPage />} />
            <Route path="/intro" element={<IntroPage />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/view-post" element={<ViewPost />} />
            <Route path="/singles" element={<Singles />} />
            <Route path="/couples" element={<Couples />} />
            <Route path="/family" element={<Family />} />
            <Route path="/mid" element={<Midnight />} />
            <Route path="/pubs" element={<Pubs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
