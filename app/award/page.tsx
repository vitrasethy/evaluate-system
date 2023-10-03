import Navbar from "../navbar/navbar";

export default function award() {
  return (
    <main>
      <Navbar />
      <section className=" bg-black h-[25vh] mt-20">
        <div className="text-center">
        <h1 className="text-4xl tracking-tight font-extrabold  sm:text-5xl md:text-6xl">Evaluation System</h1>
        <p className="max-w-2xl mx-auto text-3xl mt-8">
          Award of the year
        </p>
        </div>
      </section>

      <table className="table-auto mx-2">
        <thead className="text-xs uppercase bg-blue-600">
          <tr>
            <th scope="col" className="px-6 py-3">
              id
            </th>
            <th scope="col" className="px-6 py-3">
              project name
            </th>
            <th scope="col" className="px-6 py-3">
              points
            </th>
            <th scope="col" className="px-6 py-3">
              number
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-blue-500 border-1 border-blue-400">
            <td className="px-6 py-4">01</td>
            <td className="px-6 py-4">Data</td>
            <td className="px-6 py-4">122 point</td>
            <td className="px-6 py-4">012</td>
          </tr>
          <tr className="bg-blue-600 border-b border-blue-400">
            <td className="px-6 py-4">02</td>
            <td className="px-6 py-4">The Eagles</td>
            <td className="px-6 py-4">72 point</td>
            <td className="px-6 py-4">112</td>
          </tr>
          <tr className="bg-blue-500 border-b border-blue-400">
            <td className="px-6 py-4">03</td>
            <td className="px-6 py-4">Tourism</td>
            <td className="px-6 py-4">73 point</td>
            <td className="px-6 py-4">102</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}
