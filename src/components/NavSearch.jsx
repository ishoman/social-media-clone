import React from "react";


function NavSearch(){
  const navSearchStyles = {
    display: 'inherit',
    width: '25%',
    alignItems: 'center',
    justifyContent: 'space-around',
    listStyle: 'none'
  }

  return(
    <ul style={navSearchStyles}>
      <li><input type="text" placeholder="Search"></input></li>
      <li><button>Tweet</button></li>
    </ul>
  );
}

export default NavSearch;
