import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import Spinner from './Components/Spinner'
import CategoryContextProvider from './Components/CategoryContextProvider'

export class App extends Component {
  render() {
    return (
      
      <CategoryContextProvider>
       <Navbar></Navbar>
       <News/>
      </CategoryContextProvider>
      
    )
  }
}

export default App


