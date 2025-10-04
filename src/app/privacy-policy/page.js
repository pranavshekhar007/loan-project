"use client"
import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { supportDetailsServ } from '../services/support.service';

const page = () => {

  const [details , setDetails] = useState();
   
 const getDetails = async () => {
   try{
    const res = await supportDetailsServ();
    setDetails(res?.data?.privacyPolicy);
  }  
  catch{
      console.log("getting error")
  }
 }

 useEffect(() => {
  getDetails();
 },[])

  return (
    <div>
        <Navbar/> 
        <div className='container p-sm-5 p-4 mt-3'>
            <h1 className='text-center h3-big ' style={{fontWeight:"500"}}>Privacy Policy</h1>
            {details ? (
          <div className='p-3'
            dangerouslySetInnerHTML={{ __html: details}}
          />
        ) : (
          <p>Loading privacy policy...</p>
        )}
        </div>
        <Footer/>     
    </div>
  )
}

export default page
