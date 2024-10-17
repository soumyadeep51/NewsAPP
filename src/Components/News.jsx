import React, { Component, useContext } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import CategoryContext from './CategoryContext';
export class News extends Component {
     
     articles=[];
     static contextType=CategoryContext
     
     constructor(){
        super();
        
        this.state={
           articles:this.articles,
           loading:false,
           page:1,
           cat:'' 
          }
    }
    
    async componentDidMount(){
      const {category}=this.context
      this.setState({cat:category},()=>console.log(this.state.cat)
      )
      console.log("Category "+category);
      //console.log("cat1"+this.state.cat)
      //console.log("cat2"+this.state.cat) 
      //console.log("cat3"+this.state.cat)
      //console.log("cat4"+this.state.cat)
      let url=`https://newsapi.org/v2/top-headlines?country=us&page=${this.state.page}&category=${category}&pageSize=10&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`;
      {this.state.loading=true}
      let data=await fetch(url)
      let parsed_data=await data.json()
      this.state.loading=false
      this.setState({articles:parsed_data.articles})
    }
    componentDidUpdate(prevProps, prevState) {
      const { category } = this.context;
      // Check if the category in the context has changed, and update the state
      if (prevState.cat !== category) {
        this.setState({ cat: category }, this.fetchNews); // Fetch new data if context changes
      }
    }
  
    fetchNews = async () => {
      const { cat, page } = this.state;
      let url = `https://newsapi.org/v2/top-headlines?country=us&page=${page}&category=${cat}&pageSize=10&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`;
  
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsed_data = await data.json();
      this.setState({ articles: parsed_data.articles, loading: false });
    }
     handleprevclick=async()=>{
      this.setState({page:this.state.page-1})
    
      let url=`https://newsapi.org/v2/top-headlines?country=us&page=${this.state.page}&category=${this.state.cat}&pageSize=10&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
      this.state.loading=true
      let data=await fetch(url)
      let parsed_data=await data.json();
      this.state.loading=false
      this.setState({articles:parsed_data.articles})
      //console.log(parsed_data.aricles);*/ 
      
    }
    handlenextclick=async()=>{
          this.setState({page:this.state.page+1})
          
          let url=`https://newsapi.org/v2/top-headlines?country=us&page=${this.state.page}&category=${this.state.cat}&pageSize=10&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
          this.state.loading=true
          let data=await fetch(url)
          let parsed_data=await data.json();
          this.state.loading=false
          this.setState({articles:parsed_data.articles})
          //console.log(parsed_data.articles)*/
    }
    
  
    render(){
     
    return (
      
      
      <>
        {(this.state.loading)?(<Spinner/>):(
      <>
      <div className='container my-3'>
          
        <div className='row'>
        {this.state.articles.map((article)=>(
        <div className="col-md-4 py-5" key={article.url}>
        <NewsItem title={article.title || "anonymous"} imageurl={article.urlToImage} description={article.description}
        articleurl={article.url}></NewsItem>
        </div>
        ))}
       </div>
      </div>
      <div className="d-flex justify-content-around">
      <button disabled={this.state.page<=1} type="button" key={1} className="btn btn-dark" onClick={this.handleprevclick}>Previous</button>
      {/*the disabling the next button logic needs to be worked upon*/}
      {this.state.page} {this.state.cat}
      <button disabled={this.state.articles.length<10}Loading type="button" key={2} className="btn btn-dark" onClick={this.handlenextclick}>Next</button>
      </div>
      </>
        )}
    </>
       
      )}
    
  }


export default News
