import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export default class News extends Component {
    static defaultProps = {
        country:"in",
        pageSize:5,
        Category: "General"
    }
    static propTypes ={
        country: PropTypes.string,
        pageSize: PropTypes.number,
        Categoty: PropTypes.string
    }
    constructor(props){
        super(props);
        console.log("I am a constructor from News Component");
        this.state = {
            articles : [],
            loading : false,
            page: 1
        }
        document.title = this.props.Category;
    }
    async componentDidMount(){
        console.log("cdm");
        let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.Category}&apiKey=755f9e64c1734638b43990563871e46e&page=1&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            articles : parsedData.articles,
            totalResults : parsedData.totalResults
        })
    }

    HandlePrevclick= async ()=>{
        console.log("Previous");
        let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.Category}&apiKey=755f9e64c1734638b43990563871e46e&page=${this.state.page -1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            articles:parsedData.articles,
            page : this.state.page - 1,
            loading: false
        })
    }
    HandleNextclick= async ()=>{
            console.log("Next");
            let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.Category}&apiKey=755f9e64c1734638b43990563871e46e&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
            this.setState({loading:true})
            let data = await fetch(url);
            let parsedData = await data.json()
            console.log(parsedData);
            this.setState({
                articles:parsedData.articles,
                page : this.state.page + 1,
                loading: false
            })
       
    }

  render() {
    return (
      <div className="container my-6">
        <h1 className="text-center">NewsMonk - Top Headlines</h1>
       
       { this.state.loading && <Spinner/>}
       
        <div className="row">
        {!this.state.loading && this.state.articles.map((element)=>{
            return <div key={element.url} className="col-md-4">
            <Newsitem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
            </div>
        })}
            
           
        </div>
        <div className="container d-flex justify-content-between">
                <button type="button" disabled={this.state.page<=1} onClick={this.HandlePrevclick} className="btn btn-dark">&larr; Previous</button>
                <button type="button" disabled={Math.ceil(this.state.totalResults/this.props.pageSize)<this.state.page+1} onClick={this.HandleNextclick}  className="btn btn-dark">Next &rarr;</button>
        </div>
        
      </div>
    )
  }
}
