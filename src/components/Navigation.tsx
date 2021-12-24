// global import
import { Dispatch } from "react";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";

// local import
import {
  AppBar,
  Toolbar,
  Box,
  Container,
  IconButton,
  Button,
} from "../layout/components";
import { MenuIcon } from "../layout/icons";

import { makeStyles } from "../layout/styles";
import logo from "../logo.svg";

interface IProps {
  setIsOpenDrawer: Dispatch<boolean>;
  pages: string[];
}

const useStyles = makeStyles((theme) => {
  return {
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      backgroundColor: "white",
      boxShadow: "0px 4px 4px rgb(0 0 0 / 15%)",
      borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.shortest,
      }),
    },
    logo: {
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
      backgroundPosition: "center center",
      width: 120,
      height: 28,
    },
    sectionDesktop: {
      display: "none",
      [theme.breakpoints.up("lg")]: {
        display: "flex",
      },
    },
    sectionMobile: {
      display: "flex",
      [theme.breakpoints.up("lg")]: {
        visibility: "hidden",
        position: "absolute",
        right: 30,
      },
    },
    grow: {
      flexGrow: 1,
    },
    item: {
      marginRight: "1.6rem",
    },
    launch: {
      backgroundColor: "#10143e",
      color: "white",
    },
  };
});

function Navigation({ setIsOpenDrawer, pages }: IProps) {
  const navigate = useNavigate();
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Container maxWidth="xl">
        <Toolbar>
          <Box
            className={classes.logo}
            style={{
              backgroundImage: `url(${logo})`,
            }}
            onClick={() => navigate("/")}
          />

          <Box className={classes.sectionDesktop}>
            {pages.map((page, index) => (
              <Button
                key={index}
                className={clsx(classes.item, {
                  [classes.launch]: index === pages.length - 1,
                })}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box className={classes.grow} />
          <Box className={classes.sectionMobile}>
            <IconButton
              edge="end"
              aria-label="menu"
              onClick={() => setIsOpenDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navigation;
