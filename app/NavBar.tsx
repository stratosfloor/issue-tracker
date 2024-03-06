"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiFillBug } from "react-icons/ai";
import classNames from "classnames";

const NavBar = () => {
  const currentPath = usePathname();

  const links = [
    {
      name: "Dashboard",
      link: "/",
    },
    {
      name: "Issues",
      link: "/issues",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              className={classNames({
                "text-zinc-900 underline": currentPath === link.link,
                "text-zinc-400": currentPath !== link.link,
                "hover-text-zinc-800 transition-colors": true,
              })}
              href={link.link}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
