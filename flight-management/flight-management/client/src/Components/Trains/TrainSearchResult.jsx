import { Box, color, Container, display } from "@mui/system";
import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { HiCurrencyRupee } from "react-icons/hi";
import { Button, Divider, Icon, Stack } from "@mui/material";
import { RiTrainFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const TrainSearchResult = ({
  from,
  to,
  departDate,
  returnDate,
  trip,
  trains,
  setTrains,
  filteredTrains,
  setFilteredTrains,
  handlepayment,
  handlePaymentClose,
  darkMode,
}) => {
  const [paymentPage, showPaymentPage] = useState(false);
  const closePayment = () => showPaymentPage(false);
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <React.Fragment>
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
          {filteredTrains.length > 0 ? (
            filteredTrains.map((data, index) => (
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
                        gap: { lg: "72px", xs: "15px", md: "72px" },
                        flexGrow: "",
                        justifyContent: { md: "space-between" },
                        alignItems: "center",
                        "& .MuiAccordionSummary-root": {
                          padding: 0,
                        },
                      }}
                    >
                      <Icon
                        sx={
                          darkMode
                            ? {
                                fontSize: "30px",
                                color: "#e91e63",
                                flexBasis: { lg: "5%", md: "5%", xs: "10%" },
                              }
                            : {
                                fontSize: "30px",
                                color: "#1976d2",
                                flexBasis: { lg: "5%", md: "5%", xs: "10%" },
                              }
                        }
                      >
                        <RiTrainFill />
                      </Icon>
                      <Typography
                        textAlign={"center"}
                        sx={{
                          flexBasis: { lg: "5%", xs: "15%", md: "5%" },
                          fontSize: { lg: "17px", md: "15px", xs: 12 },
                          textAlign: "center",
                        }}
                      >
                        {`Train number `}
                        <strong>{data.train_number}</strong>
                      </Typography>
                      <Typography
                        variant="h3"
                        width="10%"
                        sx={{
                          // width:'10%',
                          flexBasis: { lg: "10%", xs: "13%", md: "10%" },
                          fontSize: { lg: "17px", xs: 11, md: "15px" },
                          textAlign: "center",
                        }}
                      >
                        {data.departure.departureTime}
                      </Typography>
                      <Typography
                        component={"p"}
                        width="10%"
                        variant="h2"
                        sx={{
                          flexBasis: { lg: "10%", xs: "17%", md: "10%" },
                          fontSize: { lg: "17px", xs: 13, md: "16px" },
                          textAlign: "center",
                          fontWeight: "600",
                        }}
                      >
                        {data.from}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          flexBasis: "30%",
                        }}
                      >
                        <Typography
                          textAlign={"center"}
                          component={"p"}
                          sx={{
                            fontSize: { lg: 17, xs: 12, md: "16px" },
                            textAlign: { lg: "center", xs: "center" },
                          }}
                        >
                          {`${data.duration} hrs`}
                        </Typography>
                        <Divider />
                        <Typography
                          component={"p"}
                          sx={{
                            fontSize: { lg: 17, xs: 12, md: "16px" },
                            textAlign: { lg: "center", xs: "center" },
                          }}
                        >
                          {`${data.kilometers} kms`}
                        </Typography>
                      </Box>
                      <Typography
                        variant="h3"
                        sx={{
                          fontSize: { lg: 17, xs: 12, md: "16px" },
                          textAlign: { lg: "center", xs: "center" },
                          flexBasis: { lg: "10%", xs: "13%", md: "10%" },
                        }}
                      >
                        {data.departure.departureTime}
                      </Typography>
                      <Typography
                        variant="h2"
                        component={"p"}
                        sx={{
                          textAlign: "center",
                          fontWeight: "600",
                          flexBasis: { lg: "10%", xs: "13%", md: "10%" },
                          fontSize: { lg: 17, xs: 13, md: "15px" },
                        }}
                      >
                        {data.to}
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
                          width: { lg: "60%", xs: "55%" },
                        }}
                        fullWidth
                      >
                        <Typography
                          component="p"
                          sx={{
                            p: { lg: "0px 0px", xs: "0px 15px" },
                            width: "100%",
                          }}
                        >
                          Train Details :
                        </Typography>
                        <Typography
                          component={"p"}
                          variant="h4"
                          sx={{
                            fontWeight: "600",
                            fontSize: { lg: "16px", xs: "13px" },
                            p: { lg: "0px 30px", xs: "0px 15px" },
                          }}
                        >
                          {`Train Number : ${data.train_number}`}
                        </Typography>
                        <Typography
                          component={"p"}
                          variant="h4"
                          sx={{
                            fontWeight: "600",
                            fontSize: { lg: "16px", xs: "13px" },
                            p: { lg: "0px 30px", xs: "0px 15px" },
                          }}
                        >
                          {`Distance : ${data.kilometers} kms`}
                        </Typography>
                        <Typography
                          component={"p"}
                          variant="h4"
                          sx={{
                            fontWeight: "600",
                            fontSize: { lg: "16px", xs: "13px" },
                            p: { lg: "0px 30px", xs: "0px 15px" },
                          }}
                        >
                          {`From : ${data.from}`}
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: "600",
                            fontSize: { lg: "16px", xs: "13px" },
                            p: { lg: "0px 30px", xs: "0px 15px" },
                          }}
                          component={"p"}
                          variant="h4"
                        >
                          {`To : ${data.to}`}
                        </Typography>
                        <Typography
                          component={"p"}
                          variant="subtitle2"
                          sx={{
                            fontSize: { lg: "16px", xs: "13px" },
                            p: { lg: "0px 30px", xs: "0px 15px" },
                          }}
                        >
                          {`Departure Date : ${data.departure.departureDate} | ${data.departure.departureTime}`}
                        </Typography>
                        <Typography
                          component={"p"}
                          variant="subtitle2"
                          sx={{
                            fontSize: { lg: "16px", xs: "13px" },
                            p: { lg: "0px 30px", xs: "0px 15px" },
                          }}
                        >
                          {trip === "round"
                            ? `Return Date : ${returnDate}`
                            : "Return Date : Round trip is turned off"}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          width: "20%",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: { lg: "30px", xs: "10px" },
                        }}
                      >
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
                          variant="h3"
                          sx={{
                            fontSize: { lg: "25px", xs: "22px" },
                            fontWeight: "800",
                          }}
                        >
                          {trip === "round"
                            ? `${parseInt(data.price) * 2}`
                            : `${data.price}`}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          width: "30%",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Button
                          variant="contained"
                          color="primary"
                          sx={{
                            width: { lg: "70%", xs: "60%" },
                            height: "35%",
                            fontSize: { xs: "12px", lg: "14px" },
                            padding: { lg: "20px 0px", xs: "0px 0px" },
                            borderRadius: { lg: "10px", xs: 1 },
                            ml: { lg: 3, xs: "1px" },
                            textAlign: "center",
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
                  No Trains found for this route.
                </Typography>
              </Box>
            </React.Fragment>
          )}
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default TrainSearchResult;
