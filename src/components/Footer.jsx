import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black md:px-16 lg:px-32 px-4 py-8 flex flex-col gap-8 font-HostGroteskRegular">
      <div className="flex justify-start items-center border-b pb-8 border-gray-400">
        <h1 className="font-HostGroteskMedium text-2xl">Follow Job Search</h1>
        <div>
          <ul className="flex gap-4 ml-10">
            <li>
              <a href="#" className="hover:underline">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className=" basis-1/3">
          <h1 className="font-HostGroteskRegular text-2xl">More About Us</h1>
          <ul className="mt-4 space-y-4 font-HostGroteskRegular text-gray-700">
            <li>
              <a
                href="#"
                className="flex items-center gap-1 hover:text-gray-900"
                target="_blank"
              >
                About Us
                <span className="material-symbols-outlined text-lg">
                  open_in_new
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-1 hover:text-gray-900"
                target="_blank"
              >
                Contact Us{" "}
                <span className="material-symbols-outlined text-lg">
                  open_in_new
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-1 hover:text-gray-900"
                target="_blank"
              >
                Our Policy{" "}
                <span className="material-symbols-outlined text-lg">
                  open_in_new
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="basis-1/3">
          <h1 className="font-HostGroteskRegular text-2xl">
            Related Information
          </h1>
          <ul className="mt-4 space-y-4 font-HostGroteskRegular text-gray-600">
            <li>
              <a
                href="#"
                className="flex items-center gap-1 hover:text-gray-900"
                target="_blank"
              >
                Investor Relations{" "}
                <span class="material-symbols-outlined text-lg">
                  open_in_new
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-1 hover:text-gray-900"
                target="_blank"
              >
                Blog{" "}
                <span class="material-symbols-outlined text-lg">
                  open_in_new
                </span>
              </a>
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
        <div className="flex justify-center items-center gap-16">
          {" "}
          <span className="font-HostGroteskBold text-2xl">Dolen Deori</span>
          <ul className="flex gap-8 ml-4 font-HostGroteskRegular">
            <li>
              <a href="#" className="flex items-center gap-1">
                Privacy{" "}
                <span class="material-symbols-outlined text-lg">
                  open_in_new
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-1">
                Applicant & Candidate Privacy{" "}
                <span class="material-symbols-outlined text-lg">
                  open_in_new
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-1">
                Terms{" "}
                <span class="material-symbols-outlined text-lg">
                  open_in_new
                </span>{" "}
              </a>
            </li>
          </ul>
        </div>
        <a href="#" className="font-HostGroteskRegular flex items-center gap-1">
          Help
          <span class="material-symbols-outlined text-lg">
            open_in_new
          </span>{" "}
        </a>
      </div>
    </footer>
  );
};
