
import React, {Component} from 'react';
import NewsSingle from './NewsSingle'; 
import Err from './Err';

class News extends Component {

    constructor(props) {
        super(props);
        let topic = props.topic;
        this.state={
            news: [],
            title: topic,
            err: false,
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
        .catch( err => {
            this.setState({ err : true})
        });
    }

    renderItems() {
        if(!this.state.err){
            return this.state.news.map( (item, idx)=> (
                <NewsSingle key={idx} item={item} />
            ));
        }else {
            return <Err />
        }
        
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