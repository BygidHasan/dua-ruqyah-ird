import React from "react";
import Image from "next/image";
import { CiBookmark } from "react-icons/ci";
import { HiOutlineSquare2Stack } from "react-icons/hi2";
import { IoBulbOutline, IoShareSocialOutline } from "react-icons/io5";
import { PiSealWarning } from "react-icons/pi";
import Link from "next/link";

export default function DuaCard({ data }) {
  return (
    <>
      <div id={data.id} className="bg-white flex flex-col gap-6 p-6 rounded-xl">
        <div className="flex flex-col gap-5">
          <div className="flex justify-start items-center">
            <Image src="/Allah1.png" alt="logo" width={35} height={35} />
            <p className="ml-3 text-green-600 font-medium">
              {data.id} {data.dua_name_en}
            </p>
          </div>
          <div className="font-medium text-lg flex flex-col justify-between">
            <p>{data.top_en}</p>
            <p>{data.dua_arabic}</p>
            <p>{data.bottom_en}</p>
          </div>

          <div className="flex flex-col justify-start font-medium text-lg ">
            <p className="text-green-600">Reference:</p>
            <p>{data.refference_en}</p>
          </div>
        </div>
        <div className="flex justify-between ">
          <div>
            {/* error here */}
            {data.audio && (
              <div>
                <Link href={data.audio} className="bg-url(/play.png)" />
              </div>
            )}
          </div>
          <div className="flex justify-between gap-9">
            <HiOutlineSquare2Stack size={26} color="gray" />
            <CiBookmark size={26} color="gray" />
            <IoBulbOutline size={26} color="gray" />
            <IoShareSocialOutline size={26} color="gray" />
            <PiSealWarning size={26} color="gray" />
          </div>
        </div>
      </div>
    </>
  );
}
