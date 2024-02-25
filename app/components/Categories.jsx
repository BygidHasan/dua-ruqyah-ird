"use client";

import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import CategoryCard from "./CategoryCard";

export default function Categories({
  data,
  setSelectedCategory,
  setSelectedDua,
}) {
  const [openCatId, setOpenCatId] = useState(null);

  return (
    <div className="h-full bg-white col-span-3 rounded-xl overflow-hidden">
      <h2 className="w-full bg-green-600 rounded-t-xl py-4 text-white text-center">
        Categories
      </h2>
      <div className="flex p-3 m-3.5 justify-start items-center border bg-white border-slate-200 rounded-lg">
        <IoIosSearch size={24} color="grey" />
        <input
          type="text"
          placeholder="Search Categories"
          className="placeholder-gray-500 ml-4 w-full text-sm"
        />
      </div>
      <div className="h-[70vh] overflow-auto">
        {data &&
          data?.map((cat) => {
            return (
              <CategoryCard
                key={cat.id}
                data={cat}
                isOpen={openCatId === cat.id}
                setOpenCatId={setOpenCatId}
                firstCatId={data[0]?.id}
                setSelectedCategory={setSelectedCategory}
                setSelectedDua={setSelectedDua}
              />
            );
          })}
      </div>
    </div>
  );
}
