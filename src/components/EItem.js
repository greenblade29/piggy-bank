import React, { useContext } from 'react'
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

export default function EItem(props) {
	const { dispatch } = useContext(AppContext);

	const deleteExpense = () => {
		dispatch({
			type: 'DELETE_EXPENSE',
			payload: props.id,
		});
	};

  return (
    <li className='list-group-item'>
			{props.name}
			<div>
				<span className='badge badge-pill'>
					₹{props.cost}
				</span>
				<TiDelete className="delete-button" onClick={deleteExpense} size='1.5em'></TiDelete>
			</div>
		</li>
  )
}
