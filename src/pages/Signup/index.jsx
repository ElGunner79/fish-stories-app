import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useUser, createUser } from "../../features/UserManager/UserContext";
import Loader from "../../components/Loader";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";

const defaultTheme = createTheme();

export default function SignUp() {
  const { dispatch, state: { itemLoading, itemError } } = useUser().value;
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      name: data.get("name"),
      surname: data.get("surname"),
      email: data.get("email"),
      password: data.get("password"),
    });
    await createUser(dispatch, {
      name: data.get("name"),
      surname: data.get("surname"),
      email: data.get("email"),
      password: data.get("password"),
    });
    navigate("/");
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        {itemLoading ? <Loader /> :
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              component="h1"
              variant="h5"
              style={{ color: "white" }}
            >
              SIGN UP
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="name"
                    required
                    fullWidth
                    id="name"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="surname"
                    label="Last Name"
                    name="surname"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
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
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link
                    href="/"
                    variant="body2"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>}
        {itemError && <Alert severity="error">{itemError}</Alert>}
      </Container>
    </ThemeProvider>
  );
}

// import UserManager from "../../features/UserManager";
// import Grid from "@mui/material/Grid";
// import Button from "@mui/material/Button";
// import { Link } from "react-router-dom";
// import Typography from "@mui/material/Typography";

// const Users = () => {
//   return (
//     <Grid container>
//       <Grid item xs={12} sm={6}>
//         <Typography variant="h4">Users</Typography>
//       </Grid>
//       <Grid item xs={12} sm={6} container justifyContent={"flex-end"}>
//         <Link to="/users/add">
//           <Button variant="outlined" >
//             Add User
//           </Button>
//         </Link>
//       </Grid>
//       <Grid item xs={12}>
//         <UserManager />
//       </Grid>
//     </Grid>
//   );
// };

// export default Users;