"use client";

import { formateDate } from "@/utils/formatDate";
import { formatNumber } from "@/utils/formatNumber";
import { useRouter } from "next/navigation";

export const BalanceItem = ({ id, description, amount, createdAt, isExpense }) => {
  const router = useRouter();

  const handleDelete = async (id) => {
    await fetch(process.env.NEXT_PUBLIC_APP_BACKEND_DB, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([id]),
    });

    router.refresh();
  };

  return (
    <div className="bg-secondary rounded-md p-3 flex flex-col justify-between">
      <div className="flex justify-between items-center">
        <p className="font-semibold">{description}</p>
        <p className="font-semibold">
          {isExpense ? <span className="text-danger">-</span> : <span className="text-green-500">+</span>} Rp {formatNumber(amount)}
        </p>
      </div>
      <p className="text-gray-400 font-thin text-sm">{formateDate(createdAt)}</p>
      <button className="self-end text-sm text-danger" onClick={() => handleDelete(id)}>
        Delete
      </button>
    </div>
  );
};
