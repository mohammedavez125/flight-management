import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  Button,
  Collapse,
  Divider,
  FormControl,
  IconButton,
  Link,
  Paper,
  TextField,
} from "@mui/material";
import { Stack } from "@mui/system";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const Login = ({ darkMode }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [signupUser, setSignupUser] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [open, setOpen] = React.useState("");

  const navigate = useNavigate();
  const handleUserDetails = (e) => {
    if (username) {
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      localStorage.setItem("username", username);
    }
    e.preventDefault();
    if (!email && !password) {
      setOpen("warn");
      setTimeout(() => {
        setOpen("");
      }, 2000);
    } else if (
      email === localStorage.getItem("email") &&
      password === localStorage.getItem("password")
    ) {
      navigate("flights");
    } else {
      setOpen("error");
      setTimeout(() => {
        setOpen("");
      }, 2000);
    }
  };

  return (
    <React.Fragment>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100vw",
          height: { xs: "100vh", sm: "90vh" },
          alignItems: "center",
        }}
      >
        <Collapse
          in={open === "warn"}
          sx={{ width: { xs: "95%", sm: "85%", md: "75%", lg: "50%" } }}
        >
          <Alert severity="warning" sx={{ mb: 2, width: "100%" }}>
            <AlertTitle>Enter User Credentials</AlertTitle>
            Please enter — <strong>User Email or Password</strong>
          </Alert>
        </Collapse>
        <Collapse
          in={open === "error"}
          sx={{ width: { xs: "95%", sm: "85%", md: "75%", lg: "50%" } }}
        >
          <Alert severity="error" sx={{ mb: 2, width: "100%" }}>
            <AlertTitle>Incorrect User Email Or Password</AlertTitle>
            Please Enter Correct Email or Password
          </Alert>
        </Collapse>
        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            background: "gray",
            width: { xs: "90%", sm: "60%", md: "40%", lg: "30%" },
            height: "90%",
            mt: { xs: "2vh", sm: "10vh" },
            borderRadius: "10px",
            backgroundColor: "#fff",
            boxShadow: "2px 5px 20px rgb(0 0 0 / 10%)",
          }}
        >
          <Paper
            sx={{
              width: "100%",
              height: "100%",
              padding: "35px 15px",
            }}
          >
            <Typography variant="h4" textAlign="center">
              {!signupUser ? "Log In" : "Sign Up"}
            </Typography>
            <Typography variant="subtitle2" component={"p"} textAlign="center">
              {signupUser ? "If you have an account" : "Don't have an account?"}
              <Button variant="text" onClick={() => setSignupUser(!signupUser)}>
                {signupUser ? "Log In" : "sign Up"}
              </Button>
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <Divider sx={{ m: "7px" }}>
                <Typography
                  position={"relative"}
                  sx={{ display: { xs: "flex" } }}
                  top={"13px"}
                  fontSize={"15px"}
                  variant="subtitle2"
                  width={"100%"}
                  component={"p"}
                  textAlign="center"
                >
                  Or Sign in with
                </Typography>
              </Divider>
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    width: "50%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <IconButton color="primary">
                    <FcGoogle />
                  </IconButton>
                  <Typography
                    fontWeight="600"
                    width={"100%"}
                    variant="caption"
                    textAlign={"center"}
                  >
                    Google
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: "50%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <IconButton color="primary">
                    <BsFacebook />
                  </IconButton>
                  <Typography
                    width={"100%"}
                    variant="caption"
                    textAlign={"center"}
                    fontWeight="600"
                  >
                    Facebook
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Divider sx={{ m: "7px" }} />
            <Stack direction={"column"} marginTop={"40px"} gap="20px">
              {signupUser && (
                <React.Fragment>
                  <TextField
                    label="Username"
                    variant="outlined"
                    placeholder="Enter Username"
                    width="100%"
                    required
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                      console.log(username);
                    }}
                  />
                </React.Fragment>
              )}
              <TextField
                label="Email"
                variant="outlined"
                placeholder="Enter email"
                width="100%"
                required
                type={"email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FormControl sx={{ m: 0, width: "100%" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  placeholder="Enter Password"
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
            </Stack>
            <Stack
              marginTop={"40px"}
              display={"flex"}
              flexDirection={"column"}
              width={"100%"}
              alignItems="center"
              gap={"20px"}
            >
              <Button
                variant="contained"
                onClick={handleUserDetails}
                sx={{ width: "75%" }}
              >
                {signupUser ? "Register" : "Log In"}
              </Button>
              <Link href="#" underline="hover">
                Forgot Password
              </Link>
            </Stack>
          </Paper>
        </Paper>
      </Container>
    </React.Fragment>
  );
};

export default Login;
