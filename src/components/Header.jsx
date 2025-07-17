import React from 'react'
import HeaderDropList from './HeaderDropList'
import '../components/css/headerbuttons.css'

const Header = () => {
  return (
    <>
    
        <header >
           <section className='max-w-7xl mx-auto p-4 position-relative'>
            <div className='flex justify-between items-center p-2 '>
                   <HeaderDropList />
                <div className='flex justify-between items-center gap-4 header-buttons'>
                    <div className=' flex justify-between items-center gap-4 border border-black-300 rounded-3xl header-button'>
                        <a href="">Контакти</a>
                    </div>
                    <div className=' flex justify-between items-center gap-4 border border-black-300 rounded-3xl header-button'>
                        <a href="#">Увійти</a>
                    </div>
                </div>
            </div>
           </section>
        </header>
    
    </>
  )
}

export default Header