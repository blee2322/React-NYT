import React, { Component } from 'react';
import ArticleSaved from './ArticleSaved';
import ArticleSearch from '.ArticleSearch';
import ArticleResults from './ArticleResults';
import API from '../utils/api';

class ArticleMain extends Component {

  state = {
    topic: '',
    startYear: '',
    endYear: '',
    articles: [],
    saved: []
  };

  componentDidMount() {
    this.getSavedArticles()
  }

  getSavedArticles = () => {
    API.getArticle()
        .then((res) => {
          this.setState({ saved: res.data });
        });
  }

  renderArticles = () => {
    return this.state.articles.map(article => (
      <ArticleResults
          _id={article._id}
          key={article._id}
          title={article.headline.main}
          date={article.pub_date}
          url={article.web_url}
          handleSaveButton={this.handleSaveButton}
          getsavedArticles={this.getSavedArticles}
      />
    ));
  }

  
}