import React from 'react'
import Info from './Info'
import About from './About'
import Interests from './Interests'
import Footer from './Footer'


export default function Card() {
    return <div className='rounded-lg w-96 bg-[#1a1b21] overflow-hidden'>
        <Info />
        <About />
        <Interests />
        <Footer />
    </div>
}