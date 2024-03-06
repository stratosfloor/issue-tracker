import Link from "next/link";
import React from "react";
import { AiFillBug } from "react-icons/ai";

const NavBar = () => {
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
              className="text-zinc-500 hover:text-zinc-800 transition-colors"
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
