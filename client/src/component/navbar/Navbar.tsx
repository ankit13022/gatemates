import { useState } from "react";
// import { GrCart } from "react-icons/gr";
// import { GiShoppingCart } from "react-icons/gi";
// import { SiShopify } from "react-icons/si";
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
// import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex md:flex-row flex-col justify-center border bg-slate-100">
      <div className="md:w-[80%] w-full flex justify-between items-center p-4">
        {/* <Link href="/"> */}
        <div className="flex gap-2 items-center">
          <div className="md:text-4xl text-xl flex flex-col text-blue-600">
            GetMate
          </div>
        </div>
        {/* </Link> */}

        <div className="flex md:gap-10 gap-6 items-center">
          <div className="hidden md:block">
            <ul className="flex gap-5 font-semibold text-gray-400">
              {/* <Link href="/"> */}
              <li className="hover:text-black ease-in-out duration-300 cursor-pointer">
                providers
              </li>
              {/* </Link> */}

              {/* <Link href="/category"> */}
              <li className="hover:text-black ease-in-out duration-300 cursor-pointer">
                about
              </li>
              {/* </Link> */}
              {/* <Link href="/"> */}
              <li className="hover:text-black ease-in-out duration-300 cursor-pointer">
                contact
              </li>
              {/* </Link> */}
            </ul>
          </div>

          {/* <Link href="/login"> */}
          <button className="border p-2 md:w-[6rem] rounded-full text-sm md:text-xl hover:bg-blue-400 hover:text-white ease-in-out duration-300 hidden md:block cursor-pointer">
            Logout
          </button>
          {/* </Link> */}
          <button
            className="text-black flex lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <RxCross2 className="text-2xl" /> // 'X' icon
            ) : (
              <RiMenu3Fill className="text-2xl" /> // Hamburger icon
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="w-full bg-white border-t-2 border-b-2 flex justify-between p-2 items-center">
          <ul className="flex md:gap-5 gap-3 md:font-semibold text-gray-400 text-sm md:text-xl">
            {/* <Link href="/"> */}
            <li className="hover:text-black ease-in-out duration-300">
              providers
            </li>
            {/* </Link> */}
            {/* <Link href="/category"> */}
            <li className="hover:text-black ease-in-out duration-300">
              Contact
            </li>
            {/* </Link> */}

            {/* <Link href="/"> */}
            <li className="hover:text-black ease-in-out duration-300">About</li>
            {/* </Link> */}
          </ul>
          {/* <Link href="/login"> */}
          <button className="border p-2 md:w-[6rem] w-[4rem] rounded-full text-[10px] md:text-xl hover:bg-blue-400 hover:text-white ease-in-out duration-300">
            Logout
          </button>
          {/* </Link> */}
        </div>
      )}
    </div>
  );
};

export default Navbar;
