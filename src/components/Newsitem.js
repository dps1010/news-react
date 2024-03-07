import React, { Component } from 'react'

export default class Newsitem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl,author,date} = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{width: "18rem"}}>
            <img src={!imageUrl?"https://ichef.bbci.co.uk/news/1024/branded_news/E0FC/production/_132769575_gettyimages-1925916657.jpg":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small className="text-body-secondary">By {!author?"Unkonwn":author} On {new Date(date).toGMTString()}</small></p>
                <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm  ">Get More Info...</a>
            </div>
            </div>
      </div>
    )
  }
}
