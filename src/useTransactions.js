import {useContext} from 'react';
import {ExpanseTrackerContext} from './context/context';
import {incomeCategories, expenseCategories,resetCategories} from './constants/categories';

const useTransactions=(title)=>{
 resetCategories();
 const {transactions} = useContext(ExpanseTrackerContext);
 const transactionsType=transactions.filter((t)=>t.type===title);
 const total=transactionsType.reduce((acc,currVal)=>acc=acc+currVal.amount,0);
 const categories=title==='Income'?incomeCategories:expenseCategories;
 console.log({transactionsType,total,categories});
 transactionsType.forEach((t) => {
     const category= categories.find((c)=>c.type===t.category);
     if(category) category.amount=category.amount+t.amount;
 });

 const filterCategories=categories.filter((c)=>c.amount>0);
 const chartData={
     datasets:[{
         data:filterCategories.map((c)=>c.amount),
         backgroundColor:filterCategories.map((c)=>c.color)
     }],
     labels:filterCategories.map((c)=>c.type)
 }
 return {total,chartData}
}
export default useTransactions;


