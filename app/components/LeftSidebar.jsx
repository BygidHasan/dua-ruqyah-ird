import React from "react";
import Image from "next/image";

import { CiHome, CiBookmark } from "react-icons/ci";
import {
  PiSquaresFourThin,
  PiChatsTeardropLight,
  PiBookOpen,
} from "react-icons/pi";
import { IoBulbOutline } from "react-icons/io5";
import { TbMedicineSyrup } from "react-icons/tb";
import { BiSolidDonateHeart } from "react-icons/bi";

export default function LeftSidebar() {
  return (
    <div className="bg-white h-full flex flex-col rounded-3xl items-center justify-around">
      <Image src="/dua_logo.png" alt="dua" width={50} height={50} />
      <div className="flex flex-col gap-6 justify-around">
        <CiHome
          size={40}
          color="gray"
          className="bg-slate-200 rounded-full p-1.5"
        />
        <PiSquaresFourThin
          size={40}
          color="gray"
          className="bg-slate-200 rounded-full p-1.5"
        />
        <IoBulbOutline
          size={40}
          color="gray"
          className="bg-slate-200 rounded-full p-1.5"
        />
        <CiBookmark
          size={40}
          color="gray"
          className="bg-slate-200 rounded-full p-1.5"
        />
        <TbMedicineSyrup
          size={40}
          color="gray"
          className="bg-slate-200 rounded-full p-1.5"
        />
        <PiChatsTeardropLight
          size={40}
          color="gray"
          className="bg-slate-200 rounded-full p-1.5"
        />
        <PiBookOpen
          size={40}
          color="gray"
          className="bg-slate-200 rounded-full p-1.5"
        />
      </div>
      <BiSolidDonateHeart
        size={50}
        color="white"
        className="bg-green-600 rounded-md p-3"
      />
    </div>
  );
}
