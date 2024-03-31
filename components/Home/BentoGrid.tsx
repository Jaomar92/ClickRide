import React from "react";

const BentoGrid = () => {
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  return (
    <section className="bg-white">
      <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
          <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
            <div className=" bg-lime-400 group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
              <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                Jeffrey Aroun bin Omar
              </h3>
              <p className="text-white text-lg font-semibold text-center">
                Awesome tool for market research the potential is big.
              </p>
            </div>
          </div>
          <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
            <div className=" bg-lime-400 group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
              <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                Daniel
              </h3>
              <p className="text-white text-lg font-semibold text-center">
                Was able to get a good deal on my Nissan GTR. Wouldnt have found
                @nissanGuy with this website.
              </p>
            </div>
            <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
              <div className="group bg-lime-400 relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                  Nas
                </h3>
                <p className="text-white text-lg font-semibold text-center">
                  Nah begini la kalau nak jual kereta. Dapat tau semua dan dapat
                  ilmu.
                </p>
              </div>
              <div className="group bg-lime-400 relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                  Dita
                </h3>
                <p className="text-white text-lg font-semibold text-center">
                  I saw my car turnover rate doubled now I am having a hard time
                  keep stock of cars.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-2 sm:col-span-1 md:col-span-1 bg-lime-400 rounded-lg h-auto md:h-full flex flex-col">
            <div className=" group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
              <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                Brandy
              </h3>
              <p className="text-white text-lg font-semibold text-center">
                Coming to Malaysia I found this app a breeze and convinent to
                work with.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
