"use client";

import { useEffect, useState } from "react";

function Hero() {
  const [showLine, setShowLine] = useState(false);

  useEffect(() => {
    setShowLine(true);
  }, []);

  return (
    <section className='text-center mt-24'>
      <h1 className='text-5xl font-bold mb-6 leading-tight'>
        Scheduling{" "}
        <span
          className={
            "text-blue-600 cool-underline" + (showLine ? " show-underline" : "")
          }
        >
          made simple
        </span>{" "}
        <br />
        For people like you
      </h1>
      <p className='text-gray-600'>
        Most Scheduling app are simple but ours is the simplest <br />
        Also it is open source
      </p>
    </section>
  );
}

export default Hero;
