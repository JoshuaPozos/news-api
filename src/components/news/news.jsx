import React from 'react';

const News = ({ news }) => {
  const { description, title, url, urlToImage, source } = news;

  const image = urlToImage ? (
    <div className="card-image">
      <img src={urlToImage} alt={title} />
      <span className="card-title">{source.name}</span>
    </div>
  ) : null;

  return (
    <div className="col s12 m6 l4">
      <div className="card">
        {image}
        <div className="card-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="card-action">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="waves-effect waves-ligth purple btn"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};
export default News;
