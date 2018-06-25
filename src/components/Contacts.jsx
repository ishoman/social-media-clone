import React from "react";
import UserList from "./UserList";
import ContactsHeader from "./ContactsHeader";

function Contacts(){
  return (
    <div>
      <ContactsHeader/>
      <UserList/>
    </div>
  )
}

export default Contacts;
