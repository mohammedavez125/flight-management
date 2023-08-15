import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import TabSection from "../TabSection/TabSection";
import TrainSearch from "./TrainSearch";
import TrainSearchResult from "./TrainSearchResult";

const MasterTrain = ({
  trip,
  setTrip,
  handlepayment,
  handlePaymentClose,
  activeTab,
  setActiveTab,
  darkMode,
  lightTheme,
  darkTheme,
  setDarkMode,
}) => {
  const [from, setfrom] = useState("Delhi");
  const [to, setTo] = useState("");
  const [departDate, setDepartDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState();
  const [departData, setDepartData] = useState([]);
  const [destinationData, setDestinationData] = useState([]);
  const [trains, setTrains] = useState([]);
  const [filteredTrains, setFilteredTrains] = useState([]);

  const getData = async () => {
    await fetch(
      "https://content.newtonschool.co/v1/pr/63b85e152cabb8fdea2673ee/trains"
    )
      .then((response) => response.json())
      .then((data) => {
        setFilteredTrains(data);
        setTrains(data);
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
          width: "100%",
          height: "100%",
        }}
      >
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Paper
          sx={{
            width: "100%",
          }}
        >
          <TabSection activeTab={activeTab} setActiveTab={setActiveTab} />
          <TrainSearch
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
            trains={trains}
            setFilteredTrains={setFilteredTrains}
            departData={departData}
            setDepartData={setDepartData}
            destinationData={destinationData}
            setDestinationData={setDestinationData}
            darkMode={darkMode}
          />
        </Paper>
        <TrainSearchResult
          from={from}
          to={to}
          departDate={departDate}
          setDepartDate={setDepartDate}
          returnDate={returnDate}
          setReturnDate={setReturnDate}
          trip={trip}
          setTrip={setTrip}
          trains={trains}
          setTrains={setTrains}
          filteredTrains={filteredTrains}
          setFilteredTrains={setFilteredTrains}
          handlepayment={handlepayment}
          handlePaymentClose={handlePaymentClose}
          darkMode={darkMode}
        />
      </Paper>
    </React.Fragment>
  );
};

export default MasterTrain;
