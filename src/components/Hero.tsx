import { strings } from "../loc/strings";

export const Hero = () => {
  return (
    <section
      id="home"
      className="bg-neutral-50 dark:bg-neutral-900 h-dvh font-sourceSans flex flex-col justify-center items-center text-center"
    >
      <h1 className="text-neutral-900 dark:text-neutral-100  text-3xl md:text-5xl lg:text-6xl animate-slidein300 opacity-0">
        {strings.Hero_Introduction}
        <br />
        <strong>Chiara Stefanelli</strong>
      </h1>
      <h3 className="font-sourceCode uppercase text-xl md:text-3xl lg:text-4xl py-0.5 px-1 mt-2 bg-primaryColor rounded-sm animate-slidein500 opacity-0">
        {strings.Hero_FrontEndDev}
      </h3>
    </section>
  );
};
