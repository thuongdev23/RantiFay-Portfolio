import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white px-12 py-10">
      <div className="grid grid-cols-4 grid-rows-4 gap-6 h-[calc(100vh-80px)]">
        {/* ABOUT ME CARD (EXPANDABLE) */}
        <motion.div
          layoutId="about-card"
          onClick={() => navigate("/about")}
          className="cursor-pointer rounded-[32px] bg-gray-200 p-6"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="font-semibold text-xl">Ranti FAY</h2>
          <p className="italic text-gray-600">
            Know more<br />about me
          </p>
        </motion.div>
        {/* CREATIVE DESIGN */}
        <motion.div
          layoutId="creative-card"
          onClick={() => navigate("/creative")}
          className="rounded-[32px] bg-yellow-400 row-span-2 p-6 text-white"          
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          Creative<br />Design
        </motion.div>
        {/* COMPETITION */}
          <motion.div
          layoutId="competition-card"
          onClick={() => navigate("/competition")}
          className="rounded-[32px] bg-gray-200 row-span-2 p-6 text-black"          
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          Competition
        </motion.div>
        {/* BUILT DESIGN (INTERIOR) */}
          <motion.div
          layoutId="design-inter-card"
          onClick={() => navigate("/built-design-inter")}
          className="rounded-[32px] bg-red-500 row-span-1 p-6 text-white"          
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
           Built Design<br />(Interior)
        </motion.div>
        {/* CONNECT WITH ME */}
        <div className="rounded-[32px] bg-pink-600 row-span-3 p-6 text-white flex flex-col justify-between">
          <div>
            ✈
            <h2 className="text-2xl mt-6">
              CONNECT<br />WITH ME
            </h2>
          </div>
          <div className="w-10 h-10 border border-white rounded-full flex items-center justify-center">
            <a href="https://www.linkedin.com/in/ranti-fay-5585b6219/" target="_blank">
            →
            </a>
          </div>
        </div>
             {/* DOWNLOAD CV */}
        <div className="rounded-[32px] row-span-3 overflow-hidden relative">
          <img
            src="/img-1.jpeg"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-end p-6">
            <span className="text-white">Download<br />My CV</span>
          </div>
        </div>
         {/* ACADEMIC PROJECT */}
         <motion.div
          layoutId="academic-card"
          onClick={() => navigate("/academic")}
          className="rounded-[32px] bg-gray-200 row-span-2 p-6 text-black"          
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          Academic<br />Project
        </motion.div>
          {/* BUILT DESIGN */}
        <motion.div
          layoutId="built-design-card"
          onClick={() => navigate("/built-design")}
          className="rounded-[32px] bg-blue-300 row-span-2 p-6 text-white"          
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          Build Design
        </motion.div>
      </div>
    </div>
  );
}

