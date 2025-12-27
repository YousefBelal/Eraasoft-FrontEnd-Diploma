import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import CrudPage from "./pages/CrudPage";
import InstaPage from "./pages/InstaPage";
import HeroSection from "./components/HeroSection";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex h-dvh w-full flex-col items-center py-4">
        <div className="navbar bg-base-100 shadow-sm">
          <div className="navbar-start">
            <Link to="/" className="btn btn-ghost text-xl">
              CommerceHub
            </Link>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/ewallet">E-Wallet</Link>
              </li>
            </ul>
          </div>
        </div>
        <div></div>
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/products" element={<CrudPage />} />
          <Route path="/ewallet" element={<InstaPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
