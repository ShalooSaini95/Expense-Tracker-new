import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const ExpenseTracker = () => {
    const [input,setInput]=useState("");
    const [amount,setAmount]=useState("");
    const [expense,setExpense]=useState([]);

const addExpense=()=>{
    if(!input || !amount) return;
    const newExpense= {
        id:expense.length+1,
        title: input,
        amount: amount
    };
    setExpense([...expense,newExpense])
    setInput('')
    setAmount('')
}

const deleteExpense=(id)=>{
setExpense(expense.filter((expenses)=>expenses.id!==id)
)}



  return (
    <div className='text-center my-3 d-flex justify-content-center align-items-center flex-column' style={{height:'60vh'}}>
      <h3 className='text-center text-success my-5'>ExpenseTracker App</h3>
      <div>
        <input type="text" placeholder="Expense" value={input} className='form-control' onChange={(e)=>setInput(e.target.value)}/>&nbsp;
       
        
        <input type="number" placeholder="Amount" value={amount} className="form-control" onChange={(e)=>setAmount(e.target.value)}/>&nbsp;
        
        <br/>
        <button onClick={(addExpense)} className='btn btn-success '>add Expense</button>
      </div>
<table className='table table-hover'>
    {
expense.map((expense)=>(
    <tr  key={expense.id} >
           <td>{expense.title}</td>
        <td>{expense.amount}</td>
       <button onClick={()=>deleteExpense(expense.id)} className='btn btn-success my-3'>Delete</button>
    <br/>
    </tr>
  
))
    }
</table>
    </div>
  )
}

export default ExpenseTracker
