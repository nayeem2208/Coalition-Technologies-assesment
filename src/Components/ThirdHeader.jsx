import React from "react";

function ThirdHeader() {
  return (
    <div style={{ position: "relative" }}>
      <h1
        className="text-8xl font-bold opacity-50 tracking-tightest"
        style={{ position: "absolute", zIndex: 4, top: 25, left: 300 }}
      >
        02.
      </h1>
      <h1
        className="text-3xl font-bold text-indigo-950 tracking-tightest "
        style={{ position: "absolute", zIndex: 4, top: 62, left: 400 }}
      >
        ClIMB
      </h1>
      <p
        style={{ position: "absolute", zIndex: 4, top: 45, left: 520 }}
        className="text-sm"
      >
        Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida
        quis hendrerit ac,<br/> tristique ut quam. Vivamus suscipit dignissim tortor
        nec congue.
      </p>
    </div>
  );
}

export default ThirdHeader;
