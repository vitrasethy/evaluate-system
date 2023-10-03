import Navbar from "../navbar/navbar";

export default function home() {
  return (
    <main>
        <Navbar/>
      <section className=" bg-black h-[28vh] mt-20">
        <div className="text-center">
        <h1 className="text-4xl tracking-tight font-extrabold  sm:text-5xl md:text-6xl">Evaluation System</h1>
        <p className="max-w-2xl mx-auto font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis iste
          laudantium facere dicta enim nihil ad rerum nulla possimus natus.
        </p>
        </div>
      </section>

      <section>
        <div className=" border-2 border-white rounded-2xl px-4 py-6 mx-6 mb-6">
            <div className="mb-4">
            <p>text</p>
            <p>Engineering Days</p>
            <p>Full-Time: 3:00 </p>
            <p>Places</p>
            <p>During.....</p>
            </div>
            <div className="flex flex-wrap justify-evenly">
                <button className="border-white border-2 px-4 py-1 rounded-3xl">Html</button>
                <button className="border-white border-2 px-4 py-1 rounded-3xl">Css</button>
                <button className="border-white border-2 px-4 py-1 rounded-3xl"> Javascript </button>
            </div>
        </div>
        <div className=" border-2 border-white rounded-2xl px-4 py-6 mx-6 mb-6">
        <div className="mb-4">
            <p>text</p>
            <p>Engineering Days</p>
            <p>Full-Time: 3:00 </p>
            <p>Places</p>
            <p>During.....</p>
            </div>
            <div className="flex flex-wrap justify-evenly">
                <button className="border-white border-2 px-4 py-1 rounded-3xl">Html</button>
                <button className="border-white border-2 px-4 py-1 rounded-3xl">Css</button>
                <button className="border-white border-2 px-4 py-1 rounded-3xl"> Javascript </button>
            </div>
        </div>
        <div className=" border-2 border-white rounded-2xl px-4 py-6 mx-6 mb-6">
        <div className="mb-4">
            <p>text</p>
            <p>Engineering Days</p>
            <p>Full-Time: 3:00 </p>
            <p>Places</p>
            <p>During.....</p>
            </div>
            <div className="flex flex-wrap justify-evenly">
                <button className="border-white border-2 px-4 py-1 rounded-3xl">Html</button>
                <button className="border-white border-2 px-4 py-1 rounded-3xl">Css</button>
                <button className="border-white border-2 px-4 py-1 rounded-3xl"> Javascript </button>
            </div>
        </div>
      </section>
    </main>
  );
}
