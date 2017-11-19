import axios from 'axios';

const api = {
  search: function(topic, startYear, endYear) {
    const APIKey = 'dd5006dd525842fd8a6eb8360611378a'
    const queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=' + APIKey + '&q=' + topic + '&begin_date=' + startYear + '0101&end_date=' + endYear + '0101';
    return axios.get('/api/saved');
  },

  getArticle: function() {
    return axios.get('/api/saved');
  },

  saveArticle: function(articleObj) {
    return axios.post('/api/saved', articleObj);
  },

  deleteArticle: function(id) {
    return axios.delete(`/api/saved/${id}`);
  }
};

export default api;