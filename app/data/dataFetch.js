export async function CategoryData() {
  const res = await fetch("http://localhost:4000/category");
  const category = await res.json();
  return category;
}

export async function SubCategoryData() {
  const res = await fetch("http://localhost:4000/subcategory");
  const subCategory = await res.json();
  return subCategory;
}

export async function DuaData() {
  const res = await fetch("http://localhost:4000/dua");
  const dua = await res.json();
  return dua;
}
