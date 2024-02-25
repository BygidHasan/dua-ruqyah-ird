import React from "react";
import { HiMiniLanguage } from "react-icons/hi2";
import { PiSquaresFourLight } from "react-icons/pi";
import Image from "next/image";

export default function RightSidebar() {
  return (
    <div className="flex flex-col justify-start items-center h-full bg-white col-span-2 rounded-3xl px-4 gap-4">
      <h2 className="text-xl font-medium py-8">Settings</h2>
      <div className="flex justify-start items-center bg-[#F3F4F6] px-2 py-2 w-full rounded-md gap-4">
        <HiMiniLanguage
          size={40}
          color="gray"
          className="bg-slate-200 rounded-full p-1.5"
        />
        <span className="text-sm text-zinc-500">Language Settings</span>
      </div>
      <div className="flex justify-start items-center bg-[#F3F4F6] px-2 py-2 w-full rounded-md gap-4">
        <div className="bg-slate-200 h-10 w-10 p-2 rounded-full flex justify-center items-center">
          <Image src="/genSet.png" alt="dua" width={20} height={20} />
        </div>
        <span className="text-sm text-zinc-500">General Settings</span>
      </div>

      <div className="flex justify-start items-center bg-[#F3F4F6] px-2 py-2 w-full rounded-md gap-4">
        <PiSquaresFourLight
          size={40}
          color="gray"
          className="bg-slate-200 rounded-full p-1.5"
        />
        <span className="text-sm text-zinc-500">Font Settings</span>
      </div>

      <div className="flex justify-start items-center bg-[#F3F4F6] px-2 py-2 w-full rounded-md gap-4">
        <PiSquaresFourLight
          size={40}
          color="gray"
          className="bg-slate-200 rounded-full p-1.5"
        />
        <span className="text-sm text-zinc-500">Appearence Settings</span>
      </div>
    </div>
  );
}
