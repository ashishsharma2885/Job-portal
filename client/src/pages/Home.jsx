import React from 'react'
import Navbar from '../componenet/Navbar'
import Hero from '../componenet/Hero'
import JobListing from '../componenet/JobListing'
import AppDownload from '../componenet/AppDownload'
import Footer from '../componenet/Footer'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <JobListing />
        <AppDownload />
        <Footer />
    </div>
  )
}

export default Home