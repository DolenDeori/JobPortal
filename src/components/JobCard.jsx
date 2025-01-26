import {
  BriefcaseIcon,
  MapPinIcon,
  BuildingOffice2Icon,
  BookmarkIcon,
} from "@heroicons/react/24/outline";

const Card = ({
  jobTitle,
  jobDescription,
  company,
  companyLogo,
  level,
  salary,
  location,
  skills,
  postedDate,
}) => (
  <div
    className="bg-gray-200 py-4 rounded cursor-pointer px-6"
    onClick={() => alert("Card Clicked")}
  >
    {/* Card Heading */}
    <div className="flex justify-between items-start flex-wrap-reverse">
      <div>
        <h1 className="font-HostGroteskBold text-xl">{jobTitle}</h1>
        <p className="font-HostGroteskMedium text-sm flex gap-2 text-gray-600 mt-1">
          <BuildingOffice2Icon className="w-4 h-4" /> {company}
        </p>
      </div>
      <div className="bg-white p-2 rounded border border-gray-300">
        <img src={companyLogo} alt="" className="h-10 w-10" />
      </div>
    </div>

    <div>
      <div className="flex gap-4 items-center font-HostGroteskMedium mt-4">
        <span className="text-gray-800 text-sm flex gap-1">
          {" "}
          <BriefcaseIcon className="h-4 w-4" /> {level}
        </span>{" "}
        <div className="bg-gray-500 w-[1.5px] h-5"></div>
        <span className="text-gray-800 text-sm">{salary} PA</span>{" "}
        <div className="bg-gray-500 w-[1.5px] h-5"></div>
        <span className="text-gray-800 text-sm flex gap-1">
          {" "}
          <MapPinIcon className="h-4 w-4" /> {location}
        </span>{" "}
      </div>
      <p className="font-HostGroteskRegular line-clamp-2">{jobDescription}</p>
    </div>

    <div className="flex mt-4 gap-2">
      {skills?.map((skill, index) => (
        <span
          key={index}
          className="p-1 bg-gray-300 rounded px-3 font-HostGroteskMedium text-gray-800 text-xs"
        >
          {skill}
        </span>
      ))}
    </div>

    <div className="flex justify-between mt-4 text-xs font-HostGroteskRegular text-gray-600">
      <p>Posted {postedDate} day ago</p>
      <a
        href="#"
        className="text-sm flex gap-1 items-center justify-center text-gray-800 hover:text-blue-600"
      >
        {" "}
        <BookmarkIcon className="w-4 h-4" /> Save
      </a>
    </div>
  </div>
);

export default Card;
