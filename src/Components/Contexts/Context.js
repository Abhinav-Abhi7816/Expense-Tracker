import { createContext, useContext } from "react";

const DataContext=createContext({tranFlag:null,setTranFlag:()=>{},incomeArr:[],setIncomeArr:()=>{},expenseArr:[],setExpenseArr:()=>{},});

export const DataContextProvider=DataContext.Provider;

export default function useDataContext(){
    return useContext(DataContext);
}