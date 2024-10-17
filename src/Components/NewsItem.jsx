import React, { Component } from 'react'
export class NewsItem extends Component {
    render() {
    let {title,description,imageurl,articleurl}=this.props;
    if(description==null){
      description="Nothing to show"
    }
    return (
    <div>
     
     <div className="card shadow p-3 mb-5 bg-body rounded" style={{width:'18rem'}}>
        <img src= {imageurl  } className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{title.slice(0,50)}</h5>
            <p className="card-text">{description.slice(0,100)}</p>            
        </div>
        
        <a href={articleurl}><button type="button" className="btn btn-dark">Read More</button></a>
        
        
   
    </div>
    
    </div>
    )
  }
}
export default NewsItem
