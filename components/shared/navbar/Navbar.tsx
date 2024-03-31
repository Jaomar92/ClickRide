import Link from "next/link";
import React from "react";
import NavItems from "./components/NavItems";
import { Button } from "@/components/ui/button";
import { UserCircle2 } from "lucide-react";

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
          <Button variant={"outline"} className="bg-transparent px-6 gap-3">
            <UserCircle2 />
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
