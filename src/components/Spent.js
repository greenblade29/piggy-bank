import React, { useContext } from 'react'
import '../App.css'
import { AppContext } from '../context/AppContext'

export default function Spent() {
  const { expenses, budget } = useContext(AppContext);

	const totalExpenseCost = expenses.reduce((total, item) => {
		return (total += item.cost);
	}, 0);

  let currSpent;

  if((budget-totalExpenseCost)>=0){
     currSpent= <div className="spent-button-pos">
      <span>Spent till now: ₹{totalExpenseCost}</span>
    </div>
  }
  else{
    currSpent= <div className="spent-button-neg">
      <span>Spent till now: ₹{totalExpenseCost} ⚠️</span>
    </div>
  }
  
  return (
    <>
    {currSpent}
    </>
  )
}
