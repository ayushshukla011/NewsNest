import React, { Component } from "react";

export class NewsItem extends Component {
  mystyle={
    display: "flex",
    justifyContent: "flex-end",
    position: "absolute",
    right: "0",
  }
  render() {
    let { title, description,ImageUrl,NewsUrl,author,time } = this.props;
    return (
      <div className="my-2">
        <div className="card">
        
        {/* badge */}
       <div>
        <span className="badge rounded-pill bg-danger" style={this.mystyle}>
            {this.props.badge}
      </span>
      </div>
          <img src={ImageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
          <hr/>
          
          
          <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date(time).toGMTString()}</small></p>
            <a rel="none" href={NewsUrl} className="btn btn-primary">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
