import React from "react";
import { LuDownload } from "react-icons/lu";
import { FaRegFileAlt } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { motion } from "framer-motion"

function Card({data,reference}) {
  return (
    <motion.div drag dragConstraints={reference} dragElastic={0.2} dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }} whileDrag={{scale: 1.1}} className="w-60 h-72 lg:h-72 sm:h-screen bg-zinc-700/40 rounded-[35px] px-6 py-6 text-white overflow-hidden relative"
    >
      <FaRegFileAlt />
      <p className="mt-8 font-normal leading-none text-sm ">{data.name}</p>
      <div className="footer w-full absolute bottom-0 left-0">
        <div className=" mb-4 px-6 flex items-center justify-between">
          <h1 className="">{data.size}</h1>
          <span className="h-6 w-6 font-bold text-xs rounded-full flex items-center justify-center bg-zinc-300 text-black">
            {data.download ? <LuDownload /> : <ImCross />}
          </span>
        </div>
        {data.tags.tag ? (
          <div
            className={`w-full ${
              data.Status ? "bg-green-500" : "bg-blue-500"
            } px-6 py-3 flex justify-center items-center`}
          >
            <h1 className="text-md font-semibold">
              {data.tags.downloadStatus ? "Download Now" : "Downloading.."}
            </h1>
          </div>
        ) : null}
      </div>
    </motion.div>
  );
}

export default Card;
