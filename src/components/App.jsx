import React from "react";
import Entry from "./Entry.jsx";

//1.Create Entry Component to replace the hardcoded the data
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
        <Entry
          emoji="💪"
          name="Tense Biceps"
          description="“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
        />
      </dl>
    </div>
  );
}

export default App;
