import React from 'react'
import { MdOutlineAddCard } from "react-icons/md";
import useDataContext from './Contexts/Context';
function Header() {
  const {setTranFlag} = useDataContext();
  
  const scrollToTop = () => {
    setTranFlag(true);
    window.scrollTo({
      top: 0,
      left: 0,
      
    });
  };
  return (
    <nav className='bg-slate-800 fixed w-[100%] text-white md:text-xl font-semibold md:py-6 py-4 px-2 flex justify-around place-items-center'>
        <h1 className='md:text-4xl' style={{fontFamily:"Candara Light"}}>Expense Tracker</h1>
        <div className='flex place-items-center gap-10'>
        <button className='bg-blue-500 md:py-1.5  md:px-4 px-2 py-0.5 text-sm rounded-lg md:text-2xl flex place-items-center gap-2 hover:bg-blue-400 duration-300 active:scale-95' onClick={scrollToTop}>New Transaction <MdOutlineAddCard className='mt-1' size={25}></MdOutlineAddCard></button>
        </div>
    </nav>
  )
}

export default Header
