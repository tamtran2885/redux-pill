import React from "react";

const MainContainer = ({ children, ...props }) => {
  return <main {...props}>{children}</main>;
};

export default MainContainer;
