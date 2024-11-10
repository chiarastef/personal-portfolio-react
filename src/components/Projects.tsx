import { ProjectTile } from "./elements/ProjectTile";
import { projects } from "../data/projects";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="font-sourceSans pt-[70px] md:pt-[80px] lg:pt-[90px] px-5 lg:px-24"
    >
      <div className="text-center">
        <h2 className="inline-block py-0.5 px-1 text-2xl md:text-3xl lg:text-4xl bg-green">
          Projects
        </h2>
      </div>
      <div className="max-w-screen-xl m-auto mt-5 md:mt-6 2xl:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {projects.map((project, idx) => {
          return <ProjectTile key={idx} project={project} />;
        })}
      </div>
    </section>
  );
};
