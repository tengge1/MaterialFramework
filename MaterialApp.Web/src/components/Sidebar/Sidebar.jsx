import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import cx from "classnames";
import {
  withStyles,
  Drawer,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CardContent,
  Typography
} from "material-ui";
import Collapse from 'material-ui/transitions/Collapse';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import ExpandLessIcon from 'material-ui-icons/ExpandLess';
import { HeaderLinks } from "components";

import sidebarStyle from "variables/styles/sidebarStyle.jsx";

class Sidebar extends React.Component {

  state = { open: true };

  render() {
    const { classes, color, logo, image, logoText, routes } = this.props;

    var links = (
      <List className={classes.list}>
        {routes.map((prop, key) => {
          if (prop.redirect) return null;
          const listItemClasses = cx({
            [" " + classes[color]]: this.activeRoute(prop.path)
          });
          const whiteFontClasses = cx({
            [" " + classes.whiteFont]: this.activeRoute(prop.path)
          });
          return (
            <div>
              <NavLink
                to={prop.path}
                className={prop.classes}
                data-toggle="collapse"
                activeClassName="active"
                key={key}
              >
                <ListItem
                  button
                  className={classes.itemLink + listItemClasses}
                  onClick={this.handleExpandClick}
                >
                  <ListItemIcon className={classes.itemIcon + whiteFontClasses}>
                    <prop.icon />
                  </ListItemIcon>
                  <ListItemText
                    primary={prop.sidebarName}
                    className={classes.itemText + whiteFontClasses}
                    disableTypography={true}
                  >
                    {this.state.open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </ListItemText>
                </ListItem>
                <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                      <ListItemIcon>
                        <prop.icon />
                      </ListItemIcon>
                      <ListItemText inset primary="Starred" />
                    </ListItem>
                  </List>
                </Collapse>
              </NavLink>
            </div>
          );
        })}
      </List>
    );
    var brand = (
      <div className={classes.logo}>
        <a href="javascript:;" className={classes.logoLink}>
          <div className={classes.logoImage}>
            <img src={logo} alt="logo" className={classes.img} />
          </div>
          {logoText}
        </a>
      </div>
    );
    return (
      <div>
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor="right"
            open={this.props.open}
            classes={{
              paper: classes.drawerPaper
            }}
            onClose={this.props.handleDrawerToggle}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {brand}
            <div className={classes.sidebarWrapper}>
              <HeaderLinks />
              {links}
            </div>
            {image !== undefined ? (
              <div
                className={classes.background}
                style={{ backgroundImage: "url(" + image + ")" }}
              />
            ) : null}
          </Drawer>
        </Hidden>
        <Hidden smDown>
          <Drawer
            anchor="left"
            variant="permanent"
            open
            classes={{
              paper: classes.drawerPaper
            }}
          >
            {brand}
            <div className={classes.sidebarWrapper}>{links}</div>
            {image !== undefined ? (
              <div
                className={classes.background}
                style={{ backgroundImage: "url(" + image + ")" }}
              />
            ) : null}
          </Drawer>
        </Hidden>
      </div>
    );
  }

  // verifies if routeName is the one active (in browser input)
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? true : false;
  }

  handleExpandClick() {
    this.setState({ expanded: !this.state.expanded });
  };


};

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(sidebarStyle)(Sidebar);
