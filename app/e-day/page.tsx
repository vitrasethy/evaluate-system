import DepartmentsForm from "@/components/deparments-form";
import MobileDepartForm from "@/components/mobile_form/department";
export default function page() {
    return (
      <div>
          <div className='hidden lg:block'>This is Computer view</div>
          <div className='lg:hidden'>
            <MobileDepartForm />
          </div>
      </div>
    )
  }