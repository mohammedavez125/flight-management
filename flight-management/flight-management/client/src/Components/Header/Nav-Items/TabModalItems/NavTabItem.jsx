import {
  Box,
  Button,
  ButtonGroup,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Icon,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { display } from "@mui/system";
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import styled, { keyframes } from "styled-components";
import { set } from "date-fns";
import { FcGoogle } from "react-icons/fc";
import { CiBadgeDollar } from "react-icons/ci";

const styles = makeStyles({
  personalAccount: {
    background: "linear-gradient(93deg,#53b2fe,#065af3)",
    color: "#FFF",
    width: "50%",
    textTransform: "uppercase",
    borderRadius: "150px",
    padding: "5px 15px",
    fontSize: "15px",
    lineHeight: "15px",
  },
  nonActive: {
    color: "black",
    textTransform: "uppercase",
    width: "50%",
    padding: "5px 15px",
    fontSize: "15px",
  },
  myBizAccount: {
    background: "linear-gradient(93deg,#f0772c,#f95776);",
    color: "#FFFFFF",
    width: "50%",
    textTransform: "uppercase",
    borderRadius: "150px",
    padding: "5px 15px",
    fontSize: "15px",
    lineHeight: "15px",
  },
});
const NavTabItem = (props) => {
  const [openOffer, setOpenOffer] = useState(false);
  const [openTrips, setOpenTrips] = useState(false);
  const [offerText, setOfferText] = useState(
    "Login for great deals and offers"
  );

  const classes = styles();
  const [tripPopUp, setTripPopUp] = useState(false);
  const handleTripPopUp = () => {
    setTripPopUp(true);
  };
  const closeTripPopUp = () => {
    setTripPopUp(false);
  };
  const handleOfferDialogue = (props) => {
    setOpenOffer(true);
  };

  const handleTripDialogue = (props) => {
    setOpenTrips(true);
  };

  const closeTripDialogue = (props) => {
    setOpenTrips(false);
  };

  const closeOfferDialogue = (props) => {
    setOpenOffer(false);
  };

  const blink = keyframes`
  0%{transform:translateY(-1000px) scaleY(2.5) scaleX(.2);transform-origin:50% 0;filter:blur(40px);opacity:0}100%{transform:translateY(0) scaleY(1) scaleX(1);transform-origin:50% 50%;filter:blur(0);opacity:1}
    `;

  const BlinkList = styled.div`
    font-size: 22px;
    animation: ${blink} 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;
    width: "100%";
    height: "10%";
  `;

  return (
    <React.Fragment>
      <Box
        sx={{
          width: { xs: "20%", sm: "20%", md: "25%", lg: "25%" },
          flexBasis: { xs: "30%", md: "30%", sm: "30%", lg: "20%" },
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          gap: { xs: 0, sm: 1, md: 2, lg: 2 },
          flexDirection: { xs: "column", sm: "row", md: "row", lg: "row" },
        }}
        onClick={
          props.value === "offers" ? handleOfferDialogue : handleTripDialogue
        }
      >
        <Box
          sx={{
            w: { xs: "100%", lg: "25%" },
            minHeight: { xs: "50%", lg: "auto" },
            display: "flex",
            fontSize: { xs: "30px", md: "33px", lg: "25px" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {props.icon}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            w: { xs: "100%", lg: "80%" },
            height: { sm: 64, md: 64, lg: 64 },
            justifyContent: { sm: "center", md: "center", lg: "center" },
            cursor: "pointer",
            alignItems: { xs: "center" },
          }}
        >
          <Typography
            sx={{
              fullWidth: { xs: true },
              height: "50%",
              display: "flex",
              alignItems: { sm: "end", md: "end", lg: "end" },
              // width:"75%",
              textAlign: { xs: "center", lg: "end" },
              fontSize: { xs: "12px", sm: 11, lg: "12px" },
              fontWeight: { lg: "500", md: "500", xs: "300" },
              component: "p",
            }}
          >
            {props.heading}
          </Typography>
          <Typography
            sx={{
              height: "50%",
              display: { xs: "none", sm: "flex", md: "flex", lg: "flex" },
              variant: "subtitle",
              // width:"80%",
              textAlign: { lg: "end" },
              fontSize: { md: "8.5px", lg: "8.5px", sm: 9 },
            }}
          >
            {props.description}
          </Typography>
        </Box>
      </Box>

      <Dialog onClose={closeOfferDialogue} open={openOffer}>
        <DialogTitle
          sx={{
            width: "580px",
            height: "120px",
            backgroundColor: "#B9D9EB",
          }}
        >
          <Box
            width={"100%"}
            display="flex"
            height={"100%"}
            padding="15px 5px"
            gap={"5%"}
          >
            <Typography fullWidth>Exciting Offers</Typography>
          </Box>
        </DialogTitle>
        <DialogContent
          sx={{
            minHeight: "400px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              padding: "20px 40px",
              mt: "10px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <Typography fullWidth variant="h5">
              Comming Soon...
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>

      <Dialog onClose={closeTripDialogue} open={openTrips}>
        <DialogTitle
          sx={{
            width: "580px",
            height: "120px",
            backgroundColor: "#B9D9EB",
          }}
        >
          <Box
            width={"100%"}
            display="flex"
            height={"100%"}
            flexDirection={"column"}
            gap={"5%"}
          >
            <Box
              width="100%"
              height={"100%"}
              padding="2.5% 5%"
              display={"flex"}
              flexDirection="row"
              justifyContent={"center"}
              alignItems="center"
            >
              <Box
                fullWidth
                sx={{
                  width: "90%",
                  height: "40px",
                  borderRadius: "51px",
                  boxShadow: "0 1px 7px 0 rgb(0 0 0 / 30%)",
                  padding: "1% 2%",
                  backgroundColor: "white",
                  display: "flex",
                }}
              >
                <Button
                  className={
                    tripPopUp ? classes.nonActive : classes.personalAccount
                  }
                  variant={tripPopUp ? "text" : "contained"}
                  onClick={closeTripPopUp}
                >
                  Personal Account
                </Button>
                <Button
                  className={
                    tripPopUp ? classes.myBizAccount : classes.nonActive
                  }
                  onClick={handleTripPopUp}
                  variant={tripPopUp ? "conatined" : "text"}
                >
                  myBiz Account
                </Button>
              </Box>
            </Box>
          </Box>
        </DialogTitle>
        <DialogContent
          sx={{
            minHeight: "400px",
          }}
        >
          {tripPopUp ? (
            <Box
              sx={{
                width: "100%",
                padding: "20px 40px",
                mt: "10px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <Typography fullWidth variant="h4">
                Login/Signup
              </Typography>

              <Box
                width={"100%"}
                display="flex"
                padding={"0px 5px"}
                justifyContent={"space-between"}
              >
                <span style={{ fontSize: "14px" }}>Work E-mail</span>
                <span style={{ color: "#ff664b", fontSize: "14px" }}>
                  Forgot Login Id?
                </span>
              </Box>

              <Box width={"100%"} display="flex" gap={"5%"}>
                <TextField
                  label="Work Email"
                  placeholder="Enter your work e-mail id"
                  sx={{
                    flexBasis: "70%",
                  }}
                />
                <Button
                  variant="contained"
                  width="30%"
                  sx={{
                    fontSize: "15px",
                    textTransform: "uppercase",
                    borderRadius: "10px",
                    flexBasis: "30%",
                  }}
                >
                  Continue
                </Button>
              </Box>

              <Typography
                fullWidth
                textAlign={"center"}
                textTransform={"uppercase"}
                variant="overline"
              >
                OR USE YOUR BUSINESS ACCOUNT WITH
              </Typography>

              <Box
                sx={{
                  width: "100%",
                  height: "50px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <IconButton>
                  <FcGoogle fontSize={"22px"} />
                </IconButton>
              </Box>

              <Typography fullWidth variant="caption" textAlign={"center"}>
                <span>By proceeding, you agree to MakeMyTrip's </span>
                <span style={{ color: "#ff664b" }}>T&Cs </span>
                <span>and </span>
                <span style={{ color: "#ff664b" }}>Privacy</span>
              </Typography>
            </Box>
          ) : (
            <Box
              sx={{
                width: "100%",
                padding: "20px 40px",
                mt: "10px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <TextField
                fullWidth
                label="E-mail or Mobile Number"
                placeholder="Enter E-mail or Mobile number"
              />
              <Button
                variant="contained"
                width="100%"
                sx={{
                  fontSize: "18px",
                  textTransform: "uppercase",
                  borderRadius: "8px",
                }}
              >
                Continue
              </Button>
              <Box
                sx={{
                  width: "100%",
                  mt: "10px",
                  display: "flex",
                }}
              >
                <Divider width="35%" />
                <Typography
                  width={"30%"}
                  textAlign="center"
                  fontSize="11px"
                  position={"relative"}
                  top="8.5px"
                  variant="subtitle1"
                >
                  Or Login/Signup With
                </Typography>
                <Divider width="35%" />
              </Box>
              <Box
                sx={{
                  width: "100%",
                  height: "50px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <IconButton>
                  <FcGoogle fontSize={"22px"} />
                </IconButton>
              </Box>
              <Typography
                mt="10px"
                component={"span"}
                textAlign="center"
                fontSize="12px"
                variant="subtitle2"
              >
                <span>By proceeding, you agree to MakeMyTrip's </span>
                <span style={{ color: "skyblue" }}>Privacy Policy </span>
                <span>,</span>
                <span style={{ color: "skyblue" }}>User Agreement </span>
                <span>and </span>
                <span style={{ color: "skyblue" }}>T&Cs</span>
              </Typography>
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default NavTabItem;
