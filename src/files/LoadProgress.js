import React from "react";
import cirularAnimation from "../animation/loading.json";
import Lottie from "lottie-react";
import "../App.css";
export default function LoadProgress() {
  return (
    <div className="circ-load">
      <Lottie animationData={cirularAnimation} />
    </div>
  );
}
