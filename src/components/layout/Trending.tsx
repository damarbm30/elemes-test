"use client";

import Image from "next/image";
import Link from "next/link";

import Card from "../common/Card";
import { Button } from "../common";
import { useMediaQuery } from "~/hooks";

const dummy = [
  {
    id: 1,
    img: "/img/trending/pepperoni-pizza.webp",
    name: "Pepperoni Pizza",
    category: "Pizza",
    rating: 4,
    bgColor: "#E6F3F5",
  },
  {
    id: 2,
    img: "/img/trending/meat-pizza.webp",
    name: "Meat Pizza",
    category: "Pizza",
    rating: 3,
    bgColor: "#E6F3F5",
  },
  {
    id: 3,
    img: "/img/trending/doner-kebab.webp",
    name: "Doner Kebab",
    category: "Kebab",
    rating: 5,
    bgColor: "#EAEEFA",
  },
  {
    id: 4,
    img: "/img/trending/salmon-roll.webp",
    name: "Salmon Roll",
    category: "Salmon",
    rating: 4,
    bgColor: "#F9EEF3",
  },
  {
    id: 5,
    img: "/img/trending/choco-cupcake.webp",
    name: "Choco Cupcake",
    category: "Cupcake",
    rating: 4,
    bgColor: "#F0FEEB",
  },
  {
    id: 6,
    img: "/img/trending/milk-doughnut.webp",
    name: "Milk Doughnut",
    category: "Doughnut",
    rating: 5,
    bgColor: "#F3F7D9",
  },
  {
    id: 7,
    img: "/img/trending/unicorn-doughnut.webp",
    name: "Unicorn Doughnut",
    category: "Doughnut",
    rating: 4,
    bgColor: "#F3F7D9",
  },
  {
    id: 8,
    img: "/img/trending/kathi-kebab.webp",
    name: "Kathi Kebab",
    category: "Kebab",
    rating: 4,
    bgColor: "#EAEEFA",
  },
];

const Trending = () => {
  const isMobileScreen = useMediaQuery("(min-width: 640px)");

  return (
    <section className="container mx-auto max-w-[80%] pb-4 lg:mb-[250px]">
      {/* TITLE */}
      <h1 className="mb-10 text-4xl font-medium text-dark">
        Browse Our Trending
        <br />
        <span className="text-primary">Recipes</span>
      </h1>
      {/* TRENDING FOODS */}
      <div className="mb-16 grid grid-cols-1 gap-x-5 gap-y-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {isMobileScreen
          ? dummy.map((item, index) => {
              const { img, name, category, rating, bgColor } = item;
              return (
                <Card key={index} bgColor={bgColor}>
                  <div className="flex flex-col gap-5">
                    <Image src={img} width={120} height={120} alt={name} className="rounded-md" />
                    <div className="flex flex-col">
                      <h2 className="text-2xl font-medium leading-[50px]">{name}</h2>
                      <p className="mb-5 text-lg font-medium text-primary">{category}</p>
                      <div className="flex gap-1">
                        {[...Array(rating)].map((_, idx) => {
                          return <Image src="/img/star-active.svg" width={10} height={10} alt="rating" key={idx} />;
                        })}
                        {[...Array(5 - rating)].map((_, idx) => {
                          return <Image src="/img/star-gray.svg" width={10} height={10} alt="rating" key={idx} />;
                        })}
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })
          : dummy.slice(0, 4).map((item, index) => {
              const { img, name, category, rating, bgColor } = item;
              return (
                <Card key={index} bgColor={bgColor}>
                  <div className="flex flex-col gap-5">
                    <Image src={img} width={120} height={120} alt={name} className="rounded-md" />
                    <div className="flex flex-col">
                      <h2 className="text-2xl font-medium leading-[50px]">{name}</h2>
                      <p className="mb-5 text-lg font-medium text-primary">{category}</p>
                      <div className="flex gap-1">
                        {[...Array(rating)].map((_, idx) => {
                          return <Image src="/img/star-active.svg" width={10} height={10} alt="rating" key={idx} />;
                        })}
                        {[...Array(5 - rating)].map((_, idx) => {
                          return <Image src="/img/star-gray.svg" width={10} height={10} alt="rating" key={idx} />;
                        })}
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
      </div>
      <Link href="/">
        <Button className="mx-auto flex bg-primary text-white">All Recipes</Button>
      </Link>
    </section>
  );
};
export default Trending;
