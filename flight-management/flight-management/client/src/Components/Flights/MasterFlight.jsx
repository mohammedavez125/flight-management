import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import TabSection from "../TabSection/TabSection";
import FlightSearch from "./FlightSearch";
import "./MasterFlight.css";
import SearchResult from "./SearchResult";

const MasterFlight = ({
  trip,
  setTrip,
  handlepayment,
  handlePaymentClose,
  history,
  activeTab,
  setActiveTab,
  lightTheme,
  darkTheme,
  setDarkMode,
  darkMode,
}) => {
  const [from, setfrom] = useState("Delhi");
  const [to, setTo] = useState("");
  const [departDate, setDepartDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState();
  const [departData, setDepartData] = useState([]);
  const [destinationData, setDestinationData] = useState([]);
  const [flights, setFlights] = useState([]);
  const [filteredflights, setFilteredFlights] = useState([]);
  // const [prices, setPrices] = useState([]);
  const getData = async () => {
    await fetch(
      "https://content.newtonschool.co/v1/pr/63b85b1209f0a79e89e17e3a/flights"
    )
      .then((response) => response.json())
      .then((data) => {
        setFilteredFlights(data);
        setFlights(data);
        // setPrices(data);
        setfrom(data[0].from);
        setTo(data[0].to);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <React.Fragment>
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Header setDarkMode={setDarkMode} darkMode={darkMode} />
        <TabSection
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          darkMode={darkMode}
        />
        <FlightSearch
          from={from}
          setfrom={setfrom}
          to={to}
          setTo={setTo}
          departDate={departDate}
          setDepartDate={setDepartDate}
          returnDate={returnDate}
          setReturnDate={setReturnDate}
          trip={trip}
          setTrip={setTrip}
          flightsProps={flights}
          setFilteredFlights={setFilteredFlights}
          departData={departData}
          setDepartData={setDepartData}
          destinationData={destinationData}
          setDestinationData={setDestinationData}
          darkMode={darkMode}
        />

        <SearchResult
          from={from}
          to={to}
          departDate={departDate}
          setDepartDate={setDepartDate}
          returnDate={returnDate}
          setReturnDate={setReturnDate}
          trip={trip}
          setTrip={setTrip}
          flights={flights}
          setFlights={setFlights}
          filteredflights={filteredflights}
          setFilteredFlights={setFilteredFlights}
          handlepayment={handlepayment}
          handlePaymentClose={handlePaymentClose}
          darkMode={darkMode}
        />
      </Paper>
    </React.Fragment>
  );
};

export default MasterFlight;
