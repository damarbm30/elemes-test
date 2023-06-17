import Image from "next/image";
import { Button } from "../common";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="container hidden lg:block">
      <div className="mb-12 grid grid-cols-1 gap-14 rounded-2xl bg-[#F9FFF6] px-16 pb-10 pt-20 lg:grid-cols-5">
        {/* LOGO */}
        <div className="col-span-2">
          <Image src="/img/logo.webp" width={207} height={50} alt="elemes logo" className="mb-5" />
          <p className="mb-8 text-body">
            Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, Kecamatan Setiabudi, Kota Jakarta Selatan, Daerah
            Khusus Ibukota Jakarta 12950
          </p>
          {/* CALL TO ACTION */}
          <div className="flex gap-5">
            <div className="relative cursor-pointer rounded-full p-4 transition-all active:bg-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="14"
                fill="none"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-primary active:text-white"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1.5 3.667 8.075 8.05a1.667 1.667 0 0 0 1.85 0L16.5 3.667M3.167 12.833h11.666a1.667 1.667 0 0 0 1.667-1.666V2.833a1.667 1.667 0 0 0-1.667-1.666H3.167A1.667 1.667 0 0 0 1.5 2.833v8.334a1.667 1.667 0 0 0 1.667 1.666Z"
                />
              </svg>
            </div>
            <div className="relative cursor-pointer rounded-full p-4 transition-all active:bg-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="none"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-primary active:text-white"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1.988 1.988A1.667 1.667 0 0 0 1.5 3.167V4c0 6.903 5.597 12.5 12.5 12.5h.833a1.666 1.666 0 0 0 1.667-1.667v-2.732a.834.834 0 0 0-.57-.791l-3.744-1.248a.833.833 0 0 0-1.008.418l-.942 1.88a9.201 9.201 0 0 1-4.597-4.596l1.881-.942a.833.833 0 0 0 .418-1.008L6.69 2.07a.833.833 0 0 0-.79-.57H3.167c-.442 0-.866.176-1.179.488Z"
                />
              </svg>
            </div>
            <div className="relative cursor-pointer rounded-full p-4 transition-all active:bg-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-primary active:text-white"
              >
                <path
                  fill="currentColor"
                  d="M8 1.872c1.996 0 2.233.007 3.021.043 2.026.093 2.972 1.054 3.065 3.065.036.788.043 1.025.043 3.02 0 1.997-.008 2.233-.043 3.021-.093 2.01-1.037 2.972-3.065 3.065-.788.036-1.024.043-3.021.043-1.996 0-2.233-.007-3.02-.043-2.032-.093-2.973-1.059-3.065-3.065C1.879 10.233 1.87 9.996 1.87 8s.008-2.232.044-3.02c.093-2.011 1.036-2.973 3.064-3.065.789-.036 1.025-.043 3.02-.043ZM8 .524c-2.03 0-2.284.01-3.082.045C2.203.694.694 2.2.57 4.918.533 5.716.524 5.97.524 8s.01 2.285.045 3.082c.125 2.715 1.631 4.224 4.349 4.349.798.036 1.052.044 3.082.044s2.285-.008 3.082-.044c2.713-.125 4.225-1.631 4.348-4.349.037-.797.045-1.052.045-3.082s-.008-2.284-.044-3.082C15.309 2.206 13.8.694 11.083.57 10.285.533 10.03.524 8 .524Zm0 3.637a3.839 3.839 0 1 0 0 7.678A3.839 3.839 0 0 0 8 4.16Zm0 6.33A2.492 2.492 0 1 1 8 5.51a2.492 2.492 0 0 1 0 4.983Zm3.99-7.378a.897.897 0 1 0 0 1.795.897.897 0 0 0 0-1.795Z"
                />
              </svg>
            </div>
          </div>
        </div>
        {/* CATEGORIES */}
        <div>
          <h1 className="mb-8 text-lg font-medium text-dark">Categories</h1>
          <ul className="flex flex-col gap-5 text-body">
            <Link href="/">Cupcake</Link>
            <Link href="/">Pizza</Link>
            <Link href="/">Kebab</Link>
            <Link href="/">Salmon</Link>
            <Link href="/">Doughnut</Link>
          </ul>
        </div>
        {/* ABOUT US */}
        <div>
          <h1 className="mb-8 text-lg font-medium text-dark">About Us</h1>
          <ul className="flex flex-col gap-5 text-body">
            <Link href="/">About Us</Link>
            <Link href="/">FAQ</Link>
            <Link href="/">Report Problem</Link>
          </ul>
        </div>
        {/* NEWSLETTER */}
        <div>
          <h1 className="mb-8 text-lg font-medium text-dark">Newsletter</h1>
          <div className="flex flex-col gap-5 text-body">
            <p>Get now free 50% discount for alll products on your first order</p>
            {/* EMAIL INPUT */}
            <div className="flex max-w-fit">
              <input
                placeholder="Your email address"
                type="text"
                className="w-full rounded-lg rounded-e-none border border-e-0 border-black px-2"
              />
              <Button className="rounded-none rounded-e-lg bg-primary text-white">SEND</Button>
            </div>
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-1">
                <Image src="/img/icons/mail.svg" width={18} height={14} alt="mail" className="object-cover" />
                <p className="text-black">elemesid@gmail.com</p>
              </div>
              <div className="flex items-center gap-1">
                <Image src="/img/icons/phone.svg" width={18} height={14} alt="mail" className="object-cover" />
                <p className="text-black">0888 1111 2222</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="pb-8 text-center text-xs text-body">© 2021 Elemes id. All rights reserved</p>
    </footer>
  );
};
export default Footer;
