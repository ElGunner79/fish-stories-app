import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Logo from "../../images/fishstories-logo-white.svg";
import { styled } from "@mui/material/styles";
import { Link as RouterLink, NavLink, Link } from "react-router-dom";
import Button from "@mui/material/Button";
import ThemeSwitch from "../ThemeSwitch";
import { useNavigate } from "react-router-dom";
import { useAuth, logout } from "../../features/AuthManager/AuthContext";

const drawerWidth = 150;

const LogoLink = styled(Link)({
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  color: "inherit",
  // flexGrow: 1,
  width: 160,
  height: 90,
  marginTop: 5,
  marginBottom: 5,
  marginLeft: "auto",
  "@media (max-width:640px)": {
    width: 130,
    height: 60,
  },
});

const LogoImg = styled("img")(() => ({
  width: 160,
  height: 90,
  marginTop: 5,
  marginBottom: 5,
  marginLeft: "auto",
  // marginRight: 10,

  "@media (max-width:640px)": {
    width: 120,
    height: 50,
  },
}));

const HeaderLink = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  textDecoration: "none",
  color: "inherit",
  opacity: 1, // BEGIN: Added opacity property
  "&:not(.active)": {
    opacity: 0.7, // BEGIN: Set opacity for unselected links
  },
}));

const LogoutButton = styled(Button)({
  textDecoration: "none",
  color: "inherit",
  opacity: 1, // BEGIN: Added opacity property
  "&:not(.active)": {
    opacity: 0.7, // BEGIN: Set opacity for unselected links
  },
});

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();
  const { authState, dispatch } = useAuth().value;

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleLogout = () => {
    logout(dispatch);
    navigate("/");
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        FISHSTORIES
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton
            component={NavLink}
            to="/videos"
            sx={{ textAlign: "center" }}
          >
            <ListItemText primary="VIDEOS" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            component={NavLink}
            to="/playback"
            sx={{ textAlign: "center" }}
          >
            <ListItemText primary="WATCHING" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            component={NavLink}
            to="/catchmap"
            sx={{ textAlign: "center" }}
          >
            <ListItemText primary="CATCH MAP" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            component={NavLink}
            to="/upload"
            sx={{ textAlign: "center" }}
          >
            <ListItemText primary="UPLOAD VIDEO" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            component={NavLink}
            to="/addlocation"
            sx={{ textAlign: "center" }}
          >
            <ListItemText primary="ADD LOCATION" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            component={NavLink}
            to="/"
            sx={{ textAlign: "center" }}
          >
            <ListItemText primary="LOG OUT" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backgroundImage: `linear-gradient(to bottom, #57D5CE, #57D5CE)`,
        }}
        elevation={0}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <nav>
              <HeaderLink component={NavLink} to="/videos" sx={{ flexGrow: 1 }}>
                VIDEOS
              </HeaderLink>
              <HeaderLink
                component={NavLink}
                to="/playback"
                sx={{ flexGrow: 1 }}
              >
                WATCHING
              </HeaderLink>
              <HeaderLink
                component={NavLink}
                to="/catchmap"
                sx={{ flexGrow: 1 }}
              >
                CATCH MAP
              </HeaderLink>
              <HeaderLink component={NavLink} to="/upload" sx={{ flexGrow: 1 }}>
                UPLOAD VIDEO
              </HeaderLink>
              <HeaderLink
                component={NavLink}
                to="/addlocation"
                sx={{ flexGrow: 1 }}
              >
                ADD LOCATION
              </HeaderLink>
              <LogoutButton onClick={handleLogout}>LOG OUT</LogoutButton>
            </nav>
          </Box>
          <ThemeSwitch />
          <LogoLink component={RouterLink} to="/videos">
            <LogoImg src={Logo} alt="Fishstories white logo" />
          </LogoLink>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

export default DrawerAppBar;
