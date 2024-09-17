"use client";

import { Play } from "lucide-react";
import Link from "next/link";
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
      <div className='flex mt-4 gap-4 justify-center'>
        <Link
          href={"/"}
          className='bg-black text-white px-4 py-2 rounded-full '
        >
          Get Started For Free
        </Link>
        <Link
          href={"/"}
          className='border border-gray-300 px-4 py-2 rounded-full inline-flex gap-2 items-center'
        >
          <Play size={16} />
          Watch Video
        </Link>
      </div>
    </section>
  );
}

export default Hero;
