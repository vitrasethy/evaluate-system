import ProjectsForm from "@/components/project_form/projects-form";
import MobileProjForm from "@/components/mobile_form/project";
export default function page() {
  return (
    <div>
      <div>
        <h1 className="text-4xl text-center my-6 tracking-tight font-extrabold sm:text-5xl md:text-6xl">
          List of Projects
        </h1>
        <div className="hidden lg:block">
          <ProjectsForm />
        </div>
        <div className="lg:hidden">
          <MobileProjForm />
        </div>
      </div>
    </div>
  );
}
