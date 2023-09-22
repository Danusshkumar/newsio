import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './NewsFilter.css';

const NewsFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [newsArticles, setNewsArticles] = useState([]);
  const [theme, setTheme] = useState('light');
  const [voices, setVoices] = useState([]);
  const [locationCode, setLocationCode] = useState('');
  const [weatherDetails, setWeatherDetails] = useState(null);
  const [showWeatherMenu, setShowWeatherMenu] = useState(false);

  const API_KEY = '1511958f80b846448ac4ad90b5ff1e2a';
  const BASE_URL = 'https://newsapi.org/v2/top-headlines';
  const params = {
    apiKey: API_KEY,
    category: selectedCategory === 'all' ? '' : selectedCategory,
    language: 'en',
    q: searchKeyword,
  };

  useEffect(() => {
    axios
      .get(BASE_URL, { params })
      .then((response) => {
        setNewsArticles(response.data.articles);
      })
      .catch((error) => {
        console.error('Error fetching news:', error);
      });
  }, [selectedCategory, searchKeyword]);

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.speechSynthesis !== 'undefined') {
      window.speechSynthesis.onvoiceschanged = () => {
        setVoices(window.speechSynthesis.getVoices());
      };
    }
  }, []);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchKeyword(event.target.value);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const speakNews = (article) => {
    const { title, description } = article;
    if (typeof window !== 'undefined' && typeof window.speechSynthesis !== 'undefined') {
      const utterance = new SpeechSynthesisUtterance(`${title}. ${description}`);
      const voice = voices.find((v) => v.lang === 'en-US');
      if (voice) {
        utterance.voice = voice;
      }
      window.speechSynthesis.speak(utterance);
    } else {
      console.error('SpeechSynthesis not available');
    }
  };

  const handleLocationCodeChange = (event) => {
    setLocationCode(event.target.value);
  };

  const handleWeatherSearch = async () => {
    const API_KEY = 'YOUR_WEATHER_API_KEY';
    const BASE_URL = 'http://api.weatherstack.com/current';

    const params = {
      access_key: API_KEY,
      query: locationCode,
    };

    try {
      const response = await axios.get(BASE_URL, { params });
      const weatherData = response.data;
      setWeatherDetails({
        location: weatherData.location.name,
        temperature: weatherData.current.temperature,
        conditions: weatherData.current.weather_descriptions[0],
      });
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const navigateToLiveTV = useNavigate();

  const routeToLiveTV = () => {
    navigateToLiveTV("/livetv");
  }

  return (
    <div className={`app ${theme}`}>
      <nav className="navbar">
        <a href="#" onClick={() => setSelectedCategory('all')}>
          All Categories
        </a>
        <a href="#" onClick={() => setSelectedCategory('business')}>
          Business
        </a>
        <a href="#" onClick={() => setSelectedCategory('entertainment')}>
          Entertainment
        </a>
        <a href="#" onClick={() => setSelectedCategory('health')}>
          Health
        </a>
        <a href="#" onClick={() => setSelectedCategory('science')}>
          Science
        </a>
        <a href="#" onClick={() => setSelectedCategory('sports')}>
          Sports
        </a>
        <a href="#" onClick={() => setSelectedCategory('technology')}>
          Technology
        </a>
        <button className="theme-toggle-button" onClick={toggleTheme}>
          Toggle Theme
        </button>
        <a href = "https://sarathkumar-it21.github.io/weather-app-html/">
        {/*onClick = {() => {routeToWeatherPage()}}*/}
          Weather
        </a>
        <a  href = "/profile"><img className = "account-icon" src ="./acount-icon.png"></img></a>
      </nav>
      <div className="news-filter-container">
        <h2>News App</h2>
        <input
          type="text"
          placeholder="Search news..."
          value={searchKeyword}
          onChange={handleSearchChange}
        />
        <button className = "live-tv-btn" onClick = {() => {routeToLiveTV()}}>
          <div className = "red-dot"></div><div className = "dot-space"></div>Live TV
        </button>
      </div>
      <div className="news-list">
        {newsArticles.map((article, index) => (
          <div key={index} className="news-item">
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <p>Source: {article.source.name}</p>
            <button className="button" onClick={() => { window.location.href = article.url }}>
              Read More
            </button>
            <button className="speak-button" onClick={() => speakNews(article)}>
              Speak
            </button>
          </div>
        ))}
      </div>
      {showWeatherMenu && (
        <div className="weather-menu">
          <input
            type="text"
            placeholder="Enter location code"
            value={locationCode}
            onChange={handleLocationCodeChange}
          />
          <button onClick={handleWeatherSearch}>Search</button>
          {weatherDetails && (
            <div className="weather-details">
              <p>Location: {weatherDetails.location}</p>
              <p>Temperature: {weatherDetails.temperature}</p>
              <p>Conditions: {weatherDetails.conditions}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NewsFilter;