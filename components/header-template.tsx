import React from "react";
import {
  BadgeInfo,
  Gem,
  House,
  LogOut,
  ShieldQuestion,
  User,
} from "lucide-react";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { requireUser } from "@/app/require-user";

const HeaderDemo = async () => {
  const user = await requireUser();
  return (
    <header>
      <nav className="fixed lg:top-[27%] bottom-0 lg:left-[50px] origin-center z-[9999]">
        <div className="flex lg:flex-col justify-between lg:justify-center items-center bg-white/20 backdrop:blur-lg gap-10 py-10 w-screen lg:w-full lg:rounded-full px-12 lg:px-3 text-black dark:text-white">
          <a href="/home" className="relative group">
            <House size={22} className="group-hover:scale-125 duration-300 " />
            <span className="absolute opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto left-[34px] -top-1 text-nowrap text-sm bg-white/30 backdrop:blur-lg pl-4 pr-4 py-1 rounded-r-full duration-300">
              Home
            </span>
          </a>

          <a href="/pricing" className="relative group">
            <Gem size={22} className="group-hover:scale-125 duration-300 " />
            <span className="absolute opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto left-[34px] -top-1 text-nowrap text-sm bg-white/30  backdrop:blur-lg pl-4 pr-4 py-1 rounded-r-full duration-300">
              Pricing
            </span>
          </a>
          <a href="/features" className="relative group">
            <BadgeInfo
              size={22}
              className="group-hover:scale-125 duration-300  "
            />
            <span className="absolute opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto left-[34px] -top-1 text-nowrap text-sm bg-white/30  backdrop:blur-lg pl-4 pr-4 py-1 rounded-r-full duration-300">
              Learn
            </span>
          </a>
          <a href="/faq" className="relative group">
            <ShieldQuestion
              size={22}
              className="group-hover:scale-125 duration-300 "
            />
            <span className="absolute opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto left-[34px] -top-1 text-nowrap text-sm bg-white/30  backdrop:blur-lg pl-4 pr-4 py-1 rounded-r-full duration-300">
              Contact
            </span>
          </a>
          {!user && (
            <LoginLink
              className="relative group"
              postLoginRedirectURL="/dashboard"
            >
              <User size={22} className="group-hover:scale-125 duration-300 " />
              <span className="absolute opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto left-[34px] -top-1 text-nowrap text-sm bg-white/30  backdrop:blur-lg pl-4 pr-4 py-1 rounded-r-full duration-300">
                Log In
              </span>
            </LoginLink>
          )}
          {user && (
            <LogoutLink className="relative group">
              <LogOut
                size={22}
                className="group-hover:scale-125 duration-300 "
              />
              <span className="absolute opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto left-[34px] -top-1 text-nowrap text-sm bg-white/30  backdrop:blur-lg pl-4 pr-4 py-1 rounded-r-full duration-300">
                Log Out
              </span>
            </LogoutLink>
          )}
        </div>
      </nav>
    </header>
  );
};

export default HeaderDemo;
