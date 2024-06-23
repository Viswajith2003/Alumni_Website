import { Roller } from "react-css-spinners";
import React from "react";

export default function loading() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Roller color="rgba(6,90,253,1)" size={100} thickness={5} />
    </div>
  );
}
