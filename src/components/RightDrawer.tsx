// global import
import clsx from "clsx";

// local import
import { Dispatch } from "react";
import {
  Drawer,
  Box,
  Button,
  List,
  ListItem,
  IconButton,
} from "../layout/components";
import { makeStyles } from "../layout/styles";
import { CloseIcon } from "../layout/icons";

interface IProps {
  isOpenDrawer: boolean;
  setIsOpenDrawer: Dispatch<boolean>;
  pages: string[];
}

const useStyles = makeStyles((theme) => {
  console.log(theme);
  return {
    root: {
      width: "100vw",
      backgroundColor: "#DEE0D9",
    },
    iconContainer: {
      justifyContent: "flex-end",
      padding: "0 16px",
    },
    content: {
      height: "100vh",
      padding: 20,
    },
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      height: " 900px",
      maxHeight: "80vh",
      maxWidth: 425,
      margin: "auto",
    },
    menu: {
      display: "flex",
      flexDirection: "column",
      aligItems: "center",
      justifyContent: "space-between",
      height: 280,
      textAlign: "center",
    },
    item: {
      fontWeight: 600,
      fontSize: 16,
      color: "#10143e",
      cursor: "pointer",
    },
    launch: {
      backgroundColor: "#10143e",
      color: "white",
    },
  };
});

function RightDrawer({ isOpenDrawer, setIsOpenDrawer, pages }: IProps) {
  const classes = useStyles();

  return (
    <Drawer
      anchor="right"
      open={isOpenDrawer}
      onClose={() => setIsOpenDrawer(false)}
    >
      <List className={classes.root}>
        <ListItem className={classes.iconContainer}>
          <IconButton onClick={() => setIsOpenDrawer(false)}>
            <CloseIcon />
          </IconButton>
        </ListItem>
        <Box className={classes.content}>
          <Box className={classes.container}>
            <Box className={classes.menu}>
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
          </Box>
        </Box>
      </List>
    </Drawer>
  );
}

export default RightDrawer;
