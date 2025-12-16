import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Book() {
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
            Book
          </h2>
        </motion.div>
      </div>

      {/* LEFT SCROLLABLE CONTENT */}
     <div className="flex-1 overflow-y-auto px-12 py-10 relative">
        <div className="relative min-h-[200vh]">

             <div className="absolute inset-0 pointer-events-none z-0">
                <img
          src="/book-1.png"
          className="absolute top-[1%] left-[5%] w-[910px] h-[700px]"
        />
   
     
       </div>
      </div> 
      {/* EXTRA CONTENT */}


        <div className="absolute inset-0 pointer-events-none z-0">
                <img
          src="/book-2.png"
          className="absolute top-[100%] left-[0%] w-[500px] h-[700px]"
        />
        <img
          src="/book-3.png"
          className="absolute top-[100%] left-[50%] w-[500px] h-[700px]"
        />
        
       
      </div> 
      </div>




      {/* <div className="flex-1 overflow-y-auto px-16 py-16 ml-12"> */}
        {/* <div className="max-w-xl">

          <h4 className="text-sm">2025</h4>
          <h1 className="text-3xl font-semibold mt-2">Logo</h1>

          <p className="mt-4 italic">
            Logo design for Indonesian Student Organization in Türkiye
          </p>

          <img src="./Logo/logos-01.png" className="mt-10 w-[220px]" />

          <p className="mt-6 font-medium">M+N</p>

          <div className="flex gap-3 mt-6">
            <div className="w-6 h-6 bg-red-700 rounded" />
            <div className="w-6 h-6 bg-red-500 rounded" />
            <div className="w-6 h-6 bg-black rounded" />
          </div>

          <p className="mt-4 text-sm italic">
            Red and Black as Main Color<br />
            Different Department = Different Color
          </p> */}
{/* 
          <div className="flex "> */}
            {/* <div className="w-[910px] h-[700px]">
            <img src="/book-1.png"  />
            </div>

        <div className="grid grid-cols-2">
            <div className="w-[400px] h-[700px] col-span-1">
            <img src="/book-2.png"  />
            </div>

              <div className="w-[400px] h-[700px] col-span-2">
            <img src="/book-3.png"  />
            </div>
        </div> */}
             {/* <div className="w-[200px] h-[200px]">
            <img src="./Logo/logos-05.png"  />
            </div>
             <div className="w-[200px] h-[200px]">
            <img src="./Logo/logos-06.png"  />
            </div>
             <div className="w-[200px] h-[200px]">
            <img src="./Logo/logos-07.png"  />
            </div>
             <div className="w-[200px] h-[200px]">
            <img src="./Logo/logos-08.png"  />
            </div>
             <div className="w-[200px] h-[200px]">
            <img src="./Logo/logos-09.png"  />
            </div>
          </div> */}

        {/* </div> */}

{/* 
      </div> */}

     

    </div>
  );
}
