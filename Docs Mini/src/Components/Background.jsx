import React from "react";
import Nav from "./Nav";

function Background() {
  return (
    <div className=" fixed z-[3] h-screen w-full bg-zinc-900">
      <Nav />
      <div className="h-full w-full flex justify-center tracking-[-5px] leading-none items-center pb-60">
        <h1 className="font-semibold text-black text-[10vw]">Docs.</h1>
      </div>
      s
    </div>
  );
}

export default Background;
