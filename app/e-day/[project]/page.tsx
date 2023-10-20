import ProjectsForm from "@/components/project_form/projects-form";
import Link from "next/link";
import Image from "next/image";
export default function page() {
  return (
    <div>
      <div>
        <h1 className="text-center my-5 text-4xl tracking-tight font-extrabold  sm:text-5xl md:text-6xl">
          Projects
        </h1>
        <div className="flex justify-center ">
          <Link href="/e-day/1/create" className="bg-blue-600 px-5 py-4 flex items-center text-white rounded-md mx-5 my-5 ">
            Add New
            <Image
              className="ml-2"
              src="/add.svg"
              alt=""
              width={22}
              height={22}
            />
          </Link>
          <Link href="/e-day/1/create-ex" className="bg-blue-600 px-5 py-4 flex items-center text-white rounded-md mx-5 my-5">
            Add New (Excel)
            <Image
              className="ml-2"
              src="/add.svg"
              alt=""
              width={22}
              height={22}
            />
          </Link>
        </div>
        <ProjectsForm/>
      </div>
    </div>
  )
}
