import React from "react";
import { jobPostings } from "../constant";

export default function Home() {
  return (
    <main>
      <section className="bg-gray-100 h-svh flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-HostGroteskBold text-3xl">
            Search The Opportunity You{" "}
            <span className="text-fuchsia-600">Want</span>{" "}
          </h1>

          <form className="mt-5 flex gap-4">
            <input
              type="text"
              className="p-2 outline-none font-HostGroteskRegular rounded"
              placeholder="Location"
            />
            <input
              type="text"
              className="p-2 outline-none font-HostGroteskRegular rounded"
              placeholder="Job Type"
            />
            <button
              type="submit"
              value="Search"
              className="px-4 bg-fuchsia-200 text-fuchsia-700 rounded font-HostGroteskMedium hover:bg-fuchsia-700 hover:text-white duration-150 hover:shadow-lg text-sm"
            >
              {" "}
              Search
            </button>
          </form>
        </div>
      </section>
      <section className="bg-gray-100 lg:px-16 md:px-8 px-4 py-8">
        <h1 className="font-HostGroteskBold text-3xl">Recent Job Postings</h1>
        <div className="grid grid-flow-col mt-10 gap-8 grid-rows-3">
          {jobPostings.map((item) => (
            <div key={item.id} className="p-4 bg-gray-600 rounded text-white">
              <div>
                <h1 className="font-HostGroteskBold text-xl">
                  {item.jobTitle}
                </h1>
                <p className="font-HostGroteskRegular">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
