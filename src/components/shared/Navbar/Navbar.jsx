import { useEffect, useState } from "react";
import { CiDark } from "react-icons/ci";
import { MdOutlineLightMode } from "react-icons/md";

const Navbar = () => {
  const initialTheme = localStorage.getItem("theme") === "true";
  const [isDark, setIsDark] = useState(initialTheme);

  const handleControlTheme = () => {
    setIsDark(!isDark);
    localStorage.setItem("theme", !isDark);
  };

  useEffect(() => {
    const body = document.getElementById("mainBody");

    if (isDark) {
      body.style.background = "#fcfcfc";
      body.style.color = "#1F2937";
    } else {
      body.style.background = "#1D232A";
      body.style.color = "#fcfcfc";
    }
  }, [isDark]);

  return (
    <nav
      className={`py-5 sticky top-0 ${
        isDark ? " bg-[#fcfcfc] shadow-sm" : "bg-[#1D232A] shadow-md"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-center italic">All Users</h2>
        <button className="text-2xl" onClick={handleControlTheme}>
          {isDark ? <MdOutlineLightMode /> : <CiDark />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
