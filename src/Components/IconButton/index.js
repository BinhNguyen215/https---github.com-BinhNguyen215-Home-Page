import React from "react";

const IconButton = ({ svg, handleClick, ...props }) => {
  return (
    <button className="icon-button" oncClick={handleClick} {...props}>
      {svg}
    </button>
  );
};

export default IconButton;