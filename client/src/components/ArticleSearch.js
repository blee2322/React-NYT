import React from 'react';

const ArticleSearch = props =>
  <div className='container'>
    <div className='row'>
      <div className='col-lg-12'>
        <div className='panel panel-primary'>
          <div className='panel-heading'>
              <h3 className='panel-title'>
                <strong>
                  Search for Articles
                </strong>
              </h3>
          </div>
          <div className='panel-body'>
            <form>
              <div className='form-group'>
                  <label>Topic</label>
                  <input onChange={ props.handleTopicChange } type='text' className='form-control' id='topic' />
              </div>
              <div className='form-group'>
                  <label>Start Year</label>
                  <input onChange={ props.handleStartYearChange } type='text' className='form-control' id='startyear' />
              </div>
              <div className='form-group'>
                  <label>End Year</label>
                  <input onChange={ props.handleEndYearChange } type='text' className='form-control' id='endyear' />
              </div>
              <button onClick={props.handleFormSubmit} type='submit' className='btn btn-primary'>Search</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

  <br/><br/>

  <div className='row'>
    <div className='col-log-12'>
      <div className='panel panel-primary'>
        <div className='panel-heading'>
          <h3 className='panel-title'>
            <strong>
              Results
            </strong>
          </h3>
        </div>
        <div className='panel-body'>
          {props.renderArticles()}
        </div>
      </div>
    </div>
    <br/><br/>
  </div>
  