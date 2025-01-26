import React from "react";
import { jobPostings } from "../constant";
import { CustomButton } from "../components/CustomButton";
import Card from "../components/JobCard";
import heroImage from "../assets/images/Hero_Image.jpg";
import heroImage2 from "../assets/images/Hero_Image2.jpg";

export default function Home() {
  return (
    <main>
      <section className="h-svh flex justify-around items-center lg:px-16">
        <div className="flex flex-col justify-center">
          <h1 className="font-HostGroteskBold text-5xl">
            Search The Opportunity <br /> You{" "}
            <span className="text-fuchsia-600">Want</span>{" "}
          </h1>
          <p className="mt-2 font-HostGroteskRegular text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Sint
            in recusandae ipsum, illum dolorem quo!
          </p>

          <form className="mt-5 flex gap-4">
            <input
              type="text"
              className="p-2 outline-none font-HostGroteskRegular rounded bg-gray-100 border border-gray-300"
              placeholder="Location"
            />
            <input
              type="text"
              className="p-2 outline-none font-HostGroteskRegular rounded bg-gray-100 border border-gray-300"
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
        <div>
          <img src={heroImage2} alt="" className="h-[500px]" />
        </div>
      </section>
      <section className="bg-gray-100 lg:px-16 md:px-8 px-4 py-8">
        <h1 className="font-HostGroteskBold text-3xl">Recent Job Postings</h1>
        <div className="grid grid-flow-row mt-10 gap-8 grid-cols-2">
          {jobPostings.map((item) => (
            <Card
              jobTitle={item.jobTitle}
              jobDescription={item.description}
              company={item.company}
              companyLogo={item.companyLogo}
              location={item.location}
              salary={item.salary}
              skills={item.skillsRequired}
              level={item.level}
            />
          ))}
        </div>
        <CustomButton
          className={"mt-5"}
          bgVarient={"primary"}
          title={"View All Job Posting"}
        />
      </section>
    </main>
  );
}
