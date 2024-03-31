import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Navbar />
        <div className="container my-8">
          <div className="grid grid-cols-12 gap-3">
            <div className="hidden md:block md:col-span-2 bg-neutral-200 rounded-xl">
              FliterHere
            </div>
            <div className="col-span-10 md:col-span-8 overflow-auto">
              {children}
            </div>
            <div className="hidden md:block md:col-span-2 bg-slate-400 rounded-lg">
              Ads Are Here
            </div>
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
};

export default layout;