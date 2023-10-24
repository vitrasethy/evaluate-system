"use client";
import Image from "next/image";
import "../award/page.css";

import { useEffect, useState } from "react";
import TextWithAnimation from "./animateBtn/animateText";

export default function award() {
  function handleScroll(event: any) {
    if (event.key === 'Enter'){
      window.scroll({
        top: document.body.offsetHeight,
        left: 0, 
        behavior: 'smooth',
      });
    }
  }


  const [numParticles, setNumParticles] = useState(30);

  // Create an array of particles
  const particles = [];
  for (let i = 0; i < numParticles; i++) {
    particles.push(<div className="particle" key={i}></div>);
  }

  // Use an effect to update the number of particles every second
  useEffect(() => {
    const interval = setInterval(() => {
      // Increase or decrease the number of particles randomly
      const change = Math.floor(Math.random() * 3) - 1;
      setNumParticles((prev) => Math.max(0, prev + change));
    }, 1000);
    return () => clearInterval(interval);
  }, []);


  return (
    <main className="bg-[#070707]" onKeyDown={handleScroll}>
      <section className="first-screen">
      <div id="particle-container">{particles}</div>
        <div className="text-center h-[85vh] flex flex-col justify-center items-center">
          <h1 className="text-4xl tracking-tight font-extrabold font-['Georgia'] uppercase sm:text-5xl md:text-8xl bg-gradient-to-r from-[#3b7cc1] to-[#9ae2ff] inline-block text-transparent bg-clip-text drop-shadow-[7px_5px_rgba(205,245,253,0.2)]">
            Engineering's Day
          </h1>
          <p className="max-w-2xl mx-auto text-3xl mt-8 text-white">
            Award of Engineering's Day 2023
          </p>
          <p className="max-w-2xl mx-auto text-3xl mt-8 text-white">
            Congratulation to the winners...
          </p>
      {/* <button onKeyDown={handleScroll} className="text-white p-2 border-sky-300 border-2 w-[5%] mt-8">click me</button> */}
      {/* <input onKeyDown={handleScroll} /> */}
      
        </div>
      </section>
      <div id="particle-container">{particles}
      </div>
      <div className="h-screen"></div>
      <section className="second-screen">
        <div className="pyro">
          <div className="before"></div>
          <div className="after"></div>
        </div>
        <div className=" h-screen flex justify-center items-center">
          <div className="flex justify-center gap-8 items-center bg-[url('/reward3.jpeg')] bg-no-repeat bg-cover border-2 border-gray-500">
            <div className=" rounded-md bg-sky-950/30 backdrop-brightness-[.6] p-8">
              <div className=" ">

              <h3 className="text-center text-4xl pb-16 font-semibold text-white">Leader Board</h3>
            <div className="relative">
              <div className="bg-gradient-to-r from-[#cc9910] to-[#fcf97c] shadow-lg border-1 py-6 px-10 rounded-full">
                <div className="flex gap-8 text-3xl">
                  <p>1st</p>
                  <TextWithAnimation
                    text={
                      "GASTROMOD: AN INTERACTIVE TOOL FOR 3D GASTROPOD MODELING"
                    }
                  />
                  <p>100&nbsp;point</p>
                  <p>003</p>
                </div>
              </div>
              <Image
                src="/gold.png"
                alt=""
                width={50}
                height={50}
                className="absolute top-[-6px] left-[-10px] rotate-3"
              />
            </div>

            <div className="relative mt-8">
              <div className="bg-gradient-to-r from-[#C0C0C0] to-[#e9e9eb] shadow-lg border-1 py-6 px-10 rounded-full">
                <div className="flex gap-8 text-3xl">
                  <p>2nd</p>
                  <TextWithAnimation text={"ASEAN FACTORI 4.0 PROJECT ASEAN FACTORI 4.0 PROJECT"} />
                  <p>100&nbsp;point</p>
                  <p>003</p>
                </div>
              </div>
              <Image
                src="/silver.png"
                alt=""
                width={50}
                height={50}
                className="absolute top-[-6px] left-[-10px] rotate-3"
              />
            </div>

            <div className="relative mt-8">
              <div className="bg-gradient-to-r from-[#ca6533] to-[#F0C9BA] shadow-lg border-1 py-6 px-10 rounded-full">
                <div className="flex gap-8 text-3xl">
                  <p>2nd</p>
                  <TextWithAnimation
                    text={
                      "A NEW MODEL FOR SIMULATING AND EVALUATING CONGESTION CAUSE AT SIGNALIZED INTERSECTION"
                    }
                  />
                  <p>100&nbsp;point</p>
                  <p>003</p>
                </div>
              </div>
              <Image
                src="/bronze.png"
                alt=""
                width={50}
                height={50}
                className="absolute top-[-6px] left-[-10px] rotate-3"
              />
            </div>

            <p className="text-center mt-8 text-white">Royal University of Phnom Penh || Faculty of Engineering</p>
            </div>
              </div>
          </div>
        </div>
      </section>
    </main>
  );
}
