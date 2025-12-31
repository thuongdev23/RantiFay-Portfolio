import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Competition() {
  const navigate = useNavigate();

  return (
    <div className=" bg-gray-200 relative px-4 py-6 sm:px-8 sm:py-8 lg:px-12 lg:py-10">
      {/* BACK ARROW */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-1 left-4 z-10 flex items-center gap-3 text-white hover:opacity-100"
      >
        <span className="w-11 h-11  flex items-center justify-center">
          ←
        </span>
     
      </button>
      {/* GRID */}
      <div className="grid grid-cols-1 gap-4
                      sm:grid-cols-2 sm:gap-5
                      lg:grid-cols-4 lg:grid-rows-4 lg:gap-6 lg:h-[calc(100vh-80px)]">
        {/* SARANG SALANG  */}
        <motion.div
          layoutId="sarang-salang-card"
          onClick={() => navigate("/sarang")}
          className="cursor-pointer rounded-[32px] bg-white p-6 row-span-2 col-span-2 flex flex-col"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <div className=" flex flex-col mt-auto">
          <h3 className="text-gray-400 text-xl mt-auto font-thin italic">
            UMS Archi Competition
            Favorite Winner 
          </h3>
           <h3 className="text-gray-400 text-xl mt-auto font-thin italic">
            Favorite Winner 
          </h3>
          <h2 className=" text-xl text-gray-500 mt-auto">
            Sarang Salang
          </h2>
          </div>
        </motion.div>
        {/* COMPETITION */}
          <motion.div
          layoutId="competition-card"
          onClick={() => navigate("/competition")}
          className="cursor-pointer rounded-[32px] bg-gray-200 p-6 row-span-2 flex flex-col"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className=" text-xl text-gray-500 mt-auto">
            Competition
          </h2>
        </motion.div>
            {/* KODAK */}
          <motion.div
          layoutId="kotak-card"
          onClick={() => navigate("/kotak")}
          className="cursor-pointer rounded-[32px] bg-white p-6 row-span-4 flex flex-col"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
            <div className=" flex flex-col mt-auto">
          <h3 className="text-gray-400 text-xl mt-auto font-thin italic">
            UPI Architecture Competition
          </h3>
           <h3 className="text-gray-400 text-xl mt-auto font-thin italic">
            4th Winner 
          </h3>
          <h2 className=" text-xl text-gray-500 mt-auto">
            Kotak-Kotak
          </h2>
          </div>
        </motion.div>
          {/* LA VIE EN GREEN  */}
         <motion.div
          layoutId="la-vie-en-green-card"
          onClick={() => navigate("/lavie-en-green")}
          className="rounded-[32px]  text-xl bg-white row-span-2 p-6 text-black flex flex-col"          
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
         <div className=" flex flex-col mt-auto">
          <h3 className="text-gray-400 text-xl mt-auto font-thin italic">
            UMS Interior Competition
          
          </h3>
           <h3 className="text-gray-400 text-xl mt-auto font-thin italic">
            Favorite Winner 
          </h3>
          <h2 className=" text-xl text-gray-500 mt-auto">
            La Vie en green
          </h2>
          </div>
        </motion.div>
      
          {/* NU URANG */}
         <motion.div
          layoutId="nu-urang-card"
          onClick={() => navigate("/nu-urang")}
          className="rounded-[32px]  text-xl bg-white row-span-2 col-span-2 p-6 text-black flex flex-col"          
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <div className=" flex flex-col mt-auto">
          <h3 className="text-gray-400 text-xl mt-auto font-thin italic">
            West Java Governmen Competition
          </h3>
           <h3 className="text-gray-400 text-xl mt-auto font-thin italic">
            Audience Favorite
          </h3>
          <h2 className=" text-xl text-gray-500 mt-auto">
            Nu Urang
          </h2>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

