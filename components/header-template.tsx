import React from "react";
import { ModeToggle } from "./toggle-button";
import { BadgeInfo, Gem, House, Phone } from "lucide-react";

const HeaderDemo = () => {
  return (
    <header>
      <nav className="fixed top-[35%] left-[20px] ">
        <div className="flex flex-col justify-center items-center bg-primary gap-6 py-6 rounded-full px-2">
          <a href="#" className="relative group">
            <House size={22} className="group-hover:scale-125 duration-300" />
            <span className="absolute opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto left-7 -top-1 text-nowrap text-sm bg-primary pl-4 pr-4 py-1 rounded-r-full duration-300">
              Ana Sayfa
            </span>
          </a>

          <a href="#" className="relative group">
            <Gem size={22} className="group-hover:scale-125 duration-300" />
            <span className="absolute opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto left-7 -top-1 text-nowrap text-sm bg-primary pl-4 pr-4 py-1 rounded-r-full duration-300">
              Pricing
            </span>
          </a>
          <a href="#" className="relative group">
            <BadgeInfo
              size={22}
              className="group-hover:scale-125 duration-300"
            />
             <span className="absolute opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto left-7 -top-1 text-nowrap text-sm bg-primary pl-4 pr-4 py-1 rounded-r-full duration-300">
              Learn
            </span>
          </a>
          <a href="#" className="relative group">
            <Phone size={22} className="group-hover:scale-125 duration-300" />
            <span className="absolute opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto left-7 -top-1 text-nowrap text-sm bg-primary pl-4 pr-4 py-1 rounded-r-full duration-300">
              Contact
            </span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default HeaderDemo;
