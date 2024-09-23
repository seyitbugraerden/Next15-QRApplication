import React from "react";
import { ModeToggle } from "./toggle-button";
import { BadgeInfo, Gem, House, Phone, User } from "lucide-react";

const HeaderDemo = () => {
  return (
    <header>
      <nav className="fixed lg:top-[27%] bottom-0 lg:left-[50px] origin-center">
        <div className="flex lg:flex-col justify-between lg:justify-center items-center bg-black/20 dark:bg-white/30 backdrop:blur-lg gap-10 py-10 w-screen lg:w-full lg:rounded-full px-12 lg:px-3 text-black dark:text-white">
          <a href="/home" className="relative group">
            <House
              size={22}
              className="group-hover:scale-125 duration-300 "
            />
            <span className="absolute opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto left-[35px] -top-1 text-nowrap text-sm bg-white/30 backdrop:blur-lg pl-4 pr-4 py-1 rounded-r-full duration-300">
              Ana Sayfa
            </span>
          </a>

          <a href="#" className="relative group">
            <Gem
              size={22}
              className="group-hover:scale-125 duration-300 "
            />
            <span className="absolute opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto left-[35px] -top-1 text-nowrap text-sm bg-white/30  backdrop:blur-lg pl-4 pr-4 py-1 rounded-r-full duration-300">
              Pricing
            </span>
          </a>
          <a href="#" className="relative group">
            <BadgeInfo
              size={22}
              className="group-hover:scale-125 duration-300  "
            />
            <span className="absolute opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto left-[35px] -top-1 text-nowrap text-sm bg-white/30  backdrop:blur-lg pl-4 pr-4 py-1 rounded-r-full duration-300">
              Learn
            </span>
          </a>
          <a href="#" className="relative group">
            <Phone
              size={22}
              className="group-hover:scale-125 duration-300 "
            />
            <span className="absolute opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto left-[35px] -top-1 text-nowrap text-sm bg-white/30  backdrop:blur-lg pl-4 pr-4 py-1 rounded-r-full duration-300">
              Contact
            </span>
          </a>
          <a href="#" className="relative group">
            <User
              size={22}
              className="group-hover:scale-125 duration-300 "
            />
            <span className="absolute opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto left-[35px] -top-1 text-nowrap text-sm bg-white/30  backdrop:blur-lg pl-4 pr-4 py-1 rounded-r-full duration-300">
              Profile
            </span>
          </a>
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
};

export default HeaderDemo;
