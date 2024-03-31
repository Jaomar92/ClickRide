import { BrainCircuit, Gem, Warehouse } from "lucide-react";
import React from "react";

const WhyUs = () => {
  return (
    <div className="bg-black text-white">
      <div className="container py-6">
        <h2 className="text-center text-5xl font-bold">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 place-content-center place-items-center mt-6">
          <div className="flex flex-col items-center justify-center gap-3">
            <Warehouse size={150} />
            <p className="text-center px-10 text-lg font-semibold">
              Find a car dealership near you. You would be surprised who is out
              there ready to offer you a deal.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
            <BrainCircuit size={150} />
            <p className="text-center px-10 text-lg font-semibold">
              Be smart in your purchase have the ability to compare with our
              cost analysis tools to help with your judgement.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
            <Gem size={150} />
            <p className="text-center px-10 text-lg font-semibold">
              Get more information other than Price and location. See what
              others have suggested to car models to buy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
