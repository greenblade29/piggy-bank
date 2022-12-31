import React, { useContext } from 'react'
import '../App.css'
import { AppContext } from '../context/AppContext';

export default function Remaining() {
  const { expenses, budget } = useContext(AppContext);

	const totalExpenseCost = expenses.reduce((total, item) => {
		return (total = total + item.cost);
	}, 0);

  let currBalance;

  if((budget-totalExpenseCost)>=0){
    currBalance=   <div className="remaining-button-pos">
      <span>Balance: ₹{budget-totalExpenseCost}</span>
    </div>
  }
  else{
    currBalance= <div className="remaining-button-neg">
      <span>Balance: -(₹{totalExpenseCost-budget})</span>
    </div>
  }

  return (
    <>
    {currBalance}
    </>
  )
}
