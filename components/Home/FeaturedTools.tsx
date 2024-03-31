import React from "react";

import Image from "next/image";

const FeaturedTools = () => {
  return (
    <div className="bg-gradient-to-t from-lime-400 to-lime-400 py-8">
      <h2 className="text-5xl text-center font-bold">Featured Tools</h2>
      <div className="container mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 place-content-center place-items-center gap-3">
          <div className="">
            <Image
              src="/assets/Dasboard.PNG"
              height={500}
              width={500}
              alt="Dashboard"
              className="rounded-2xl shadow-md"
            />
          </div>
          <div className="w-full">
            <h4 className="text-2xl font-semibold text-left">
              Client Dashboard
            </h4>
            <p className="p-5 text-lg font-medium">
              Have a dashboard of your saved top cars that you wish to pick and
              be able to compare pros and cons between them.
            </p>
          </div>
          <div>
            <h4 className="text-2xl font-semibold text-left">
              Online Market Place
            </h4>
            <p className="p-5 text-lg font-medium">
              See car listing advertised all over Malaysia or within a specific
              state and get connected to brokers.
            </p>
          </div>
          <div>
            <Image
              src="/assets/ecommerce.PNG"
              height={500}
              width={500}
              alt="Dashboard"
              className="rounded-2xl shadow-md"
            />
          </div>
          <div>
            <Image
              src="/assets/Resource.PNG"
              height={500}
              width={500}
              alt="Dashboard"
              className="rounded-2xl shadow-md"
            />
          </div>
          <div>
            <h4 className="text-2xl font-semibold text-left">
              Online Resource
            </h4>
            <p className="p-5 text-lg font-medium">
              See and read what others have to say about the cars your
              interested in. Get more information other than price. Hear out
              what others have had their experience with them.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedTools;
