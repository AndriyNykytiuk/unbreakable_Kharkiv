import React,{useState} from 'react'
import headerDropList from '../headerDropList.json'
import '../components/css/headerdroplist.css'
import { GoTriangleDown } from "react-icons/go";
import { GoTriangleUp } from "react-icons/go";

const HeaderDropList = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <>
       <div className='header-title'>
         <div className='flex justify-between items-center header-title-container'
            onMouseEnter={() => setIsOpen(true)}
         
            style={{transition: 'all 0.3s '}}
            >
            <h3 >наша робота</h3>
            {isOpen ? <GoTriangleUp /> :<GoTriangleDown /> }
        </div>
        <div className='header-drop-list'
         onMouseLeave={() => setIsOpen(false)}>
            {headerDropList.items.map((item) => (
                <div key={item.id} className='header-drop-item'>
                    <a href="#" className='header-link'>{item.title}</a>
                </div>
            ))}
        </div>
       </div>

    </>
  )
}

export default HeaderDropList