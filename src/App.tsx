import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./Routs";
import Navbar from "./components/Navbar/Navbar";

import { ProviderComponent as Provide } from "./ContextAPI";

export default function App() {
  return (
    <div className='web-app ltr'>
      <Provide>
        <Router>
          <Navbar />
          <Routes />
        </Router>
      </Provide>
    </div>
  );
}
