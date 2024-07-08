import { useState } from "react";

function IncomeFilter(props) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const onCategoryChange = (e) => {
    const categoryValue = e.target.value;
    setSelectedCategory(categoryValue);
    props.onCategoryFilter(categoryValue);
  };
  return (
    <div className="flex mt-6 justify-around w-full">
      <select
        name=""
        className="translate-x-2.5 border-2 border-brown-750 bg-brown-150 p-4 dark:bg-[#48674a] dark:border-[#618a64] text-gray-900 text-sm rounded-lg focus:ring-green-850 focus:outline-none w-1/2 dark:text-yellow-850"
        id="category"
        onChange={onCategoryChange}
        value={selectedCategory}
      >
        <option disabled value="">
          Choose
        </option>
        <option value="Salary">Salary</option>
        <option value="Profit">Profits from investments</option>
        <option value="Gift">Gift</option>
      </select>
    </div>
  );
}

export default IncomeFilter;
