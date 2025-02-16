import { IconsSection } from "./elements/IconsSection";

interface FooterProps {
  language: string;
  openEmailModal: () => void;
}

export const Footer = (props: FooterProps) => {
  return (
    <footer className="font-sourceSans py-2 md:pt-3 md:pb-2 px-5 lg:px-24 bg-primaryColor dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
      <div className="max-w-screen-xl m-auto flex flex-col items-center md:flex-row justify-between">
        <div>
          <IconsSection
            language={props.language}
            openEmailModal={props.openEmailModal}
          />
        </div>
        <div className="select-none mt-2 md:mt-0">© 2024 Chiara Stefanelli</div>
      </div>
    </footer>
  );
};
