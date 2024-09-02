const BalanceCard = async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_APP_BACKEND_DB);
  const { data } = await response.json();

  return (
    <div className="flex flex-col gap-3 flex-1">
      <p className="text-sm font-medium">All Transactions</p>
      {data.map((item) => (
        <div className="bg-secondary rounded-md p-3" key={item._id}>
          <div className="flex justify-between items-center">
            <p className="font-semibold">{item.description}</p>
            <p className="font-semibold">Rp {item.amount}</p>
          </div>
          <p className="text-gray-400 font-thin text-sm">{item.createdAt}</p>
        </div>
      ))}
    </div>
  );
};

export default BalanceCard;
