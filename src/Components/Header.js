import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  AppBar,
  Link,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Menu,
} from "@material-ui/core";
import useStyles from "./HeaderClasses";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const headerClasses = useStyles();
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuItemClick = (event, index) => {
    switch (index) {
      case 0:
        changeLanguage("ru");
        break;
      case 1:
        changeLanguage("en");
        break;
      default:
        break;
    }
    setSelectedIndex(index);
    setAnchorEl(null);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const options = ["Русский", "English"];

  return (
    <AppBar role={"header"} id="header" className={headerClasses.header}>
      <ul className={headerClasses.nav}>
        <li className={headerClasses.menuItem}>
          <Link color="secondary" href="#home">
            Home
          </Link>
        </li>
        <li className={headerClasses.menuItem}>
          <Link color="secondary" href="#about">
            About
          </Link>
        </li>
        <li className={headerClasses.menuItem}>
          <Link color="secondary" href="#resume">
            Resume
          </Link>
        </li>
        <li className={headerClasses.menuItem}>
          <Link color="secondary" href="#portfolio">
            Works
          </Link>
        </li>
        <li className={headerClasses.menuItem}>
          <Link color="secondary" href="#testimonials">
            Testimonials
          </Link>
        </li>
        <li className={headerClasses.menuItem}>
          <Link color="secondary" href="#contact">
            Contact
          </Link>
        </li>
        <li className={headerClasses.menuItem}>
          <div className={headerClasses.root}>
            <List component="nav" aria-label="Device settings">
              <ListItem
                button
                aria-haspopup="true"
                aria-controls="lock-menu"
                aria-label="language"
                onClick={handleClickListItem}
              >
                <ListItemText
                  primary="language"
                  secondary={options[selectedIndex]}
                />
              </ListItem>
            </List>
            <Menu
              id="lock-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {options.map((option, index) => (
                <MenuItem
                  key={option}
                  selected={index === selectedIndex}
                  onClick={(event) => handleMenuItemClick(event, index)}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </div>
        </li>
      </ul>
    </AppBar>
  );
};

export default Header;
