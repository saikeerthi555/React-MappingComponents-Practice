import React from "react";
import Entry from "./Entry.jsx";
import emojipedia from "../emojipedia.js";

//1.Create Entry Component to replace the hardcoded the data
//2.Create Props to replace hardcoded data

//3a. import the emojipedia const.
console.log(emojipedia);

//3b. map through the emojipedia array and render Entry components
function createEntry(emojiTerm) {
  return (
    <Entry
      id={emojiTerm.id}
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      description={emojiTerm.meaning}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
