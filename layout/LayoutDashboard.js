import React, { useState } from "react";

import { MdDashboard } from 'react-icons/md';
import { IoIosArrowDown } from 'react-icons/io';
import styles from '../styles/dashboard.module.css'
import Link from "next/link";

const LayoutDashboard = ({children}) => {
    const [toggle, setToggle]= useState(false);
    
    


  return (
    <div className={styles.top_class_data}>
      <div className={styles.header_data}>
        <div onClick={()=> setToggle(!toggle)} className={styles.logosec}>
          
          <img
            src="https://i.ibb.co/0YMpbT0/Untitled-design-30.png"
            className={`${styles.icn} ${styles.menuicn}`}
            id="menuicn"
            alt="menu-icon"
          />
        </div>

        <div className={styles.searchbar}>
          <input type="text" placeholder="Search" />
          <div className={styles.searchbtn}>
            <img
              src="https://i.ibb.co/1mvyLPD/Untitled-design-28.png"
              className={`${styles.icn} ${styles.srchicn}`}
              alt="search-icon"
            />
          </div>
        </div>

        <div className={styles.message}>
          <div className={styles.circle}></div>
          <img
            src="https://i.ibb.co/qs4QtHf/8.png"
            className={styles.icn}
            alt=""
          />
          <div className={styles.dp}>
            <img
              src="https://i.ibb.co/9rcGLKG/profile-removebg-preview.png"
              className={styles.dpicn}
              alt="dp"
            />
          </div>
        </div>
      </div>

      <div className={styles.main_container}>
        <div className={toggle ? `${styles.navcontainer} ${styles.navclose}`: styles.navcontainer}>
          <nav className={styles.nav}>
            <div className={styles.nav_upper_options}>
            <Link href="/dashboard">
              <div className={`${styles.nav_option} ${styles.option1}`}>
              <MdDashboard className="text-3xl"></MdDashboard>
                
                <h3> Dashboard</h3>
                
              </div>
              </Link>
              <Link href='dashboard/allUser'>
              <div className={`${styles.option2} ${styles.nav_option}`}>
                
                <img
                  src="https://i.ibb.co/w6TmPMM/9.png"
                  className={styles.nav_img}
                  alt="articles"
                />
                <h3 className="text-white hover:text-gray-800"> AllUser</h3>
                
              </div>
              </Link>

              <div className={`${styles.nav_option} ${styles.option3}`}>
                <img
                  src="https://i.ibb.co/1ZNpvYK/5.png"
                  className={styles.nav_img}
                  alt="report"
                />
                <h3 className="text-white hover:text-gray-800">Employees</h3>
              </div>

              <div className={`${styles.nav_option} ${styles.option4}`}>
                <img
                  src="https://i.ibb.co/Cs2bvXv/6.png"
                  className={styles.nav_img}
                  alt="institution"
                />
                <h3 className="text-white hover:text-gray-800">Leaves</h3>
              </div>

              <div className={`${styles.nav_option} ${styles.option5}`}>
                <img
                  src="https://i.ibb.co/ZNQzLfC/10.png"
                  className={styles.nav_img}
                  alt="blog"
                />
                <h3 className="text-white hover:text-gray-800"> Expense</h3>
              </div>
              <div className={`${styles.nav_option} ${styles.option5}`}>
                <img
                  src="https://i.ibb.co/ZNQzLfC/10.png"
                  className={styles.nav_img}
                  alt="blog"
                />
                <h3 className="text-white hover:text-gray-800"> Notice</h3>
              </div>
              
             
              <div className={`${styles.nav_option} ${styles.option6}`}>
                <img
                  src="https://i.ibb.co/nC91Ty6/4.png"
                  className={styles.nav_img}
                  alt="settings"
                />
                <h3 className="text-white hover:text-gray-800"> 
                <div className="flex items-center gap-5">
                  <p>Settings</p>
                  
                  </div>  </h3>
               
              
              

              </div>
              
              
              

              <div className={`${styles.nav_option} ${styles.logout}`}>
                <img
                  src="https://i.ibb.co/NK4pb43/7.png"
                  className={styles.nav_img}
                  alt="logout"
                />
                <h3 className="text-white hover:text-gray-800">Logout</h3>
              </div>
            </div>
          </nav>
        </div>
        <div className={styles.main}>
          <div className={styles.searchbar2}>
            <input type="text" name="" id="" placeholder="Search" />
            <div className={styles.searchbtn}>
              <img
                src="https://i.ibb.co/1mvyLPD/Untitled-design-28.png"
                className={`${styles.icn} ${styles.srchicn}`}
                alt="search-button"
              />
            </div>
          </div>
        {children}
          
        </div>
      </div>
    </div>
  );
};

export default LayoutDashboard;