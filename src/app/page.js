import Balance from "@/components/Balance";
import BalanceCard from "@/components/BalanceCard";
import BalanceTransaction from "@/components/BalanceTransaction";

export default function Home() {
  return (
    <main>
      <section className="max-w-md mx-auto py-10 flex flex-col space-y-4 px-3 sm:px-0 ">
        <Balance />
        <BalanceTransaction />
        <hr />
        <BalanceCard />
      </section>
    </main>
  );
}
