import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function BuiltDesign() {
  const navigate = useNavigate();

  return (
    <div className=" bg-blue-300 px-12 py-10 relative">

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

        {/* Virtual Museum: Tan Soek Ho  */}
        <motion.div
          layoutId="sarang-salang-card"
          onClick={() => navigate("/sarang-salang")}
          className="cursor-pointer rounded-[32px] bg-white p-6 row-span-2 flex flex-col"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="font-semibold text-xl text-purple-500 mt-auto">
            WKG
          </h2>
        </motion.div>


          <motion.div
          layoutId="student-house-card"
          onClick={() => navigate("/student-house")}
          className="cursor-pointer rounded-[32px] bg-white p-6 row-span-2 col-span-2 flex flex-col"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="font-semibold text-xl text-purple-500 mt-auto">
            Ciwidey Resort
          </h2>
        </motion.div>

            {/* COMPETITION */}
          <motion.div
          layoutId="kotak-card"
          onClick={() => navigate("/kotak")}
          className="cursor-pointer rounded-[32px] bg-white p-6 row-span-2 flex flex-col"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="font-semibold text-xl text-purple-500 mt-auto">
            Imaji
          </h2>
        </motion.div>



          {/* ACADEMIC PROJECT */}
         <motion.div
          layoutId="acc-card"
          onClick={() => navigate("/")}
          className="rounded-[32px] font-semibold text-xl bg-white row-span-2 col-span-2 p-6 text-black flex flex-col"          
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
        <h2 className="font-semibold text-xl text-purple-500 mt-auto">
            Wisata Pasir Gibug Brebes        </h2>
         
        </motion.div>
      
          {/* ACADEMIC PROJECT */}
         <motion.div
          layoutId="a-card"
          onClick={() => navigate("/academic")}
          className="rounded-[32px] font-semibold text-xl bg-gray-200 row-span-2 p-6 text-black flex flex-col"          
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
  
        <h2 className="font-semibold text-xl text-purple-500 mt-auto">
            Built Design
        </h2>
          
        </motion.div>

          {/* ACADEMIC PROJECT */}
         <motion.div
          layoutId="a-card"
          onClick={() => navigate("/academic")}
          className="rounded-[32px] font-semibold text-xl bg-white row-span-2 p-6 text-black flex flex-col"          
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
        <h2 className="font-semibold text-xl text-purple-500 mt-auto">
            Klinik Bening
        </h2>    
        </motion.div>
      </div>    
    </div>
  );
}

