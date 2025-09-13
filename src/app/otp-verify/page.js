"use client"
import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { useState , useRef , useEffect , useContext } from 'react'
import { useRouter } from 'next/navigation'
import { FaSpinner } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { verifyOtpServ } from '../services/authentication.service';
import { LoggedDataContext } from '../context/Context';

const page = () => {

     const router = useRouter();
     const[loading , setLoading] = useState(false)
     const [otp, setOtp] = useState(["", "", "", ""]);
      const inputRefs = useRef([]);
        const { updateLoggedUserData } = useContext(LoggedDataContext);

       const [rememberMe, setRememberMe] = useState(true);
    
      const handleOtpChange = (index, value) => {
        if (/^[0-9]?$/.test(value)) {
          const newOtp = [...otp];
          newOtp[index] = value;
          setOtp(newOtp);
    
         setOtpVerifyData((prev) => ({
          ...prev,
          otp: newOtp,
        }));
    
         if (value && index < otp.length - 1) {
          inputRefs.current[index + 1].focus();
        }
        }
      };
    
      const handleOtpKeyDown = (index, e) => {
      if (e.key === "Backspace" && !otp[index] && index > 0) {
        inputRefs.current[index - 1].focus();
      }
    };

     const [otpVerifyData,setOtpVerifyData] = useState({
        phone: "",
        otp: otp,
      });

       useEffect(() => {
    const storedPhone = sessionStorage.getItem("signupPhone");
    if (storedPhone) {
      setOtpVerifyData((prev) => ({ ...prev, phone: storedPhone }));
    }
  }, []);


        const handleOtpVerify = async (e) => {
        e.preventDefault();
      
      
         const payload = {
          phone: otpVerifyData?.phone,
          otp: otpVerifyData.otp.join("") 
        };
          setLoading(true);
         try{
             const res = await verifyOtpServ(payload);
            if (res?.statusCode == 200){
               console.log("verify successfully" , res);
                updateLoggedUserData(res?.data, true);
               toast.success(res?.message);
               router.push("/");
            } 
          }catch(err){
              console.log("verify failed" , err)
              toast.error(err?.response?.data?.message)
          }finally {
          setLoading(false); 
        }
        }

  return (

    <>

    <Navbar/>
     
    <div className='loginform'>
        <div className='otp-verify bg-white shadow p-5' style={{borderRadius:"35px"}}>
            <form onSubmit={handleOtpVerify}>

           
                  <h1 style={{textAlign:"center"}}>Verify OTP</h1>
                   <p>Enter the OTP sent to your phone</p>

                    <div className="otp-inputs">
                  {otp.map((digit, i) => (
                    <input
                      key={i}
                      type="text"
                      className="otp-input"
                      maxLength="1"
                      value={digit}
                      onChange={(e) => handleOtpChange(i, e.target.value)}
                       ref={(el) => (inputRefs.current[i] = el)}
                        onKeyDown={(e) => handleOtpKeyDown(i, e)}
                    />
                  ))}
                </div>

                  <button type="submit">{loading ? <FaSpinner className="spin" /> : "Verify OTP"}
                 </button>
                  </form>
        </div>
    </div>

    <Footer/>   
    </>
  )
}

export default page
