import React, { Component,createContext, useContext } from 'react'
import News from './News'
import CategoryContext from './CategoryContext'
export let cat="general"
export class Categories extends Component {
  
  categories=["general","sports","entertainment","science","health","technology","business"]
  static contextType=CategoryContext
  
  render() {
    const {category,setCategory}=this.context
    return (
      <>
        {this.categories.map((cat)=>(
          <li className="nav-item" key={cat}>
            <span className="nav-link"  key={cat} onClick={()=>{setCategory(cat)}}>{cat}</span>
          </li>
        ))}
      
      </>
    )
  }
}

export default Categories
