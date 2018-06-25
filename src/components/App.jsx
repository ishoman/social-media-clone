import React from "react";
import Nav from "./Nav";
import IdBox from "./IdBox";
import BioBox from "./BioBox";
import Feed from "./Feed";
import Contacts from "./Contacts";

const globalStyles = {
  listStyle: 'none'
}

function App() {
  const appStyles = {
    display: "flex",
    flexDirection: 'column'
  }

  const makeColumn = {
    display: 'flex',
  }

  const columnStyles = {
    display: "flex",
    flexDirection: 'column',
    width: "33%"
  }

  return (
    <div style={appStyles}>
      <div>
        <Nav/>
      </div>
      <div style = {makeColumn}>
        <div style={columnStyles}>
          <IdBox/>
          <BioBox/>
        </div>
        <div style={columnStyles}>
          <Feed/>
        </div>
        <div style={columnStyles}>
          <Contacts/>
        </div>
      </div>
    </div>
  );
}

export {globalStyles};
export default App;
