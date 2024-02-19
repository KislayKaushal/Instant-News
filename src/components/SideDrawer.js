import React, { useState } from 'react';
import { createTheme, makeStyles } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import categories from '../data/categories';

const useStyles = makeStyles({
  list: {
    width: 200, // changed
    paddingLeft: 10, // changed
    paddingRight: 5, //changed
  },
  fullList: {
    width: "auto",
  },
});

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = useState({
    left: false,
  });

  // Dark Mode Theme
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift'))) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      className={`${classes.list} ${
      anchor === "top" || anchor === "bottom" ? classes.fullList : ""}`}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
          <ListItem > Categories </ListItem>
      </List>
      <Divider />
      <List>
        {categories.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <React.Fragment key={"left"}>
          <Button onClick={toggleDrawer("left", true)}>
            <MenuIcon />
          </Button>
          <SwipeableDrawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
            onOpen={toggleDrawer("left", true)}
          >
            {list("left")}
          </SwipeableDrawer>
        </React.Fragment>
      </ThemeProvider>
    </div>
  );
}
