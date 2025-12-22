import { FaCaretRight } from "react-icons/fa";
import profileEmptyImg from "./assets/profile_empty.svg";
import profile1 from "./assets/profile1.svg";
import profile2 from "./assets/profile2.svg";
import profile3 from "./assets/profile3.svg";

export default function Transactions() {
  return (
    <>
      <div className="flex w-full items-center justify-between">
        <h1 className="text-price font-sans text-[20px] font-bold">
          Transactions
        </h1>
        <div className="flex items-center gap-3">
          <p className="text-headings font-sans text-[14px]">View All</p>
          <FaCaretRight className="text-headings" />
        </div>
      </div>
      <div className="flex w-full justify-between">
        <div className="flex items-center gap-4">
          <img src={profileEmptyImg} />
          <p className="text-price font-sans text-[14px] font-bold">
            Emma Richardson
          </p>
        </div>
        <div>
          <div className="flex justify-end">
            <p className="text[14px] font-sans font-bold text-[#277C78]">
              +$75.50
            </p>
          </div>
          <p className="text-headings font-sans text-[12px]">19 Aug 2024</p>
        </div>
      </div>

      <div className="flex w-full justify-between">
        <div className="flex items-center gap-4">
          <img src={profileEmptyImg} />
          <p className="text-price font-sans text-[14px] font-bold">
            Savory Bites Bistro
          </p>
        </div>
        <div>
          <div className="flex justify-end">
            <p className="text[14px] text-price font-sans font-bold">-$55.50</p>
          </div>
          <p className="text-headings font-sans text-[12px]">19 Aug 2024</p>
        </div>
      </div>

      <div className="flex w-full justify-between">
        <div className="flex items-center gap-4">
          <img src={profile1} />
          <p className="text-price font-sans text-[14px] font-bold">
            Daniel Carter
          </p>
        </div>
        <div>
          <div className="flex justify-end">
            <p className="text[14px] text-price font-sans font-bold">-$42.30</p>
          </div>
          <p className="text-headings font-sans text-[12px]">18 Aug 2024</p>
        </div>
      </div>

      <div className="flex w-full justify-between">
        <div className="flex items-center gap-4">
          <img src={profile2} />
          <p className="text-price font-sans text-[14px] font-bold">Sun Park</p>
        </div>
        <div>
          <div className="flex justify-end">
            <p className="text[14px] font-sans font-bold text-[#277C78]">
              +$120.00
            </p>
          </div>
          <p className="text-headings font-sans text-[12px]">17 Aug 2024</p>
        </div>
      </div>

      <div className="flex w-full justify-between">
        <div className="flex items-center gap-4">
          <img src={profile3} />
          <p className="text-price font-sans text-[14px] font-bold">
            Urban Services Hub
          </p>
        </div>
        <div>
          <div className="flex justify-end">
            <p className="text[14px] text-price font-sans font-bold">-$65.00</p>
          </div>
          <p className="text-headings font-sans text-[12px]">17 Aug 2024</p>
        </div>
      </div>
    </>
  );
}
