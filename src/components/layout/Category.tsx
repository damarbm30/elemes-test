import Carousel from "../common/Carousel";

const dummy = [
  {
    id: 1,
    name: "Cupcake",
    variant: "22 items",
    img: "/img/category/cupcake.svg",
    bgColor: "#F0FEEB",
  },
  {
    id: 2,
    name: "Pizza",
    variant: "25 items",
    img: "/img/category/pizza.svg",
    bgColor: "#E6F3F5",
  },
  {
    id: 3,
    name: "Kebab",
    variant: "12 items",
    img: "/img/category/kebab.svg",
    bgColor: "#EAEEFA",
  },
  {
    id: 4,
    name: "Salmon",
    variant: "22 items",
    img: "/img/category/salmon.svg",
    bgColor: "#F9EEF3",
  },
  {
    id: 5,
    name: "Doughnut",
    variant: "11 items",
    img: "/img/category/doughnut.svg",
    bgColor: "#F3F7D9",
  },
  {
    id: 6,
    name: "Cupcake",
    variant: "22 items",
    img: "/img/category/cupcake.svg",
    bgColor: "#F0FEEB",
  },
  {
    id: 7,
    name: "Pizza",
    variant: "25 items",
    img: "/img/category/pizza.svg",
    bgColor: "#E6F3F5",
  },
  {
    id: 8,
    name: "Kebab",
    variant: "12 items",
    img: "/img/category/kebab.svg",
    bgColor: "#EAEEFA",
  },
  {
    id: 9,
    name: "Salmon",
    variant: "22 items",
    img: "/img/category/salmon.svg",
    bgColor: "#F9EEF3",
  },
  {
    id: 10,
    name: "Doughnut",
    variant: "11 items",
    img: "/img/category/doughnut.svg",
    bgColor: "#F3F7D9",
  },
];

const Category = () => {
  return (
    <section className="mb-32">
      <div className="container mx-auto max-w-[80%]">
        <h1 className="mb-10 text-4xl font-medium text-dark">
          Browse Our Category
          <br />
          <span className="text-primary">Receipt</span>
        </h1>
      </div>
      <Carousel data={dummy} />
    </section>
  );
};
export default Category;
