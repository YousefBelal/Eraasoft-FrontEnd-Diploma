import { useRef, useState } from "react";
import { useLocalStorage } from "../components/UseLocalStorage";

export default function InstaPage() {
  const amountInput = useRef();
  const [balance, setBalance] = useLocalStorage("balance", 0);
  const [transactions, setTransactions] = useLocalStorage("transactions", []);
  const [isTransactionsVisible, setIsTransactionsVisible] = useState(false);
  const [toggletransactionsBtnText, setToggleTransactionsBtnText] =
    useState(true);

  const depositAmount = () => {
    let amount = +amountInput.current.value;

    let newTransaction = {
      beforeBalance: balance,
      type: "deposit",
      amount: amount,
      afterBalance: balance + amount,
    };

    let copy = [...transactions];
    copy.push(newTransaction);

    setTransactions(copy);
    setBalance(balance + amount);
    amountInput.current.value = "";
  };

  const withdrawAmount = () => {
    let amount = amountInput.current.value;

    if (amount <= balance) {
      let newTransaction = {
        beforeBalance: balance,
        type: "withdraw",
        amount: amount,
        afterBalance: balance - amount,
      };

      let copy = [...transactions];
      copy.push(newTransaction);
      setTransactions(copy);
      setBalance(balance - amount);
    } else {
      alert("insufficient balance");
    }
    amountInput.current.value = "";
  };

  const showTransactions = () => {
    setIsTransactionsVisible(!isTransactionsVisible);
    setToggleTransactionsBtnText(!toggletransactionsBtnText);
  };

  return (
    <div className="container flex flex-col gap-4">
      <h1>Your Balance is : {balance} EGP</h1>

      <input
        ref={amountInput}
        className="input"
        type="number"
        placeholder="Please Enter Amount"
      />

      <div className="flex gap-4">
        <button onClick={depositAmount} className="btn btn-primary">
          Deposit Amount
        </button>
        <button onClick={withdrawAmount} className="btn btn-error">
          Withdraw Amount
        </button>

        <button onClick={showTransactions} className="btn btn-dark">
          {toggletransactionsBtnText
            ? "Show Transactions"
            : "Hide Transactions"}
        </button>
      </div>

      {isTransactionsVisible && (
        <table className="table">
          <thead>
            <tr>
              <th>No</th>
              <th>Before Balance</th>
              <th>Amount</th>
              <th>Type</th>
              <th>After Balance</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((el, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{el.beforeBalance}</td>
                  <td>{el.amount}</td>
                  <td>{el.type}</td>
                  <td>{el.afterBalance}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
