import React, { useState, useRef } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

function Products() {
  const [pos, setPos] = useState(0);
  const videoRefs = useRef([]);
  const products = [
    {
      title: "Webflow",
      description:
        "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow",
      live: true,
      case: false,
      vid: "src/assets/Videos/layoutland-169.webm",
    },
    {
      title: "cula",
      description:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      live: true,
      case: true,
      vid: "src/assets/Videos/cula-169.webm",
    },
    {
      title: "Umault",
      description:
        "Our collaboration with Umault exemplifies our commitment to marrying design innovation with technical excellence.",
      live: true,
      case: false,
      vid: "src/assets/Videos/umault-169.webm",
    },
    {
      title: "Chargeflow",
      description:
        "We pushed the limits of creativity with Chargeflow's website redesign, incorporating a staggering amount of 15 Lottie animations and custom graphics.",
      live: true,
      case: true,
      vid: "src/assets/Videos/chargeflow-169.webm",
    },
    {
      title: "arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
      vid: "src/assets/Videos/arqitel-169.webm",
    },
  ];

  const moveWindow = (val) => {
    setPos(val * 16);
    if (videoRefs.current[val]) {
      videoRefs.current[val].play();
    }
  };

  const stopVideo = (val) => {
    if (videoRefs.current[val]) {
      const video = videoRefs.current[val];
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <div className="mt-15 relative">
      {products.map((product, index) => (
        <Product
          key={index}
          count={index}
          mover={moveWindow}
          stopVideo={stopVideo}
          val={product}
        />
      ))}
      <div className="absolute top-0 w-full h-full pointer-events-none  ">
        <motion.div
          initial={{ y: pos }}
          animate={{ y: pos + "rem" }}
          transition={{ ease: [0.83, 0, 0.17, 1], duration: 0.6 }}
          className="window  absolute w-[28rem] h-[16rem] left-1/4  translate-x-[10%] overflow-hidden "
        >
          {products.map((item, index) => (
            <motion.div
              key={index}
              animate={{ y: -pos + "rem" }}
              className=" w-full h-full  "
              transition={{ ease: [0.83, 0, 0.17, 1], duration: 0.6 }}
            >
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                className="w-full h-full rounded-lg"
                muted
                loop
                src={item.vid}
              ></video>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
