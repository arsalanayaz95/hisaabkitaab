import React from "react";

export default function Transaction({ transactions, deleteTransaction }) {
  return (
    <React.Fragment>
      {transactions.map((transaction) => {
        const sign = transaction.amount > 0 ? "+" : "-";
        const barColor = transaction.amount > 0 ? "plus" : "minus";
        return (
          <li id={transaction.id} className={barColor}>
            {transaction.text}{" "}
            <span>
              {sign} Rs.
              {Math.abs(transaction.amount)}
            </span>
            <button
              onClick={() => deleteTransaction(transaction.id)}
              className="delete-btn"
            >
              x
            </button>
          </li>
        );
      })}
    </React.Fragment>
  );
}
