
"use client";

import {  Navbar } from "flowbite-react";

export function Component() {
  return (
    <Navbar fluid rounded className="fixed w-full z-10">
      <Navbar.Brand href="">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white "> <span className="text-[#640D5F]">Happy </span><span className="text-[#7E3AF2]">Birthday</span> </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#compliments">Gorgeous</Navbar.Link>
        <Navbar.Link href="#pic">Pretty</Navbar.Link>
        <Navbar.Link href="#greetings">Greetings</Navbar.Link>
        <Navbar.Link href="#message">Message</Navbar.Link>
        <Navbar.Link href="#cake">Cake</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
