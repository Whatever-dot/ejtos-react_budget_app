import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const { expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const handleBudgetChange = (event) => {
        if(event.target.value > 20000) {
            alert("Budget cannot exceed 20000");
        } else if (event.target.value < totalExpenses) {
             alert("Budget value cannot be lower then spent value");
        } else {
            setNewBudget(event.target.value);
        }
    }
    return (
    <div className='alert alert-secondary'>
    <span>Budget: state.Currency</span>
    <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
    </div>
        );
};
export default Budget;
