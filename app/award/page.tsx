"use client"
import Image from "next/image";
import '../award/page.css'

import {  useState } from "react";
import TextWithAnimation from "./animateBtn/animateText";

export default function award() {
  const texts =['award', 'Grace Hopper', 'Margaret Hamilton'];
  const [text, setText] = useState(false);
  const scrolled ={
    animation: "scroll-rtl 15s linear forwards"
  }
  function handleText(texts: string | any[]){
    if (texts.length > 30){
      setText(true)
    }
    else{
      setText(false)
    }
  }
  return (
  
    <main className="bg-[#191919]">
      
      <section className=" h-screen flex justify-center pt-[10%]">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold font-['Georgia'] uppercase sm:text-5xl md:text-8xl bg-gradient-to-r from-[#3b7cc1] to-[#9ae2ff] inline-block text-transparent bg-clip-text drop-shadow-[7px_5px_rgba(205,245,253,0.2)]">
          Engineering's Day
          </h1>
          <p className="max-w-2xl mx-auto text-3xl mt-8 text-white">Award of Engineering's Day 2023</p>
          <p className="max-w-2xl mx-auto text-3xl mt-8 text-white">Congratulation to the winners...</p>
        </div>
      </section>
      <div className="animate-jump-in animate-infinite animate-duration-[5000ms] animate-ease-in text-red-600">
        text
      </div>
      <section className=" flex justify-center">
        <div className="flex flex-wrap justify-center gap-8 p-8 items-center border-2 bg-slate-50 w-[70%]">

          <div className="relative">
            <div className="bg-gradient-to-r from-[#cc9910] to-[#fcf97c] shadow-2xl border-1 py-6 px-10 rounded-full">
              <div className="flex gap-8 text-3xl">
                <p>1st</p>
                <TextWithAnimation text={'GASTROMOD: AN INTERACTIVE TOOL FOR 3D GASTROPOD MODELING'}/>
                <p>100&nbsp;point</p>
                <p>003</p>
              </div>
            </div>
            <Image
              src="/1st.png"
              alt=""
              width={50}
              height={50}
              className="absolute top-[-6px] left-[-10px] rotate-3"
            />
          </div>

          <div className="relative">
          <div className="bg-gradient-to-r from-[#9694A0] to-[#E3E1EB] shadow-2xl border-1 py-6 px-10 rounded-full">
              <div className="flex gap-8 text-3xl">
                <p>2nd</p>
                <TextWithAnimation text={'ASEAN FACTORI 4.0 PROJECT'}/>
                <p>100&nbsp;point</p>
                <p>003</p>
              </div>
            </div>
            <Image
              src="/2nd.png"
              alt=""
              width={50}
              height={50}
              className="absolute top-[-6px] left-[-10px] rotate-3"
            />
          </div>

          <div className="relative">
            <div className="bg-gradient-to-r from-[#D16A38] to-[#F0C9BA] shadow-2xl border-1 py-6 px-10 rounded-full">
              <div className="flex gap-8 text-3xl">
                <p>2nd</p>
                <TextWithAnimation text={'A NEW MODEL FOR SIMULATING AND EVALUATING CONGESTION CAUSE AT SIGNALIZED INTERSECTION'}/>
                <p>100&nbsp;point</p>
                <p>003</p>
              </div>
            </div>
            <Image
              src="/3rd.png"
              alt=""
              width={50}
              height={50}
              className="absolute top-[-6px] left-[-10px] rotate-3"
            />
          </div>

        </div>
      </section>

    </main>
  );
}
