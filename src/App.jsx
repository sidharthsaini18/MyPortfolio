import React from "react";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import { Analytics } from '@vercel/analytics/react';
import "./App.css";

function App() {
  return (
    <>
     <Analytics />
      <Header />
      <Sidebar />
    </>
  );
}

export default App;
