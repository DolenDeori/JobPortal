import React from "react";

const getBgVarientStyle = (varient) => {
  switch (varient) {
    case "primary":
      return "bg-blue-200 text-blue-800 hover:bg-blue-600 hover:text-white";
    case "secondary":
      return "bg-fuchsia-200 text-fuchsia-800 hover:bg-fuchsia-600 hover:text-white";
    default:
      return "bg-white text-black hover:text-white hover:bg-black";
  }
};

export const CustomButton = ({
  title,
  onCLick,
  bgVarient,
  className,
  ...props
}) => {
  return (
    <button
      className={`px-4 py-2 font-HostGroteskMedium rounded duration-150 hover:shadow-lg text-sm ${getBgVarientStyle(
        bgVarient
      )} ${className}`}
      onClick={onCLick}
      {...props}
    >
      {title}
    </button>
  );
};
