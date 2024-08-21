import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Prices from "./pages/Prices";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className=" min-h-screen flex flex-col">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prices" element={<Prices />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
