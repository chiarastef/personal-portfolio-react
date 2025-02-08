import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import WbSunny from "@mui/icons-material/WbSunny";
import Bedtime from "@mui/icons-material/Bedtime";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ItalianFlag } from "../assets/icons/ItalianFlag";
import { EnglishFlag } from "../assets/icons/EnglishFlag";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { strings } from "../loc/strings";

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  language: string;
  changeLanguage: (langCode: string) => void;
}

export const Navbar = (props: NavbarProps) => {
  const sections = [
    {
      name: "about",
      title: strings.Nav_About,
    },
    {
      name: "projects",
      title: strings.Nav_Projects,
    },
  ];

  const [navMenu, setNavMenu] = React.useState<null | HTMLElement>(null);
  const [langMenu, setLangMenu] = React.useState<null | HTMLElement>(null);
  const open = Boolean(langMenu);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setNavMenu(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setNavMenu(null);
  };

  const handleOpenLangMenu = (event: React.MouseEvent<HTMLElement>) => {
    setLangMenu(event.currentTarget);
  };

  const handleCloseLangMenu = () => {
    setLangMenu(null);
  };

  const changeLanguage = (langCode: string) => {
    props.changeLanguage(langCode);
    handleCloseLangMenu();
  };

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const lightMode = createTheme({
    palette: {
      mode: "light",
    },
  });

  return (
    <ThemeProvider theme={props.isDarkMode ? darkTheme : lightMode}>
      <AppBar
        position="fixed"
        className="!shadow-sm !bg-gradient-to-r !from-primaryColor !to-secondaryColor dark:!to-neutral-900"
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#home"
              sx={{
                mr: 3,
                display: { xs: "none", md: "flex" },
                fontFamily: "Source Code Pro",
                textTransform: "uppercase",
                fontWeight: 400,
                color: "black",
              }}
            >
              Chiara Stefanelli
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{ color: "black" }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={navMenu}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(navMenu)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {sections.map((section) => (
                  <MenuItem
                    key={section.name}
                    onClick={handleCloseNavMenu}
                    className="bg-neutral-50 dark:bg-neutral-900"
                  >
                    <Typography
                      sx={{ textAlign: "center", textTransform: "capitalize" }}
                    >
                      <a href={`#${section.name}`}>{section.title}</a>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#home"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "Source Code Pro",
                textTransform: "uppercase",
                fontWeight: 400,
                color: "black",
                fontSize: "1em",
              }}
            >
              Chiara
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {sections.map((section) => (
                <Button
                  key={section.name}
                  onClick={handleCloseNavMenu}
                  sx={{
                    color: "black",
                    display: "block",
                    fontWeight: "400",
                    lineHeight: "unset",
                  }}
                >
                  <a href={`#${section.name}`}>{section.title}</a>
                </Button>
              ))}
            </Box>
            <div className="flex items-center gap-2">
              <div
                className="cursor-pointer"
                onClick={props.toggleDarkMode}
                title={
                  props.isDarkMode
                    ? strings.Nav_SetLightMode
                    : strings.Nav_SetDarkMode
                }
              >
                {props.isDarkMode ? (
                  <WbSunny className="!text-neutral-900 dark:!text-neutral-200" />
                ) : (
                  <Bedtime className="!text-neutral-900 dark:!text-neutral-200" />
                )}
              </div>
              <Button
                disableElevation
                onClick={handleOpenLangMenu}
                sx={{
                  "& .MuiButton-endIcon": {
                    marginLeft: "4px",
                  },
                }}
                endIcon={
                  <KeyboardArrowDownIcon className="!text-neutral-900 dark:!text-neutral-200" />
                }
                title={strings.Nav_ChangeLanguage}
              >
                {props.language === "en" ? <EnglishFlag /> : <ItalianFlag />}
              </Button>
              <Menu
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                anchorEl={langMenu}
                open={open}
                onClose={handleCloseLangMenu}
              >
                <MenuItem
                  onClick={() => changeLanguage("en")}
                  disableRipple
                  title={strings.Nav_English}
                >
                  <EnglishFlag />
                </MenuItem>
                <MenuItem
                  onClick={() => changeLanguage("it")}
                  disableRipple
                  title={strings.Nav_Italian}
                >
                  <ItalianFlag />
                </MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};
