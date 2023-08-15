import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Divider,
  Icon,
  Paper,
  Typography,
} from "@mui/material";
import { Container, Stack } from "@mui/system";
import React, { useState } from "react";
import { MdHotel } from "react-icons/md";
import { HiCurrencyRupee } from "react-icons/hi";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import styled from "styled-components";

const HotelSearchResult = ({
  city,
  cityData,
  guests,
  checkInDate,
  checkOutDate,
  hotelsProps,
  filteredHotels,
  handlepayment,
  darkMode,
  lightTheme,
  darkTheme,
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  function getFormattedDate(date) {
    var year = date.getFullYear();

    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : "0" + month;

    var day = date.getDate().toString();
    day = day.length > 1 ? day : "0" + day;

    return day + "/" + month + "/" + year;
  }

  return (
    <React.Fragment>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingLeft: "0px",
          }}
        >
          <Box
            sx={{
              width: "90%",
            }}
          >
            {console.log(filteredHotels)}
            {filteredHotels.length > 0 ? (
              filteredHotels.map((data, index) => (
                <React.Fragment>
                  <Accordion
                    expanded={expanded === `panel${index + 1}`}
                    onChange={handleChange(`panel${index + 1}`)}
                    sx={{
                      padding: { xs: "0px 0px", lg: "0px 50px" },
                      width: "100%",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                    >
                      <Stack
                        direction={"row"}
                        sx={{
                          display: "flex",
                          gap: { lg: "72px", xs: "18px", md: "72px" },
                          flexGrow: "",
                          justifyContent: { md: "space-between" },
                          alignItems: "center",
                          "& .MuiAccordionSummary-root": {
                            padding: "0px",
                          },
                        }}
                      >
                        <Icon
                          sx={
                            darkMode
                              ? {
                                  fontSize: "30px",
                                  color: "#e91e63",
                                  width: "5%",
                                }
                              : {
                                  fontSize: "30px",
                                  color: "#1976d2",
                                  width: "5%",
                                }
                          }
                        >
                          <MdHotel />
                        </Icon>
                        <Typography
                          textAlign={"center"}
                          sx={{
                            width: "10%",
                            fontSize: { lg: "17px", md: "15px", xs: 14 },
                          }}
                        >
                          {data.city}
                        </Typography>

                        <Typography
                          sx={{
                            textAlign: "center",
                            fontWeight: "300",
                            width: "18%",
                            variant: "subtitle2",
                            fontSize: { lg: "14px", md: "14px", xs: 12 },
                          }}
                          component={"p"}
                        >{`Hotel : ${data.hotel_name}`}</Typography>
                        <Box
                          display={"flex"}
                          flexDirection="column"
                          width="30%"
                        >
                          <Typography
                            sx={{
                              textAlign: "center",
                              fontSize: { lg: "15px", md: "14px", xs: "13px" },
                            }}
                            component={"p"}
                          >
                            Check-in : {getFormattedDate(checkInDate)}
                          </Typography>
                          <Divider />
                          <Typography
                            sx={{
                              textAlign: "center",
                              fontSize: { lg: "15px", md: "14px", xs: "13px" },
                            }}
                            component={"p"}
                          >
                            Check-out : {getFormattedDate(checkOutDate)}
                          </Typography>
                        </Box>
                        <Typography
                          sx={{
                            textAlign: "center",
                            fontSize: { lg: "15px", md: "14px", xs: "13px" },
                          }}
                          width={"10%"}
                          variant="h5"
                        >
                          <strong>Room type</strong>
                          <br />
                          {`${data.room_type}`}
                        </Typography>
                      </Stack>
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{
                        padding: {
                          lg: "0px 100px",
                          xs: "0px 0px",
                          md: "0px 80px",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: { lg: "3px", xs: "2px" },
                            width: { lg: "50%", xs: "48%" },
                          }}
                          fullWidth
                        >
                          <Typography
                            component="p"
                            sx={{
                              width: "100%",
                            }}
                          >
                            Hotel Details :
                          </Typography>
                          <Typography
                            sx={{
                              fontWeight: "600",
                              fontSize: { lg: "16px", xs: "13px" },
                              p: { lg: "0px 30px", xs: "0px 15px" },
                            }}
                            component={"p"}
                            variant="h4"
                            fontSize="16px"
                            p={"0px 30px"}
                          >
                            {`City : ${data.city}`}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: { lg: "14px", xs: "12px" },
                              p: { lg: "0px 30px", xs: "0px 15px" },
                            }}
                            component={"p"}
                            variant="subtitle2"
                            p={"0px 30px"}
                          >
                            {`Hotel Name : ${data.hotel_name}`} <br />
                            <strong> Ratings : {`${data.rating}/10`}</strong>
                          </Typography>
                          <Typography
                            sx={{
                              fontWeight: "600",
                              fontSize: { lg: "14px", xs: "12px" },
                              p: { lg: "0px 30px", xs: "0px 15px" },
                            }}
                            component={"p"}
                            variant="h4"
                          >
                            From : {getFormattedDate(checkInDate)}
                          </Typography>
                          <Typography
                            component={"p"}
                            variant="h4"
                            sx={{
                              fontWeight: "600",
                              fontSize: { lg: "14px", xs: "12px" },
                              p: { lg: "0px 30px", xs: "0px 15px" },
                            }}
                          >
                            To : {getFormattedDate(checkOutDate)}
                          </Typography>
                          <Typography
                            component={"p"}
                            variant="subtitle2"
                            sx={{
                              fontSize: { lg: "14px", xs: "12px" },
                              p: { lg: "0px 30px", xs: "0px 15px" },
                            }}
                          >
                            {`Room Type : ${data.room_type}`}
                          </Typography>
                          <Typography
                            component={"p"}
                            variant="subtitle2"
                            sx={{
                              fontWeight: "600",
                              fontSize: { lg: "14px", xs: "12px" },
                              p: { lg: "0px 30px", xs: "0px 15px" },
                            }}
                          >
                            {`Slected Guests : ${guests}`}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            width: { lg: "20%", xs: "25%" },
                            justifyContent: "center",
                            gap: "30px",
                          }}
                        >
                          {" "}
                          <Box display={"flex"}>
                            <Icon
                              sx={
                                darkMode
                                  ? {
                                      fontSize: { lg: "30px", xs: "25px" },
                                      color: "#e91e63",
                                    }
                                  : {
                                      fontSize: { lg: "30px", xs: "25px" },
                                      color: "#1976d2",
                                    }
                              }
                              color={"success"}
                            >
                              <HiCurrencyRupee />
                            </Icon>
                            <Typography
                              variant="h3"
                              sx={{
                                textAlign: "center",
                                fontWeight: "800",
                                fontSize: { lg: "16px", xs: "12px" },
                              }}
                              fullWidth
                            >
                              {guests >= 2
                                ? `Total Price : ${
                                    (parseInt(data.price_per_night) / 2) *
                                    guests
                                  }`
                                : `${data.price_per_night}`}
                            </Typography>
                          </Box>
                          <Box display={"flex"}>
                            <Icon
                              sx={
                                darkMode
                                  ? { fontSize: "30px", color: "#e91e63" }
                                  : { fontSize: "30px", color: "#1976d2" }
                              }
                              color={"success"}
                            >
                              <HiCurrencyRupee />
                            </Icon>
                            <Typography
                              fullWidth
                              variant="h3"
                              sx={{
                                fontSize: "12px",
                                textAlign: "center",
                                fontWeight: "800",
                              }}
                            >
                              {`Rent charges/Night : ${data.price_per_night}`}
                            </Typography>
                          </Box>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            width: { lg: "20%", xs: "25%" },
                            justifyContent: "center",
                            alignItems: "center",
                            ml: { lg: "14%", xs: "0px" },
                          }}
                        >
                          <Button
                            variant="contained"
                            color="primary"
                            sx={{
                              width: { lg: "90%", xs: "70%" },
                              height: "25%",
                              padding: "20px 0px",
                              borderRadius: "10px",
                              ml: { lg: 3, xs: 0 },
                              textAlign: "center",
                              fontSize: { lg: "14px", xs: "11px" },
                            }}
                            component={Link}
                            to={"/payment"}
                            onClick={handlepayment}
                          >
                            Book Ticket
                          </Button>
                        </Box>
                      </Box>
                    </AccordionDetails>
                  </Accordion>
                </React.Fragment>
              ))
            ) : (
              <React.Fragment>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mt: "5%",
                  }}
                >
                  <Typography
                    textAlign={"center"}
                    color="primary"
                    variant="h3"
                    fontSize={"30px"}
                  >
                    {" "}
                    No Hotels found for this location.
                  </Typography>
                </Box>
              </React.Fragment>
            )}
          </Box>
        </Container>
      </LocalizationProvider>
    </React.Fragment>
  );
};

export default HotelSearchResult;
