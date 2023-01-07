import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";
const ExpenseItem = ({ expense, handleEdit, handleDelete }) => {
  const { id, charge, amount } = expense;
  return (
    <li className="item">
      <div className="info">
        <span className="expense">{charge}</span>
        <span className="amount">${amount}</span>
      </div>
      <div>
        <button
          className="edit-btn"
          aria-label="edit button"
          onClick={() => handleDelete(id)}
        >
          <MdDelete />
        </button>
        <button
          className="clear-btn"
          aria-label="delete button"
          onClick={() => handleEdit(id)}
        >
          <MdEdit />
        </button>
      </div>
    </li>
  );
};

export default ExpenseItem;
