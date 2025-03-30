"use client";
import React from "react";
import "./globals.css";
import { Canvas } from "@react-three/fiber";
import {
  CameraControls,
  Environment,
  OrbitControls,
  ScrollControls,
} from "@react-three/drei";
import MacComponent from "./MacModel/page";

function page() {
  return (
    <div className="w-full h-screen bg-zinc-950">
      <div className="absolute flex items-center flex-col text-white top-32 left-1/2 -translate-x-1/2">
        <p className="text-center text-6xl font-extralight leading-none">
          MACBOOK PRO
        </p>
        <p className="text-sm font-extralight tracking-widest">
          Built for Apple Intelligence. Personal, private, powerful!
        </p>
      </div>
      <nav className="flex items-center justify-center absolute left-1/2 -translate-x-[50%] gap-5 p-5">
      {['\uF8FF', 'Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'Vision', 'Airpods'].map((item, index) => (
        <p className="hover:text-zinc-400 text-white p-2 text-sm cursor-pointer transition-colors duration-300" key={index}>{item}</p>
      ))}
      </nav>
      <div className="absolute left-1/2  top-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%]">
        <p className="  text-center font-thin text-white text-[4vw] mt-10">
          Next-level graphics performance. Game on.
        </p>
      </div>
      <Canvas camera={{ fov: 15, position: [0, -10, 250] }}>
        {/* <OrbitControls /> */}
        <Environment files={"/hdri.hdr"} />
        <ScrollControls pages={3} className='overflow-hidden'>
          <MacComponent />
        </ScrollControls>
      </Canvas>
    </div>
  );
}

export default page;
