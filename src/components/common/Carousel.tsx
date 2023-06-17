"use client";

import { useRef } from "react";
import Card from "./Card";
import Image from "next/image";

type Props = {
  data: any[];
};

const Carousel = ({ data }: Props) => {
  const contentRef = useRef<HTMLDivElement>(null);

  const handleChangeSlide = (direction: string) => {
    if (contentRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = contentRef.current;
      const translateValue = 400;

      if (direction === "next") {
        const maxScroll = scrollWidth - clientWidth;
        const nextScroll = scrollLeft + translateValue;

        contentRef.current.scrollLeft = contentRef.current.scrollLeft >= maxScroll - 1 ? 0 : nextScroll;
      } else {
        const prevScroll = scrollLeft - translateValue;
        contentRef.current.scrollLeft = contentRef.current.scrollLeft <= 0 ? scrollWidth : prevScroll;
      }
    }
  };

  return (
    <div>
      <div
        ref={contentRef}
        className="hide-scrollbar mx-auto mb-10 flex max-w-[80%]
        touch-auto flex-nowrap items-center justify-start gap-2.5 overflow-x-scroll scroll-smooth py-8"
      >
        {data.length > 0 &&
          data.map((item: any, index) => {
            const { name, img, variant, bgColor } = item;
            return (
              <Card bgColor={bgColor} key={index}>
                <div className="flex min-w-[200px] flex-col  items-center gap-5">
                  <Image src={img} width={47} height={47} alt={name} className="h-auto object-contain" />
                  <div className="flex flex-col gap-1 text-center">
                    <p className="text-base font-medium text-dark">{name}</p>
                    <p className="text-sm text-dark">{variant}</p>
                  </div>
                </div>
              </Card>
            );
          })}
      </div>
      <div className="hidden max-w-[90%] justify-end gap-3 lg:flex">
        <button
          className="flex items-center gap-2 rounded-full bg-primary px-[1.125rem] py-2.5 font-medium text-white active:brightness-90"
          onClick={() => handleChangeSlide("")}
        >
          <div className="relative h-8 w-8 rounded-full bg-white">
            <Image
              src="/img/icons/chevron.svg"
              width={12}
              height={20}
              alt="previous button"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          PREV
        </button>
        <button
          className="flex items-center gap-2 rounded-full bg-primary px-[1.125rem] py-2.5 font-medium text-white active:brightness-90"
          onClick={() => handleChangeSlide("next")}
        >
          NEXT
          <div className="relative h-8 w-8 rounded-full bg-white">
            <Image
              src="/img/icons/chevron.svg"
              width={12}
              height={20}
              alt="next button"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-180"
            />
          </div>
        </button>
      </div>
    </div>
  );
};
export default Carousel;
