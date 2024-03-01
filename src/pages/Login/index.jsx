import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Logo from "../../images/fishstories-logo-color.svg";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "../../components/Footer";
import LoginVideo from "../../components/LoginVideo";
import { useAuth, login } from "../../features/AuthManager/AuthContext";
import Loader from "../../components/Loader";
import Alert from "@mui/material/Alert";
import { Navigate } from "react-router-dom";

const defaultTheme = createTheme();

const LogoImg = styled("img")(() => ({
  width: 396,
  height: 198,
  marginTop: 10,
  marginBottom: 10,
  margin: "auto",

  "@media (max-width:640px)": {
    width: "auto",
    height: "auto",
  },
}));

export default function SignIn() {
  const {
    state: { isAuthenticated, loading, error },
    dispatch,
  } = useAuth().value;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    const user = {
      email: data.get("email"),
      password: data.get("password"),
    };
    console.log(user);
    await login(dispatch, user.email, user.password);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        {loading ? <Loader /> : null}
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100",
            
          }}
        >
          <LogoImg src={Logo} alt="Fishstories color logo" />
          &nbsp;{/* Non-breaking space */}
          <LoginVideo />
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Grid container>
              <Grid container justifyContent="space-between">
                <Grid item>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                      mt: 3,
                      mb: 2,
                      backgroundColor: "grey",
                      borderColor: "#57D5CE",
                      borderWidth: 1,
                    }}
                  >
                    LOG IN
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    component={Link}
                    to="/signup"
                    fullWidth
                    variant="contained"
                    sx={{
                      mt: 3,
                      mb: 2,
                      backgroundColor: "grey",
                      borderColor: "#57D5CE",
                    }}
                  >
                    SIGN UP
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            {error && <Alert severity="error">{error}</Alert>}
          </Box>
        </Box>
      </Container>
      <Footer />
      {isAuthenticated && <Navigate to="/videos" />}
    </ThemeProvider>
  );
}
