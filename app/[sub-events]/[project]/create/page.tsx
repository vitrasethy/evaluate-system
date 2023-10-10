import React from "react";

export default function AddNew() {
  return (
    <main>
      <div className="flex flex-col justify-center items-center mt-[15%] sm:mt-[5%] h-auto">
        <div className=" sm:w-[550px] h-auto w-[370px] mx-[5%] bg-[#fff] drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] py-8 px-10 rounded-2xl">
          <form className="flex flex-col gap-6">
            <h1 className="text-black text-center text-2xl md:text-4xl font-semibold">
              Add Project
            </h1>

            <div>
              <label className="block md:text-lg text-base font-medium text-slate-700">
                Project Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="project"
                  id="project"
                  className="text-sm md:text-base px-3 py-2 md:py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-600 focus:ring-sky-600 block w-full rounded-md focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"
                  placeholder="Enter project name"
                />
              </div>
            </div>

            <div>
              <label className="block md:text-lg text-base font-medium text-slate-700">
                Supervisor
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="supervisor"
                  id="supervisor"
                  placeholder="Enter supervisor"
                  className="md:text-base px-3 py-2 md:py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-600 focus:ring-sky-600 block w-full rounded-md text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="Member"
                className="block md:text-lg text-base font-medium text-slate-700"
              >
                Member
              </label>
              <div className="grid grid-cols-2 mt-1">
                <input
                  type="Member"
                  name="Member"
                  id="Member1"
                  placeholder="Member1"
                  className="md:text-base px-3 py-2 md:py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-600 focus:ring-sky-600 block w-full rounded-md text-sm focus:ring-1"
                  required
                />
                <input
                  type="Member"
                  name="Member"
                  id="Member2"
                  placeholder="Member2"
                  className="md:text-base px-3 py-2 md:py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-600 focus:ring-sky-600 block w-full rounded-md text-sm focus:ring-1"
                  required
                />
                <input
                  type="Member"
                  name="Member"
                  id="Member3"
                  placeholder="Member3"
                  className="md:text-base px-3 py-2 md:py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-600 focus:ring-sky-600 block w-full rounded-md text-sm focus:ring-1"
                  required
                />
                <input
                  type="Member"
                  name="Member"
                  id="Member4"
                  placeholder="Member4"
                  className="md:text-base px-3 py-2 md:py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-600 focus:ring-sky-600 block w-full rounded-md text-sm focus:ring-1"
                  required
                />
                <input
                  type="Member"
                  name="Member"
                  id="Member5"
                  placeholder="Member5"
                  className="md:text-base px-3 py-2 md:py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-600 focus:ring-sky-600 block w-full rounded-md text-sm focus:ring-1"
                  required
                />
              </div>
            </div>

                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                </svg>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                            </div>
                            <input id="dropzone-file" type="file" className="hidden" />
                        </label>
                    
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
    </main>
  );
}
