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

  const idColumnStyles = {
    display: "flex",
    flexDirection: 'column',
    width: "25%"
  }
  const feedColumnStyles = {
    display: "flex",
    flexDirection: 'column',
    width: "50%"
  }
  const contactColumnStyles = {
    display: "flex",
    flexDirection: 'column',
    width: "25%"
  }

  return (
    <div style={appStyles}>
      <div>
        <Nav/>
      </div>
      <div style = {makeColumn}>
        <div style={idColumnStyles}>
          <IdBox/>
          <BioBox/>
        </div>
        <div style={feedColumnStyles}>
          <Feed/>
        </div>
        <div style={contactColumnStyles}>
          <Contacts/>
        </div>
      </div>
    </div>
  );
}

export {globalStyles};
export default App;
