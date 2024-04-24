import React from "react"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AfroCards from "./AfroCards";
import Foods from "./components/Foods";
function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <AfroCards/>
      <Foods/>
    </div>
  );
}

export default App;
