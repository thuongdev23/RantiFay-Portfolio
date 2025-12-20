import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";


export default function Illustration() {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-yellow-500 flex relative overflow-hidden">

      {/* BACK ARROW */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 z-20 text-white text-2xl"
      >
        ←
      </button>

      {/* LEFT FIXED CARD */}
      <div className="w-[360px] px-12 py-10">
        <motion.div
          layoutId="illustration-card"
          className="rounded-[32px] bg-white p-6 h-full flex flex-col sticky top-10"
        >
         

          <h2 className="font-semibold text-xl text-yellow-500 mt-auto">
            Illustration
          </h2>
        </motion.div>
      </div>

      {/* RIGHT SCROLLABLE CONTENT */}
      <div className="flex-1 overflow-y-auto px-12 py-10 relative">
        <div className="relative min-h-[200vh]">

             <div className="absolute inset-0 pointer-events-none z-0">
                <img
          src="/illus-1.png"
          className="absolute top-[-1%] left-[-5%] w-[500px] h-[500px]"
        />
        <img
          src="/illus-2.png"
          className="absolute top-[10%] left-[35%] w-[600px] h-[650px]"
        />
        <div className="absolute inset-0 pointer-events-none z-0 top-[39%]">
        <h4 className="text-sm text-gray-500">2025</h4>
        <h1 className="text-2xl font-medium">Ne.Bac</h1>
        <h1 className="text-2xl font-medium">Character Design</h1>
       </div>
      </div> 
      {/* EXTRA CONTENT */}


        <div className="absolute inset-0 pointer-events-none z-0">
                <img
          src="/illus-3.png"
          className="absolute top-[50%] left-[0%] w-[400px] h-[600px]"
        />
        <img
          src="/illus-4.png"
          className="absolute top-[50%] left-[50%] w-[400px] h-[600px]"
        />
          <div className="absolute inset-0 pointer-events-none z-0 top-[89%]">
        <h4 className="text-sm text-gray-500">2025</h4>
        <h1 className="text-2xl font-medium">Ne.Bac</h1>
        <h1 className="text-2xl font-medium">KeyChain Design</h1>
       </div>
      </div> 
       {/* EXTRA CONTENT */}
        <div className="absolute inset-0 pointer-events-none z-0">
                <img
          src="/illus-5.png"
          className="absolute top-[97%] left-[0%] w-[400px] h-[600px]"
        />
        <img
          src="/illus-6.png"
          className="absolute top-[97%] left-[50%] w-[400px] h-[600px]"
        />
          <div className="absolute inset-0 pointer-events-none z-0 top-[140%]">
        <h4 className="text-sm text-gray-500">2025</h4>
        <h1 className="text-2xl font-medium">Ne.Bac</h1>
        <h1 className="text-2xl font-medium">CustomArt Design</h1>
       </div>
       
      </div> 
        </div>
      </div>

     </div>
  );
}
