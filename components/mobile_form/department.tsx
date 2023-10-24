import Link from "next/link";

export default function MobileDepartForm() {
  return (
    <div className="flex flex-col justify-center items-center mt-4">
      <div className="bg-white relative p-4 border-slate-500 w-9/12 border-2 border-solid border-inherit rounded-md">
        <p>Generation: 8 Year: 3</p>
        <p className="font-bold text-lg">
          Information of Technology Engineering
        </p>
      </div>
      <Link
        className="text-white translate-y-16 absolute bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-9 py-2.5 focus:outline-none"
        href="#"
      >
        Edit
      </Link>
    </div>
  );
}
