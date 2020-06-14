import React, { useContext } from "react";
import Transaction from "./Transaction";
import { GlobalContext } from "../context/GlobalState";

export default function TransactionsList() {
  const { transactions, deleteTransaction } = useContext(GlobalContext);
  return (
    <React.Fragment>
      <h3>History</h3>
      <ul className="list">
        <Transaction
          transactions={transactions}
          deleteTransaction={deleteTransaction}
        />
      </ul>
    </React.Fragment>
  );
}
