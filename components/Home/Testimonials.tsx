import React from "react";
import BentoGrid from "./BentoGrid";

const Testimonials = () => {
  return (
    <div className="container my-8">
      <h2 className="text-4xl text-neutral-800 font-bold text-center">
        Testimonials
      </h2>

      {/** Pull testimonials from somewhere */}
      <BentoGrid />
    </div>
  );
};

export default Testimonials;
