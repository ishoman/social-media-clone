import React from "react";
import NavLinks from "./NavLinks";
import NavSearch from "./NavSearch";

function Nav(props){
  const navStyles = {
    display: 'flex',
    paddingRight: "15px",
    justifyContent: 'space-between',
  }

  return (
    <div style={navStyles}>
      <NavLinks/>
      <NavSearch/>
    </div>
  );
}

export default Nav;
