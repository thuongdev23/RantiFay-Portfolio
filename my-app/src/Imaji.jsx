import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Imaji() {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-blue-200 flex relative overflow-hidden">

      {/* BACK */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-6 z-20 text-white text-2xl"
      >
        ←
      </button>
       {/* RIGHT STICKY CARD */}
      <div className="w-[320px] px-12 py-16">
        <motion.div
          layoutId="logo-card"
          className="bg-white rounded-[32px] p-6 h-full sticky top-16 flex flex-col"
        >
            <div className=" bg-white p-6 row-span-2 flex flex-col mt-auto">
            <h3 className="italic text-purple-500 font-thin">
              Cafe + Office
            </h3>
          <h2 className=" text-xl text-purple-500 mt-auto">
            Imaji
          </h2>
          </div>
        </motion.div>
      </div>

      {/* LEFT SCROLLABLE CONTENT */}
      <div className="flex-1 overflow-y-auto px-16 py-16 ml-12">
          {/* <div className="flex flex-auto"> */}
            <div className="w-[700px] h-[700px]">
            <img src="./Competition/nu-urang-1.jpg"  />
            </div>
            <div className="w-[700px] h-[700px]">
            <img src="./Competition/nu-urang-2.jpg"  />
            </div>
             <div className="w-[700px] h-[700px]">
            <img src="./Competition/nu-urang-3.jpg"  />
            </div>
             <div className="w-[700px] h-[700px]">
            <img src="./Competition/nu-urang-4.jpg"  />
            </div>
            

        </div>
    </div>
  );
}
