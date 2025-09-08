// 'use client';

// import React, { createContext, useState, useEffect } from 'react';

// // Create Context
// export const LoggedDataContext = createContext();

// // Provider Component
// export const LoggedDataProvider = ({ children }) => {
//   const [loggedUserData, setLoggedUserData] = useState(null); 



//   // Function to update user data globally and persist it in localStorage
//   const updateLoggedUserData = (data) => {
//     setLoggedUserData(data);

//     // Save data to localStorage
//     if (data) {
//       localStorage.setItem('user', JSON.stringify(data));

//     } 
//   console.log('Logged-in user data stored in context and localStorage:', data);
//   };

//   // Load user data from localStorage when app loads
//   useEffect(() => {
//     const storedUser = localStorage.getItem('user');
//     if (storedUser) {
//       setLoggedUserData(JSON.parse(storedUser)); // Restore context state from localStorage
//       console.log('User data restored from localStorage:', JSON.parse(storedUser));
//     } 
//   }, []);




//   return (
//     <LoggedDataContext.Provider value={{loggedUserData, updateLoggedUserData }}>
//       {children}
//     </LoggedDataContext.Provider>
//   );
// };


'use client';

import React, { createContext, useState, useEffect } from 'react';

// Create Context
export const LoggedDataContext = createContext();

// Provider Component
export const LoggedDataProvider = ({ children }) => {
  const [loggedUserData, setLoggedUserData] = useState(null); 


  const updateLoggedUserData = (data, rememberMe = false) => {
    setLoggedUserData(data);

    if (data) {
      if (rememberMe) {
        localStorage.setItem('user', JSON.stringify(data));
        sessionStorage.removeItem('user'); 
      } else {
        sessionStorage.setItem('user', JSON.stringify(data));
        localStorage.removeItem('user'); 
      }
    }
    console.log('Logged-in user data stored:', data, 'RememberMe:', rememberMe);
  };

  // Load user data from localStorage or sessionStorage 
  useEffect(() => {
    const storedLocalUser = localStorage.getItem('user');
    const storedSessionUser = sessionStorage.getItem('user');

    if (storedLocalUser) {
      setLoggedUserData(JSON.parse(storedLocalUser));
      console.log('User data restored from localStorage:', JSON.parse(storedLocalUser));
    } else if (storedSessionUser) {
      setLoggedUserData(JSON.parse(storedSessionUser));
      console.log('User data restored from sessionStorage:', JSON.parse(storedSessionUser));
    }
  }, []);

  return (
    <LoggedDataContext.Provider value={{ loggedUserData, updateLoggedUserData }}>
      {children}
    </LoggedDataContext.Provider>
  );
};
