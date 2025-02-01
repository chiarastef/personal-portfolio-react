import { Project } from "../../models/Project";

interface ProjectTileProps {
  project: Project;
}

export const ProjectTile = (props: ProjectTileProps) => {
  return (
    <div className="bg-secondaryColor px-2 py-2 rounded-sm">
      <img
        src={props.project.previewImg}
        alt={`Preview image for project ${props.project.name}`}
        className=""
      />
      <div className="px-3 py-2 h-30 lg:h-36 xl:h-32 flex flex-col">
        <div className="text-lg">{props.project.name}</div>
        <div className="text-sm lg:text-base mb-2">
          {props.project.description}
        </div>
        <div className="mt-auto">
          <a
            href={props.project.githubUrl}
            target="_blank"
            className="bg-primaryColor px-2 py-1 text-sm lg:text-base shadow-sm rounded-sm"
          >
            GitHub repository
          </a>
          <a
            href={props.project.liveUrl}
            target="_blank"
            className="bg-primaryColor px-2 py-1 ms-3 text-sm lg:text-base shadow-sm rounded-sm"
          >
            Live site
          </a>
        </div>
      </div>
    </div>
  );
};
