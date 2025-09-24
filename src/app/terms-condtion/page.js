import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const page = () => {
  return (
    <div>
        <Navbar/> 
        <div className='container p-sm-5 p-4 mt-3'>
            <h3 className='text-center'>Terms & Conditions</h3>
        </div>
        <Footer/>     
    </div>
  )
}

export default page
