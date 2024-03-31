import { CheckCheck } from "lucide-react";
import { describe } from "node:test";
import React from "react";
import { Button } from "../ui/button";

const CustomerPriceList = [
  {
    id: 1,
    title: "Free",
    description: "Perfect for searching and doing breif analysis.",
    price: 0.0,
    describe: "Get started with",
    features: [
      "5 cars saved to favourits",
      "access to 15 articles a month",
      "basic client dashboard features",
    ],
  },
  {
    id: 2,
    title: "Novice",
    description:
      "Perfect for those who aim to do deep research and provide recommendations.",
    price: 20.0,
    describe: "The Researcher kit",
    features: [
      "20 cars saved to favourits",
      "unlimited article access",
      "access to all client dashboard features",
    ],
  },
  {
    id: 3,
    title: "Scout",
    description: "Perfect for those who wish to rotate cars.",
    price: 100.0,
    describe: "The Reviewer kit",
    features: [
      "unlimited cars saved to favourits",
      "unlimited article access and produce own content.",
      "access to all client dashboard features",
    ],
  },
];

const Pricing = () => {
  return (
    <div className="container my-8">
      <h2 className="text-4xl font-bold text-neutral-900s">Pricing</h2>
      <p className="text-lg mt-5 text-neutral-700">
        We offer various pricing options for our clients. From a free tier to an
        enterprise level options.
      </p>
      <div className="mt-6">
        <h3 className="text-2xl font-bold text-neutral-900">For Customers</h3>
        <p className="my-5 text-lg text-neutral-700 leading-relaxed">
          All customers subcribers can hold an subscription of a any 3 months
          durations and after subscription tenure all data and account will be
          deleted if not renewed.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 place-items-center place-content-center gap-3">
          {CustomerPriceList.map((item) => (
            <div
              key={item.id}
              className="bg-lime-300 w-full h-full rounded-xl shadow-md"
            >
              <h4 className="text-neutral-700 font-bold text-2xl text-center py-3">
                {item.title}
              </h4>
              <p className="text-neutral-800 text-lg px-2 py-5 mx-5 border-black   border-t-[3px] border-b-[3px]">
                {item.describe}
              </p>
              <p className="text-neutral-800 text-lg p-2 mx-5 my-8  ">
                RM <span className="font-bold text-3xl">{item.price}</span>
                /month
              </p>
              <div className="my-5">
                {item.features.map(
                  (
                    feature,
                    idx // Changed list[idx] to feature
                  ) => (
                    <div
                      key={idx}
                      className="flex items-center center gap-3 mx-10"
                    >
                      <CheckCheck color={"green"} />
                      <p>{feature}</p>
                    </div>
                  )
                )}
              </div>
              <div className="flex items-center justify-center my-3">
                <Button className="px-8">Sign Up</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="my-5">
        <h3 className="text-2xl font-bold text-neutral-900">For Dealers</h3>
        <p className="my-5 text-lg text-neutral-700 leading-relaxed">
          Dealers can subscribe to our Saas Program for a monthly subscription.
        </p>
        <div className="bg-lime-300 w-full h-full rounded-xl shadow-md">
          <div className="p-5">
            <div className="flex items-center justify-between border-b-[3px] border-neutral-800 mx-8">
              <h4 className="text-neutral-800 text-3xl font-bold  text-center py-3">
                Enterprise package
              </h4>
              <h5 className="text-center text-neutral-800 text-2xl">
                All for RM <span className="font-bold text-5xl">1,500</span>/
                Month
              </h5>
            </div>
            <p className="text-neutral-800 text-lg font-bold text-left py-3 mx-8">
              Features include:-
            </p>
            <ul className="text-neutral-800 text-md font-semibold text-left py-3 mx-12">
              <li>- Fleet management system</li>
              <li>- Automated market integration to our platform</li>
              <li>- Client Management System</li>
              <li>- Company Profile</li>
              <li>- Unlimited internal Users of your team and collaborate</li>
            </ul>
            <div className="mx-8 my-6">
              <Button className="px-8 text-lg">Contact Sales</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
