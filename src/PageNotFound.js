import React from "react";
import notFoundAnimation from "./animation/pagenotfound.json";
import Lottie from "lottie-react";
export default function PageNotFound() {
  return (
    <div className="notFound">
      <Lottie className="not-found" animationData={notFoundAnimation} />
    </div>
  );
}
