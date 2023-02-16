import Link from 'next/link';
import { Router, useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';
import { AuthContext } from '../../context/AuthProvider';



const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');
  const { user, logOut } = useContext(AuthContext)
  
  const router = useRouter();
  useEffect(() => {
    if (router.route == '/') {
      if (textColor) {
        setTextColor('gray' || 'white')
      }
      else {
        setTextColor('white')
      }
    }
    else {
      setTextColor('black')
      setColor('white')
    }

  }, [router.route, color])

  const handleSignout = () => {
    logOut();
    router.push("/");
  }

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {

    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#ffffff');
        setTextColor('#000000');
      } else {
        setColor('transparent');
        setTextColor('#ffffff');
      }

    };
    window.addEventListener('scroll', changeColor);
  }, []);

  const menu = <>
    <li className='hover:border-b-2 p-6 font-semibold border-b-sky-500 duration-100'>
      <Link
        href="/"
        aria-label="home"
        title="home"
        className={({ isActive }) => isActive ? "font-medium tracking-wide text-primary transition-colors duration-200 hover:text-deep-purple-accent-400" : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"}
      >
        Home
      </Link>
    </li>
    <li className='hover:border-b-2 p-6 font-semibold border-b-sky-500 duration-100'>
      <Link
        href="/about"
        aria-label="about"
        title="about"
        className={({ isActive }) => isActive ? "font-medium tracking-wide text-primary transition-colors duration-200 hover:text-deep-purple-accent-400" : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"}
      >
        About Us
      </Link>
    </li>
    <li className='hover:border-b-2 p-6 font-semibold border-b-sky-500 duration-100'>
      <Link
        href="/categories"
        aria-label="events"
        title="events"
        className={({ isActive }) => isActive ? "font-medium tracking-wide text-primary transition-colors duration-200 hover:text-deep-purple-accent-400" : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"}
      >
        Events
      </Link>
    </li>
    <li className='hover:border-b-2 p-6 font-semibold border-b-sky-500 duration-100'>
      <Link
        href="/blog"
        aria-label="blog"
        title="blog"
        className={({ isActive }) => isActive ? "font-medium tracking-wide text-primary transition-colors duration-200 hover:text-deep-purple-accent-400" : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"}
      >
        Blog
      </Link>
    </li>

    <li className='hover:border-b-2 p-6 font-semibold border-b-sky-500 duration-100'>
      <Link
        href="/contact"
        aria-label="contact"
        title="contact"
        className={({ isActive }) => isActive ? "font-medium tracking-wide text-primary transition-colors duration-200 hover:text-deep-purple-accent-400" : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"}
      >
        Contact
      </Link>
    </li>
    
    {
      user ?
        <>
          <li className='hover:border-b-2 p-6 font-semibold border-b-sky-500 duration-100'>
            <Link
              href="/dashboard"
              aria-label="dashboard"
              title="dashboard"
              className={({ isActive }) => isActive ? "font-medium tracking-wide text-primary transition-colors duration-200 hover:text-deep-purple-accent-400" : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"}
            >
              Dashboard
            </Link>
          </li>
          <li aria-label="dashboard"
            onClick={() => handleSignout()}
            title="logout"
            className='hover:border-b-2 p-6 font-semibold border-b-sky-500 duration-100'>

            <FiLogOut className='text-2xl'></FiLogOut>

          </li>


        </>
        :
        <>
        <li className='hover:border-b-2 p-6 font-semibold border-b-sky-500 duration-100'>
      <Link
        href="/signup"
        aria-label="contact"
        title="signup"
        className=''
      >
        Signup
      </Link>
    </li>
        
        
        </>
    }

  </>

  return (
    <>
      <div
        style={{ backgroundColor: `${color}` }}
        className='fixed left-0 top-0 w-full  z-[999]  ease-in duration-300'
      >
        <div className='max-w-[1240px] m-auto flex justify-between items-center pt-4 px-4 pb-1 text-white'>

          <Link href='/'>

            <h1 className='font-bold text-4xl flex items-center'>

              <img className='w-11 mt-1' src="https://i.ibb.co/khpBckc/f67.png" alt="" />
             <span className='text-sky-500 uppercase ml-4 hidden md:block lg:block'>Event</span><span className='hidden uppercase md:block lg:block' style={{ color: `${textColor}` }} >Mart</span>
            </h1>
          </Link>
          <ul style={{ color: `${textColor}` }} className='hidden md:hidden lg:flex'>
            {menu}
          </ul>

          {/* Mobile Button */}
          <div onClick={handleNav} className='block md:block lg:hidden z-10'>
            {nav ? (
              <AiOutlineClose className='text-white' size={20} />
            ) : (
              <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
            )}
          </div>
          {/* Mobile Menu */}
          <div
            className={
              nav
                ? 'lg:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
                : 'lg:hidden  absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
            }
          >
            <ul>
            {menu}
              
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
