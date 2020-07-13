import React, { useState, useEffect } from "react";
import "./styles.css";
import { motion } from "framer-motion";

export const Example = () => {
  const [image, setImage] = useState({
    imageOpacity: 0,
    index: 0
  });

  const allowedImages = [
    "https://picsum.photos/600/300",
    "https://picsum.photos/300/300",
    "https://picsum.photos/100/100",
    "https://picsum.photos/300/300"
  ];

  const handleClick = () => {
    setImage({
      ...image,
      index: image.index + 1,
      imageOpacity: 0
    });
  };

  const handleOnLoad = e => {
    setImage({
      ...image,
      width: e.target.clientWidth,
      height: e.target.clientHeight,
      imageOpacity: 1
    });
    console.log(e.target);
  };

  return (
    <article>
      <motion.div animate={{ ...image }}>
        {image.imageOpacity === 0 && <p>Loading...</p>}

        <motion.img
          style={{ opacity: image.imageOpacity }}
          transition={{ delay: 1 }}
          onLoad={handleOnLoad}
          src={allowedImages[image.index % allowedImages.length]}
          alt=""
        />
      </motion.div>
      <button onClick={handleClick}>Load</button>
    </article>
  );
};

export default function App() {
  return (
    <div className="example-container ">
      <Example />
    </div>
  );
}
