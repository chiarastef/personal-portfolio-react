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
  public Footer_Email: string;

  public EmailForm_Title: string;
  public EmailForm_Text: string;
  public EmailForm_NameLabel: string;
  public EmailForm_EmailLabel: string;
  public EmailForm_MessaggeLabel: string;
  public EmailForm_Cancel: string;
  public EmailForm_Send: string;
  public EmailForm_SentSuccess: string;
  public EmailForm_SentFailed: string;
}

export const strings = new LocalizedStrings({
  en: en,
  it: it,
});
