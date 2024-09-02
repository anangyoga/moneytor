export const BalanceItem = ({ id, description, amount, createdAt }) => {
  return (
    <div className="bg-secondary rounded-md p-3" key={id}>
      <div className="flex justify-between items-center">
        <p className="font-semibold">{description}</p>
        <p className="font-semibold">Rp {amount}</p>
      </div>
      <p className="text-gray-400 font-thin text-sm">{createdAt}</p>
    </div>
  );
};
