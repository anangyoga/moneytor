import { getTotalBalance } from "@/actions/getTotalBalance";
import { getData } from "@/actions/getData";
import { getTotalSpent } from "@/actions/getTotalSpent";
import { formatNumber } from "@/utils/formatNumber";

const Balance = async () => {
  const data = await getData();
  const totalBalance = getTotalBalance(data);
  const totalSpent = getTotalSpent(data);

  return (
    <div className="flex flex-col gap-2.5">
      <h1 className="font-mono font-semibold text-lg uppercase">Mone¥tor</h1>
      <div className="flex flex-col gap-3 bg-secondary p-2.5 rounded-md sm:flex-row sm:items-center sm:justify-between sm:gap-0">
        <div>
          <p className="font-thin text-sm text-info">Current balance:</p>
          <h2 className="font-bold text-xl tracking-wide">Rp {formatNumber(totalBalance)}</h2>
        </div>
        <div>
          <p className="font-thin text-sm text-danger">You've spent:</p>
          <h3 className="font-bold text-xl tracking-wide">Rp {formatNumber(totalSpent)}</h3>
        </div>
      </div>
    </div>
  );
};

export default Balance;
