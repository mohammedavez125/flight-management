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
import "./TrainSearch.css";
import { grey } from "@mui/material/colors";

const useStyles = makeStyles((theme) => ({
  formBox: {
    display: "flex",
    flexDirection: "column",
    // width: "70%",
    height: "90%",
    alignItems: "center",
    backgroundColor: grey[100],
    borderRadius: "8px",
    boxShadow: "0 1px 7px 0 rgb(0 0 0 / 40%)",
    position: "relative",
    top: "-30px",
  },
  formBoxDark: {
    display: "flex",
    flexDirection: "column",
    // width: "70%",
    height: "90%",
    alignItems: "center",
    backgroundColor: grey[700],
    borderRadius: "8px",
    boxShadow: "30px 30px 7px 30 rgb(0 0 0 / 40%)",
    position: "relative",
    top: "-30px",
  },
  pickerFormat: {
    position: "relative",
    // width: "18%",
    height: "30%",
  },
}));
const styles = makeStyles({
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
});
const TrainSearch = ({
  from,
  setfrom,
  to,
  setTo,
  departDate,
  setDepartDate,
  returnDate,
  setReturnDate,
  trains,
  setFilteredTrains,
  trip,
  setTrip,
  departData,
  setDepartData,
  destinationData,
  setDestinationData,
  darkMode,
}) => {
  const classes = useStyles();
  const [trainOptions, setTrainOptions] = useState([]);

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

  const handleSarch = (e) => {
    e.preventDefault();
    let data = [...trains];
    console.log(data);
    let result = data.filter((data) => data.from === from && data.to === to);
    console.log(result);
    setFilteredTrains(result);
  };

  useEffect(() => {
    fetch(
      "https://content.newtonschool.co/v1/pr/63b85e152cabb8fdea2673ee/trains"
    )
      .then((response) => response.json())
      .then((data) => {
        setTrainOptions(data);
        console.log(data);
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
            "& MuiBox": {
              backgroundImage: "linear-gradient(to bottom,#051322,#15457c)",
            },
            width: "100%",
            height: "260px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
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
                gap: { xs: "10px", sm: "10px", md: "15px", lg: "20px" },
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
                  width: { xs: "45%", sm: "50%", md: "18%", lg: "18%" },
                  flexBasis: "20%",
                  height: "30%",
                  "& .MuiInputBase-root": {
                    sm: { height: 50 },
                    xs: { height: 50 },
                    md: { height: 57 },
                  },
                  ml: { xs: "3%", sm: "0", md: "8%", lg: "10%" },
                }}
                value={from}
                onChange={(e, newValue) => {
                  setfrom(newValue);
                }}
                isOptionEqualToValue={(options, value) => options === value}
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
                  width: { xs: "45%", sm: "60%", md: "18%", lg: "18%" },
                  ml: { xs: "2%", sm: "0", md: "0", lg: "0%" },
                  flexBasis: "20%",
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
                    width: { xs: "65%", sm: 120, md: "75%", lg: "90%" },
                    height: { sm: 50, xs: 50, md: 60 },
                    flexBasis: "20%",
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
                    width: { xs: "65%", sm: 120, md: "75%", lg: "90%" },
                    height: { sm: 50, xs: 50, md: 60 },
                    flexBasis: "20%",
                  },
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </Box>
            <Box
              sx={{
                width: "100%",
                height: "20%",
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
                          md: "52px",
                          sm: "-15px",
                          xs: "-8px",
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

export default TrainSearch;
