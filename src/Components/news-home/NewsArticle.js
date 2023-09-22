import React from 'react';

const NewsArticle = ({ match }) => {
  // Access the news article ID from the URL params
  const { articleId } = match.params;

  // Fetch the news article data based on the articleId
  // You can use the articleId to retrieve the specific news article from your API or data source

  return (
    <div>
      <h1>News Article</h1>
      <p>Article ID: {articleId}</p>
      {/* Display the news article content here */}
    </div>
  );
};

export default NewsArticle;
