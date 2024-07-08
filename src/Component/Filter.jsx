import { useState } from "react";

function Filter(props) {
  const [showModalFilter, setShowModalFilter] = useState(false);
  return (
    <>
      <button
        className="active:bg-olive-750 font-bold uppercase text-sm rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModalFilter(true)}
      >
        <i className="bx bx-filter-alt"></i>
      </button>
      {showModalFilter ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative sm:w-1/3 w-9/12 my-6 mx-auto max-w-3xl">
              <div className="border-4 border-green-850 bg-white-150 rounded-xl dark:bg-[#294733] dark:border-[#a2d498] shadow-lg relative flex flex-col w-full outline-none focus:outline-none ">
                <div className="flex items-center justify-center p-5 ">
                  <h1 className="text-xl font-semibold dark:text-yellow-850">
                    Filter
                  </h1>
                </div>
                <div className="">
                  <div className="flex mt-6 justify-around">
                    {props.filterType}
                  </div>
                  <div className=" mt-6 flex flex-col gap-6 items-center">
                    <div className="flex justify-between dark:text-yellow-850 border-2 border-brown-750 bg-brown-150 p-4 dark:bg-[#48674a] dark:border-[#618a64] text-gray-900 text-sm rounded-lg translate-x-2.5 w-1/2">
                      <span>{props.total}</span>
                      <span>$</span>
                    </div>
                    <div className="flex justify-between dark:text-yellow-850 border-2 border-brown-750 bg-brown-150 p-4 dark:bg-[#48674a] dark:border-[#618a64] text-gray-900 text-sm rounded-lg translate-x-2.5 w-1/2">
                      <span>{props.percentage}</span>
                      <span>%</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-end p-6">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModalFilter(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-yellow-750 border-4 w-1/3 border-opacity-45 border-yellow-150 dark:bg-[#3b593d] dark:border-[#1c251d] dark:text-yellow-850 text-green-850 font-bold uppercase text-sm p-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModalFilter(false)}
                  >
                    Ok
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default Filter;
