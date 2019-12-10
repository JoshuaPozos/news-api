import React, { Component, Fragment } from 'react';
import Header from './components/header/header.component';
import NewsList from './components/news-list/news-list';
import SearchNews from './components/search-news/search-news.component';

const API_KEY = process.env.REACT_APP_API_KEY;

class App extends Component {
  state = {
    news: []
  };

  componentDidMount() {
    this.checkNews();
  }

  checkNews = async (category = 'general') => {
    const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${category}&apiKey=${API_KEY}`;

    const res = await fetch(url);
    const news = await res.json();

    this.setState({
      news: news.articles
    });
  };

  render() {
    return (
      <Fragment>
        <Header title="Cool News" />
        <div className="container white contenedor-noticias">
          <SearchNews checkNews={this.checkNews} />
          <NewsList news={this.state.news} />
        </div>
      </Fragment>
    );
  }
}

export default App;
