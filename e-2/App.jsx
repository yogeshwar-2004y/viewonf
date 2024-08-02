import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import IntroPage from './components/IntroPage';
import HomePage from './components/HomePage';
import OffersZonePage from './components/OffersZonePage';
import NewLaunchHotelsPage from './components/NewLaunchHotelsPage';
import BlogsPage from './components/BlogsPage';
import AboutPage from './components/AboutPage';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import PostPage from './components/PostPage';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isHotelOwner, setIsHotelOwner] = useState(false);

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={IntroPage} />
        <Route path="/home" component={HomePage} />
        <Route path="/offers" component={OffersZonePage} />
        <Route path="/new-launch-hotels" component={NewLaunchHotelsPage} />
        <Route path="/blogs" component={BlogsPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/login">
          <LoginPage onLogin={() => setIsAuthenticated(true)} />
        </Route>
        <Route path="/signup">
          <SignupPage onSignup={() => setIsAuthenticated(true)} />
        </Route>
        <Route path="/post">
          {isAuthenticated && isHotelOwner ? (
            <PostPage />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
