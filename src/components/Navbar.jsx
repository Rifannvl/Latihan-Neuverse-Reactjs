import { Link } from "react-router-dom";

import Logo from "../assets/logo.svg";
export default function Navbar() {
  return (
    <nav className="p-4 flex justify-between">
      <img src={Logo} alt="logo" className="w-32" />
      <ul className="flex gap-5 text-lg font-semibold">
        <li>Home</li>
        <li>About</li>
        <li>Prices</li>
      </ul>
    </nav>
  );
}
