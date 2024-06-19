import React from "react";

const Heading = ({name=Components}) => {
  return (
    <div>
      <span className="flex items-center">
        <span className="h-px flex-1 bg-black"></span>
        <span className="shrink-0 px-6">{name}</span>
        <span className="h-px flex-1 bg-black"></span>
      </span>
    </div>
  );
};

export default Heading;
