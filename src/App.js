import { useEffect, useState } from "react";
import { DataContextProvider } from "./Components/Contexts/Context";
import Header from "./Components/Header";
import Home from './Components/Home'

function App() {
  const [tranFlag, setTranFlag] = useState(null);
  const [incomeArr, setIncomeArr] = useState([]);
  const [expenseArr, setExpenseArr] = useState([]);
  useEffect(()=>{console.log(incomeArr)},[incomeArr])
  useEffect(()=>{console.log(expenseArr)},[expenseArr])
  return (
    <div>
      <DataContextProvider value={{tranFlag,setTranFlag,incomeArr, setIncomeArr,expenseArr, setExpenseArr}}>
        <Header></Header>
        <Home></Home>
      </DataContextProvider>
    </div>
  );
}

export default App;
