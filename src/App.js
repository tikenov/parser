import React from "react";
import "./App.css";
import data from "./data/data.json";
import schema from "./data/schema";
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <List data={data} schema={schema}></List>
    </div>
  );
}

export default App;
