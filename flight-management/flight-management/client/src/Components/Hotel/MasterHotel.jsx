import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import TabSection from "../TabSection/TabSection";
import HotelSearch from "./HotelSearch";
import "./MasterHotel.css";
import HotelSearchResult from "./HotelSearchResult";
import moment from "moment";
import { Paper } from "@mui/material";

const MasterHotel = ({
  trip,
  setTrip,
  handlepayment,
  handlePaymentClose,
  activeTab,
  setActiveTab,
  lightTheme,
  darkTheme,
  setDarkMode,
  darkMode,
}) => {
  const [city, setCity] = useState("");
  const [cityData, setCityData] = useState([]);
  const [guests, setGuests] = useState(2);
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());
  const [hotelsProps, setHotelsProps] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);

  const getData = async () => {
    await fetch(
      "https://content.newtonschool.co/v1/pr/63b85bcf735f93791e09caf4/hotels"
    )
      .then((response) => response.json())
      .then((data) => {
        setFilteredHotels(data);
        setHotelsProps(data);
        // setPrices(data);
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
        }}
      >
        <Header setDarkMode={setDarkMode} darkMode={darkMode} />

        <TabSection activeTab={activeTab} setActiveTab={setActiveTab} />
        <HotelSearch
          city={city}
          setCity={setCity}
          cityData={cityData}
          setCityData={setCityData}
          guests={guests}
          setGuests={setGuests}
          checkInDate={checkInDate}
          setCheckInDate={setCheckInDate}
          checkOutDate={checkOutDate}
          setCheckOutDate={setCheckOutDate}
          hotelsProps={hotelsProps}
          setHotelsProps={setHotelsProps}
          filteredHotels={filteredHotels}
          setFilteredHotels={setFilteredHotels}
          darkMode={darkMode}
        />

        <HotelSearchResult
          city={city}
          cityData={cityData}
          guests={guests}
          checkInDate={checkInDate}
          checkOutDate={checkOutDate}
          hotelsProps={hotelsProps}
          filteredHotels={filteredHotels}
          handlepayment={handlepayment}
          darkMode={darkMode}
          lightTheme={lightTheme}
          darkTheme={darkTheme}
        />
      </Paper>
    </React.Fragment>
  );
};

export default MasterHotel;
