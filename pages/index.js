import Head from 'next/head'
import ContactUs from '../components/ContactUs/ContactUs'
import Footer from '../components/Footer/Footer'

import Header from '../components/Header/Header'



export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header></Header>
        <ContactUs />
        <Footer />
      </main>
    </>
  )
}
