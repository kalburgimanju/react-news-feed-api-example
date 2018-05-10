import React, { Component } from 'react';
import NewSingle from './NewSingle';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [],
        };
    }

    componentDidMount() {
        const url = 'https://newsapi.org/v2/everything?sources=techcrunch&apiKey=56538f95cb824a6ca0acf842f60a5fed';

        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({
                    news: data.articles
                })
            })
            .catch((error) => console.log(error));
    }

    renderItem() {
        return this.state.news.map((item) => (
            <NewSingle key={item.url} item={item} />
        ));
    }
    render() {
        return (
            <div className="row">
                {this.renderItem()}
            </div>
        );
    }
}

export default News;
