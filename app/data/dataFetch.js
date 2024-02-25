export async function CategoryData() {
  const res = await fetch("https://server-ueul.onrender.com/category");
  const category = await res.json();
  return category;
}

export async function SubCategoryData() {
  const res = await fetch("https://server-ueul.onrender.com/subcategory");
  const subCategory = await res.json();
  return subCategory;
}

export async function DuaData() {
  const res = await fetch("https://server-ueul.onrender.com/dua");
  const dua = await res.json();
  return dua;
}
