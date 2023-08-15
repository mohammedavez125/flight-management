import React from "react";
import "./App.css";
import "@fontsource/roboto";
import Login from "./Components/Login/Login";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Paper } from "@mui/material";
import MasterFlight from "./Components/Flights/MasterFlight";
import { useState } from "react";
import Payment from "./Components/Payment";
import MasterTrain from "./Components/Trains/MasterTrain";
import MasterHotel from "./Components/Hotel/MasterHotel";
import { Route, Routes, useNavigate } from "react-router-dom";
import { dark } from "@mui/material/styles/createPalette";
import { cyan, green, grey, red } from "@mui/material/colors";

function App(props) {
  const [trip, setTrip] = useState("oneway");
  const navigate = useNavigate();
  const [payment, setPayment] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const handlepayment = () => {
    setPayment(true);
  };
  const handlePaymentClose = () => {
    navigate(-1);
    setPayment(false);
  };
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      background: {
        paper: grey[900],
      },
      primary: {
        main: "#e91e63",
      },
    },
  });
  const lightTheme = createTheme({
    palette: {
      type: "light",
    },
  });
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Paper style={{ height: "100vh" }}>
        <Routes>
          <Route path="/" element={<Login />} darkMode={darkMode} />
          <Route
            path="flights"
            element={
              <MasterFlight
                trip={trip}
                setTrip={setTrip}
                handlepayment={handlepayment}
                handlePaymentClose={handlePaymentClose}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                lightTheme={lightTheme}
                darkTheme={darkTheme}
                setDarkMode={setDarkMode}
                darkMode={darkMode}
              />
            }
          />
          <Route
            path="trains"
            element={
              <MasterTrain
                trip={trip}
                setTrip={setTrip}
                handlepayment={handlepayment}
                handlePaymentClose={handlePaymentClose}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                lightTheme={lightTheme}
                darkTheme={darkTheme}
                setDarkMode={setDarkMode}
                darkMode={darkMode}
              />
            }
          />
          <Route
            path="hotels"
            element={
              <MasterHotel
                trip={trip}
                setTrip={setTrip}
                handlepayment={handlepayment}
                handlePaymentClose={handlePaymentClose}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                lightTheme={lightTheme}
                darkTheme={darkTheme}
                setDarkMode={setDarkMode}
                darkMode={darkMode}
              />
            }
          />
          <Route
            path="/payment"
            element={
              <Payment
                payment={payment}
                handlePaymentClose={handlePaymentClose}
                lightTheme={lightTheme}
                darkTheme={darkTheme}
                setDarkMode={setDarkMode}
                darkMode={darkMode}
              />
            }
          />
        </Routes>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
