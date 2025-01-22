import {
  Menu,
  Truck,
  ShoppingCart,
  CircleUserRound,
  Search,
} from "lucide-react";

import Link from "next/link";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import dynamic from "next/dynamic";

// Import the type for Sheet if necessary

// Dynamically import Sheet with TypeScript

const Header = () => {
  return (
    <div>
      <nav className="w-screen flex  flex-col">
        {/* Top Navigation */}
        <ul className="flex justify-between px-5 py-3 mt-3">
          <li>
            <Search strokeWidth={1} />
          </li>
          <li>
            <h1 className="text-[27px] font-sans font-thin">
              <Link href="/">Avuan</Link>
            </h1>
          </li>
          <li>
            <div className="flex">
              <Link href="/products/cart" aria-label="Shopping Cart">
                <ShoppingCart strokeWidth={1} className="mr-3" />
              </Link>
              <Link href="/about" aria-label="User Profile">
                <CircleUserRound strokeWidth={1} />
              </Link>
            </div>
          </li>
        </ul>
        {/* Divider */}
        <div className="flex justify-center">
          <div className="h-[2px] w-[90%] bg-gray-200" />
        </div>
        {/* Bottom Navigation */}
        <ul className="flex max-md:hidden justify-center gap-[60px] px-[100px] max-mdhidden font-thin text-gray-500 py-2">
          <li className="hover:scale-105 duration-300">
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/products">Products Catalog</Link>
          </li>
          <li>
            <Link href="/about">About us</Link>
          </li>
          <li>
            <Link href="#contact">Contact us</Link>
          </li>
        </ul>
        <Sheet>
          <SheetTrigger className="md:hidden">
            <div className="flex justify-end items-center md:hidden mt-3 mr-10">
              <Menu size={40} />
            </div>
          </SheetTrigger>
          <SheetContent className="bg-white text-gray-600">
            <SheetHeader>
              <SheetTitle className="font-extrabold text-3xl overflow-hidden text-black">
                Menu
              </SheetTitle>
              <SheetDescription></SheetDescription>
              <div>
                <ul className="flex flex-col gap-2 text-lg font-bold ">
                  <li>
                    <Link href="/">Home </Link>
                  </li>
                  <li>
                    <Link href="/about">About us </Link>
                  </li>
                  <li>
                    <Link href="#contact">Contact us </Link>
                  </li>
                  <li>
                    <Link href="/products">Product Catalog </Link>
                  </li>
                </ul>
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </nav> 
    </div>
  );
};

export default Header;
