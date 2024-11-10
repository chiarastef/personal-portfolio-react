import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const Footer = () => {
  return (
    <footer className="font-sourceSans mt-[70px] md:mt-[80px] lg:mt-[90px] py-2 md:pt-3 md:pb-2 px-5 lg:px-24 bg-green">
      <div className="max-w-screen-xl m-auto flex flex-col items-center md:flex-row justify-between">
        <div className="select-none">© 2024 Chiara Stefanelli</div>
        <div className="mt-2 md:mt-0">
          <a
            href="https://www.linkedin.com/in/chiarastefanelli/?locale=en_US"
            target="_blank"
            title="Connect with me on LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://github.com/chiarastef"
            target="_blank"
            className="ml-3"
            title="Check out my projects on GitHub"
          >
            <GitHubIcon />
          </a>
        </div>
      </div>
    </footer>
  );
};
