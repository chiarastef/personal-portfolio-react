import aboutLogo from "./../assets/about-logo.svg";
import { about } from "../data/about";

export const About = () => {
  return (
    <section
      id="about"
      className="xl:h-dvh font-sourceSans pt-[70px] md:pt-[80px] lg:pt-[90px] px-5 lg:px-24"
    >
      <div className="max-w-screen-xl m-auto">
        <div className="text-center">
          <h2 className="inline-block py-0.5 px-1 text-2xl md:text-3xl lg:text-4xl bg-primaryColor rounded-sm">
            About
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-4 lg:gap-14 xl:gap-40 mt-6 md:mt-10 lg:mt-14 2xl:mt-28">
          <div>
            {about.map((aboutParagraph, idx) => {
              return (
                <p key={idx} className="pb-2">
                  {aboutParagraph}
                </p>
              );
            })}
          </div>
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
