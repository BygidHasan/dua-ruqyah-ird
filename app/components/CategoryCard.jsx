"use client";

import Image from "next/image";
import SubCategory from "./SubCategory";

import { SubCategoryData } from "../data/dataFetch";
import { useEffect, useState } from "react";

export default function CategoryCard({
  data,
  isOpen,
  setOpenCatId,
  firstCatId,
  setSelectedDua,
  setSelectedCategory,
}) {
  const { cat_id, cat_name_en, no_of_subcat, no_of_dua, cat_icon } = data;
  const [subCatData, setSubCatData] = useState([]);

  async function handleClick(id) {
    if (isOpen) {
      setOpenCatId(null);
      setSubCatData([]);
    } else {
      setOpenCatId(id);
      //pass cat id on router query params
      setSelectedCategory({ id: id, name: cat_name_en });
      const subCat = await SubCategoryData();
      const filterItem = subCat.filter((item) => item.cat_id === id);
      setSubCatData(filterItem);
    }
  }

  useEffect(() => {
    async function getData() {
      if (!isOpen) {
        setOpenCatId(firstCatId);
        const subCat = await SubCategoryData();
        const filterData = subCat.filter(
          (subCat) => subCat.cat_id === firstCatId
        );
        setSubCatData(filterData);

        setSelectedCategory({ id: firstCatId, name: cat_name_en });
      }
    }
    getData();
  }, [firstCatId]);

  return (
    <>
      <div
        onClick={() => handleClick(cat_id)}
        className="flex justify-start items-center m-3 px-4 py-3 hover:bg-gray-200 hover:rounded-lg cursor-pointer"
      >
        <div>
          <Image
            src="/temper.png"
            alt={cat_icon}
            width={80}
            height={80}
            className="bg-[#F3F4F6] p-2.5 rounded-lg"
          />
        </div>
        <div className="w-full border-r-2 ml-2 mr-3">
          <h3>{cat_name_en}</h3>
          <p className="text-gray-500 text-xs pt-1">
            Subcategory: {no_of_subcat}
          </p>
        </div>
        <div className="flex flex-col items-center">
          <h3>{no_of_dua}</h3>
          <p className="text-gray-500 text-xs pt-1">Duas</p>
        </div>
      </div>

      {/* sub Category */}
      <div className="pl-10">
        {isOpen &&
          subCatData.map((subCat) => {
            console.log("retu", subCat);
            return (
              <SubCategory
                key={subCat.id}
                data={subCat}
                setSelectedDua={setSelectedDua}
              />
            );
          })}
      </div>
    </>
  );
}
