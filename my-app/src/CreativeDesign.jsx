

// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";

// export default function CreativeDesin() {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen bg-yellow-500 px-12 py-10">
//       <div className="grid grid-cols-4 grid-rows-4 gap-6 h-[calc(100vh-80px)]">

//         {/* ILLUSTRATION CARD (EXPANDABLE) */}
//         <motion.div
//           layoutId="illustration-card"
//           onClick={() => navigate("/illustration")}
//           className="cursor-pointer rounded-[32px] bg-white p-6 row-span-4"
//           whileHover={{ scale: 1.05 }}
//           transition={{ duration: 0.4 }}
//         >
//           <h2 className="font-semibold text-xl text-yellow-500 ">Illustration</h2>
        
//         </motion.div>

//         {/* CREATIVE DESIGN */}
//         <div className="rounded-[32px] bg-yellow-500 row-span-2 p-6 text-white">
//           Creative<br />Design
//         </div>

//         {/* COMPETITION */}
//         <div className="rounded-[32px] bg-white p-6 row-span-2 text-yellow-500">
//           Logo
//         </div>

//         {/* BUILT DESIGN (INTERIOR) */}
//         <div className="rounded-[32px] bg-white p-6 text-yellow-500 row-span-4">
//           Built Design<br />(Interior)
//         </div>

     
       
  
      
//         {/* BUILT DESIGN */}
//         <div className="rounded-[32px] bg-white p-6 text-yellow-500 row-span-2 col-span-2">
//           Branding
//         </div>
      

//       </div>
//     </div>
//   );
// }


import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function CreativeDesin() {
  const navigate = useNavigate();

  return (
    <div className=" bg-yellow-500 px-12 py-10 relative">

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

        {/* ILLUSTRATION CARD (EXPANDABLE) */}
        <motion.div
          layoutId="illustration-card"
          onClick={() => navigate("/illustration")}
          className="cursor-pointer rounded-[32px] bg-white p-6 row-span-4 flex flex-col"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="font-semibold text-xl text-yellow-500 mt-auto">
            Illustration
          </h2>
        </motion.div>

        {/* CREATIVE DESIGN */}
        <div className="rounded-[32px] bg-yellow-500 row-span-2 p-6 text-white">
          Creative<br />Design
        </div>

        {/* LOGO */}
          <motion.div
          layoutId="logo-card"
          onClick={() => navigate("/logo")}
          className="cursor-pointer rounded-[32px] bg-white p-6 row-span-2 flex flex-col"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="font-semibold text-xl text-yellow-500 mt-auto">
            Logo
          </h2>
        </motion.div>

        {/* BUILT DESIGN (INTERIOR) */}
        <div className="rounded-[32px] bg-white p-6 text-yellow-500 row-span-4">
          Built Design<br />(Interior)
        </div>

        {/* BRANDING */}
        <div className="rounded-[32px] bg-white p-6 text-yellow-500 row-span-2 col-span-2">
          Branding
        </div>

      </div>
      
    </div>


   
    
  );
}

