import React, { Component } from 'react';

class SearchNews extends Component {
  state = {
    category: 'general'
  };

  handleCategory = e => {
    this.setState(
      {
        category: e.target.value
      },
      () => {
        this.props.checkNews(this.state.category);
      }
    );
  };
  render() {
    return (
      <div className="buscador row">
        <div className="col s12 m8 offset-m2">
          <form>
            <h2>Find news by category</h2>
            <div className="input-field col s12 m8 offset-m2">
              <select onChange={this.handleCategory}>
                <option value="general">General</option>
                <option value="business">Business</option>
                <option value="science">Science</option>
                <option value="technology">Technology</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchNews;
