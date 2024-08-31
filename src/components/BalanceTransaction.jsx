const BalanceTransaction = () => {
  return (
    <div className="bg-tertiary p-2.5 rounded-md">
      <form className="flex flex-col gap-2.5">
        <input
          type="text"
          placeholder="Description"
          className="placeholder:italic placeholder:text-gray-300 placeholder:tracking-wide block bg-transparent text-white font-medium w-full border-none rounded-sm py-2 px-3 shadow-sm focus:outline-none focus:border-none sm:text-sm"
        />
        <input
          type="number"
          placeholder="Amount"
          className="placeholder:italic placeholder:text-gray-300 placeholder:tracking-wide block bg-transparent text-white font-medium w-full border-none rounded-sm py-2 px-3 shadow-sm focus:outline-none focus:border-none sm:text-sm"
        />
        <div className="flex gap-2">
          <input type="checkbox" name="isExpense" id="isExpense" />
          <label className="text-sm font-light"> Expense</label>
        </div>
        <input type="submit" value="Add Transaction" className="bg-info px-4 py-2 cursor-pointer font-medium text-black rounded-sm" />
      </form>
    </div>
  );
};

export default BalanceTransaction;
