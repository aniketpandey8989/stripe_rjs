import React from "react";

function Loader() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        minHeight: "100vh",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.7)",
      }}
      className="d-flex justify-content-center align-items-center"
    >
    </div>
  );
}

export default Loader;
