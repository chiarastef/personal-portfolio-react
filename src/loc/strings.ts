import LocalizedStrings from "react-localization";
import { en } from "./en";
import { it } from "./it";

export class Strings {
  public Nav_About: string;
  public Nav_Projects: string;
  public Nav_SetLightMode: string;
  public Nav_SetDarkMode: string;
  public Nav_ChangeLanguage: string;
  public Nav_Italian: string;
  public Nav_English: string;

  public Hero_Introduction: string;
  public Hero_FrontEndDev: string;

  public About: string;

  public Projects_GithubRepository: string;
  public Projects_LiveSite: string;

  public Footer_Linkedin: string;
  public Footer_Github: string;
}

export const strings = new LocalizedStrings({
  en: en,
  it: it,
});
