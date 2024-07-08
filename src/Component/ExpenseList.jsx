import React from "react";

function ExpenseList(props) {
  return (
    <div className="flex justify-around my-1 border-2 p-3 rounded-lg h-12 ">
      <i className="bx bxs-minus-square dark:text-amber-200"></i>
      <p className="dark:text-amber-200">{props.cost}$</p>
      <p className="dark:text-amber-200">{props.category}</p>
    </div>
  );
}

export default ExpenseList;
