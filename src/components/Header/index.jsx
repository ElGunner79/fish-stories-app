import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Logo from '../../images/fishstories-logo-white.svg'
import { styled } from '@mui/material/styles';
import { Link as RouterLink, NavLink, Link } from "react-router-dom";
import Button from "@mui/material/Button";

const LogoLink = styled(Link)({
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  color: "inherit",
  flexGrow: 1,
});

const LogoImg = styled('img')(() => ({
  width: 150,
  height: 80,
  marginTop: 5,
  marginBottom: 5,
  marginLeft: 'auto',
  marginRight: 10,

  '@media (max-width:640px)': {
    width: 120,
    height: 50
  }
}));

const HeaderLink = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  textDecoration: 'none',
  color: 'inherit'
}));

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <nav>
          <HeaderLink component={NavLink} to="/videos" sx={{flexGrow: 1}}>VIDEOS</HeaderLink>
          <HeaderLink component={NavLink} to="/playback" sx={{flexGrow: 1}}>WATCHING</HeaderLink>
          <HeaderLink component={NavLink} to="/catchmap" sx={{flexGrow: 1}}>CATCH MAP</HeaderLink>
          <HeaderLink component={NavLink} to="/upload" sx={{flexGrow: 1}}>UPLOAD VIDEO</HeaderLink>
          <HeaderLink component={NavLink} to="/addlocation" sx={{flexGrow: 1}}>ADD LOCATION</HeaderLink>
          <HeaderLink component={NavLink} to="/" sx={{flexGrow: 1}}>LOG OUT</HeaderLink>
        </nav>
         <LogoLink component={RouterLink} to="/videos">
          <LogoImg src={Logo} alt="Fishstories white logo" /> {/* Updated position */}
        </LogoLink>
      </Toolbar>
    </AppBar>
  );
};

export default Header;