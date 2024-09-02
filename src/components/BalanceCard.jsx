import { BalanceItem } from "./BalanceItem";

const BalanceCard = async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_APP_BACKEND_DB, {
    cache: "no-store",
  });
  const { data } = await response.json();

  return (
    <div className="flex flex-col gap-3 flex-1">
      <p className="text-sm font-medium">All Transactions</p>
      {data.map((item) => (
        <BalanceItem description={item.description} amount={item.amount} id={item._id} createdAt={item.createdAt} key={item._id} />
      ))}
    </div>
  );
};

export default BalanceCard;
