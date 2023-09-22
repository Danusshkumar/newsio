import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewsFilter from './NewsFilter';
import NewsArticle from './NewsArticle';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<NewsFilter/>} />
        <Route path="/article/:articleId" element={<NewsArticle/>} />
      </Routes>
    </Router>
  );
};

export default App;
