import { BrowserRouter, Route, Routes } from "react-router-dom";
import CrudPage from "./pages/CrudPage";
import InstaPage from "./pages/InstaPage";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex h-dvh w-full flex-col items-center py-4">
        <Navbar />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/products" element={<CrudPage />} />
          <Route path="/ewallet" element={<InstaPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
