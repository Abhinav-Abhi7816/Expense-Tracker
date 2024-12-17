import React from 'react'
import useDataContext from './Contexts/Context'

function Expense() {
    const {expenseArr,setExpenseArr}=useDataContext();
    function removeEle(index)
  {
    let tempArr=[...expenseArr];
    tempArr.splice(index,1);
    setExpenseArr(tempArr);
  }
    return (
        <div className='w-[50%] bg-slate-200 rounded-xl p-5'>
            <div className='bg-slate-400 text-center p-2 rounded-xl'>
                <p className='text-2xl font-semibold text-white'>Expense</p>
            </div>
            {(!expenseArr || expenseArr.length===0)?<div className='pt-2 rounded-xl text-xl text-center'><p>+ Add Some Expenses</p></div>:null}
            <div className=' p-2 rounded-xl'>
            {expenseArr.map((el,index)=>(<div key={index} className='flex justify-between text-xl my-2 p-1 bg-red-200 rounded-lg px-3 border-2 border-red-400'>
          <p className='font-semibold'>{el.inputDesc}</p>
          <div className='text-red-500 flex gap-2 place-items-center font-semibold'>
          <p>-{el.inputAmount}</p>
          <button className='bg-blue-500 rounded-lg text-white px-2 py-0.5 hover:bg-red-500 duration-300 active:scale-95' onClick={()=>removeEle(index)}>delete</button>
          </div>
        </div>))}
            </div>
        </div>
    )
}

export default Expense
