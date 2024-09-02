const Balance = async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_APP_BACKEND_DB, {
    cache: "no-store",
  });
  const { data } = await response.json();

  const totalAmount = data.reduce((balance, transaction) => {
    return transaction.isExpense ? balance - transaction.amount : balance + transaction.amount;
  }, 0);

  const totalSpent = data.reduce((total, transaction) => {
    return transaction.isExpense ? total + transaction.amount : total;
  }, 0);
  return (
    <div className="flex flex-col gap-2.5">
      <h1 className="font-mono font-semibold text-lg uppercase">Mone¥tor</h1>
      <div className="flex flex-col gap-3 bg-secondary p-2.5 rounded-md sm:flex-row sm:items-center sm:justify-between sm:gap-0">
        <div>
          <p className="font-thin text-sm text-info">Current balance:</p>
          <h2 className="font-bold text-xl tracking-wide">Rp {totalAmount},-</h2>
        </div>
        <div>
          <p className="font-thin text-sm text-danger">You've spent:</p>
          <h3 className="font-bold text-xl tracking-wide">Rp {totalSpent},-</h3>
        </div>
      </div>
    </div>
  );
};

export default Balance;
