import { BrowserRouter } from "react-router-dom";
import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import "font-awesome/css/font-awesome.min.css";
import AnimatedRoutes from "./components/AnimatedRoutes/AnimatedRoutes.jsx";
import { TweenMax, Expo } from "gsap";

function App() {
  useEffect(() => {
    setTimeout(() => {
      TweenMax.to(".overlay h1", 1.5, {
        opacity: 1,
        x: 0,
        ease: Expo.easeOut,
      });
      TweenMax.to(".overlay", 0.8, {
        opacity: 0,
        right: "0",
        ease: Expo.easeOut,
      });
    }, 1200);
  }, []);
  return (
    <BrowserRouter>
      <div class="overlay">
        <h1 className="bold-text text-9xl]">JC.</h1>
      </div>
      <Navbar />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
