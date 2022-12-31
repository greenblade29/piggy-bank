import React, { useContext } from 'react'
import EItem from './EItem'
import { AppContext } from '../context/AppContext';

export default function EList() {
    const { expenses } = useContext(AppContext);
  return (
    <ul className='list-group'>
        {expenses.map((expense) => (
            <EItem id={expense.id} name={expense.name} cost={expense.cost} />
        ))}
	</ul>
  )
}
