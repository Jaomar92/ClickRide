import Link from "next/link";
import React from "react";

const NavItemList = [
  { id: 1, name: "Market", href: "/market" },
  { id: 2, name: "Resource", href: "/resource" },
  { id: 2, name: "Sell Your Car", href: "/" },
];

const NavItems = () => {
  return (
    <div className="md:flex gap-3 text-lg hidden ">
      {NavItemList.map((item) => (
        <Link
          href={item.href}
          key={item.id}
          className="hover:underline cursor-pointer"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default NavItems;
