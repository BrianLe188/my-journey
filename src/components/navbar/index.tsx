/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { Navbar as FlowNavbar } from "flowbite-react";

export default function Navbar() {
  return (
    <FlowNavbar fluid rounded className="fixed w-full top-0 shadow-md z-50">
      <FlowNavbar.Brand as={Link} href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          VA
        </span>
      </FlowNavbar.Brand>
      <FlowNavbar.Toggle />
      <FlowNavbar.Collapse>
        <Link href="/" className="hover:!my-text-gradient">
          Home
        </Link>
        <Link href="/resume" className="hover:!my-text-gradient">
          Resume
        </Link>
        <Link href="#" className="hover:!my-text-gradient">
          Services
        </Link>
        <Link href="/projects" className="hover:!my-text-gradient">
          Projects
        </Link>
        <Link href="#" className="hover:!my-text-gradient">
          Contact
        </Link>
      </FlowNavbar.Collapse>
    </FlowNavbar>
  );
}
