import React, { useState } from "react";
import "../App.css";

function Modal(props) {
  const [showModal, setShowModal] = useState(false);
  const [selectedType, setSelectedType] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [inputVal, setInputVal] = useState("");

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleInputChange = (e) => {
    setInputVal(e.target.value);
  };

  const handleSaveChanges = () => {
    if (selectedType === "income") {
      props.onAdd(inputVal, selectedCategory);
      setShowModal(false);
    } else if (selectedType === "cost") {
      props.oneAdd(inputVal, selectedCategory);
      setShowModal(false);
    }
  };
  return (
    <>
      <button
        className="flex justify-center w-16 border-2 bg-green-250 dark:bg-green-350 text-white active:bg-olive-750 font-bold uppercase text-sm px-6  rounded shadow hover:shadow-lg outline-none focus:outline-none m-2 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <i className=" text-xl bx bx-plus-medical"></i>
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative sm:w-1/3 w-9/12 my-6 mx-auto max-w-3xl">
              <div className="border-4 border-green-850 bg-white-150 dark:bg-[#294733] dark:border-[#a2d498] rounded-xl shadow-lg relative flex flex-col w-full outline-none focus:outline-none ">
                <div className="flex items-center justify-center p-5 ">
                  <h1 className="text-xl dark:text-yellow-850 font-semibold">
                    {props.title}
                  </h1>
                </div>
                <div className="">
                  <div className="flex mt-6 justify-around">
                    <label
                      className="text-lg translate-y-2.5 text-2xl dark:text-yellow-850"
                      htmlFor="type"
                    >
                      Type:
                    </label>
                    <select
                      className="border-2 border-brown-750 bg-brown-150 p-4 dark:bg-[#48674a] dark:border-[#618a64] text-gray-900 text-sm rounded-lg focus:ring-green-850 focus:outline-none translate-x-2.5 w-1/2 dark:text-yellow-850"
                      value={selectedType}
                      onChange={handleTypeChange}
                      id="type"
                    >
                      <option disabled value="">
                        Choose
                      </option>
                      <option value="income">Income</option>
                      <option value="cost">Cost</option>
                    </select>
                  </div>
                  <div className="flex mt-6 justify-around">
                    {selectedType ? (
                      <React.Fragment>
                        <label
                          className="text-lg translate-y-2.5 text-2xl dark:text-yellow-850"
                          htmlFor="category"
                        >
                          Category:
                        </label>
                        <select
                          required
                          className="border-2 border-brown-750 bg-brown-150 p-4 dark:bg-[#48674a] dark:border-[#618a64] text-gray-900 text-sm rounded-lg focus:ring-green-850 focus:outline-none w-1/2 dark:text-yellow-850"
                          id="category"
                          value={selectedCategory}
                          onChange={handleCategoryChange}
                        >
                          <option disabled value="">
                            Choose
                          </option>
                          {selectedType === "income" && (
                            <>
                              <option value="Salary">Salary</option>
                              <option value="Profit">
                                Profits from investments
                              </option>
                              <option value="Gift">Gift</option>
                            </>
                          )}
                          {selectedType === "cost" && (
                            <>
                              <option value="Tax">Tax</option>
                              <option value="Daily">
                                Daily shopping expenses
                              </option>
                              <option value="Rent">
                                Rent & mortgage payments
                              </option>
                              <option value="Internet">
                                Internet & phone services
                              </option>
                            </>
                          )}
                        </select>
                      </React.Fragment>
                    ) : (
                      <React.Fragment>
                        <label
                          className="text-lg translate-y-2.5 text-2xl dark:text-yellow-850"
                          htmlFor="category"
                        >
                          Category:
                        </label>
                        <select
                          className="border-2 border-brown-750 bg-brown-150 p-4 dark:bg-[#48674a] dark:border-[#618a64] text-gray-900 text-sm rounded-lg focus:ring-green-850 focus:outline-none w-1/2 dark:text-yellow-850"
                          id="category"
                        >
                          <option disabled value="">
                            Choose
                          </option>
                        </select>
                      </React.Fragment>
                    )}
                  </div>

                  <div className="flex mt-6 justify-around">
                    <label
                      className="text-lg translate-y-2.5 text-2xl dark:text-yellow-850"
                      htmlFor="amount"
                    >
                      Amount:
                    </label>
                    <input
                      type="number"
                      onChange={handleInputChange}
                      id="amount"
                      className="border-2 border-brown-750 bg-brown-150 w-1/2 dark:bg-[#48674a] dark:border-[#618a64] p-4 rounded-lg focus:outline-none dark:text-yellow-850"
                    ></input>
                  </div>
                </div>
                <div className="flex items-center justify-end p-6">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-yellow-750 border-4 border-opacity-45 border-yellow-150 dark:bg-[#3b593d] dark:border-[#1c251d] dark:text-yellow-850 text-green-850 font-bold uppercase text-sm p-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleSaveChanges}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="blur-l opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default Modal;
