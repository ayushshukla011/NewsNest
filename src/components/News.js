import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spin from "./Spin";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pagesize: 8,
  };
  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string,
  };
  cfl = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  constructor(props) {
    super(props);
    this.state = {
      article: [],
      loading: true,
      page: 1,
      totalResult: 0,
    };
    document.title = `${this.cfl(this.props.category)}-NewsNest`;
  }
//order of calling
//constructor then render then componentDidMount
  async updatenews() {
    this.props.getProgress(5);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=eec7ed24a15d41aa9466b15f1ba20fac&page=${this.state.page}&pageSize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let data = await fetch(url); //fetch return promise
    this.props.getProgress(30);
    let parse = await data.json();
    this.props.getProgress(70);

    this.setState({
      article: parse.articles,
      totalResult: parse.totalResults,
      loading: false,
    });
    this.props.getProgress(100);
  }

  async componentDidMount() {
    // //life cycle method hai
    // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&category=${this.props.category}&apiKey=eec7ed24a15d41aa9466b15f1ba20fac&page=1&pageSize=${this.props.pagesize}`;
    // this.setState({loading: true,})
    // let data = await fetch(url);//fetch return promise
    // let parse= await data.json();

    // this.setState({
    //   article:parse.articles,
    //   totalResult:parse.totalResults,
    //   loading: false,

    // })
    this.updatenews();
  }
  handleprevclick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updatenews();
  };
  handlenextclick = async () => {
    // if(this.state.page +1 > Math.ceil(this.state.totalResult/20)){}
    this.setState({ page: 1 + this.state.page });
    this.updatenews();
  };
  fetchMoreData= async()=> {
    
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=eec7ed24a15d41aa9466b15f1ba20fac&page=${this.state.page +1}&pageSize=${this.props.pagesize}`;
    this.setState({page:this.state.page +  1})
    let data = await fetch(url); //fetch return promise
    
    let parse = await data.json();
    

    this.setState({
      article: this.state.article.concat(parse.articles),
      totalResult: parse.totalResults,
      
    });
  }

  render() {
    return (
      <>
        <h1 className="text-center " style={{ margin: "35px 0px",marginTop:'90px' }}>
         <img src="./icons8-nbc-32.png" alt="" /> NewsNest - Top Headline from {this.cfl(this.props.category)}
        </h1>

        {this.state.loading && <Spin />}

        <InfiniteScroll
          dataLength={this.state.article.length}
          next={this.fetchMoreData}
          hasMore={this.state.article.length !== this.state.totalResult}
          loader={<Spin />}
        >
          <div className="container">
          <div className="row my-3">
            {this.state.article.map((element) => {
              return (
                <div className="col-md-4 " key={element.url}>
                  <NewsItem
                    title={element.title?element.title:""}
                    description={element.description}
                    ImageUrl={
                      !element.urlToImage
                        ? "https://img.etimg.com/thumb/msid-102413530,width-1070,height-580,imgsize-605584,overlay-etmarkets/photo.jpg"
                        : element.urlToImage
                    }
                    NewsUrl={element.url}
                    badge={element.source.name}
                    author={element.author}
                    time={element.publishedAt}
                  />
                </div>
              );
            })}
          </div>
          </div>
        </InfiniteScroll>
        {/* next & previousbutton */}
        {/* <div className="container d-flex justify-content-between my-3">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handleprevclick}
          >
            &larr;previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResult / this.props.pagesize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handlenextclick}
          >
            next &rarr;
          </button>
        </div> */}

      </>
    );
  }
}

export default News;
