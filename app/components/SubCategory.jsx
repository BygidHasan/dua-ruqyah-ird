"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { DuaData } from "../data/dataFetch";

export default function SubCategory({ data, setSelectedDua }) {
  const { subcat_name_en } = data;

  const router = useRouter();
  const [selectedSubs, setSelectedSubs] = useState([]);

  async function handleSubCatClick(sub) {
    console.log(sub, "sdf");
    const data = await DuaData();
    const filtedData = data?.filter((dua) => dua.subcat_id === sub.subcat_id);
    setSelectedSubs(filtedData);
  }

  const handleDuaClick = (dua) => {
    router.push(`#${dua.id}`);
    setSelectedDua(dua);
  };
  return (
    <>
      <div
        onClick={() => handleSubCatClick(data)}
        className="flex border-l-2 border-dotted border-green-600 flex-wrap relative pb-4"
      >
        <span className="absolute w-2 h-2 rounded-full bg-green-600 top-1 -left-1" />
        <p className="font-medium text-sm pl-3 cursor-pointer">
          {subcat_name_en}
        </p>
      </div>
      {selectedSubs?.map((dua) => {
        return (
          <div
            onClick={() => handleDuaClick(dua)}
            key={dua.id}
            className="pl-10"
          >
            <p>{dua.dua_name_en}</p>
          </div>
        );
      })}
    </>
  );
}
