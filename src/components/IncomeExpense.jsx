import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
export default function IncomeExpense() {
  const { transactions } = useContext(GlobalContext);

  const totalIncome = transactions
    .map((transaction) => transaction.amount)
    .filter((value) => value > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const totalExpense = transactions
    .map((transaction) => transaction.amount)
    .filter((value) => value < 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+Rs.{totalIncome}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-Rs.{Math.abs(totalExpense)}</p>
      </div>
    </div>
  );
}
