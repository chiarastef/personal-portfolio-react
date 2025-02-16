import { strings } from "../../loc/strings";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Email from "@mui/icons-material/Email";

interface IconsSectionProps {
  language: string;
  openEmailModal: () => void;
}

export const IconsSection = (props: IconsSectionProps) => {
  return (
    <>
      <a
        href={`https://www.linkedin.com/in/chiarastefanelli/${
          props.language === "it" ? "" : "?locale=en_US"
        }`}
        target="_blank"
        title={strings.Footer_Linkedin}
      >
        <LinkedInIcon />
      </a>
      <a
        href="https://github.com/chiarastef"
        target="_blank"
        className="ml-3"
        title={strings.Footer_Github}
      >
        <GitHubIcon />
      </a>
      <span
        className="ml-3 cursor-pointer"
        onClick={props.openEmailModal}
        title={strings.Footer_Email}
      >
        <Email />
      </span>
    </>
  );
};
