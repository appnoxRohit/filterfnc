import React from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import Body from '../Body'
const Products = () => {
  return (
    <div>
         <div className="app relative">
      <Header/>
      
    
     <div className='flex relative  '>
      <Sidebar className=' flex '/>
      <Body className=''/>
      </div>
    </div>
    </div>
  )
}

export default Products