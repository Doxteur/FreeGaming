import React from "react";
import { BiSupport } from "react-icons/bi";

function SideBar() {
  return (
    <>

      <div className="float-left h-screen lg:left-0 p-2 w-lg overflow-y-auto text-center bg-gray-900">
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center">
            <i className="bi bi-app-indicator py-1 rounded-md "></i>
            <BiSupport />
            <h1 className="font-bold text-gray-200 text-lg ml-3">
              <span className="text-secondary">Free</span> Gaming Support
            </h1>
            
          </div>
          <div className="my-2 bg-gray-600 h-[1px]"></div>
        </div>
        
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer text-white bg-gray-700">
          <i className="bi bi-house-door-fill"></i>
          <span className="text-md ml-4 text-gray-200 font-bold">Home</span>
        </div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
          <i className="bi bi-bookmark-fill"></i>
          <span className="text-md ml-4 text-gray-200 font-bold">Lorem</span>
        </div>
        <div className="my-4 bg-gray-600 h-[1px]"></div>
        
      </div>
    </>
  );
}

export default SideBar;
