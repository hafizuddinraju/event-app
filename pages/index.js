import Head from 'next/head'
import Footer from '../components/Footer/Footer'

import About from '../components/About/About'
import ContactUs from '../components/ContactUs/ContactUs'
import Header from '../components/Header/Header'
import GallerySection from '../components/MyGallery/GallerySection'
import Topbar from '../components/Navbar/Topbar'
import Testimonial from '../components/Testimonial/Testimonial'
import HappyClients from '../components/HappyClients/HappyClients'
import Category from '../components/Categories/Category'

export default function Home() {
  return (
    <>
      <Head>
        <title>EventMart</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Topbar></Topbar>
        <Header></Header>
        <Category></Category>
        <About></About>
        <GallerySection />
        <HappyClients></HappyClients>
        <Testimonial></Testimonial>
        <ContactUs />
        <Footer />
      </main>
    </>
  )
}
