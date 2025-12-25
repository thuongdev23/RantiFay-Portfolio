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
          <div className=" bg-white p-6 row-span-2 flex flex-col mt-auto">
            {/* <p className="text-purple-500 font-thin mb-72 italic">A cafe located in Indramayu. The idea was to combine the magnificent landscape with a traditional buildings and a chic interior design.</p> */}
            {/* <h3 className="italic text-purple-500 font-thin">
              Cafe + Restauran
            </h3> */}
          <h2 className=" text-xl text-yellow-500 mt-auto">
            Branding
          </h2>
          </div>
        </motion.div>
      </div>
      
      {/* LEFT SCROLLABLE CONTENT */}
    {/* LEFT SCROLLABLE CONTENT */}
<div className="flex-1 overflow-y-auto px-12 py-10">
  <div className="max-w-[1400px] mx-auto space-y-24">

    {/* ===== TOP ASSETS GRID ===== */}
    <div className="grid grid-cols-4 gap-8">
      <img src="./Branding/brand-1.png" className="asset" />
      <img src="./Branding/brand-5.png" className="asset" />
      <img src="./Branding/brand-7.png" className="asset" />
      <img src="./Branding/brand-8.png" className="asset" />

      <img src="./Branding/brand-9.png" className="asset" />
      <img src="./Branding/brand-10.png" className="asset" />
      <img src="./Branding/brand-11.png" className="asset" />
      <img src="./Branding/brand-12.png" className="asset" />

      <img src="./Branding/brand-13.png" className="asset" />
      <img src="./Branding/brand-14.png" className="asset" />
      <img src="./Branding/brand-15.png" className="asset" />
    </div>

    {/* ===== FEATURED BRANDING CARD ===== */}
  
    {/* ===== BOTTOM LARGE IMAGES ===== */}
    <div className="grid grid-cols-2 gap-12">
      <img src="./Branding/brand-16.png" className="large-img" />
      <img src="./Branding/brand-17.png" className="large-img" />
    </div>

  </div>
</div>

    </div>
  );
}
