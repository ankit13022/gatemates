
// import { SiShopify } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className=" flex justify-center items-center md:mt-10 bg-gray-200 mt-4">
      <div className="md:w-[80%] w-[94%] md:py-20 p-5 flex flex-col gap-5 items-center">
        <div className=" flex md:gap-8 gap-4 flex-col md:px-10 justify-center items-center">
          <div className="md:text-6xl text-[15px] capitalize flex items-center gap-2">
            
            <div className="md:text-4xl text-xl flex flex-col text-blue-600">
              GetMate
            </div>
          </div>
          <div className="">
          <ul className="flex gap-5 font-semibold text-gray-600 text-[11px] md:text-xl">
              
                <li className="hover:text-black ease-in-out duration-300">
                  Company
                </li>
              
                {" "}
                <li className="hover:text-black ease-in-out duration-300">
                  Offices
                </li>
             
                <li className="hover:text-black ease-in-out duration-300">
                  About
                </li>
             
                <li className="hover:text-black ease-in-out duration-300">
                  Contect
                </li>
             
            </ul>
          </div>
          <div className="flex gap-10 text-2xl text-blue-600">
          <FaInstagram/>
          <FaWhatsapp/>
            <FaXTwitter />
          </div>
          
        </div>
        <div className="w-full h-[2px] bg-black"></div>
        <div className="text-center md:text-xl text-[9px] flex gap-3"> &#169; copyright 2024 <span className="text-blue-600">created by getmate</span></div>
      </div>

    </div>
  );
};

export default Footer;


