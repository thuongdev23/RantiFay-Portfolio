import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function LavieGreen() {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-gray-200 flex relative overflow-hidden">

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
          layoutId="la-vie-en-green-card"
          className="bg-white rounded-[32px] p-6 h-full sticky top-16 flex flex-col"
        >
            <div className=" flex flex-col mt-auto">
          <h3 className="text-gray-300 text-xl mt-auto font-thin italic">
            UMS Interior Competition
          </h3>
           <h3 className="text-gray-300 text-xl mt-auto font-thin italic">
            Favorite Winner 
          </h3>
          <h2 className=" text-xl text-gray-300 mt-auto">
            La Vie en green
          </h2>
          </div>
        </motion.div>
      </div>

      {/* LEFT SCROLLABLE CONTENT */}
      <div className="flex-1 overflow-y-auto px-16 py-16 ml-12">
        

          {/* <div className="flex flex-auto"> */}
            <div className="w-[700px] h-[700px]">
            <img src="./Competition/lavie-en-green-1.jpg"  />
            </div>
            <div className="w-[700px] h-[700px]">
            <img src="./Competition/lavie-en-green-2.jpg"  />
            </div>
             <div className="w-[700px] h-[700px]">
            <img src="./Competition/lavie-en-green-2.jpg"  />
            </div>
            

        </div>
    </div>
  );
}
