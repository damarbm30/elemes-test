import Image from "next/image";

const Menu = () => {
  return (
    <nav className="fixed bottom-0 block w-full bg-white py-4 shadow-2xl sm:hidden">
      <div className="flex justify-around">
        <div className="flex flex-col items-center justify-center">
          <Image src="/img/icons/menu.svg" width={40} height={40} alt="mobile menu button" />
          <p className="text-body">Home</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image src="/img/icons/menu.svg" width={40} height={40} alt="mobile menu button" />
          <p className="text-body">Promotions</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image src="/img/icons/menu.svg" width={40} height={40} alt="mobile menu button" />
          <p className="text-body">Others</p>
        </div>
      </div>
    </nav>
  );
};
export default Menu;
