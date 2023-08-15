import { KeyboardArrowDownSharp } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { AiOutlinePoweroff, AiOutlineUser } from "react-icons/ai";
import { MdLightMode } from "react-icons/md";
import { GiNightSleep } from "react-icons/gi";
import { useNavigate } from "react-router";
import { FaUserCircle } from "react-icons/fa";
import { display } from "@mui/system";
const UserTab = (props) => {
  const navigate = useNavigate();
  const [anchorE, setAnchorE] = useState(null);
  const open = Boolean(anchorE);
  const handleUserTab = (e) => {
    setAnchorE(e.currentTarget);
  };
  const handleCloseUserTab = (e) => {
    setAnchorE(null);
  };
  const handleLogout = () => {
    navigate("/");
  };
  return (
    <React.Fragment>
      <Box
        sx={{
          width: { xs: "100%", sm: "100%", md: "20%", lg: "20%" },
          display: "flex",
          flexBasis: { xs: "15%", sm: "15%", md: "15%", lg: "15%" },
          justifyContent: { xs: "end", sm: "end", md: "end", lg: "flex-start" },
          alignItems: { xs: "center", md: "end", lg: "center" },
          gap: { md: 0, lg: "50px" },
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "100%", md: "55%", lg: "55%" },
            height: { xs: "50%", lg: "90%" },
            display: "flex",
            justifyContent: {
              xs: "end",
              sm: "center",
              md: "center",
              lg: "initial",
            },
            alignItems: { xs: "end", lg: "center" },
          }}
        >
          <Button
            sx={{
              fontSize: "12px",
              display: { xs: "none", sm: "none", md: "none", lg: "flex" },
              textAlign: { xs: "center", md: "end" },
              textOverflow: { xs: "ellipsis" },
            }}
            color="inherit"
            id="user-button"
            // startIcon={<AiOutlineUser/>}
            endIcon={<KeyboardArrowDownSharp />}
            onClick={handleUserTab}
            aria-control={open ? "userTab" : undefined}
            aria-haspopup={true}
            aria-expanded={open ? "true" : undefined}
          >
            {`Hello ${props.username}`}
          </Button>
          <Button
            sx={{
              fontSize: { xs: 30, sm: 30, md: 30 },
              textAlign: { xs: "center" },
              textOverflow: { xs: "ellipsis" },
              display: { xs: "flex", sm: "flex", md: "flex", lg: "none" },
            }}
            color="inherit"
            id="user-button"
            // startIcon={<AiOutlineUser/>}

            endIcon={<KeyboardArrowDownSharp />}
            onClick={handleUserTab}
            aria-control={open ? "userTab" : undefined}
            aria-haspopup={true}
            aria-expanded={open ? "true" : undefined}
          >
            <FaUserCircle />
          </Button>
          <Menu
            id="userTab"
            open={open}
            onClose={handleCloseUserTab}
            anchorEl={anchorE}
            MenuListProps={{
              "aria-labelledby": "user-button",
            }}
            // sx={{
            //     display:'flex',
            //     justifyContent:'center'
            // }}
          >
            <MenuItem sx={{ display: "flex" }}>
              <Typography
                sx={{
                  fontSize: 20,
                  display: {
                    xs: "block",
                    sm: "block",
                    md: "block",
                    lg: "none",
                  },
                }}
              >
                Display Mode :
              </Typography>
              <IconButton
                onClick={() => props.setDarkMode(!props.darkMode)}
                sx={
                  props.darkMode
                    ? {
                        w: { lg: "50%" },
                        color: "white",
                        display: {
                          xs: "block",
                          sm: "block",
                          md: "block",
                          lg: "none",
                        },
                        flex: 1,
                      }
                    : {
                        color: "#ffd600",
                        display: {
                          xs: "block",
                          sm: "block",
                          md: "block",
                          lg: "none",
                        },
                        flex: 1,
                      }
                }
              >
                {props.darkMode ? <GiNightSleep /> : <MdLightMode />}
              </IconButton>
            </MenuItem>
            <MenuItem>
              <Typography
                sx={{
                  fontSize: 13,
                  display: {
                    xs: "block",
                    sm: "block",
                    md: "block",
                    lg: "none",
                  },
                }}
              >
                {`Hello ${props.username}`}
              </Typography>
            </MenuItem>
            <MenuItem
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button onClick={handleLogout} variant="outlined" color="primary">
                Logout
              </Button>
            </MenuItem>
          </Menu>
        </Box>
        <IconButton
          onClick={() => props.setDarkMode(!props.darkMode)}
          sx={
            props.darkMode
              ? {
                  w: { lg: "50%" },
                  color: "white",
                  display: { xs: "none", sm: "none", md: "none", lg: "flex" },
                }
              : {
                  color: "#ffd600",
                  display: { xs: "none", sm: "none", md: "none", lg: "flex" },
                }
          }
        >
          {props.darkMode ? <GiNightSleep /> : <MdLightMode />}
        </IconButton>
      </Box>
    </React.Fragment>
  );
};

export default UserTab;
