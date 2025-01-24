"use client";
import {
  LoginLink,
  LogoutLink,
  useKindeAuth,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";
import { redirect } from "next/navigation";

const Navbar = () => {
  const { user , isAuthenticated} = useKindeBrowserClient();

  const profileNavigation = () => {
    if(!isAuthenticated){
        redirect("/api/auth/login")
      }
      else{
        redirect("/profile")
      }
  }

  return (
    <nav className="flex justify-between items-center gap-6 py-8 w-[80%] mx-auto border-b-2">
      <div className="flex  gap-4 font-bold text-lg ">
        <Link href={"/"}>Home</Link>
        <p onClick={profileNavigation} className="cursor-pointer">Profile</p>
      </div>
      <div>
        { !!user ? (
          <LogoutLink className="font-bold text-black bg-white px-6 py-2 rounded-md hover:bg-white/70">
            Logout
          </LogoutLink>
        ) : (
          <LoginLink className="font-bold text-black bg-white px-6 py-2 rounded-md hover:bg-white/70">
            Login
          </LoginLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
