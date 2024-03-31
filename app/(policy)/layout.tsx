import Title from "@/components/terms/title";
import React from "react";
import "../globals.css";
// import asd from '../'
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-fit container mt-5">
      <div className="border-b py-8">
        <Title />
      </div>
      <div className="grid grid-cols-10 h-fit">
        <div className="col-span-2 border-r pr-2 py-6 h-screen">
          <p className="text-lg font-bold">Contact</p>
          <p className="text-md font-semibold">ClickRide Sdn. Bhd.</p>
          <p className="text-md font-semibold">1401 Ocean Avenue, Suite 200</p>
          <p className="text-md font-semibold">Santa Monica, CA 90401</p>
          <p className="text-md font-semibold">1-888-TRUECAR</p>
          <div className="mt-6">
            <Link href="/">
              <Button variant="outline">Back to Home</Button>
            </Link>
          </div>
        </div>
        <div className="col-span-8 px-3 py-6 overflow-auto">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
