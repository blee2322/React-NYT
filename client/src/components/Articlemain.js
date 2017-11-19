import React, {Component} from 'react';
import Articlesaved from './Articlesaved';
import Articlesearch from './Articlesearch';
import Articleresults from './Articleresults';
import API from '../utils/Api';

class Articlemain extends Component {

  state = {
    topic:'',
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
        this.setState({saved: res.data});
      });
  }

  renderArticles = () => {
    return this.state.articles.map(article => (
      <Results
        _id={article._id}
        key={article._id}
        title={article.headline.main}
        date={article.pub_date}
        handleSaveButton={this.handleSaveButton}
        getSavedArticles={this.getSavedArticles}
      /> 
    ));
  }

  renderSaved = () => {
    return this.state.saved.map(save => (
      <Saved
        _id={article._id}
        key={article._id}
        title={article.headline.main}
        date={article.pub_date}
        handleDeleteButton={this.handleSaveButton}
        getSavedArticles={this.getSavedArticles}
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

  


}

