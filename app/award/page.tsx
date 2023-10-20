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
    if (texts.length > 20){
      setText(true)
    }
    else{
      setText(false)
    }
  }
  return (
  
    <main>
      <section className=" h-72 mt-20">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold  sm:text-5xl md:text-6xl">
            Evaluation System
          </h1>
          <p className="max-w-2xl mx-auto text-3xl mt-8">Award of the year</p>
        </div>
      </section>

      <section className=" flex justify-center">
        <div className="flex flex-wrap justify-center gap-8 p-8 items-center border-2 bg-slate-50 w-[70%]">

          <div className="relative">
            <div className="bg-gradient-to-r from-[#cc9910] to-[#fcf97c] shadow-2xl border-1 py-6 px-10 rounded-full">
              <div className="flex gap-8 text-3xl">
                <p>1st</p>
                <TextWithAnimation text={'GASTROMOD: AN INTERACTIVE TOOL FOR 3D GASTROPOD MODELING'}/>
                <p>100 point</p>
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
          <div className="bg-gradient-to-r from-[#cc9910] to-[#fcf97c] shadow-2xl border-1 py-6 px-10 rounded-full">
              <div className="flex gap-8 text-3xl">
                <p>2nd</p>
                <TextWithAnimation text={'ASEAN FACTORI 4.0 PROJECT'}/>
                <p>100 point</p>
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
            <div className="bg-gradient-to-r from-[#cc9910] to-[#fcf97c] shadow-2xl border-1 py-6 px-10 rounded-full">
              <div className="flex gap-8 text-3xl">
                <p>2nd</p>
                <TextWithAnimation text={'A NEW MODEL FOR SIMULATING AND EVALUATING CONGESTION CAUSE AT SIGNALIZED INTERSECTION'}/>
                <p>100 point</p>
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

        </div>
      </section>

    </main>
  );
}
