"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "../common";
import { useMediaQuery } from "~/hooks";

const Hero = () => {
  const isLargeScreens = useMediaQuery("(min-width: 1024px)");

  return (
    <section className="mx-auto mb-24 h-screen w-full bg-background-transparent bg-contain pt-[20%] sm:mb-16 md:pt-[10%] lg:pt-0">
      <div className="mx-auto grid h-full max-w-[80%] grid-cols-1 content-center lg:grid-cols-2">
        {isLargeScreens ? (
          <>
            {/* LEFT SIDE */}
            <div className="flex h-full flex-col justify-center">
              <div className="flex flex-col gap-8">
                <h1 className="text-6xl font-medium text-primary">Good Food Us Good Mood</h1>
                <p className="text-lg text-body">
                  I would think that conserving our natural resources should be a conservative position: Not to waste
                  food, and not to throw away a lot of the food that we buy.
                </p>
                <div className="flex gap-4">
                  <Link href="/">
                    <Button className="bg-primary text-white">Daftar Sekarang</Button>
                  </Link>
                  <Link href="/">
                    <Button className="bg-light-gray text-dark">About Us</Button>
                  </Link>
                </div>
              </div>
            </div>
            {/* RIGHT SIDE */}
            <div className="ml-auto">
              <Image src="/img/hero-food.webp" width={660} height={660} alt="green salad tomato" />
            </div>
          </>
        ) : (
          <>
            <div className="flex h-full flex-col justify-center">
              <div className="flex flex-col gap-8">
                <h1 className="text-6xl font-medium text-primary">Good Food Us Good Mood</h1>
                <div className="ml-auto">
                  <Image src="/img/hero-food-mobile.webp" width={420} height={420} alt="green salad tomato" />
                </div>
                <p className="text-lg text-body">
                  I would think that conserving our natural resources should be a conservative position: Not to waste
                  food, and not to throw away a lot of the food that we buy.
                </p>
                <div className="flex gap-4">
                  <Button className="bg-primary text-white">Daftar Sekarang</Button>
                  <Button className="bg-light-gray text-dark">About Us</Button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};
export default Hero;
