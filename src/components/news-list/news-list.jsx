import React from 'react';
import News from '../news/news';
const NewsList = ({ news }) => (
  <div className="row">
    {news.map(news => (
      <News key={news.url} news={news} />
    ))}
  </div>
);

export default NewsList;
