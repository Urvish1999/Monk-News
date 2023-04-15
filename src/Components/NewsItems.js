import React from 'react'

const NewsItems = (props) => {
    let { title, description, imageUrl, NewsUrl, author, date, source } = props;
    return (
        <div>
            <div className="card" style={{ width: "18rem" }}>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{left: '90', zIndex: '1'}}>
                    {source}
                </span>    
               <img src={!imageUrl ? "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg" : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}...
                  </h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()} </small></p>
                    <a href={NewsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    );
}
export default NewsItems



// code is for class based components
// import React, { Component } from 'react'


// export class NewsItems extends Component {

//     render() {
//         let { title, description, imageUrl, NewsUrl, author, date, source } = this.props;
//         return (
//             <div>
//                 <div className="card" style={{ width: "18rem" }}>
//                 <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{left: '90', zIndex: '1'}}
//                 >
//                             {source}
//                              </span>    
//                     <img src={!imageUrl ? "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg" : imageUrl} className="card-img-top" alt="..." />
//                     <div className="card-body">
//                         <h5 className="card-title">{title}...
//                         </h5>
//                         <p className="card-text">{description}...</p>
//                         <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()} </small></p>
//                         <a href={NewsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }