import CategoryCard from "./Home/CategoryCard";
function Category() {
  return (
    <div className="bg-[#274181] w-full">
      <h2>Categories</h2>
      <CategoryCard />
      <ul>
        <li>Category 1</li>
        <li>Category 2</li>
        <li>Category 3</li>
      </ul>
    </div>
  );
}

export default Category;