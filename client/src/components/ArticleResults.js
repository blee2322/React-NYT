import React from 'react';

const ArticleResults = props =>

<div className='container'>
  <div className="card">
    <div className="card-block">
      <h3 className="card-title">
      {props.title}
      </h3>
      <a href={props.url} target='_blank'>
        <button className='btn btn-default'>View Article</button>
      </a>
      <button className='btn btn-primary' onCick={() => props.handSaveButton(props._id)}>Save Articles</button>
      <p>Date Published: {props.date}</p>
    </div>
  </div>
</div>

export default Results;

