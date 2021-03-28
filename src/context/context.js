import React,{useReducer,createContext} from 'react';
import contextReducer from './contextReducer';
const initialState = [];
export const ExpanseTrackerContext=createContext(initialState);

export const Provider = ({children})=>{
    const [transactions, dispatch] = useReducer(contextReducer, initialState);

    const deleteTransaction=(id)=>{
              dispatch({type:'Delete_Transaction',payload:id});
    }
    const addTransaction=(transaction)=>{
             dispatch({type:'Add_Transaction',payload:transaction});
    }
     
    return(
        <ExpanseTrackerContext.Provider value={{
            deleteTransaction:deleteTransaction,
            addTransaction:addTransaction,
            transactions,   
        }}>
            {children}
        </ExpanseTrackerContext.Provider>
    )     

}