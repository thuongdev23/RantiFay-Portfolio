import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Branding() {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-yellow-500 flex relative overflow-hidden">

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
          <h2 className="font-semibold text-xl text-black mt-auto">
            Branding
          </h2>
        </motion.div>
      </div>

      {/* LEFT SCROLLABLE CONTENT */}
     <div className="flex-1 overflow-y-auto px-12 py-10 relative">
        <div className="relative min-h-[200vh]">

        <div className="absolute inset-0 pointer-events-none z-0">
            <img
            src="./Branding/brand-1.png"
            className="absolute top-[1%] left-[5%] w-[200px] h-[200px]"
            />
       </div>
        <div className="absolute inset-0 pointer-events-none z-0">
            <img
            src="./Branding/brand-5.png"
            className="absolute top-[1%] left-[25%] w-[200px] h-[200px]"
            />
       </div>
        <div className="absolute inset-0 pointer-events-none z-0">
            <img
            src="./Branding/brand-7.png"
            className="absolute top-[1%] left-[50%] w-[200px] h-[200px]"
            />
       </div>
        <div className="absolute inset-0 pointer-events-none z-0">
            <img
            src="./Branding/brand-8.png"
            className="absolute top-[1%] left-[65%] w-[200px] h-[200px]"
            />
       </div>
        <div className="absolute inset-0 pointer-events-none z-0">
            <img
            src="./Branding/brand-9.png"
            className="absolute top-[20%] left-[5%] w-[200px] h-[200px]"
            />
       </div>
        <div className="absolute inset-0 pointer-events-none z-0">
            <img
            src="./Branding/brand-10.png"
            className="absolute top-[20%] left-[25%] w-[200px] h-[200px]"
            />
       </div>
        <div className="absolute inset-0 pointer-events-none z-0">
            <img
            src="./Branding/brand-11.png"
            className="absolute top-[20%] left-[35%] w-[200px] h-[200px]"
            />
       </div>
        <div className="absolute inset-0 pointer-events-none z-0">
            <img
            src="./Branding/brand-12.png"
            className="absolute top-[20%] left-[50%] w-[200px] h-[200px]"
            />
       </div>
        <div className="absolute inset-0 pointer-events-none z-0">
            <img
            src="./Branding/brand-13.png"
            className="absolute top-[40%] left-[5%] w-[200px] h-[200px]"
            />
       </div>
        <div className="absolute inset-0 pointer-events-none z-0">
            <img
            src="./Branding/brand-14.png"
            className="absolute top-[40%] left-[25%] w-[200px] h-[200px]"
            />
       </div>
        <div className="absolute inset-0 pointer-events-none z-0">
            <img
            src="./Branding/brand-15.png"
            className="absolute top-[40%] left-[45%] w-[200px] h-[200px]"
            />
       </div>

      </div> 
      {/* EXTRA CONTENT */}


        <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src="./Branding/brand-16.png"
          className="absolute top-[100%] left-[0%] w-[500px] h-[700px]"
        />
        <img
          src="./Branding/brand-17.png"
          className="absolute top-[100%] left-[50%] w-[500px] h-[700px]"
        />
                <img
          src="./Branding/brand-18.png"
          className="absolute top-[100%] left-[0%] w-[500px] h-[700px]"
        />
        <img
          src="/book-3.png"
          className="absolute top-[100%] left-[50%] w-[500px] h-[700px]"
        />
        
       </div>
        </div>
    </div>
  );
}
