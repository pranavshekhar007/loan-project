

// "use client";

// import React from "react";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/bootstrap.css";

// const CountryPhoneInput = ({ value, onChange }) => {
//   return (
//     <div >
//       <PhoneInput
//         country={"in"} 
//         value={value}
//         onChange={onChange} 
//         inputClass=""
//         inputStyle={{
//           width: "100%",
//           // height: "50px",
//           fontSize: "14px",
//           // borderRadius: "8px",
//           // border: "none",
//           padding:"14px 15px 14px 50px",
//           backgroundColor:"#f8f9fa",
//           border:"1px solid #e9ecef"

//         }}
//         dropdownStyle={{
//           zIndex: 9999,
//         }}
//       />
//     </div>
//   );
// };

// export default CountryPhoneInput;


"use client";

import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";

const CountryPhone = ({ value, onChange }) => {
  return (
    <div>
      <PhoneInput
        disabled
        country={"in"}
        value={value?.countryCode?.replace("+", "") + value?.phone}
        onChange={(fullValue, country) => {
          const dialCode = `${country.dialCode}`; 
          const phone = fullValue.replace(country.dialCode, ""); 
          onChange({
            countryCode: dialCode,
            phone: phone,
          });
        }}
        inputStyle={{
          width: "100%",
          fontSize: "14px",
          padding: "14px 15px 14px 50px",
          backgroundColor: "#f8f9fa",
          border: "1px solid #e9ecef",
        }}
        dropdownStyle={{
          zIndex: 9999,
        }}
      />
    </div>
  );
};

export default CountryPhone;
