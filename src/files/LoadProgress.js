import * as React from "react";
import Box from "@mui/joy/Box";
import Lottie from "lottie-react";
import animationLoad from "../animation/loading.json";
export default function CircularProgressChildren() {
  return (
    <div className="circ-load">
      <Box
        sx={{ display: "flex", gap: 2, alignItems: "center", flexWrap: "wrap" }}
      >
        <Lottie animationData={animationLoad} />
      </Box>
    </div>
  );
}
