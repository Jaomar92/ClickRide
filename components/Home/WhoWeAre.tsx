import React from "react";

const WhoWeAre = () => {
  return (
    <div className="bg-gradient-to-t from-lime-400 to-lime-400 mt-8 py-8">
      <div className="container py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[380px] gap-2">
          <div className="place-content-center">
            <div className="flex flex-col items-start justify-between h-full">
              <h2 className="text-4xl font-bold">
                We are a market place for transport
              </h2>
              <p className="py-2 text-lg font-sans">
                We aim to provide a car purchasing strategy plan based on your
                taste and financing options. !/! Daniel Help
              </p>
              <h3 className="text-3xl font-bold">Our Tools</h3>
              <p className="py-2 text-lg font-sans">
                Sign up with us and see our car listing. Save your favourite top
                pick and compare them before fully commiting to them. We have an
                estimated loan financing calculator available. !/! Daniel or Nas
                Help
              </p>
              <p>
                Need a way to Gate keep or have a legally binding agreement with
                Dealers
              </p>
            </div>
          </div>
          <div className="bg-black/30 bg-[url('/assets/WhoWeAre.jpg')] bg-cover bg-center rounded-md shadow-md min-h-[200px]"></div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
