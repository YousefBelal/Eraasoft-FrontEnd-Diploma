import { FaCaretRight } from "react-icons/fa";
import budgetChart from "./assets/budget_chart.svg";
import starterGreen from "./assets/starter_green.svg";
import starterCyan from "./assets/starter_cyan.svg";
import starterNavy from "./assets/starter_navy.svg";
import starterYellow from "./assets/starter_yellow.svg";

export default function Budget() {
  return (
    <div className="flex flex-col gap-5 rounded-2xl bg-white p-8">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-price font-sans text-[20px] font-bold">Budgets</h1>
        <div className="flex items-center gap-3">
          <p className="text-headings font-sans text-[14px]">See Details</p>
          <FaCaretRight className="text-headings" />
        </div>
      </div>
      <div className="flex w-full flex-col gap-4 py-7.75 md:flex-row lg:max-w-91">
        <div className="flex max-w-75.75 justify-center md:max-w-126.75 lg:max-w-91 lg:justify-start">
          <img src={budgetChart} />
        </div>
        <div className="flex max-w-75.75 flex-row flex-wrap gap-4 md:max-w-25.25 md:flex-col md:flex-nowrap">
          <div className="flex max-w-[143.5px] gap-4">
            <img src={starterGreen} />
            <div className="flex flex-col gap-0.5">
              <p className="text-headings font-sans text-[12px]">
                Entertainment
              </p>
              <p className="text-price font-sans text-[14px] font-bold">
                $50.00
              </p>
            </div>
          </div>

          <div className="flex max-w-[143.5px] gap-4">
            <img src={starterCyan} />
            <div className="flex flex-col gap-0.5">
              <p className="text-headings font-sans text-[12px]">Bills</p>
              <p className="text-price font-sans text-[14px] font-bold">
                $750.00
              </p>
            </div>
          </div>

          <div className="flex max-w-[143.5px] gap-4">
            <img src={starterYellow} />
            <div className="flex flex-col gap-0.5">
              <p className="text-headings font-sans text-[12px]">Dining Out</p>
              <p className="text-price font-sans text-[14px] font-bold">
                $75.00
              </p>
            </div>
          </div>

          <div className="flex max-w-[143.5px] gap-4">
            <img src={starterNavy} />
            <div className="flex flex-col gap-0.5">
              <p className="text-headings font-sans text-[12px]">
                Personal Care
              </p>
              <p className="text-price font-sans text-[14px] font-bold">
                $100.00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
