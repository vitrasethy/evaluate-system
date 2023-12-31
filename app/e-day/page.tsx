import DepartmentsForm from "@/components/deparments-form";
import MobileDepartForm from "@/components/mobile_form/department";
import Link from "next/link";

// async function getData() {
//   const token =
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY5ODIxODEzMSwianRpIjoiOGM4OWIyZjctNzAxNy00ZTM2LTliYzEtNWVkM2ExMmQzMzA0IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6InN1bm5lbmdDb2NvIiwibmJmIjoxNjk4MjE4MTMxLCJleHAiOjE2OTgyMTkwMzF9.uFp8QfQYyiWdflUdGg-AZ_lbmwsb7a-bogn1m2IUj9A";
//   const res = await fetch("http://127.0.0.1:8080/departments/1", {
//     method: "GET",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//       Authorization: "Bearer " + token,
//     },
//   });

//   if (!res.ok) {
//     console.log(res);
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

export default async function page() {
  // const data = await getData();

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
