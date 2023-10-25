import DepartmentsForm from "@/components/deparments-form";
import MobileDepartForm from "@/components/mobile_form/department";
import Link from "next/link";

export default function page() {
  return (
    <div>
      <h1 className="my-6 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        List of Department
      </h1>
      <div className="hidden lg:block">
        <DepartmentsForm />
      </div>
      <div className="lg:hidden">
        <Link href="/e-day/1">
          <MobileDepartForm />
        </Link>
      </div>
    </div>
  );
}
