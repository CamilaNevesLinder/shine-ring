import { Instagram } from "lucide-react";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";

function Footer() {
  return (
    <footer className=" absolute w-full mt-20 bg-black p-4 ">
      <h2 className="uppercase tracking-widest font-light text-4xl text-center text-white">
        Shine Rings
      </h2>
      <p className="uppercase tracking-widest text-center mt-2 text-white cursor-pointer">
        Privacy policy
      </p>
      <p className="uppercase tracking-widest text-center mt-2 text-white cursor-pointer">
        Terms of service
      </p>
      <div className="flex justify-center gap-4">
        <Instagram className="text-white size-7  mt-3 cursor-pointer transition-all duration-300 hover:scale-130" />
        <Mail className="text-white size-7  mt-3 cursor-pointer transition-all duration-300 hover:scale-130" />
        <Phone className="text-white size-7  mt-3 cursor-pointer transition-all duration-300 hover:scale-130" />
      </div>
    </footer>
  );
}

export default Footer;
