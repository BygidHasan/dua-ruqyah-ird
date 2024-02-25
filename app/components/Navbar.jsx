import React from "react";
import { IoIosSearch, IoMdArrowDropdown } from "react-icons/io";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex text-white justify-between items-center py-5">
      <p className="text-2xl w-full text-black">Dua Page</p>

      <div className="flex w-full justify-between">
        <div className="bg-white flex justify-center items-center p-1 rounded-md ml-28">
          <input
            type="text"
            placeholder="Search by Dua Name"
            className="placeholder-gray-500 text-sm ml-3 pr-20"
          />
          <button className="bg-[#F3F4F6] px-4 py-2 rounded-md">
            <IoIosSearch color="grey" size={24} />
          </button>
        </div>
        <div className="flex justify-center items-center mr-7">
          <Image src="/user.png" alt="user" width={50} height={50} />
          <IoMdArrowDropdown color="grey" size={24} />
        </div>
      </div>
    </div>
  );
}
