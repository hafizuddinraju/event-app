import Head from 'next/head'
import About from '../components/About/About'
import ContactUs from '../components/ContactUs/ContactUs'
import Header from '../components/Header/Header'
import GallerySection from '../components/MyGallery/GallerySection'
import Topbar from '../components/Navbar/Topbar'
import Testimonial from '../components/Testimonial/Testimonial'
import HappyClients from '../components/HappyClients/HappyClients'
import Category from '../components/Categories/Category'
import Features from '../components/features/Features'
import ReachUs from '../components/ReachUs/ReachUs'
import AdvertisePopUp from '../components/AdvertisePopUp/AdvertisePopUp'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
import Speaker from '../components/Speaker/Speaker'

export default function Home() {
  const {openModal} = useContext(AuthContext);
  return (
    <>
      <Head>
        <title>EventMart</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        openModal ?  <AdvertisePopUp></AdvertisePopUp> :  <main>
     
        <Topbar></Topbar>
        <Header></Header>
        <Features></Features>
        <Category></Category>
        <About></About>
        <GallerySection />
        <HappyClients></HappyClients>
        <Testimonial></Testimonial>
        <Speaker></Speaker>
        <ReachUs></ReachUs>
        <ContactUs />
        
      </main>
      }
    </>
  )
}
