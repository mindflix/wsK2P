import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuList from "@material-ui/core/MenuList";
import Badge from "@material-ui/core/Badge";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import { withStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import ExitToApp from "@material-ui/icons/ExitToApp";
import CloudIcon from "@material-ui/icons/Cloud";
import { useAuth } from "../../hooks/useAuth";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
import teledyne from "../../images/teledyne.png";

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
  },
}))(Badge);

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    disableScrollLock={true}
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.secondary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function BadgeAvatars() {
  let history = useHistory();

  const { signout } = useAuth();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box >
      <StyledBadge
        style={{ cursor: "pointer" }}
        overlap="circle"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        variant="dot"
        onMouseEnter={handleClick}
      >
        <Avatar alt="Teledyne" src={teledyne} />
      </StyledBadge>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
      >
        <MenuList onMouseLeave={handleClose}>
        <StyledMenuItem onClick={() => history.push("/profile")}>
          <ListItemIcon>
            <AccountCircleIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Votre profile" />
        </StyledMenuItem>
        <StyledMenuItem onClick={() => history.push("/controls")}>
          <ListItemIcon>
            <DoneOutlineIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Tracabilité" />
        </StyledMenuItem>
        <StyledMenuItem onClick={() => history.push("/data")}>
          <ListItemIcon>
            <CloudIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Vos données" />
        </StyledMenuItem>
        <StyledMenuItem onClick={() => signout()}>
          <ListItemIcon>
            <ExitToApp fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Se déconnecter" />
        </StyledMenuItem>

        </MenuList>
      </StyledMenu>
    </Box>
  );
}
