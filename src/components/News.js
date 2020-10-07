
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
        console.log('[componentDidMount]'); // 7e810ebb61064910ac74e6e326cc3e16

        // const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=7e810ebb61064910ac74e6e326cc3e16';
        const url = 'https://newsapi.org/v2/top-headlines?country='+ this.state.title +'&apiKey=7e810ebb61064910ac74e6e326cc3e16';

        fetch(url)
        .then( res => {
            return res.json();
        })
        .then( json => {
            console.log(json); 
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