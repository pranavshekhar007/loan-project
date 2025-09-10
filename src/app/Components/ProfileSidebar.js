"use client";
import React from 'react'
import { useState } from 'react';
import { useRouter , usePathname} from 'next/navigation';

const ProfileSidebar = () => {
     
    const router = useRouter();
    const pathname = usePathname();
     const [activeMenu, setActiveMenu] = useState("Profile");
         
          const menuItems = [
        { name: "Profile", icon: "fas fa-user-circle" , path :"/profile" },
          { name: "Applied Loans", icon: "fas fa-hand-holding-usd" , path:"/applied-loans" },
        { name: "Transactions", icon: "fas fa-exchange-alt" , path:"" },
        { name: "EMI Reminder", icon: "fa-solid fa-stopwatch" , path:""},
        { name: "Notification", icon: "fa-solid fa-bell", path:"" },
        { name: "Logout", icon: "fas fa-sign-out-alt", path:"/log-out" },
        // { name: "Contact", icon: "fas fa-envelope" },
        // { name: "FAQ", icon: "fas fa-question-circle" },
        // { name: "Terms & Conditions", icon: "fas fa-file-contract" },
        // { name: "Privacy Policy", icon: "fas fa-user-shield" },
     
      
      ];

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
                <div
                  key={i}
                  className={`menu-item ${pathname === item.path ? "active" : ""}`}
                  onClick={() => {
                    setActiveMenu(item.name);
                    router.push(item?.path)
                  }}
                >
                  <i className={item.icon}></i>
                  <span>{item.name}</span>
                </div>
              ))}
                
            </div>
        </div>
    </div>
  )
}

export default ProfileSidebar
