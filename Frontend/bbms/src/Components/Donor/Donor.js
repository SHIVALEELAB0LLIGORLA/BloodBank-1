import React,{useState} from 'react';

import {
    FaUserAlt,
    FaPlusSquare,
    FaHistory,
    FaBars,
  
    FaSignOutAlt
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import '../Styles/Sidebar.css'



const Donor = ({children}) => {
    const[isOpen,setIsOpen]=useState(false);
    const toggle=()=>setIsOpen(!isOpen);
    const menuItem=[     
        {
            path:"/Donor",
            name:"Home",
            icon:<FaUserAlt/>
        },
        {
            path:"/Donate",
            name:"Donate",
            icon:<FaPlusSquare/>
        },
        {
            path:"/DonorSearch",
            name:"Donor Details",
            icon:<FaHistory/>
        },
        {
            path:"/",
            name:"Logout",
            icon:<FaSignOutAlt/>
        }
       
    ]
    return (
        <div className="Scontainer">
            <div style={{width:"200px"}} className="Ssidebar">
               <div className="Stop_section">
                   <h1 style={{display: isOpen ? "none" : "block"}} className="Slogo">Donor</h1>
                   <div style={{marginLeft: isOpen ? "0px" : "50px"}} className="Sbars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
                {
                   menuItem.map((item, index)=>(
                    <NavLink to={item.path} key={index} className="Slink" activeclassName="Sactive">
                        <div className="Sicon">{item.icon}</div>
                        <div style={{display: isOpen ? "none" : "block"}} className="Slink_text">{item.name}</div>
                    </NavLink>
                ))
               }
            </div>
            <main className='Smain'>{children}</main>
        </div>
    );
};

export default Donor;