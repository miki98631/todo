import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './components/styles/App.scss';
import Home from "./home";
import Content from "./content";

const App = () => {
  return (
   <>
       <BrowserRouter>
           <Routes>
               <Route path="/" Component={Home} />
               <Route path="/contents" Component={Content} />
           </Routes>
       </BrowserRouter>
   </>
  );
}

export default App;
