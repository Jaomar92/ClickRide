import Link from "next/link";
import React from "react";
import NavItems from "./components/NavItems";
import { Button } from "@/components/ui/button";
import { UserCircle2 } from "lucide-react";
import AuthModal from "../auth/auth-modal";

const Navbar = () => {
  return (
    <div className="bg-black text-white w-full sticky top-0 z-20">
      <div className="container flex items-center justify-between py-3">
        <Link href={"/"} className="text-3xl md:text-5xl font-bold">
          Click<span className="text-lime-400">Ride</span>
        </Link>
        <div>
          <NavItems />
        </div>
        <div className="flex items-center justify-center gap-5">
          <Button variant="secondary">Global Search</Button>
          <AuthModal />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
