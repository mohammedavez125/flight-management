import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import logo from "./logo.png";

import { AppBar, Box, Container, Toolbar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import LogoBox from "./Nav-Items/LogoBox";
import NavTab from "./Nav-Items/TabModalItems/NavTab";
import UserTab from "./Nav-Items/UserTab";

const useStyles = makeStyles({});

const Header = ({ setDarkMode, darkMode }) => {
  const [mailId, setMailId] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setMailId(localStorage.getItem("email"));
    setPassword(localStorage.getItem("password"));
  }, []);
  const classes = useStyles();
  //   const navigate = useNavigate();
  let username = localStorage.getItem("username");

  return (
    <React.Fragment>
      <AppBar>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: {
              lg: "space-betweeen",
              md: "space-evenly",
              sm: "space-between",
            },
          }}
        >
          {/* <Box  
                      sx={{
                        display:'flex',
                        width:{xs:'100%',sm:'100%',md:'80%',lg:'80%'},
                        justifyContent:{xs:'',sm:'',md:'center',lg:'center'},
                        paddingLeft:'5%',
                        paddingRight:'5%'
                      }}
                      className={classes.navbar}> */}

          <LogoBox />
          <NavTab />
          <UserTab
            username={username}
            setDarkMode={setDarkMode}
            darkMode={darkMode}
          />
          {/* </Box> */}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
