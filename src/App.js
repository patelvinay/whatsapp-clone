import React from "react";

import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";

function App() {
  //BEM naming convention
  return (
    <div className="App">
      <div className="app__body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
