import { useUser, createUser } from "../../UserContext";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Loader from "../../../../components/Loader";
import Alert from "@mui/material/Alert";

const UserAdd = () => {
  const {
    state: { itemError, itemLoading },
    dispatch,
  } = useUser().value;

  const addUser = async (event) => {
    event.preventDefault();

    // get form values
    const name = event.target.name.value;
    const surname = event.target.surname.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    // const avatar = event.target.avatar.files[0];

    // create form data
    const formData = new FormData();
    formData.append("name", name);
    formData.append("surname", surname);
    formData.append("email", email);
    formData.append("password", password);
    // formData.append("avatar", avatar);

    await createUser(dispatch, formData);
  };

  return itemLoading ? (
    <Loader />
  ) : itemError ? (
    <Alert severity="error" message={itemError} />
  ) : (
    <form onSubmit={addUser}>
      <TextField
        fullWidth
        required
        id="name"
        name="name"
        label="Required"
        placeholder="First Name"
        margin="normal"
      />
      <TextField
        fullWidth
        required
        id="surname"
        name="surname"
        label="Required"
        placeholder="Last Name"
        margin="normal"
      />
      <TextField
        fullWidth
        required
        id="email"
        name="email"
        type="email"
        label="Required"
        placeholder="Email Address"
        margin="normal"
      />
      <TextField
        fullWidth
        required
        id="password"
        name="password"
        type="password"
        label="Required"
        placeholder="Password"
        margin="normal"
      />
      {/* <TextField
        fullWidth
        id="avatar"
        name="avatar"
        type="file"
        margin="normal"
        placeholder="Please upload your avatar"
      /> */}
      <Button type="submit" variant="outlined">
        SIGN UP
      </Button>
    </form>
  );
};

export default UserAdd;
