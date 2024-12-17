import React from 'react'
import useDataContext from './Contexts/Context'

function Income() {
  const {incomeArr,setIncomeArr}=useDataContext()

  function removeEle(index)
  {
    let tempArr=[...incomeArr];
    tempArr.splice(index,1);
    setIncomeArr(tempArr);
  }
  return (
    <div className='w-[50%] bg-slate-200 rounded-xl p-5'>
      <div className='bg-slate-400 text-center p-2 rounded-xl'>
        <p className='text-2xl font-semibold text-white'>Income</p>
      </div>
        {(!incomeArr || incomeArr.length===0)?<div className='pt-2 rounded-xl text-xl text-center '><p>+ Add Some Income</p></div>:null}
      <div className=' p-2 rounded-xl'>
        {incomeArr.map((el,index)=>(<div key={index} className='flex justify-between text-xl bg-green-200 rounded-lg px-3 border-2 border-green-500 my-2 p-1 place-items-center font-semibold'>
          <p className='font-semibold'>{el.inputDesc}</p>
          <div className='flex gap-3 text-green-500 place-items-center'>
          <p>+{el.inputAmount}</p>
          <button className='bg-blue-500 rounded-lg text-white px-2 py-0.5  hover:bg-red-500 duration-300 active:scale-95' onClick={()=>removeEle(index)}>delete</button>
          </div>
        </div>))}
      </div>
    </div>
  )
}

export default Income
