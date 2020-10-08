import React from 'react'; 

const SingleSideNews = ({news}) => (
    <div className="col s4 m12">
        <div className="divider"></div>
        <a href={news.url} target="_blank">
        <div className="section">
            <h3>{news.source.name} </h3>
            <p> {news.title} </p>
        </div>
        </a>
        
    </div>
);

export default SingleSideNews;