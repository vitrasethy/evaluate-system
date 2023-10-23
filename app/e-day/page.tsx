import DepartmentsForm from "@/components/deparments-form";
import MobileDepartForm from "@/components/mobile_form/department";

// async function getData() {
//   const res = await fetch('https://api.example.com/...')

//   if (!res.ok) {
//     throw new Error('Failed to fetch data')
//   }

//   return res.json()
// }

export default async function page() {
  // const data = await getData()

  return (
    <div>
      <div className="hidden lg:block"><DepartmentsForm/></div>
      <div className="lg:hidden">
        <MobileDepartForm />
      </div>
    </div>
  );
}
