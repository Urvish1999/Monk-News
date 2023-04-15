import React, { useEffect, useState } from "react";
import NewsItems  from "./NewsItems";
import PropTypes from 'prop-types';
import Spinner from './Spinner';



const News = (props)=> {
    const [articles, setArticles] = useState([])
    const [loading, setloading] = useState([false])
    const [page, setPage] = useState([1])
    const [totalResults, setTotalResults] = useState(0)
    
    const updateNews = async () => {   
        
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=c55e70bacaeb48e2b1e505d97d196fc7&page=${page}&pageSize=${props.pageSize}`;

    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setloading(false)
    }
    
    useEffect(() => {
        updateNews();
    });
    
    const handlePreviousClick = async () => {
       setPage(page-1);
    }
    const handleNextClick = async () => {
    setPage(page+1);
    }
         return (
            <div className="container my-3">
                <h1 className="text-center">Monk news - Top {props.category} headlines </h1>
                {loading && <Spinner/>}
                <div className="row">
                    {!loading && articles.map((element) => {
                        return (
                            <div className="col-md-4" key={element.url}>
                                <NewsItems
                                    title={element.title ? element.title : ""}
                                    description={
                                        element.description ? element.description : ""
                                    }
                                    imageUrl={element.urlToImage}
                                    NewsUrl={element.url}
                                    author = {element.author}
                                    date = {element.publishedAt}
                                   source = {element.source.name}
                                />
                            </div>
                        );
                                })}
                </div>
                <div  className="container d-flex justify-content-between" >
                    <button disabled={page <= 1} type="button" className="btn btn-dark my-3" onClick={handlePreviousClick}>Previous</button>
                    <button disabled = {page + 1 > Math.ceil(totalResults/props.pageSize)} type="button" className="btn btn-dark my-3" onClick={handleNextClick}>Next</button>
                </div>
            </div>
        );

                            }
    
News.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
}

News.defaultProps = {
    country:'in',
  category: "",
};

export default News;

// ${props.country}
// ${props.category}


//This the code of class based components

// import React, { Component } from "react";
// import { NewsItems } from "./NewsItems";
// import PropTypes from 'prop-types';
// import Spinner from './Spinner';



// export class News extends Component {
//     static propTypes = {
//         country: PropTypes.string,
//         category: PropTypes.string,
//     }

//     static defaultProps = {
//         country:'in',
//         category: "",
//     }
//     constructor(props) {
//     super(props);
//         console.log("Hello I am a Constuctor");
//         this.state = {
//             articles: [],
//             loading: false,
//             page: 1,
            
//         }
//        document.title = `${props.category} - Monk News`; 
//     }
//     async updateNews() {    
//     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=c55e70bacaeb48e2b1e505d97d196fc7&page=${this.state.page}&pageSize=${props.pageSize}`;
//     this.setState({loading:true}); 
//     let data = await fetch(url);
//     let parsedData = await data.json();
//     console.log(parsedData);
//     this.setState({ articles: parsedData.articles, 
//         totalArticles:parsedData.totalResults,
//     loading:false });
// }
//     async componentDidMount() {
//         this.updateNews()
//     }
//     handlePreviousClick = async () => {
//        this.setState({page:this.state.page-1});
//        this.updateNews();
           
//     }
//     handleNextClick = async () => {
//         this.setState({page:this.state.page+1});
//        this.updateNews();

//         }

    
//     render() {
//         return (
//             <div className="container my-3">
//                 <h1 className="text-center">Monk news - Top {props.category} headlines </h1>
//                 {this.state.loading && <Spinner/>}
//                 <div className="row">
//                     {!this.state.loading && this.state.articles.map((element) => {
//                         return (
//                             <div className="col-md-4" key={element.url}>
//                                 <NewsItems
//                                     title={element.title ? element.title : ""}
//                                     description={
//                                         element.description ? element.description : ""
//                                     }
//                                     imageUrl={element.urlToImage}
//                                     NewsUrl={element.url}
//                                     author = {element.author}
//                                     date = {element.publishedAt}
//                                    source = {element.source.name}
//                                 />
//                             </div>
//                         );
//                     })}
//                 </div>
//                 <div  className="container d-flex justify-content-between" >
//                     <button disabled={this.state.page <= 1} type="button" className="btn btn-dark my-3" onClick={this.handlePreviousClick}>Previous</button>
//                     <button disabled = {this.state.page + 1 > Math.ceil(this.state.totalResults/props.pageSize)} type="button" className="btn btn-dark my-3" onClick={this.handleNextClick}>Next</button>
//                 </div>
//             </div>
//         );
//     }

// }
// export default News

// ${props.country}
// ${props.category}
