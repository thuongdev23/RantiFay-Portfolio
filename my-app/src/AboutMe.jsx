import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function AboutMe() {
  const navigate = useNavigate();

  return (
    // <motion.div
    //   layoutId="about-card"
    //   className="min-h-screen bg-white px-16 py-12"
    // >
    //   <div className="grid grid-cols-12 gap-12 h-full">
    <motion.div className="min-h-screen bg-white px-16 py-12 flex justify-center">
  <div className="grid grid-cols-12 gap-12 h-full w-full max-w-7xl">

        {/* LEFT CONTENT */}
       <div className="col-span-8 flex flex-col justify-between">

  {/* CENTERED TEXT BLOCK */}
  <div className="mx-auto w-full max-w-xl">
    <h1 className="text-3xl font-semibold mb-8">
      Hi, I’m Ranti Fay!
    </h1>

    <div className="space-y-6 text-gray-700 leading-[1.7]">
      <p>
        I’m passionate about digital spaces, technologies in architecture,
        psychological design, and sustainability. I’m also a certified
        barista who is into coffee, education, and learning languages.
      </p>

      <p>
        I currently juggling several works at SMMR Studio (Architect),
        Kodland Türkiye (Teaching & Learning Assistant), and ADA Resources
        NY (Real-estate Appraisal).
      </p>

      <p>
        Language lover: Indonesian, English, Turkish, Thai, Japanese.
      </p>

      <p className="italic">
        Care to talk with any of these languages with a glass of coffee?
      </p>
    </div>

    {/* CONNECT */}
    <button   className="mt-10 inline-flex items-center gap-3 text-blue-400 hover:opacity-80">
      <span className="w-6 h-6 rounded-full bg-blue-400 text-white flex items-center justify-center">
        +
      </span>
      CONNECT WITH ME
    </button>
  </div>

  {/* BOTTOM NAV */}
  <div onClick={() => navigate(-1)} className="mx-auto w-full max-w-xl flex items-center justify-between text-gray-400 mt-16">
    <button className="flex items-center gap-3 hover:text-gray-600">
      <span className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center">
        ←
      </span>
      <span className="text-sm">Go Back</span>
    </button>

    <div className="flex items-center gap-3 hover:text-gray-600 cursor-pointer">
      <span className="text-sm">Creative Design</span>
      <span className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center">
        →
      </span>
    </div>
  </div>

</div>


        {/* RIGHT IMAGES */}
        <div className="col-span-2 flex flex-col gap-6">

          <FramedImage src="/img-1.jpg" />
          <FramedImage src="/img-2.jpg" />
          <FramedImage src="/img-3.jpg" />

        </div>

      </div>
    </motion.div>
  );
}

/* FRAMED IMAGE */
function FramedImage({ src }) {
  return (
    <div className="bg-gray-100 rounded-2xl p-3 h-[30%]">
      <div className="rounded-xl overflow-hidden h-full">
        <img
          src={src}
          alt="Ranti Fay"
          className="w-[150px] h-[150px] object-cover"
        />
      </div>
    </div>
  );
}
