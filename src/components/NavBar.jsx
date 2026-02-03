import { TextAlignJustify } from "lucide-react";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

const Menu = () => {
  return <TextAlignJustify />;
};

const Lupa = () => {
  return <Search />;
};

function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`flex  justify-center  p-6 z-50  fixed top-0 w-full backdrop-blur-sm  transition-all duration-300
     ${scrolled ? "bg-white" : "bg-white/10"} `}
    >
      <div className="fixed left-5 top-5">
        <TextAlignJustify
          strokeWidth={1}
          className={`size-10  transition-colors duration-300  ${
            scrolled ? "text-black" : "text-white"
          }`}
        />
      </div>

      <h1
        className={`font-light tracking-widest uppercase text-3xl transition-colors duration-300 ${
          scrolled ? "text-black" : "text-white"
        } `}
      >
        Shine Rings
      </h1>

      <div className="w-13 fixed right-5 top-5">
        <Search
          strokeWidth={1}
          className={`size-10 ${scrolled ? "text-black" : "text-white"}`}
        />
      </div>
    </div>
  );
}

export default NavBar;
