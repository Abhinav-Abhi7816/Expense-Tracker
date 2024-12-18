import React, { useState } from 'react'
import useDataContext from './Contexts/Context';
import "./Transaction.css"
function Transaction() {
    const { setTranFlag,incomeArr,setIncomeArr,expenseArr,setExpenseArr } = useDataContext();
    const [inputDesc, setInputDesc] = useState("")
    const [inputAmount, setInputAmount] = useState("")
    const [radioIn, setRadioIN] = useState("income")
    function addTrans() {
        if (inputDesc.trim()==="" || inputAmount.trim()==="" || inputAmount===0)
        {
            alert("Description Or Amount Cannot be Empty or 0!");
            return;
        }
        else{
            let transaction={
                "inputDesc":inputDesc,
                "inputAmount":parseInt(inputAmount),
                "radioIn":radioIn
            };

            if(radioIn==="income")
            {
                let tempArr1=[...incomeArr];
                tempArr1.push(transaction);
                setIncomeArr(tempArr1);
            }
            else{
                let tempArr2=[...expenseArr];
                tempArr2.push(transaction);
                setExpenseArr(tempArr2);
            }
            setTranFlag(false);
        }
    }
    return (
        <div className='bg-[rgb(0,0,0,0.4)] p-12 w-[100%] rounded-xl animate-transaction'>
            <div className='text-xl bg-white flex flex-col justify-between gap-3 place-items-center w-[100%] p-5 px-8 rounded-xl shadow-2xl' style={{ boxShadow: "2px 4px 20px rgb(0,0,0,0.3)" }}>
                <h1 className='text-2xl font-semibold'>Add New Transaction</h1>
                <button className='text-slate-600 text-4xl absolute -mt-1' style={{ alignSelf: "flex-end" }} onClick={() => setTranFlag(false)}>⨯</button>
                <div className='flex flex-col place-content-center w-[100%]'>
                    <label htmlFor="in-desc">Enter Description:</label>
                    <input type="text" className='p-2 border-[1px] border-slate-300 rounded-lg my-1 focus:outline-slate-500' id='in-desc' placeholder='Enter transaction description...' value={inputDesc} onChange={(e) => setInputDesc(e.target.value)} />
                </div>
                <div className='flex flex-col place-content-center w-[100%]'>
                    <label htmlFor="in-amount">Enter Amount:</label>
                    <input type="number" className='p-2 border-[1px] border-slate-300 rounded-lg my-1 focus:outline-slate-500' id='in-amount' placeholder='Enter transaction Amount...' value={inputAmount} onChange={(e) => setInputAmount(e.target.value)} />
                </div>
                <div className='flex gap-5 w-[100%]'>
                    <div>
                        <input type="radio" className="mx-2 size-4" id='inc-rad' name='tran-type' defaultChecked value={"income"} onChange={(e) => setRadioIN(e.target.value)} />
                        <label htmlFor="inc-rad" className='cursor-pointer'>Income</label>
                    </div>
                    <div>
                        <input type="radio" className="mx-2 size-4" id='exp-rad' name='tran-type' value={"expense"} onChange={(e) => setRadioIN(e.target.value)} />
                        <label htmlFor="exp-rad" className='cursor-pointer'>Expense</label>
                    </div>
                </div>
                <div className='w-[100%] flex justify-end'>
                    <div className='flex gap-2'>
                        <button className='py-1.5 px-4 text-white font-semibold rounded-lg duration-300 active:scale-95 bg-red-500 hover:bg-red-400' onClick={() => setTranFlag(false)}>Cancel</button>
                        <button className='py-1.5 px-4 text-white font-semibold rounded-lg duration-300 active:scale-95 bg-blue-500 hover:bg-blue-400' onClick={addTrans}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Transaction
