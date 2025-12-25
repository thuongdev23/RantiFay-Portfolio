import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function PlannerOffice() {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-red-500 flex relative overflow-hidden">

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
          layoutId="planner-office-card"
          className="bg-white rounded-[32px] p-6 h-full sticky top-16 flex flex-col"
        >
          <p className="text-red-500 font-thin mb-72 italic">An interior design for a mixed building for office and for a dwelling space. The aim is to design a place that is luxurious yet without it being overdone. </p>
          <h2 className="font-semibold text-xl text-red-500 mt-auto">
            C-Planner Office 
          </h2>
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
