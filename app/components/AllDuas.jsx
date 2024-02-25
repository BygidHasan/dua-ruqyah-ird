"use client";

import { useEffect, useState } from "react";
import DuaCard from "../components/DuaCard";
import { DuaData } from "../data/dataFetch";

export default function AllDuas({ selectedCategory, selectedDua }) {
  const [duaData, setDuaData] = useState(null);

  useEffect(() => {
    async function getData() {
      const allData = await DuaData();
      setDuaData(allData?.filter((dua) => dua.cat_id === selectedCategory?.id));
    }
    getData();
  }, [selectedCategory?.id]);

  return (
    <div className="col-span-7 flex flex-col gap-6 h-[85vh] overflow-auto">
      <div className="bg-white p-4 rounded-xl">
        <span className="text-green-600 font-medium">Section: </span>
        {selectedCategory?.name}
      </div>
      {duaData?.map((dua, idx) => {
        return <DuaCard key={idx} data={dua} />;
      })}
    </div>
  );
}
