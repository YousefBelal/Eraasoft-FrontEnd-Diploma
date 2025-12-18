import heroImg from "./assets/image1.png";
let statusNumStyle = "font-inter font-bold text-[24px] text-white";
let statusLabelStyle =
  "font-deca font-normal text-[#C6C5CD] text-[12px] uppercase";

export default function App() {
  return (
    <div className="w-full h-dvh flex justify-center items-center bg-gray-950">
      <div className="w-282 h-110.5 flex bg-dark rounded-l-lg">
        <div className="px-[80.25px] py-16 flex flex-col gap-6">
          <h1 className="font-inter font-bold text-[36px] text-white">
            Get <span className="text-[#AB5CDB]">insights</span> that help your
            business grow.
          </h1>
          <p className="font-inter font-normal text-[#C6C5CD] text-[15px] grow">
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>
          <div className="flex justify-between">
            <div>
              <p className={statusNumStyle}>10k+</p>
              <p className={statusLabelStyle}>Companies</p>
            </div>
            <div>
              <p className={statusNumStyle}>314</p>
              <p className={statusLabelStyle}>Templates</p>
            </div>
            <div>
              <p className={statusNumStyle}>12M+</p>
              <p className={statusLabelStyle}>Queries</p>
            </div>
          </div>
        </div>
        <img src={heroImg} />
      </div>
    </div>
  );
}
