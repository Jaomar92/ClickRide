"use client";
import { usePathname } from "next/navigation";
import React from "react";

const pathnamesList = [
  { path: "/terms", name: "Terms of Service" },
  { path: "/privacy", name: "Privacy" },
  {
    path: "/malaysia-data-privacy-policy",
    name: "Malaysia Data Privacy Policy",
  },
  {
    path: "/do-not-sale-or-share-my-personal-information",
    name: "Do Not Sale or Share My Personal Information",
  },
];

const Title = () => {
  const pathName = usePathname();
  const matchingPath = pathnamesList.find((item) => item.path === pathName);
  const title = matchingPath ? matchingPath.name : pathName;
  return <div className="text-5xl font-semibold">ClickRide {title}</div>;
};

export default Title;
