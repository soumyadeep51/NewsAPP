import React, { useState } from 'react'
import CategoryContext from './CategoryContext'
function CategoryContextProvider({children}) {
  const [category,setCategory]=useState('sports')
  return (
    <CategoryContext.Provider value={{category,setCategory}}>
        {children}
    </CategoryContext.Provider>
  )
}

export default CategoryContextProvider
