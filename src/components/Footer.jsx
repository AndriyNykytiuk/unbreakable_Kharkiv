import React from 'react'
import fb from '../assets/icons/ic_fb.svg'
import inst from '../assets/icons/ic_instagram.svg'

const Footer = () => {
  return (
    <>

        <section className='footer-section max-w-7xl mx-auto p-4 bg-[#14212F] flex justify-between items-center text-white'>
            <div>
                <h2>Звʼязатися з нами:</h2>
                <a href="#">nezlamnyj.harkiv@gmail.com</a>
            </div>
            <div className='flex justify-between items-center gap-4'>
                <a href="#"><img src={fb} alt="Facebook" /></a>
                <a href="#"><img src={inst} alt="Instagram" /></a>
            </div>
        </section>
    
    </>
  )
}

export default Footer