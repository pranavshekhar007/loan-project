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
      setDetails(res?.data?.cookiePolicy);
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
            <h3 className='text-center'>Cookie Policy</h3>

            {details ? (
          <div className='p-3'
            dangerouslySetInnerHTML={{ __html: details}}
          />
        ) : (
          <p>Loading Cookie Policy ...</p>
        )}
        </div>
        <Footer/>     
    </div>
  )
}

export default page
