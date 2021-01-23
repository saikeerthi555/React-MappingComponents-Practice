import React from "react";
import Entry from "./Entry.jsx";

//1.Create Entry Component
//2.Create Props to replace hardcoded data
//3a. import the emojipedia const.
//3b. map through the emojipedia array and render Entry components

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        <Entry />
        <Entry />
        <Entry />
      </dl>
    </div>
  );
}

export default App;
