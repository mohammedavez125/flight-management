import { Box, Paper, Tab, Tabs } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { margin } from "@mui/system";
import { Navigate, useNavigate } from "react-router";

import React, { useState } from "react";
import { ImAirplane } from "react-icons/im";
import { MdHotel } from "react-icons/md";
import { RiTrainFill } from "react-icons/ri";
import { Link, unstable_HistoryRouter } from "react-router-dom";
import { grey } from "@mui/material/colors";

const useStyles = makeStyles((theme) => ({
  tabs: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: { xs: "90%", lg: "20%" },
    height: "64%",
    color: grey[700],
    // marginTop:'3%',
    borderRadius: "8px",
    // boxShadow: '0 1px 7px 0 rgb(0 0 0 / 40%)',
    zIndex: "2",
  },
  darkMode: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "20%",
    height: "64%",
    color: grey[100],
    // marginTop:'3%',
    borderRadius: "8px",
    // boxShadow: '30px 20px 20px 20px rgb(0 0 0 / 40%)',
    zIndex: "2",
  },
}));

const TabBox = ({ activeTab, setActiveTab, darkMode }) => {
  const navigate = useNavigate();

  const classes = useStyles();
  const handleTabClick = (e, newValue) => {
    console.log(newValue);
    setActiveTab(newValue);
  };
  const routes = ["/flights", "/trains", "/hotels"];

  const goToFlights = () => {
    navigate("/flights");
  };
  return (
    <React.Fragment>
      <Box
        height={"40%"}
        w="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Paper
          sx={{
            mt: { lg: "3%", xs: "0.5%" },
          }}
          className={darkMode ? classes.darkMode : classes.tabs}
          // height={'64px'}
          // w='70%'
          // sx={{

          // }}
        >
          <Tabs value={activeTab} onChange={handleTabClick}>
            <Tab
              icon={<ImAirplane fontSize={"25px"} />}
              label="Filghts"
              component={Link}
              to={routes[0]}
              value={0}
            />

            <Tab
              icon={<RiTrainFill fontSize={"25px"} />}
              label="Trains"
              component={Link}
              to={routes[1]}
              // onClick={handleTabClick}
              value={1}
            />

            <Tab
              icon={<MdHotel fontSize={"25px"} />}
              label="Hotels"
              component={Link}
              to={routes[2]}
              // onClick={handleTabClick}
              value={2}
            ></Tab>
          </Tabs>
        </Paper>
      </Box>
    </React.Fragment>
  );
};

export default TabBox;
