import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-gray-200 text-black md:px-16 lg:px-32 px-4 py-8 flex flex-col gap-8">
      <div className="flex justify-start items-center border-b pb-8 border-gray-400">
        <h1 className="font-HostGroteskMedium text-2xl">Follow Job Search</h1>
        <div>
          <ul className="flex gap-4 ml-10">
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className=" basis-1/3">
          <h1 className="font-HostGroteskRegular text-2xl">More About Us</h1>
          <ul className="mt-4 space-y-4 font-HostGroteskRegular opacity-70">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Our Policy</a>
            </li>
          </ul>
        </div>
        <div className="basis-1/3">
          <h1 className="font-HostGroteskRegular text-2xl">
            Related Information
          </h1>
          <ul className="mt-4 space-y-4 font-HostGroteskRegular opacity-70">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="basis-2/3">
          <h1 className="font-HostGroteskRegular text-2xl">
            Equal Opportunity
          </h1>
          <p className="mt-4 space-y-4 font-HostGroteskRegular opacity-70">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta et
            eius earum velit est autem sunt quisquam quidem, iste libero
            pariatur ullam dolorem iusto fuga veniam perferendis voluptate
            labore nisi, natus officiis. Repellendus possimus animi, autem,
            saepe ut deleniti, numquam repudiandae cupiditate omnis quibusdam
            delectus? Reprehenderit porro molestias voluptate. Sint sequi
            voluptatem illum aperiam qui molestiae aliquid consectetur
            asperiores, saepe, nisi a, est quae odit eos excepturi sapiente
            perferendis atque unde corrupti doloribus dolorum error ullam.
            Corporis quos quisquam, assumenda ullam incidunt, fugiat impedit
            iste ut maiores saepe architecto odio ipsum atque deleniti? Iusto
            assumenda numquam minima optio non est?
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center border-t pt-8 border-gray-400 opacity-70">
        <div className="flex justify-center items-center gap-4">
          {" "}
          <span className="font-HostGroteskBold text-2xl">Dolen Deori</span>
          <ul className="flex gap-4 ml-4">
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Applicant & Candidate Privacy</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
          </ul>
        </div>
        <a href="#" className="font-HostGroteskRegular">
          Help
        </a>
      </div>
    </footer>
  );
};
