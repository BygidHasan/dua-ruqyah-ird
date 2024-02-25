"use client";

import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import LeftSideBar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import Categories from "./components/Categories";
import AllDuas from "./components/AllDuas";

import { CategoryData } from "./data/dataFetch";

export default function page() {
  const [catData, setCatData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedDua, setSelectedDua] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await CategoryData();
      setCatData(data);
    }
    fetchData();
  }, []);

  return (
    <main className="flex w-full h-dvh bg-[#F3F4F6] py-7 px-10 gap-7">
      <div className="w-28 rounded-3xl">
        <LeftSideBar />
      </div>
      <div className="w-full flex flex-col">
        <Navbar />
        <div className="grid grid-cols-12 gap-7 h-full">
          {catData.length > 0 && (
            <Categories
              data={catData}
              setSelectedCategory={setSelectedCategory}
              setSelectedDua={setSelectedDua}
            />
          )}
          <AllDuas
            selectedCategory={selectedCategory}
            selectedDua={selectedDua}
          />
          <RightSidebar />
        </div>
      </div>
    </main>
  );
}
