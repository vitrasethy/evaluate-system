import Navbar from "../navbar/navbar";
import Image from "next/image";
import '../award/page.css'
export default function award() {
  return (
    <main>
      <Navbar />
      <section className=" h-auto mt-20">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold  sm:text-5xl md:text-6xl">
            Evaluation System
          </h1>
          <p className="max-w-2xl mx-auto text-3xl mt-8">Award of the year</p>
        </div>
      </section>

      <section className="h-auto">
        <div className="flex flex-col justify-center items-center w-auto py-14">
          <div className="relative w-auto">
            <div className="mb-4 bg-gradient-to-r from-[#cc9910] to-[#fcf97c] shadow-2xl border-1 py-4 px-7 rounded-[2rem]">
              <div className="flex gap-6  text-xl">
                <p>1st</p>
                
                <div id="scroll-container">
                <div id="scroll-text"> Evaluation System</div>
  </div>

                <p>100 point</p>
                <p>003</p>
              </div>
            </div>
            <Image
              src="/1streward.png"
              alt=""
              width={35}
              height={35}
              className="absolute top-[-6px] left-[-10px] rotate-3"
            />
          </div>

          <div className="relative w-auto">
            <div className="mb-4 bg-gradient-to-r from-[#cc9910] to-[#fcf97c] shadow-2xl border-1 py-4 px-7 rounded-[2rem]">
              <div className="flex gap-6  text-xl">
                <p>1st</p>
                <p>Data analysis</p>
                <p>100 point</p>
                <p>003</p>
              </div>
            </div>
            <Image
              src="/1streward.png"
              alt=""
              width={35}
              height={35}
              className="absolute top-[-6px] left-[-10px] rotate-3"
            />
          </div>

          <div className="relative w-auto">
            <div className="mb-4 bg-gradient-to-r from-[#cc9910] to-[#fcf97c] shadow-2xl border-1 py-4 px-7 rounded-[2rem]">
              <div className="flex gap-6  text-xl">
                <p>1st</p>
                <p>Data analysis</p>
                <p>100 point</p>
                <p>003</p>
              </div>
            </div>
            <Image
              src="/1streward.png"
              alt=""
              width={35}
              height={35}
              className="absolute top-[-6px] left-[-10px] rotate-3"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
