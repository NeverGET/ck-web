import React from "react";

const primary = "bg-primary-500 text-dark-white hover:bg-primary-700 active:bg-primary-800 transition-colors rounded-2xl border border-solid border-transparent flex items-center justify-center gap-2 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5";
const secondary = "bg-transparent text-dark-white hover:bg-secondary-500 active:bg-secondary-600 transition-colors rounded-2xl border border-solid border-secondary-500 hover:border-secondary-600 flex items-center justify-center gap-2 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5";

function getButtonStyle(btStyle) {
  switch (btStyle) {
    case "primary":
      return primary;
    case "secondary":
      return secondary;
    case "green":
      return "green";
    case "red":
      return "red";
    default:
      return primary;
  }
}

export default function Button({btStyle = "primary", children, ...props}) {
  return (
  <button {...props} className={getButtonStyle(btStyle)}>
    {children}
  </button>);
}
