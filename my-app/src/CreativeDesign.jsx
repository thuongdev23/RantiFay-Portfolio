import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function CreativeDesin() {
  const navigate = useNavigate();

  return (
    <div className=" bg-yellow-500 relative
                px-4 py-6
                sm:px-8 sm:py-8
                lg:px-12 lg:py-10">
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
      <div className="   grid grid-cols-1 gap-4
      sm:grid-cols-1 sm:gap-5
      lg:grid-cols-4 lg:grid-rows-4 lg:gap-6 lg:h-[calc(100vh-80px)]">

        {/* ILLUSTRATION CARD (EXPANDABLE) */}
        <motion.div
          layoutId="illustration-card"
          onClick={() => navigate("/illustration")}
          className="cursor-pointer rounded-[32px] bg-white p-6 row-span-4 flex flex-col"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
           {/* PLUS ICON */}
          <div className="absolute top-4 right-4 w-7 h-7 
                          rounded-full bg-white 
                          flex items-center justify-center 
                          text-gray-600 text-lg font-medium">
            +
          </div>
          <h2 className=" text-xl text-yellow-500 mt-auto">
            Illustration
          </h2>
        </motion.div>
        {/* CREATIVE DESIGN */}
        <div className="rounded-[32px] bg-yellow-500 row-span-2 p-6 text-white mt-auto">
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
          <h2 className=" text-xl text-yellow-500 mt-auto">
            Logo
          </h2>
        </motion.div>

        {/* BUILT DESIGN (INTERIOR) */}
          <motion.div
          layoutId="book-card"
          onClick={() => navigate("/book")}
          className="cursor-pointer rounded-[32px] bg-white p-6 row-span-4 flex flex-col"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className=" text-xl text-yellow-500 mt-auto">
            Book
          </h2>
        </motion.div>
        {/* BRANDING */}
          <motion.div
          layoutId="branding-card"
          onClick={() => navigate("/branding")}
          className=" rounded-[32px] bg-white p-6 flex flex-col
        h-[200px] sm:h-[240px] lg:h-auto
        col-span-1 sm:col-span-2 lg:col-span-2 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className=" text-xl text-yellow-500 mt-auto">
             Branding
          </h2>
        </motion.div>
      </div>
    </div>
  );
}

