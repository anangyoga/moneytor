import { getData } from "@/actions/getData";
import { BalanceItem } from "./BalanceItem";

const BalanceCard = async () => {
  const data = await getData();

  return (
    <div className="flex flex-col gap-3 flex-1">
      {data.length === 0 ? <p className="text-sm font-medium italic">Currently there's no transaction.</p> : <p className="text-sm font-medium">All Transactions</p>}
      {data.map((item) => (
        <BalanceItem description={item.description} amount={item.amount} id={item._id} createdAt={item.createdAt} key={item._id} isExpense={item.isExpense} />
      ))}
    </div>
  );
};

export default BalanceCard;
