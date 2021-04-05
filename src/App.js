import React from "react";

import Users from "./components/Users";
import SearchBox from "./components/SearchBox";

import "./styles/App.css";

const App = () => {
  return (
    <main className="react-calculator">
      <SearchBox />
      <Users 
        imgSource="https://www.bootdey.com/img/Content/avatar/avatar1.png"
        name="Franklin Sanchez"
        status="status busy"/>
        <Users 
        imgSource="https://www.bootdey.com/img/Content/avatar/avatar2.png"
        name="Carol Mirabal"
        status="status offline"/>
        <Users 
        imgSource="https://www.bootdey.com/img/Content/avatar/avatar3.png"
        name="Salma PorDonde"
        status="status away"/>
        <Users 
        imgSource="https://www.bootdey.com/img/Content/avatar/avatar4.png"
        name="Porque Aja"
        status="status online"/>
    </main>
  );
};

export default App;
