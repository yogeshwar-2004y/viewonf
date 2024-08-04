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

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (isOwner) => {
    setIsAuthenticated(true);
    // additional logic if needed, like setting a user role
  };

  return (
    <Router>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/offers" element={<OffersZonePage />} />
            <Route path="/new-launches" element={<NewLaunchHotelsPage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
            <Route path="/signup" element={<SignupPage onSignup={handleLogin} />} />
            <Route path="/post" element={<PostPage />} />
            <Route path="/intro" element={<IntroPage />} />
            <Route path="/account" element={<AccountPage />} /> 
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
