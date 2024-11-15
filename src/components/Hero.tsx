export const Hero = () => {
  return (
    <section
      id="home"
      className="h-dvh font-sourceSans flex flex-col justify-center items-center text-center"
    >
      <h1 className="text-3xl md:text-5xl lg:text-6xl">
        Hi, I am
        <br />
        <strong>Chiara Stefanelli</strong>
      </h1>
      <h3 className="font-sourceCode uppercase text-xl md:text-3xl lg:text-4xl py-0.5 px-1 bg-[linear-gradient(to_right,white_50%,transparent_50%),linear-gradient(transparent_0%,#A9E07F_0%)] animate-highlight">
        front-end developer
      </h3>
    </section>
  );
};
