import {
  Autocomplete,
  Box,
  Button,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { LocalizationProvider } from "@mui//x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import "./FlightSearch.css";
import { blueGrey, grey, pink } from "@mui/material/colors";
import { wrap } from "framer-motion";
import { Palette } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  formBox: {
    display: "flex",
    flexDirection: "column",
    width: { xs: "90%", sm: "80%", md: "75%", lg: "70%" },
    height: "90%",
    alignItems: "center",
    backgroundColor: grey[100],
    // flexWrap:'wrap',
    borderRadius: "8px",
    boxShadow: "30px 30px 7px 30 rgb(0 0 0 / 40%)",
    position: "relative",
    top: "-30px",
  },
  formBoxDark: {
    display: "flex",
    flexDirection: "column",
    width: { xs: "90%", sm: "80%", md: "75%", lg: "85%" },
    height: "90%",
    alignItems: "center",
    backgroundColor: grey[700],
    borderRadius: "8px",
    boxShadow: "30px 30px 7px 30 rgb(0 0 0 / 40%)",
    position: "relative",
    top: "-30px",
  },
  pickerFormat: {
    // width:'18%',
    position: "relative",
    height: "30%",
  },
}));
const styles = makeStyles((theme) => ({
  root: {
    "& .MuiButton-root": {
      width: "20%",
      height: "100%",
      borderRadius: 15,
      color: "white",
      padding: "5px 30px",
      border: 0,
      background: "linear-gradient(93deg,#53b2fe,#065af3)",
    },
  },
}));
const FlightSearch = ({
  from,
  setfrom,
  to,
  setTo,
  flightsProps,
  setFilteredFlights,
  departData,
  setDepartData,
  destinationData,
  setDestinationData,
  departDate,
  setDepartDate,
  returnDate,
  setReturnDate,
  trip,
  setTrip,
  darkMode,
}) => {
  const classes = useStyles();
  const [flightOptions, setFlightOptions] = useState([]);

  const handleTodayDate = (date) => {
    setDepartDate(date);
    console.log(date);
  };
  const handleTomorrowDate = (date) => {
    setReturnDate(date);
  };
  const handleTrip = (e) => {
    setTrip(e.target.value);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://content.newtonschool.co/v1/pr/63b85b1209f0a79e89e17e3a/flights`
      );
      const data = await response.json();
      setFlightOptions(data);

      console.log(data.from);
      console.log("data");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSarch = (e) => {
    e.preventDefault();
    let data = [...flightsProps];
    console.log(data);
    let result = data.filter((data) => data.from === from && data.to === to);
    // console.log(from + 'from');
    // console.log(to + 'to');
    setFilteredFlights(result);
  };

  useEffect(() => {
    // fetchData();
    fetch(
      "https://content.newtonschool.co/v1/pr/63b85b1209f0a79e89e17e3a/flights"
    )
      .then((response) => response.json())
      .then((data) => {
        setFlightOptions(data);
        let arr = [];
        arr = data.map((option) => {
          return option.from;
        });
        setDepartData(arr);
        arr = data.map((option) => {
          return option.to;
        });
        setDestinationData(arr);
      });

    // console.log('AirportData')
    // fetch('https://app.goflightlabs.com/flights?access_key=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiNjA2MTFlOWI3Yzc4ZjA3MTgzYzVmZGQwMzM0ZTE4NjEyYWM0NWYxNWMxMTBlYzEwMzU1NTg5ZjU2Njk3M2Y1NWE2ZThmN2VhZjRhODM3ZjAiLCJpYXQiOjE2NzYwMDUxODgsIm5iZiI6MTY3NjAwNTE4OCwiZXhwIjoxNzA3NTQxMTg4LCJzdWIiOiIyMDAyNyIsInNjb3BlcyI6W119.HLnM8aq-q92roSLyHUMuzZMoKuuFvBlyL48Z8w4oYP7y_jyFxufiF-J4if_FRju9cF7hXK2P58Y1FlYtnnPvGw')
    // .then((response) => response.json())
    // .then((data)=>setAirportData(data));
  }, []);

  return (
    <React.Fragment>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box
          sx={{
            width: "100%",
            height: "260px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            // flexWrap:{xs:'wrap',lg:'nowrap'},
            alignItems: "center",
          }}
        >
          <Paper
            sx={{ width: { xs: "90%", sm: "80%", md: "75%", lg: "70%" } }}
            className={darkMode ? classes.formBoxDark : classes.formBox}
          >
            <Box
              sx={{
                width: "100%",
                height: "15%",
                display: "flex",
                paddingTop: "24px",
                ml: { xs: "2%", sm: "8%", md: "12%", lg: "16%" },
                gap: "20px",
                mt: { xs: "0px", sm: "5px", md: "10px", lg: "10px" },
              }}
            >
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={trip}
                onChange={handleTrip}
              >
                <FormControlLabel
                  value="oneway"
                  control={<Radio />}
                  label="ONEWAY"
                />
                <FormControlLabel
                  value="round"
                  control={<Radio />}
                  label="ROUND TRIP"
                />
              </RadioGroup>
            </Box>
            <Box
              sx={{
                width: "100%",
                height: { xs: "80%", sm: "80%", md: "50%", lg: "50%" },
                display: "flex",
                flexDirection: {
                  xs: "column",
                  sm: "column",
                  md: "row",
                  lg: "row",
                },
                alignItems: "center",
                gap: { xs: "10px", sm: "5px", md: "15px", lg: "20px" },
                paddingTop: { xs: 4, sm: 4, md: 2, lg: 3 },
                mt: { xs: "5px", sm: "5px", md: "0px", lg: "0px" },
                flexWrap: {
                  xs: "wrap",
                  sm: "wrap",
                  md: "nowrap",
                  lg: "nowrap",
                },
              }}
            >
              <Autocomplete
                defaultValue={""}
                id="departing-city"
                getOptionLabel={(departData) => departData}
                options={departData}
                sx={{
                  width: { xs: "45%", sm: "45%", md: "18%", lg: "18%" },
                  // flexBasis: '25%',
                  height: "30%",
                  "& .MuiInputBase-root": {
                    sm: { height: 50 },
                    xs: { height: 50 },
                    md: { height: 57 },
                  },
                  ml: { xs: "5%", sm: "0", md: "8%", lg: "10%" },
                }}
                value={from}
                onChange={(e, newValue) => {
                  setfrom(newValue);
                }}
                isOptionEqualToValue={(options, value) =>
                  options.from === value
                }
                noOptionsText={`Departing city not available choose another route`}
                renderInput={(params) => (
                  <TextField {...params} label={"Select departing city"} />
                )}
              />
              <Autocomplete
                defaultValue={""}
                id="destination-city"
                getOptionLabel={(destinationData) => destinationData}
                options={destinationData}
                sx={{
                  width: { xs: "45%", sm: "45%", md: "18%", lg: "18%" },
                  ml: { xs: "5%", sm: "0", md: "0", lg: "0%" },
                  // flexBasis: '25%',
                  height: "30%",
                  "& .MuiInputBase-root": {
                    sm: { height: 50 },
                    xs: { height: 50 },
                    md: { height: 57 },
                    md: { height: 57 },
                  },
                }}
                value={to}
                onChange={(e, newValue) => {
                  setTo(newValue);
                }}
                isOptionEqualToValue={(options, value) =>
                  options.from === value
                }
                noOptionsText={`Destination city not available choose another route`}
                renderInput={(params) => (
                  <TextField {...params} label={"Select destination city"} />
                )}
              />
              <DesktopDatePicker
                className={classes.pickerFormat}
                label="DEPARTURE"
                inputFormat="DD/MM/YYYY"
                value={departDate}
                onChange={handleTodayDate}
                InputProps={{
                  sx: {
                    width: { xs: "65%", sm: "85%", md: "75%", lg: "90%" },
                    height: { sm: 50, xs: 50, md: 60 },
                  },
                }}
                renderInput={(params) => <TextField {...params} />}
              />
              <DesktopDatePicker
                disabled={trip === "oneway" ? true : false}
                className={classes.pickerFormat}
                label="RETURN"
                inputFormat="DD/MM/YYYY"
                value={returnDate}
                onChange={handleTomorrowDate}
                InputProps={{
                  sx: {
                    width: { xs: "65%", sm: "85%", md: "75%", lg: "90%" },
                    height: { sm: 50, xs: 50, md: 60 },
                  },
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </Box>
            <Box
              sx={{
                width: "100%",
                height: "10%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                sx={
                  darkMode
                    ? {
                        width: { lg: "20%", md: "30%", sm: "60%", xs: "60%" },
                        height: { lg: "100%", md: "80%", sm: "60%", xs: "60%" },
                        borderRadius: 15,
                        color: "white",
                        padding: "15px 30px",
                        background:
                          " linear-gradient(to right, #ec008c, #fc6767);",
                        border: 0,
                        fontSize: {
                          lg: "25px",
                          md: "22px",
                          sm: "20px",
                          xs: "20px",
                        },
                        position: "relative",
                        top: {
                          lg: "45px",
                          md: "45px",
                          sm: "-20px",
                          xs: "-20px",
                        },
                      }
                    : {
                        width: { lg: "20%", md: "30%", sm: "60%", xs: "60%" },
                        height: { lg: "100%", md: "80%", sm: "60%", xs: "60%" },
                        borderRadius: 15,
                        color: "white",
                        padding: "15px 30px",
                        background: "linear-gradient(93deg,#53b2fe,#065af3)",
                        border: 0,
                        fontSize: {
                          lg: "25px",
                          md: "22px",
                          sm: "20px",
                          xs: "20px",
                        },
                        position: "relative",
                        top: {
                          lg: "45px",
                          md: "45px",
                          sm: "-20px",
                          xs: "-11px",
                        },
                      }
                }
                onClick={handleSarch}
              >
                SEARCH
              </Button>
            </Box>
          </Paper>
        </Box>
      </LocalizationProvider>
    </React.Fragment>
  );
};

export default FlightSearch;
