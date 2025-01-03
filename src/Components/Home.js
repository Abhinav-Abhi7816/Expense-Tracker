
import Income from './Income'
import Expense from './Expense'
import Transaction from './Transaction'
import useDataContext from './Contexts/Context';
import './Transaction.css'
import { useEffect, useState } from 'react';
import { Chart as ChartJS,defaults } from 'chart.js/auto';
import { Pie } from 'react-chartjs-2';

defaults.maintainAspectRatio=false;
defaults.responsive=true;

function Home() {
  const { tranFlag, incomeArr, expenseArr } = useDataContext();

  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  
  const [graphDefault,setGraphDefault]=useState(1);
  async function handleBalance() {
    if (incomeArr.length === 0 && expenseArr.length === 0) {
      setGraphDefault(1);
      setBalance(0);
      return;
    }
    let temp = 0;
    //let temp2 = temp;
    for (let i = 0; i < incomeArr.length; i++) {
      temp = temp + incomeArr[i].inputAmount;
    }
    for (let i = 0; i < expenseArr.length; i++) {
      temp = temp - expenseArr[i].inputAmount;
    }
    // //animation purpose only not mandatory
    // let k = currencySlowConst(temp, temp2);
    // if (temp > temp2) {
    //   for (let i = temp2; i <= temp; i++) {
    //     setBalance(i);
    //     i = i + k;
    //     await resolveAfter2Seconds();
    //   }
    // }
    // else {
    //   for (let i = temp; i <= temp2; i++) {
    //     setBalance(i);
    //   }
    // }
    setGraphDefault(0);
    setBalance(temp)

  }
  // //animation purpose only not mandatory
  // function currencySlowConst(temp, temp2) {
  //   let k = 50;
  //   if (Math.abs(temp - temp2) > 10000 || Math.abs(temp2 - temp) > 10000) {
  //     return parseInt(k * (temp / 10000))
  //   }
  //   if (Math.abs(temp - temp2) < 100 || Math.abs(temp2 - temp) < 100) {

  //     return 10;
  //   }
  //   return k;
  // }
  //  //animation purpose only not mandatory
  // function resolveAfter2Seconds(x) {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve(x);
  //     }, 0.1);
  //   });
  // }

  async function handleIncome() {
    let temp = 0
    //let temp2 = temp;
    for (let i=0;i<incomeArr.length;i++) {
      temp = temp + incomeArr[i].inputAmount;
    }
    // //animation
    // let k = currencySlowConst(temp, temp2);
    
    // for (let i = temp2; i <= temp; i++) {
    //   setIncome(i);
    //   i = i + k;
    //   await resolveAfter2Seconds();
    // }
    setIncome(temp);
    //setGraphIncome(temp);
  }

  async function handleExpense() {
    let temp = 0
    //let temp2 = temp;
    for (let i=0;i<expenseArr.length;i++) {
      temp = temp + expenseArr[i].inputAmount;
    }
    // //animation
    // let k = currencySlowConst(temp, temp2);
    
    // for (let i = temp2; i <= temp; i++) {
    //   setExpense(i);
    //   i = i + k;
    //   await resolveAfter2Seconds();
    // }
    setExpense(temp);
    
    //setGraphExpense(temp);
  }

  useEffect(()=>{
    handleBalance();
    handleIncome();
  },[incomeArr]);
  useEffect(()=>{
    handleBalance();
    handleExpense();
  },[expenseArr]);
  
  return (
    <div>
      <div className='md:pt-28 pt-20 md:p-10 p-2'>
        <div className='bg-slate-300 md:p-10 p-2 py-4 rounded-xl flex flex-col md:flex-row justify-between place-items-center gap-5' style={{ textShadow: "2px 4px 20px rgb(0,0,0,0.3)" }}>
          <div className='bg-white md:w-[50%] w-[100%] min-w-[50%] flex flex-col justify-around place-items-center md:gap-8 md:p-8 p-4 shadow-2xl rounded-xl' style={{ boxShadow: "2px 4px 20px rgb(0,0,0,0.3)" }}>
            <h1 className='md:text-3xl text-xl font-semibold border-b-2 border-b-black  w-[100%] text-center px-5'>Overview</h1>
            <div className='flex flex-col md:gap-6 p-2 md:p-0 '>
              <h1 className={`md:text-2xl font-semibold text-center ${(balance<0)?'text-red-500 animate-blink':""}`}>The Balance is : ₹ {balance}</h1>
              <div className='flex flex-col justify-around md:gap-8 gap-3 md:text-xl text-xs'>
                <div className='flex flex-col justify-center place-items-center md:gap-3 text-green-500'>
                  <p className='md:text-4xl text-2xl font-bold'>₹ {income}</p>
                  <p className='text-[rgb(0,0,0,0.6)]'>Total Income</p>
                </div>
                <div className='flex flex-col justify-center  place-items-center md:gap-3 text-red-500'>
                  <p className='md:text-4xl text-2xl font-bold'>₹ {expense}</p>
                  <p className='text-[rgb(0,0,0,0.6)]'>Total Expense</p>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-white md:w-[50%] w-[100%]  max-h-[500px]  p-2 rounded-xl' style={{ boxShadow: "2px 4px 20px rgb(0,0,0,0.3)" }}>
            <div>
            <Pie
                data={{
                  labels:["Income","Expense"  ],
                  datasets:[{
                    label:["income","expense","default"],
                    data:[income,expense,graphDefault],
                    backgroundColor:[
                      "green",
                      "red",
                      "rgb(0,0,0,0.3)"
                    ]
                  }]
                }}
                options={[]}
                width={360}
                height={360}
                >
                </Pie>
            </div>
            
          </div>
        </div>
        <div className='flex justify-between md:flex-row flex-col gap-5 my-5'>
          <Income></Income>
          <Expense></Expense>
        </div>

      </div>
      <div>
        {(tranFlag) ?
          <div className=' absolute top-0 bg-[rgb(0,0,0,0.5)] w-[100%] md:h-lvh min-h-screen h-full flex justify-center place-items-center' >
            <div className=' md:w-[45%] w-[100%] p-2'>
              <Transaction></Transaction>
            </div>
          </div> : null}
      </div>
    </div>
  )
}

export default Home
