import { Padding } from "@mui/icons-material";
import {
  Box,
  css,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Icon,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { CiBadgeDollar } from "react-icons/ci";
import { FaHiking } from "react-icons/fa";
import styled, { keyframes } from "styled-components";
import MyBiz from "./MyBiz";
import NavTabItem from "./NavTabItem";

const styles = makeStyles({});
const NavTab = () => {
  const classes = styles();
  const [openBiz, setOpenBiz] = useState(false);
  const rotateCenter = keyframes`
    0%{transform:rotateY(0)}100%{transform:rotateY(180deg)}
    `;
  const OfferIcon = styled.i`
    font-size: 30px;
    color: #ffffff;
    animation: ${rotateCenter} 0.7s ease-out infinite backwards;
  `;
  return (
    <React.Fragment>
      <Box
        sx={{
          width: { xs: "60%", sm: "60%", md: "65%", lg: "65%" },
          height: "auto",
          display: "flex",
          justifyContent: { xs: "space-around", lg: "center" },
          alignItems: "center",
          gap: { xs: "1px", lg: "15px" },
          flexBasis: { lg: "70%", md: "70%", sm: "75%", xs: "75%" },
          padding: { xs: "0px 25px", sm: "0px 0px" },
        }}
      >
        <NavTabItem
          OfferIcon={OfferIcon}
          value="offers"
          icon={<CiBadgeDollar />}
          heading="Super offers"
          description="Explore great deals and offers"
        />
        <MyBiz value="myBiz" />
        <NavTabItem
          value="trips"
          icon={<FaHiking />}
          heading="MyTrips"
          description="Manage Your Bookings"
        />
      </Box>
    </React.Fragment>
  );
};

export default NavTab;
