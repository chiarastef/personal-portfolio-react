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

const pages = ["about", "projects"];

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const Navbar = (props: NavbarProps) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
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
        className="!shadow-sm !bg-gradient-to-r !from-primaryColor !to-secondaryColor"
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
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page}
                    onClick={handleCloseNavMenu}
                    className="bg-neutral-50 dark:bg-neutral-900"
                  >
                    <Typography
                      sx={{ textAlign: "center", textTransform: "capitalize" }}
                    >
                      <a href={`#${page}`}>{page}</a>
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
              CS
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    color: "black",
                    display: "block",
                    fontWeight: "400",
                    lineHeight: "unset",
                  }}
                >
                  <a href={`#${page}`}>{page}</a>
                </Button>
              ))}
            </Box>
            <div>
              <div className="cursor-pointer" onClick={props.toggleDarkMode}>
                {props.isDarkMode ? (
                  <Bedtime className="!text-neutral-900" />
                ) : (
                  <WbSunny className="!text-neutral-900" />
                )}
              </div>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};
