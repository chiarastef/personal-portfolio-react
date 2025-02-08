import { Project } from "../../models/Project";
import { strings } from "../../loc/strings";

interface ProjectTileProps {
  project: Project;
  language: string;
}

export const ProjectTile = (props: ProjectTileProps) => {
  return (
    <div className="bg-secondaryColor dark:!bg-neutral-950 px-2 py-2 rounded-sm">
      <img
        src={props.project.previewImg}
        alt={`Preview image for project ${props.project.name}`}
      />
      <div className="px-3 py-2 h-30 lg:h-36 xl:h-32 flex flex-col">
        <div className="text-lg text-neutral-900 dark:text-neutral-100">
          {props.project.name[props.language === "it" ? "it" : "en"]}
        </div>
        <div className="text-sm lg:text-base mb-2 text-neutral-900 dark:text-neutral-100">
          {props.project.description[props.language === "it" ? "it" : "en"]}
        </div>
        <div className="mt-auto">
          <a
            href={props.project.githubUrl}
            target="_blank"
            className="bg-primaryColor px-2 py-1 text-sm lg:text-base shadow-sm rounded-sm"
          >
            {strings.Projects_GithubRepository}
          </a>
          <a
            href={props.project.liveUrl}
            target="_blank"
            className="bg-primaryColor px-2 py-1 ms-3 text-sm lg:text-base shadow-sm rounded-sm"
          >
            {strings.Projects_LiveSite}
          </a>
        </div>
      </div>
    </div>
  );
};
