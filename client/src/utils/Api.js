import axios from 'axios';

const api = {

  search: function(topic, startYear, endYear) {
    const APIkey = 'dd5006dd525842fd8a6eb8360611378a'
    const queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=' + APIkey + '&q=' + topic + '&begin_date=' + startYear + '0101&end_date' + endYear +'0101';
  },
}