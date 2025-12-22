import { FaCaretRight } from "react-icons/fa";

export default function RecurringBills() {
  return (
    <>
      <div className="flex w-full items-center justify-between">
        <h1 className="text-price font-sans text-[20px] font-bold">
          Recurring Bills
        </h1>
        <div className="flex items-center gap-3">
          <p className="text-headings font-sans text-[14px]">See Details</p>
          <FaCaretRight className="text-headings" />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="bg-creamy flex justify-between rounded-lg border-l-4 border-l-[#277C78]">
          <div className="px-4 py-5">
            <p className="text-headings font-sans text-[14px]">Paid Bills</p>
          </div>
          <div>
            <div className="px-4 py-5">
              <p className="text[14px] text-price font-sans font-bold">
                $190.00
              </p>
            </div>
          </div>
        </div>

        <div className="bg-creamy flex justify-between rounded-lg border-l-4 border-l-[#F2CDAC]">
          <div className="px-4 py-5">
            <p className="text-headings font-sans text-[14px]">
              Total Upcoming
            </p>
          </div>
          <div>
            <div className="px-4 py-5">
              <p className="text[14px] text-price font-sans font-bold">
                $194.98
              </p>
            </div>
          </div>
        </div>

        <div className="bg-creamy flex justify-between rounded-lg border-l-4 border-l-[#82C9D7]">
          <div className="px-4 py-5">
            <p className="text-headings font-sans text-[14px]">Due Soon</p>
          </div>
          <div>
            <div className="px-4 py-5">
              <p className="text[14px] text-price font-sans font-bold">
                $59.98
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
