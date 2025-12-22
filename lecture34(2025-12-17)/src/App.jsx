import Overview from "./Overview";
import SideMenu from "./SideMenu";

export default function App() {
  return (
    <div className="bg-creamy flex h-dvh w-full flex-col-reverse lg:flex-row">
      <SideMenu />
      <Overview />
    </div>
  );
}
