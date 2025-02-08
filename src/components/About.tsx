import aboutLogo from "./../assets/about-logo.svg";
import { strings } from "../loc/strings";

export const About = () => {
  return (
    <section
      id="about"
      className="bg-neutral-50 dark:bg-neutral-900 xl:h-dvh font-sourceSans pt-[70px] md:pt-[80px] lg:pt-[90px] px-5 lg:px-24"
    >
      <div className="max-w-screen-xl m-auto">
        <div className="text-center">
          <h2 className="inline-block py-0.5 px-1 text-2xl md:text-3xl lg:text-4xl bg-primaryColor rounded-sm">
            {strings.Nav_About}
          </h2>
        </div>

        <div className="text-neutral-900 dark:text-neutral-100 flex flex-col md:flex-row items-center gap-8 md:gap-4 lg:gap-14 xl:gap-40 mt-6 md:mt-10 lg:mt-14 2xl:mt-28">
          <p className="whitespace-pre-line">{strings.About}</p>
          <img
            src={aboutLogo}
            alt=""
            className="w-60 md:w-64 lg:w-60 xl:w-80 mx-auto"
          />
        </div>
      </div>
    </section>
  );
};
