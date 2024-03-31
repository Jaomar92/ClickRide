import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import React from "react";

import Link from "next/link";

const Products = [
  { id: 1, name: "Used", href: "/" },
  { id: 2, name: "New", href: "/" },
  { id: 3, name: "Sell Your Car", href: "/" },
  { id: 4, name: "EV", href: "/" },
  { id: 5, name: "Buy Online", href: "/" },
];

const Resources = [
  { id: 1, name: "Blog", href: "/" },
  { id: 2, name: "FAQ", href: "/" },
  { id: 3, name: "Contact Us", href: "/" },
];

const WorkWithUs = [
  { id: 1, name: "Dealers", href: "/" },
  { id: 2, name: "OEM", href: "/" },
  { id: 3, name: "Partners", href: "/" },
];

const About = [
  { id: 1, name: "ClickRide.Sdn Bhd", href: "/" },
  { id: 2, name: "Team", href: "/" },
  { id: 3, name: "Careers", href: "/" },
  { id: 4, name: "Press", href: "/" },
  { id: 5, name: "Developers", href: "/" },
  { id: 6, name: "Investors", href: "/" },
];

const Footer = () => {
  return (
    <div className="bg-black text-white w-full">
      <div className="container max-w-6xl  py-3">
        <div className="grid grid-cols-1 md:grid-cols-4 place-items-stretch justify-stretch">
          <div className="mx-auto my-3 w-full md:border-none border-b border-neutral-500">
            <h6 className="text-lg font-semibold text-neutral-300 text-center md:text-left">
              Products
            </h6>
            <ul className="mb-3">
              {Products.map((item) => {
                return (
                  <li
                    key={item.id}
                    className="text-md font-medium text-neutral-400 cursor-pointer hover:underline  text-center md:text-left"
                  >
                    {item.name}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="mx-auto my-3  w-full md:border-none border-b border-neutral-500">
            <h6 className="text-lg font-semibold text-neutral-300 text-center md:text-left">
              Resources
            </h6>
            <ul className="mb-3">
              {Resources.map((item) => {
                return (
                  <li
                    key={item.id}
                    className="text-md font-medium text-neutral-400 cursor-pointer hover:underline  text-center md:text-left"
                  >
                    {item.name}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="mx-auto my-3  w-full md:border-none border-b border-neutral-500">
            <h6 className="text-lg font-semibold text-neutral-300 text-center md:text-left">
              Work With ClickRide
            </h6>
            <ul className="mb-3">
              {WorkWithUs.map((item) => {
                return (
                  <li
                    key={item.id}
                    className="text-md font-medium text-neutral-400 cursor-pointer hover:underline  text-center md:text-left"
                  >
                    {item.name}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="mx-auto my-3  w-full md:border-none border-b border-neutral-500">
            <h6 className="text-lg font-semibold text-neutral-300 text-center md:text-left">
              About
            </h6>
            <ul className="mb-3">
              {About.map((item) => {
                return (
                  <li
                    key={item.id}
                    className="text-md font-medium text-neutral-400 cursor-pointer hover:underline  text-center md:text-left"
                  >
                    {item.name}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="container max-w-5xl py-3">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex items-center space-x-3">
            <Facebook size={32} />
            <Twitter size={32} />
            <Youtube size={32} />
            <Instagram size={32} />
          </div>
          <div>
            <h6 className="text-right">ClickDrive Registered at 4514231588</h6>
            <p className="text-right">All Rights Reserved ©2024</p>
          </div>
        </div>
      </div>
      <div className="container max-w-5xl py-3 flex flex-col md:flex-row items-center justify-center ">
        <Link href="/terms">
          <p className="border-l border-r px-3 text-center hover:underline">
            Terms of Service
          </p>
        </Link>
        <Link href="/privacy">
          <p className="border-l border-r px-3 text-center hover:underline">
            Privacy Policy
          </p>
        </Link>
        <Link href="/do-not-sale-or-share-my-personal-information">
          <p className="border-l border-r px-3 text-center hover:underline">
            Do Not Sell Or Share My Personal Information
          </p>
        </Link>
        <Link href="/malaysia-data-privacy-policy">
          <p className="border-l border-r px-3 text-center hover:underline">
            Malaysia Data Privacy Policy
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
