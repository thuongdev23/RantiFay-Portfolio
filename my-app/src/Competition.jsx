import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Competition() {
  const navigate = useNavigate();

  return (
    <div className=" bg-gray-200 px-12 py-10 relative">

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
      <div className="grid grid-cols-4 grid-rows-4 gap-6 h-[calc(100vh-80px)]">

        {/* SARANG SALANG  */}
        <motion.div
          layoutId="sarang-salang-card"
          onClick={() => navigate("/sarang")}
          className="cursor-pointer rounded-[32px] bg-white p-6 row-span-2 col-span-2 flex flex-col"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="font-semibold text-xl text-black mt-auto">
            Sarang Salang
          </h2>
        </motion.div>

        {/* COMPETITION */}
          <motion.div
          layoutId="student-house-card"
          onClick={() => navigate("/student-house")}
          className="cursor-pointer rounded-[32px] bg-gray-200 p-6 row-span-2 flex flex-col"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="font-semibold text-xl text-black mt-auto">
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
          <h2 className="font-semibold text-xl text-black mt-auto">
            Kotak
          </h2>
        </motion.div>



          {/* LA VIE EN GREEN  */}
         <motion.div
          layoutId="la-vie-en-green-card"
          onClick={() => navigate("/lavie-en-green")}
          className="rounded-[32px] font-semibold text-xl bg-white row-span-2 p-6 text-black flex flex-col"          
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
        <h2 className="font-semibold text-xl text-black mt-auto">
            La Vie En Green
        </h2>
         
        </motion.div>
      
          {/* NU URANG */}
         <motion.div
          layoutId="nu-urang-card"
          onClick={() => navigate("/nu-urang")}
          className="rounded-[32px] font-semibold text-xl bg-white row-span-2 col-span-2 p-6 text-black flex flex-col"          
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
        <h2 className="font-semibold text-xl text-black mt-auto">
            Nu Urang
        </h2>
        </motion.div>
      </div>
    </div>
  );
}

