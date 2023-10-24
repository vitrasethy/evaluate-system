import ProjectsForm from "@/components/project_form/projects-form";
export default function page() {
  return (
    <div>
      <div>
        <h1 className="text-center my-5 text-4xl tracking-tight font-extrabold  sm:text-5xl md:text-6xl">
          ITE-G8-Y4
        </h1>
        <ProjectsForm />
      </div>
    </div>
  );
}