"use client";

import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
// import { MdOutlineAccountCircle } from "react-icons/md";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { SheetSide } from "./Humburger";
import { IoIosHeartEmpty } from "react-icons/io";

// Redux state type
interface RootState {
  cart: any[]; // Update this to match your actual Redux cart state type
}

export default function Header() {
  const cart = useSelector((state: RootState) => state.cart);

  return (
    <header className="w-full fixed bg-white z-10 top-0 h-[60px] md:h-[90px] flex justify-around px-4 items-center max-w-screen-2xl mx-auto">
      {/* Logo Section */}
      <div className="flex items-center">
        <Link href={"/"} className="cursor-pointer">
          <Image
            src="/image/logo.png"
            alt="logo image"
            width={200}
            height={200}
          />
        </Link>
      </div>

      {/* Navigation Bar */}
      <nav className="hidden lg:block">
        <ul className="flex space-x-9 ml-4 mt-2 items-center text-xl">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/shop">Shops</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </nav>

      {/* Icons Section (New Order: User → Search → Heart → Cart) */}
      <div className="flex space-x-3 sm:space-x-4">
        {/* User (Account) Icon */}
        <FaRegUser className="text-3xl hidden lg:block cursor-pointer" />

        {/* Search Icon */}
        <IoSearchOutline className="text-3xl hidden lg:block cursor-pointer" />

        {/* Wishlist (Heart) Icon */}
        <IoIosHeartEmpty className="text-3xl hidden lg:block cursor-pointer" />

        {/* Cart Icon */}
        <Link href="/cart" className="relative hidden lg:block">
          <IoCartOutline className="text-3xl cursor-pointer" />
          {cart.length > 0 && (
            <span className="absolute top-[-5px] right-0 bg-red-400 rounded-full text-white w-[20px] h-[20px] flex justify-center items-center p-1 text-sm">
              {cart.length}
            </span>
          )}
        </Link>
      </div>

      {/* Mobile Menu */}
      <div className="flex items-center justify-center space-x-5 lg:hidden">
        <SheetSide />
        <Link href="/cart" className="relative">
          <IoCartOutline className="text-4xl" />
          {cart.length > 0 && (
            <span className="absolute top-[-5px] right-0 bg-red-400 rounded-full text-white w-[20px] h-[20px] flex justify-center items-center p-1 text-sm">
              {cart.length}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}
