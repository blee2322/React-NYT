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

  componentDidMount = () => {
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

  renderSaved = () => {
    return this.state.articles.map(article => (
      <ArticleSaved
          _id={article._id}
          key={article._id}
          title={article.headline.main}
          date={article.pub_date}
          url={article.web_url}
          handleDeleteButton={this.handleDeleteButton}
          getsavedArticles={this.getSavedArticles}
      />
    ));
  }

  handleTopicChange = (event) => {
    this.setState({ topic: event.target.value });
  }

  handleStartYearChange = (event) => {
    this.setState({ startYear: event.target.value });
  }

  handleEndYearChange = (event) => {
    this.setState({ endYear: event.target.value });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    API.search(this.state.topic, this.state.startYear, this.state.endYear)
    .then((res) => {
      this.setState({ articles: res.data.response })
    })
  }

  handleSaveButton = (id) => {
    const findArticleById = this.state.articles.find((add) => add._id === id);
    const saveNewArt = {title: findArticleById.headline.main, date: findArticleById.pub_date, url: findArticleById.web_url};
    API.saveArticle(saveNewArt)
    .then(this.getSavedArticles());
  }

  handleDeleteButton = (id) => {
    API.deleteArticle(id)
      .then(this.getSavedArticles());
  }

  render()

}