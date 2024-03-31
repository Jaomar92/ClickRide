import React from "react";
import { Input } from "../ui/input";
import { Search } from "lucide-react";
import { Button } from "../ui/button";

const Banner = () => {
  return (
    <div className="min-h-[600px] h-fit mb-6">
      <div className="container">
        <div className=" bg-zinc-700/40 w-full min-h-[600px] rounded-lg shadow-lg bg-[url('/assets/happyWoman.jpg')] bg-cover ">
          {/* <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div> */}
          <div className=" flex flex-col inset-2 items-center md:items-start justify-center min-h-[600px] w-full md:w-2/3 px-20 ">
            <div className="bg-white px-3 py-1 rounded-tl-xl rounded-tr-lg shadow-md font-medium text-lg">
              Brought to by <span className="font-extrabold">Click</span>
              <span className="text-lime-400 font-extrabold">Ride</span>
            </div>
            <h1 className="text-white text-center md:text-left font-extrabold text-6xl leading-tight">
              YOUR PURCHASE
              <br />
              YOUR CAR
            </h1>
            <div className="w-full flex gap-3 px-1 md:px-5 md:pl-0 ">
              <Input
                type="text"
                placeholder="Search Model, Brand or Area of Interest"
                className="min-w-[200px] w-3/4"
              />
              <Button className="bg-lime-400 hover:bg-lime-500 text-black">
                <Search />
              </Button>
            </div>
            <div className="flex flex-col md:flex-row bg-black/30 backdrop-blur-md backdrop-brightness-75 py-3 rounded-lg bg-blur items-stretch md:items-center justify-evenly px-6 mt-5 gap-3">
              <Button
                variant={"outline"}
                className="border-lime-400 bg-transparent hover:bg-lime-500 text-md font-semibold text-lime-400 py-6"
              >
                Start for Free
              </Button>
              <Button
                variant={"outline"}
                className="border-lime-400 bg-transparent hover:bg-lime-500 text-md font-semibold text-lime-400 py-6"
              >
                Check Out Our Articles
              </Button>
              <Button
                variant={"outline"}
                className="border-lime-400 bg-transparent hover:bg-lime-500 text-md font-semibold text-lime-400 py-6"
              >
                Sell Your Car
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
