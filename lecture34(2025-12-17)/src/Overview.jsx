import Pots from "./Pots";
import Transactions from "./Transactions";
import Budget from "./Budget";
import RecurringBills from "./RecurringBills";

export default function OverView() {
  return (
    <div className="flex h-full w-full flex-col gap-9 overflow-auto px-4 py-8 lg:px-10">
      <h1 className="text-[32px] font-bold">Overview</h1>
      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
        <div className="bg-dark rounded-2xl p-6 text-white">
          <p>Current Balance</p>
          <p className="text-[32px] font-bold">$4,836.00</p>
        </div>
        <div className="text-dark rounded-2xl bg-white p-6">
          <p>Income</p>
          <p className="text-[32px] font-bold">$3,814.25</p>
        </div>
        <div className="text-dark rounded-2xl bg-white p-6">
          <p>Expenses</p>
          <p className="text-[32px] font-bold">$1,700.50</p>
        </div>
      </div>
      <div className="grid gap-6 lg:grid-cols-5 lg:grid-rows-6">
        <div className="lg:order-1 lg:col-span-3 lg:row-span-2">
          <Pots />
        </div>

        <div className="flex flex-col gap-8 rounded-2xl bg-white p-8 lg:order-3 lg:col-span-3 lg:row-span-4">
          <Transactions />
        </div>
        <div className="lg:order-2 lg:col-span-2 lg:row-span-3">
          <Budget />
        </div>

        <div className="flex flex-col gap-8 rounded-2xl bg-white p-8 lg:order-4 lg:col-span-2 lg:row-span-3">
          <RecurringBills />
        </div>
      </div>
    </div>
  );
}
