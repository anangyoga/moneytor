import Balance from "@/components/Balance";
import BalanceCard from "@/components/BalanceCard";
import BalanceTransaction from "@/components/BalanceTransaction";

export default function Home() {
  return (
    <main className="bg-primary h-screen w-screen text-white">
      <section className="max-w-md mx-auto py-10 flex flex-col space-y-4">
        <Balance />
        <BalanceTransaction />
        <BalanceCard />
      </section>
    </main>
  );
}
