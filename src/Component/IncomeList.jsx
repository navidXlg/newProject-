import React from "react";

function IncomeList(props) {
  return (
    <div className="flex justify-around my-1 border-2 p-3 rounded-lg h-12 ">
      <i className="bx bxs-plus-square dark:text-amber-200"></i>
      <p className="dark:text-amber-200">{props.income}$</p>
      <p className="dark:text-amber-200">{props.category}</p>
    </div>
  );
}

export default IncomeList;
