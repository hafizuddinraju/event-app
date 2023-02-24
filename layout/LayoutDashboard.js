import React, { useState } from "react";

import { MdDashboard } from 'react-icons/md';
import { IoIosArrowDown } from 'react-icons/io';
import styles from '../styles/dashboard.module.css'
import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import Spinner from "../components/Spinner/Spinner";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../lib/helperUser";

const LayoutDashboard = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const { user } = useContext(AuthContext);

  const {
    data: alluser = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await getUsers();
      return res;
    },
  });

  if (isLoading) {
    return <Spinner></Spinner>
  }

  const dataFilter = alluser?.filter(data => data.email === user.email)



  return (
    <div className={styles.top_class_data}>
      <div className={styles.header_data}>
        <div onClick={() => setToggle(!toggle)} className={styles.logosec}>

          <img
            src="https://i.ibb.co/0YMpbT0/Untitled-design-30.png"
            className={`${styles.icn} ${styles.menuicn}`}
            id="menuicn"
            alt="menu-icon"
          />
        </div>

        {/* <div className={styles.searchbar}>
          <input type="text" placeholder="Search" />
          <div className={styles.searchbtn}>
            <img
              src="https://i.ibb.co/1mvyLPD/Untitled-design-28.png"
              className={`${styles.icn} ${styles.srchicn}`}
              alt="search-icon"
            />
          </div>
        </div> */}

        <div className={styles.message}>
          <div className={styles.circle}></div>
          {/* <img
            src="https://i.ibb.co/qs4QtHf/8.png"
            className={styles.icn}
            alt=""
          /> */}
          <div className={styles.dp}>
            <Link href="/dashboard/profile">
              {
                user?.uid && user?.photoURL ? 
                <img
                src={user.photoURL}
                className={styles.dpicn}
                alt="dp"
              />
              :
              <img
                src="https://i.ibb.co/9rcGLKG/profile-removebg-preview.png"
                className={styles.dpicn}
                alt="dp"
              />
              }
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.main_container}>
        <div className={toggle ? `${styles.navcontainer} ${styles.navclose}` : styles.navcontainer}>
          {

            dataFilter[0]?.role == 'Admin'?
            <nav className={styles.nav}>
            <div className={styles.nav_upper_options}>
            <Link href="/dashboard">
              <div className={`${styles.nav_option} ${styles.option1}`}>
              <MdDashboard className="text-3xl"></MdDashboard>
                
                <h3> Dashboard</h3>
                
              </div>
              </Link>
              <Link href='/dashboard/allUser'>
              <div className={`${styles.nav_option} ${styles.option1}`}>
                
                <img
                  src="https://i.ibb.co/w6TmPMM/9.png"
                  className={styles.nav_img}
                  alt="articles"
                />
                <h3 className="text-white hover:text-gray-100"> AllUser</h3>
                
              </div>
              </Link>
              <Link href='/dashboard/addEvent'>
              <div className={`${styles.nav_option} ${styles.option1}`}>
                <img
                  src="https://i.ibb.co/1ZNpvYK/5.png"
                  className={styles.nav_img}
                  alt="report"
                />
                <h3 className="text-white hover:text-gray-100">Add Event</h3>
              </div>
              </Link>
              <Link href='/dashboard/addBlog'>
              <div className={`${styles.nav_option} ${styles.option1}`}>
                <img
                  src="https://i.ibb.co/1ZNpvYK/5.png"
                  className={styles.nav_img}
                  alt="report"
                />
                <h3 className="text-white hover:text-gray-100">Add Blog</h3>
              </div>
              </Link>
              <Link href='/dashboard/adminRequestEvents'>
              <div className={`${styles.nav_option} ${styles.option1}`}>
                <img
                  src="https://i.ibb.co/L6gP69g/download.jpg"
                  className={styles.nav_img}
                  alt="report"
                />
                <h3 className="text-white hover:text-gray-100">Requested Events</h3>
              </div>
              </Link>
              <Link href='/dashboard/rejectedEvent'>
              <div className={`${styles.nav_option} ${styles.option1}`}>
                <img
                  src="https://i.ibb.co/Cs2bvXv/6.png"
                  className={styles.nav_img}
                  alt="report"
                />
                <h3 className="text-white hover:text-gray-100">Requested Rejected Event</h3>
              </div>
              </Link>
            
              <Link href='/dashboard/paymentEvent'>
              <div className={`${styles.nav_option} ${styles.option1}`}>

                <img
                  src="https://i.ibb.co/Cs2bvXv/6.png"
                  className={styles.nav_img}
                  alt="report"
                />
                <h3 className="text-white hover:text-gray-100">Payment Event</h3>
              </div>
              </Link>
              <Link href='/dashboard/allEvent'>
              <div className={`${styles.nav_option} ${styles.option1}`}>

                <img
                  src="https://i.ibb.co/Cs2bvXv/6.png"
                  className={styles.nav_img}
                  alt="report"
                />
                <h3 className="text-white hover:text-gray-100">All Event</h3>
              </div>
              </Link>


            </div>
          </nav>
          :
          ''

          }

          {
            dataFilter[0]?.role == 'User' ?
              <nav className={styles.nav}>
                <div className={styles.nav_upper_options}>
                  <Link href="/dashboard">
                    <div className={`${styles.nav_option} ${styles.option1}`}>
                      <MdDashboard className="text-3xl"></MdDashboard>

                      <h3> Dashboard</h3>

                    </div>
                  </Link>
                  <Link href='/dashboard/myOrders'>
                    <div className={`${styles.nav_option} ${styles.option1}`}>

                      <img
                        src="https://i.ibb.co/w6TmPMM/9.png"
                        className={styles.nav_img}
                        alt="articles"
                      />
                      <h3 className="text-white hover:text-gray-100"> MyOrders</h3>

                    </div>
                  </Link>
                  <Link href='/dashboard/customevent'>
                    <div className={`${styles.nav_option} ${styles.option1}`}>

                      <img
                        src="https://i.ibb.co/88frRk9/images.png"
                        className={styles.nav_img}
                        alt="articles"
                      />
                      <h3 className="text-white hover:text-gray-100"> Create Custom Event</h3>

                    </div>
                  </Link>
                  <Link href='/dashboard/requestedevent'>
                    <div className={`${styles.nav_option} ${styles.option1}`}>

                      <img
                        src="https://i.ibb.co/5KzwmRk/images.png"
                        className={styles.nav_img}
                        alt="articles"
                      />
                      <h3 className="text-white hover:text-gray-100"> Check Custom Event</h3>

                    </div>
                  </Link>

                  <div className={`${styles.nav_option} ${styles.option1}`}>
                    <img
                      src="https://i.ibb.co/1ZNpvYK/5.png"
                      className={styles.nav_img}
                      alt="report"
                    />
                    <h3 className="text-white hover:text-gray-100">Payment</h3>
                  </div>

                </div>
              </nav>
              :
              ''

          }

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