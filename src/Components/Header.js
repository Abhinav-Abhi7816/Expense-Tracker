import React from 'react'
import { MdOutlineAddCard } from "react-icons/md";
import useDataContext from './Contexts/Context';
function Header() {
  const {setTranFlag} = useDataContext();
  
  return (
    <nav className='bg-slate-800 fixed w-[100%] text-white text-xl font-semibold py-6 flex justify-around'>
        <h1 className='text-4xl' style={{fontFamily:"Candara Light"}}>Expense Tracker</h1>
        <div className='flex place-items-center gap-10'>
        <button className='bg-blue-500 py-1.5 px-4 rounded-lg flex place-items-center gap-2 hover:bg-blue-400 duration-300 active:scale-95' onClick={()=>setTranFlag(true)}>New Transaction <MdOutlineAddCard className='mt-1' size={25}></MdOutlineAddCard></button>
        
        </div>
    </nav>
  )
}

export default Header
