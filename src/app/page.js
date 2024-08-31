export default async function Home() {
  const response = await fetch(process.env.APP_BACKEND_DB);
  const { data } = await response.json();

  return (
    <main className="bg-primary h-screen w-screen text-white">
      <section className="max-w-md mx-auto py-10 flex flex-col space-y-4">
        <div className="flex flex-col gap-2.5">
          <h1 className="font-mono font-semibold text-lg uppercase">Mone¥tor</h1>
          <div className="flex items-center justify-between bg-secondary p-2.5 rounded-md">
            <div>
              <p className="font-thin text-sm text-info">Current balance:</p>
              <h2 className="font-bold text-xl tracking-wide">Rp 10.000.000,-</h2>
            </div>
            <div>
              <p className="font-thin text-sm text-danger">You've spent:</p>
              <h3 className="font-bold text-xl tracking-wide">Rp 5.741.000,-</h3>
            </div>
          </div>
        </div>
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
        <div className="flex flex-col gap-3">
          {data.map((item) => (
            <div className="bg-secondary rounded-md p-3">
              <div className="flex justify-between items-center" key={item._id}>
                <p className="font-semibold">{item.description}</p>
                <p className="font-semibold">Rp {item.amount}</p>
              </div>
              <p className="text-gray-400 font-thin text-sm">{item.createdAt}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
