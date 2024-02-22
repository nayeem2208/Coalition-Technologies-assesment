import React from "react";

function ThirdHeader() {
  return (
    <div style={{ position: "relative" }} className="py-8 lg:py-0">
      <h1
        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold opacity-50 tracking-tightest mt-16"
        style={{ position: "absolute", zIndex: 4,  top: '50%',
        left: "27%",
        transform: "translate(-50%, -50%)" }}
      >
        02.
      </h1>
      <h1
        className="text-xl md:text-2xl lg:text-3xl font-bold text-indigo-950 tracking-tightest mt-16 ml-4 md:ml-0"
        style={{ position: "absolute", zIndex: 4,
        left: "35%",transform: "translate(-50%, -50%)"  }}
      >
        ClIMB
      </h1>
      <p
        style={{ position: "absolute", zIndex: 4, left: "60%",transform: "translate(-50%, -50%)"}}
        className="text-xs lg:text-sm ml-6 md:ml-0 mt-16 "
      >
        Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida
        quis hendrerit ac,<br/> tristique ut quam. Vivamus suscipit dignissim tortor
        nec congue.
      </p>
    </div>
  );
}

export default ThirdHeader;