import React from "react";
import Nav from "./Nav";
import IdBox from "./IdBox";
import BioBox from "./BioBox";
import Feed from "./Feed";
import Contacts from "./Contacts";

function App(){
  return (
    <div>
      <Nav/>
      <IdBox/>
      <BioBox/>
      <Feed/>
      <Contacts/>
    </div>
  );
}

export default App;
