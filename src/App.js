import React from "react";
import './components/css/App.css';
import Sidebar from "./components/sidebar";
import Task from "./components/task";

const App = () => {
  return (
    <div className="App">
        <Task />
        <Sidebar />
    </div>
  );
}

export default App;
