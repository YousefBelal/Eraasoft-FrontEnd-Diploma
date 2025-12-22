import { FaCaretRight } from "react-icons/fa";
import jar from "./assets/jar_green.svg";
import starterGreen from "./assets/starter_green.svg";
import starterCyan from "./assets/starter_cyan.svg";
import starterNavy from "./assets/starter_navy.svg";
import starterYellow from "./assets/starter_yellow.svg";
export default function Pots() {
  return (
    <div className="flex flex-col gap-5 rounded-2xl bg-white p-8">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-price font-sans text-[20px] font-bold">Pots</h1>
        <div className="flex items-center gap-3">
          <p className="text-headings font-sans text-[14px]">See detials</p>
          <FaCaretRight className="text-headings" />
        </div>
      </div>
      <div className="flex flex-col gap-5 md:flex-row md:items-center">
        <div className="bg-creamy flex w-full gap-4 rounded-xl px-4 py-8.75 md:max-w-130">
          <img src={jar} />
          <div className="flex flex-col gap-2.75">
            <p className="text-headings font-sans text-[14px]">Total Saved</p>
            <p className="text-price font-sans text-[32px] font-bold">$850</p>
          </div>
        </div>
        <div className="grid w-full grid-cols-2 gap-4">
          <div className="flex items-center gap-4">
            <img src={starterGreen} />
            <div>
              <p className="text-headings font-sans text-[12px]">Savings</p>
              <p className="text-price font-sans text-[14px] font-bold">$159</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img src={starterCyan} />
            <div>
              <p className="text-headings font-sans text-[12px]">Gift</p>
              <p className="text-price font-sans text-[14px] font-bold">$40</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img src={starterNavy} />
            <div>
              <p className="text-headings font-sans text-[12px]">
                Concert Ticket
              </p>
              <p className="text-price font-sans text-[14px] font-bold">$110</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img src={starterYellow} />
            <div>
              <p className="text-headings font-sans text-[12px]">New Laptop</p>
              <p className="text-price font-sans text-[14px] font-bold">$10</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
