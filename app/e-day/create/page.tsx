import MultiSelect from "@/components/MultiSelect";
import React from "react";

export default function Create() {
  return (
    <div className="flex flex-col justify-center items-center mt-[15%] sm:mt-[5%] h-auto">
      <div className=" md:w-[500px] md:h-[600px] w-[370px] h-[540px] mx-[5%] bg-[#fff] drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] py-8 px-10 rounded-2xl">
        <form className="flex flex-col gap-6">
          <h1 className="text-black text-center text-2xl md:text-4xl font-semibold">
            Add Department
          </h1>

          <div>
            <label className="block md:text-lg text-base font-medium text-slate-700">
              Department Name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="department"
                id="department"
                className="text-sm md:text-base px-3 py-2 md:py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-600 focus:ring-sky-600 block w-full rounded-md focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"
                placeholder="Enter department name"
              />
            </div>
          </div>

          <div>
            <label className="block md:text-lg text-base font-medium text-slate-700">
              Generation
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="generation"
                id="generation"
                placeholder="Enter generation"
                className=" md:text-base px-3 py-2 md:py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-600 focus:ring-sky-600 block w-full rounded-md text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"
              />
            </div>
          </div>

          <div>
            <p className="block md:text-lg text-base font-medium text-slate-700">
              Year
            </p>
            <div className="mt-1 items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg flex">
              <label className="w-full border-gray-200 border-b-0 border-r">
                <div className="flex items-center pl-3">
                  <input
                    type="radio"
                    name="myRadio"
                    value="option1"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                  />
                  <p className="w-full py-3 ml-2 text-sm font-medium text-gray-900">
                    1
                  </p>
                </div>
              </label>
              <label className="w-full border-gray-200 border-b-0 border-r">
                <div className="flex items-center pl-3">
                  <input
                    type="radio"
                    name="myRadio"
                    value="option1"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                  />
                  <p className="w-full py-3 ml-2 text-sm font-medium text-gray-900">
                    2
                  </p>
                </div>
              </label>
              <label className="w-full border-gray-200 border-b-0 border-r">
                <div className="flex items-center pl-3">
                  <input
                    type="radio"
                    name="myRadio"
                    value="option1"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                  />
                  <p className="w-full py-3 ml-2 text-sm font-medium text-gray-900">
                    3
                  </p>
                </div>
              </label>
              <label className="w-full border-gray-200 border-b-0 border-r">
                <div className="flex items-center pl-3">
                  <input
                    type="radio"
                    name="myRadio"
                    value="option1"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                  />
                  <p className="w-full py-3 ml-2 text-sm font-medium text-gray-900">
                    4
                  </p>
                </div>
              </label>
            </div>
          </div>

          <div>
            <p className="block md:text-lg text-base font-medium text-slate-700">
              Select Evaluator
            </p>
            <MultiSelect />
          </div>

          <div className="text-center">
            <button
              className="bg-[#024164] hover:bg-[#03679d] w-full px-3 py-3 text-sm md:text-lg leading-5 rounded-md font-semibold text-white"
              type="submit"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
