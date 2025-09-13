// "use client";
// import React from "react";
// import { useState } from "react";
// import { useRouter, usePathname } from "next/navigation";

// const ProfileSidebar = () => {
//   const router = useRouter();
//   const pathname = usePathname();
//   const [activeMenu, setActiveMenu] = useState("Profile");

//   const menuItems = [
//     { name: "Profile", icon: "fas fa-user-circle", path: "/profile" },
//     {
//       name: "Applied Loans",
//       icon: "fas fa-hand-holding-usd",
//       path: "/applied-loans",
//     },
//     {
//       name: "Transactions",
//       icon: "fas fa-exchange-alt",
//       path: "/transactions",
//     },
//     {
//       name: "EMI Reminder",
//       icon: "fa-solid fa-stopwatch",
//       path: "/emi-reminder",
//     },
//     { name: "Notification", icon: "fa-solid fa-bell", path: "/notifications" },
//     {
//       name: "Support",
//       icon: "fa-solid fa-headset",
//       children: [
//         { name: "Contact", icon:"fas fa-envelope" ,  path: "/support" },
//         { name: "FAQ",icon: "fas fa-question-circle", path: "/faq" },
//         { name: "Privacy Policy", icon: "fas fa-user-shield", path: "" },
//          { name:"Terms & Conditions", icon: "fas fa-file-contract",  path:""},
//       ],
//       path: "",
//     },
//     { name: "Logout", icon: "fas fa-sign-out-alt", path: "/log-out" },

//     // { name: "Contact", icon: "fas fa-envelope" },
//     // { name: "FAQ", icon: "fas fa-question-circle" },
//     // { name: "Terms & Conditions", icon: "fas fa-file-contract" },
//     // { name: "Privacy Policy", icon: "fas fa-user-shield" },
//   ];

//   const [openDropdown, setOpenDropdown] = useState(null);

//   const handleClick = (item) => {
//     if (item.children) {
//       setOpenDropdown(openDropdown === item.name ? null : item.name);
//     } else {
//       setActiveMenu(item.name);
//       router.push(item.path);
//     }
//   };

//   return (
//     <div>
//       <div className="sidebar" >
//         <div className="sidebar-profile">
//           <div className="sidebar-avatar">
//             <span>AS</span>
//           </div>
//           <div className="sidebar-name">Aarav Sharma</div>
//           <div className="sidebar-id">RL7894561230</div>
//         </div>

//         <div className="sidebar-menu">
//         {menuItems.map((item, i) => (
//   <div key={i}>
//     {/* Parent menu */}
//     <div
//       className={`menu-item ${pathname === item.path ? "active" : ""}`}
//       onClick={() => handleClick(item)}
//     >
//       <i className={item.icon}></i>
//       <span>{item.name}</span>
//       {item.children && (
//         <i className={`fas fa-chevron-${openDropdown === item.name ? "up" : "down"} ml-auto`}
//           style={{display:"flex" , justifyContent:"end" , width:"100%"}}
//         ></i>
//       )}
//     </div>

//     {/* Submenu render only if children exist */}
//     {item.children && openDropdown === item.name && (
//       <div className="submenu " style={{paddingLeft:"43px"}} >
//         {item.children.map((child, idx) => (
//           <div
//             key={idx}
//             className={`submenu-item  d-flex gap-2 align-items-center mb-3${pathname === child.path ? "active" : ""}`}
//             onClick={() => {
//               setActiveMenu(child.name);
//               router.push(child.path);
//             }}
//             style={{fontSize:"15px" , cursor:"pointer"}}
//           >
//             <i className={child?.icon}></i>
//             {child.name}
//           </div>
//         ))}
//       </div>
//     )}
//   </div>
// ))}

//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileSidebar;

"use client";
import React from "react";
import { useState, useContext } from "react";
import { useRouter, usePathname } from "next/navigation";
import { LoggedDataContext } from "../context/Context";
import { toast } from "react-toastify";


const ProfileSidebar = ({title}) => {
  const router = useRouter();
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState("Profile");

  const { loggedUserData, updateLoggedUserData } =
    useContext(LoggedDataContext);

  const menuItems = [
    { name: "Profile", icon: "fas fa-user-circle", path: "/profile" },
    {
      name: "Applied Loans",
      icon: "fas fa-hand-holding-usd",
      path: "",
      children: [
         { name: "All Loans", icon: "fa-solid fa-check-double", path: "/applied-loans" },
        { name: "Active Loans", icon: "fa-solid fa-chart-line", path: "/active-loans" },
        { name: "Pending Loans", icon: "fa-solid fa-clock", path: "/pending-loans" },
        { name: "Rejected Loans", icon: "fa-solid fa-xmark", path: "/rejected-loans" },
        { name: "Completed Loans", icon: "fa-solid fa-circle-check", path: "/completed-loans" },
      ]
    },
    {
      name: "Transactions",
      icon: "fas fa-exchange-alt",
      path: "/transactions",
    },
    {
      name: "EMI Reminder",
      icon: "fa-solid fa-stopwatch",
      path: "/emi-reminder",
    },
    { name: "Notification", icon: "fa-solid fa-bell", path: "/notifications" },
    {
      name: "Support",
      icon: "fa-solid fa-headset",
      children: [
        { name: "Contact", icon: "fas fa-envelope", path: "/support" },
        { name: "FAQ", icon: "fas fa-question-circle", path: "/faq" },
        { name: "Privacy Policy", icon: "fas fa-user-shield", path: "" },
        { name: "Terms & Conditions", icon: "fas fa-file-contract", path: "" },
      ],
      path: "",
    },
    { name: "Logout", icon: "fas fa-sign-out-alt", path: "/log-out" },

    // { name: "Contact", icon: "fas fa-envelope" },
    // { name: "FAQ", icon: "fas fa-question-circle" },
    // { name: "Terms & Conditions", icon: "fas fa-file-contract" },
    // { name: "Privacy Policy", icon: "fas fa-user-shield" },
  ];

  const [openDropdown, setOpenDropdown] = useState(null);

  const [showLoginPopup, setShowLoginPopup] = useState(null);

  const handleClick = (item) => {
    if (item.name === "Logout") {
      setShowLoginPopup(true);
      return;
    }

    if (item.children) {
      setOpenDropdown(openDropdown === item.name ? null : item.name);
    } else {
      setActiveMenu(item.name);
      router.push(item.path);
    }
  };

  const handleSlider = () => {
    const offcanvas = new bootstrap.Offcanvas("#profileSidebar");
    offcanvas.show();
    // console.log(loggedUserData);
  };

  const handleLogut = () => {
    console.log("Logging out...");
    updateLoggedUserData(null);
    localStorage.removeItem("user");
    sessionStorage.removeItem("user");
    console.log("Logged out...");
    toast.success("You’ve been logged out.");
    router.push("/sign-up");
  };

  const handleClosePopup = () => {
    setShowLoginPopup(false);
  }

   const getInitials = (firstName, lastName) => {
    if (!firstName && !lastName) return "U"; // default U = User
    return `${firstName?.[0] || ""}${lastName?.[0] || ""}`.toUpperCase();
  };

  return (
    <div>
      <div className="sidebar d-md-block d-none">
        <div className="sidebar-profile">
          <div className="sidebar-avatar">
            <span>{getInitials(loggedUserData?.firstName, loggedUserData?.lastName)}</span>
          </div>
          <div className="sidebar-name">{loggedUserData?.firstName} {" " } {loggedUserData?.lastName}</div>
          <div className="sidebar-id">{loggedUserData?._id}</div>
        </div>

        <div className="sidebar-menu">
          {menuItems.map((item, i) => (
            <div key={i}>
              {/* Parent menu */}
              <div
                className={`menu-item ${
    pathname === item.path ||
    (item.children && item.children.some((child) => pathname === child.path))
      ? "active"
      : ""
  }`}
                onClick={() => handleClick(item)}
              >
                <i className={item.icon}></i>
                <span>{item.name}</span>
                {item.children && (
                  <i
                    className={`fas fa-chevron-${
                      openDropdown === item.name ? "up" : "down"
                    } ml-auto`}
                    style={{
                      display: "flex",
                      justifyContent: "end",
                      width: "100%",
                    }}
                  ></i>
                )}
              </div>

              {/* Submenu render only if children exist */}
              {item.children && openDropdown === item.name && (
                <div className="submenu " style={{ paddingLeft: "43px" }}>
                  {item.children.map((child, idx) => (
                    <div
                      key={idx}
                      className={`submenu-item  d-flex gap-2 align-items-center mb-3 ${
                        pathname === child.path ? "active" : ""
                      }`}
                      onClick={() => {
                        setActiveMenu(child.name);
                        router.push(child.path);
                      }}
                      style={{ fontSize: "15px", cursor: "pointer" }}
                    >
                      <i className={child?.icon}></i>
                      {child.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* <img
        src="https://cdn-icons-png.flaticon.com/128/6015/6015685.png"
        className="d-block d-md-none "
        style={{ width: "25px", height: "25px" }}
        onClick={handleSlider}
      ></img> */}

      <div className="w-100 d-flex d-md-none justify-content-between shadow p-2 py-3 rounded align-items-center">
        <h6 className="mb-0">{title}</h6>
         <i class="fa-solid fa-ellipsis-vertical"  onClick={handleSlider}></i>
      </div>

      <div
        className="offcanvas offcanvas-end "
        tabIndex="1"
        id="profileSidebar"
        style={{ borderRadius: "none" }}
      >
        <div className="offcanvas-header">
          <h5 className="active-text">My Account</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>

        <div className="sidebar">
          <div className="sidebar-profile">
            <div className="sidebar-avatar">
              <span>AS</span>
            </div>
            <div className="sidebar-name">Aarav Sharma</div>
            <div className="sidebar-id">RL7894561230</div>
          </div>

          <div className="sidebar-menu">
            {menuItems.map((item, i) => (
              <div key={i}>
                {/* Parent menu */}
                <div
                  className={`menu-item ${
                    pathname === item.path ? "active" : ""
                  }`}
                  onClick={() => handleClick(item)}
                >
                  <i className={item.icon}></i>
                  <span>{item.name}</span>
                  {item.children && (
                    <i
                      className={`fas fa-chevron-${
                        openDropdown === item.name ? "up" : "down"
                      } ml-auto`}
                      style={{
                        display: "flex",
                        justifyContent: "end",
                        width: "100%",
                      }}
                    ></i>
                  )}
                </div>

                {/* Submenu render only if children exist */}
                {item.children && openDropdown === item.name && (
                  <div className="submenu " style={{ paddingLeft: "43px" }}>
                    {item.children.map((child, idx) => (
                      <div
                        key={idx}
                        className={`submenu-item  d-flex gap-2 align-items-center mb-3${
                          pathname === child.path ? "active" : ""
                        }`}
                        onClick={() => {
                          setActiveMenu(child.name);
                          router.push(child.path);
                        }}
                        style={{ fontSize: "15px", cursor: "pointer" }}
                      >
                        <i className={child?.icon}></i>
                        {child.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {showLoginPopup && (
        <div
          className="payment-popup position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{ background: "rgba(0,0,0,0.5)", zIndex: 9999 }}
        >
          <div
            className="bg-white p-4 shadow"
            style={{ width: "440px", maxWidth: "90%" , borderRadius:"16px" }}
          >
            <div className="d-flex justify-content-center align-items-center mb-3">
              <h3>Log Out Confirmation</h3>
              {/* <button className="btn-close" 
        //  onClick={handleCloseThanksPopup}
         ></button> */}
            </div>

            <div className="d-flex flex-column align-items-center justify-content-center ">
              <p className="text-center">Are you sure you want to log out?</p>
             <div className="d-flex gap-2 w-100">
               <button className=" px-sm-4 px-2 mt-3" onClick={handleLogut}>
                <img
                  className="log-out-icon"
                  src="https://cdn-icons-png.flaticon.com/128/9208/9208320.png"
                  style={{ height: "22px", width: "22px" }}
                ></img>
                {" "}
                Confirm
               
              </button>
              <button className=" px-sm-4 px-2 mt-3 cancel-login"
              style={{backgroundColor:"#fafafa" , color:"black" , border:"1px solid #c2b3ce"}}
               onClick={handleClosePopup}>
                  {/* <i class="fa-solid fa-xmark"></i> */}
                {" "}
                Cancel
              
              </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileSidebar;
