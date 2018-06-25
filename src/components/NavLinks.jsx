import React from "react";


function NavLinks(){
  const navLinkStyles = {
    display: 'inherit',
    width: '25%',
    alignItems: 'center',
    justifyContent: 'space-around',
    listStyle: 'none'
  }

  return(
    <ul style={navLinkStyles}>
      <li><a src="">Home</a></li>
      <li>Notifications</li>
      <li>Messages</li>
    </ul>
  );
}

export default NavLinks;
