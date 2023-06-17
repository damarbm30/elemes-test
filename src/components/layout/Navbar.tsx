"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

import { Button } from "../common";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 10 && isScrolled === false) setIsScrolled(true);
      else setIsScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 bg-white px-12 py-4 shadow-sm transition-all lg:fixed lg:left-0 lg:right-0  ${
        isScrolled ? "lg:bg-white lg:shadow-sm" : "lg:bg-transparent lg:shadow-none"
      }`}
    >
      <div className="mx-auto flex max-w-full items-center justify-between lg:max-w-[80%]">
        <Link href="/">
          <Image
            src="/img/logo.webp"
            width={207}
            height={50}
            alt="elemes logo"
            className="w-[150px] bg-cover lg:w-[200px]"
          />
        </Link>
        <ul className="hidden gap-8 text-sm font-medium text-body xl:flex">
          <Link href="/">Home</Link>
          <Link href="/">About</Link>
          <Link href="/" className="relative">
            Promotions
            <span className="absolute -top-3 -translate-x-1/2 rounded-lg bg-[#E7462D] px-2 py-1 text-[8px] leading-none text-white">
              HOT
            </span>
          </Link>
          <Link href="/">Blogs</Link>
          <Link href="/">Contact Us</Link>
        </ul>
        <div className="flex items-center gap-6">
          <Link href="/" className="hidden text-sm font-medium text-dark lg:block">
            Masuk
          </Link>
          <Link href="/">
          <Button className="bg-primary text-sm text-white transition-all hover:brightness-90">Daftar Sekarang</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
