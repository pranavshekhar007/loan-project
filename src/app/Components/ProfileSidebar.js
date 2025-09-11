"use client";
import React from "react";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

const ProfileSidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState("Profile");

  const menuItems = [
    { name: "Profile", icon: "fas fa-user-circle", path: "/profile" },
    {
      name: "Applied Loans",
      icon: "fas fa-hand-holding-usd",
      path: "/applied-loans",
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
        { name: "Contact", icon:"fas fa-envelope" ,  path: "/support" },
        { name: "FAQ",icon: "fas fa-question-circle", path: "/faq" },
        { name: "Privacy Policy", icon: "fas fa-user-shield", path: "" },
         { name:"Terms & Conditions", icon: "fas fa-file-contract",  path:""},
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

  const handleClick = (item) => {
    if (item.children) {
      setOpenDropdown(openDropdown === item.name ? null : item.name);
    } else {
      setActiveMenu(item.name);
      router.push(item.path);
    }
  };


  return (
    <div>
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
      className={`menu-item ${pathname === item.path ? "active" : ""}`}
      onClick={() => handleClick(item)}
    >
      <i className={item.icon}></i>
      <span>{item.name}</span>
      {item.children && (
        <i className={`fas fa-chevron-${openDropdown === item.name ? "up" : "down"} ml-auto`}
          style={{display:"flex" , justifyContent:"end" , width:"100%"}}
        ></i>
      )}
    </div>

    {/* Submenu render only if children exist */}
    {item.children && openDropdown === item.name && (
      <div className="submenu " style={{paddingLeft:"43px"}} >
        {item.children.map((child, idx) => (
          <div
            key={idx}
            className={`submenu-item  d-flex gap-2 align-items-center mb-3${pathname === child.path ? "active" : ""}`}
            onClick={() => {
              setActiveMenu(child.name);
              router.push(child.path);
            }}
            style={{fontSize:"15px" , cursor:"pointer"}}
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
  );
};

export default ProfileSidebar;
