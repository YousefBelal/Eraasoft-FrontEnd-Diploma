import logo from "./assets/Logo.svg";
import PieChartIcon from "./assets/pie_chart.svg?react";
import HomeIcon from "./assets/home.svg?react";
import TransactionsIcon from "./assets/transactions.svg?react";
import PotsIcon from "./assets/pots.svg?react";
import BillsIcon from "./assets/bills.svg?react";
import minimizeIcon from "./assets/minimize.svg";

export default function SideMenu() {
  let linkStyle =
    "w-full flex flex-col lg:flex-row items-center py-4 gap-4 px-8 hover:bg-creamy group hover:rounded-r-xl cursor-pointer";
  let iconStyle =
    "text-[#B3B3B3] group-hover:text-[#277C78] transition duration-500";
  let pStyle =
    "hidden md:block font-sans font-bold text-[#B3B3B3] group-hover:text-dark transition duration-500";

  return (
    <div className="bg-dark flex h-auto w-full flex-row rounded-t-3xl text-white lg:h-full lg:w-75 lg:flex-col lg:rounded-t-none lg:rounded-r-3xl">
      <div className="hidden w-full px-8 py-10 lg:block">
        <img src={logo} />
      </div>

      <div className="flex w-full grow flex-row pr-6 lg:flex-col">
        <div className={linkStyle}>
          <HomeIcon className={iconStyle} />
          <p className={pStyle}>Overview</p>
        </div>
        <div className={linkStyle}>
          <TransactionsIcon className={iconStyle} />
          <p className={pStyle}>Transactions</p>
        </div>
        <div className={linkStyle}>
          <PieChartIcon className={iconStyle} />
          <p className={pStyle}>Budgets</p>
        </div>
        <div className={linkStyle}>
          <PotsIcon className={iconStyle} />
          <p className={pStyle}>Pots</p>
        </div>
        <div className={linkStyle}>
          <BillsIcon className={iconStyle} />
          <p className={pStyle}>Recurring Bills</p>
        </div>
      </div>

      <div className="hidden w-full px-8 lg:block">
        <div className="flex w-full items-center gap-4 pt-4 pb-19">
          <img src={minimizeIcon} />
          <p className={pStyle}>Minimize Menu</p>
        </div>
      </div>
    </div>
  );
}
