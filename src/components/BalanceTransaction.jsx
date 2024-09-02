"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const BalanceTransaction = () => {
  const router = useRouter();

  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [isExpense, setIsExpense] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const transaction = {
      description,
      amount: parseFloat(amount),
      isExpense,
    };

    try {
      await fetch(process.env.NEXT_PUBLIC_APP_BACKEND_DB, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([transaction]),
      });
    } catch (error) {
      console.error(error);
    }

    setDescription("");
    setAmount("");
    setIsExpense(false);

    router.refresh();
  };

  return (
    <div className="bg-tertiary p-2.5 rounded-md">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2.5">
        <input
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="Description"
          className="placeholder:italic placeholder:text-gray-300 placeholder:tracking-wide block bg-transparent text-white font-medium w-full border-none rounded-sm py-2 px-3 shadow-sm focus:outline-none focus:border-none sm:text-sm"
        />
        <input
          required
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          placeholder="Amount"
          className="placeholder:italic placeholder:text-gray-300 placeholder:tracking-wide block bg-transparent text-white font-medium w-full border-none rounded-sm py-2 px-3 shadow-sm focus:outline-none focus:border-none sm:text-sm"
        />
        <div className="flex gap-2">
          <input checked={isExpense} onChange={(e) => setIsExpense(e.target.checked)} type="checkbox" name="isExpense" id="isExpense" />
          <label htmlFor="isExpense" className="text-sm font-light">
            Is it expense?
          </label>
        </div>
        <input type="submit" value="Add Transaction" className="bg-info px-4 py-2 cursor-pointer font-medium text-black rounded-sm" />
      </form>
    </div>
  );
};

export default BalanceTransaction;
