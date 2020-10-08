
import React, {Component} from 'react';
import NewsSingle from './NewsSingle'; 

class News extends Component {

    constructor(props) {
        super(props);
        console.log(props);
        let topic = props.topic;
        this.state={
            news: [],
            title: topic
        };
    }

    componentDidMount() {
        const url = 'https://newsapi.org/v2/top-headlines?country='+ this.state.title +'&apiKey=[Your Key]';
        fetch(url)
        .then( res => {
            return res.json();
        })
        .then( json => {
            this.setState( {
                news: json.articles
            })
        })
        .catch( err => console.log('err', err));
    }

    renderItems() {
        return this.state.news.map( (item, idx)=> (
            <NewsSingle key={idx} item={item} />
        ));
    }

    render() {
        return (
            <div className="row">
                {this.renderItems()}
            </div>
        );
    }
}

export default News;