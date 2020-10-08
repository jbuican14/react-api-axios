
import React, {Component} from 'react';
import axios from 'axios';

import SingleSideNews from './SingleSideNews'; 
import Err from './Err';

class Sidenews extends Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            sidenews: [],
        }
    }

    componentDidMount() {
        const url = 'https://newsapi.org/v2/everything?q='+ this.state.title +'&apiKey=[Your Key]';
        
        axios.get(url)
        .then((res)=> {
            console.log(res); 
            this.setState( {
                sidenews: res.data.articles,
            })
        })
        .catch((err) => {
            this.setState({
                err: true,
            })
        }); 
    }

    renderItems() {
        if(!this.state.err) {
            return this.state.sidenews.map( (item, idx)=> (
                <SingleSideNews key={idx} news={item} />
            ));
        } else {
            return <Err />
        }
        
    }

    render() {
        return (
            <div>
                {this.renderItems()}
            </div>
        );
    }
}

export default Sidenews;