import React from 'react';

const NewsSingle = ({item}) => (

        <div className="col s12 m7">
            <div className="card horizontal">
                <div className="card-image">
                    <img src={item.urlToImage}  alt={item.title}/>
                </div>
                <div className="card-stacked">
                    <span className="card-content" >{item.title}</span>
                
                    <div className="card-action">
                        <a href={item.url} target="_blank">Read Full Story</a>
                    </div>
                </div>
            </div>
           
        </div>
    

);

export default NewsSingle;
