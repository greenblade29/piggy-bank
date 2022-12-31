import React, { useContext } from 'react'
import '../App.css'
import { AppContext } from '../context/AppContext';

export default function MyBudget() {
  const { dispatch } = useContext(AppContext);

  const changeBudget= (e)=>{
      e.preventDefault();

      dispatch({
        type: 'UPDATE_BUDGET',
        payload: e.target.value,
      });
  }

  return (
    <div className="myBudget">
      <span>My Budget: <input type="text" className="budget-input" onChange={changeBudget} placeholder='Amount in ₹'/></span>
    </div>
  )
}
