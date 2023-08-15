import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { LocalizationProvider } from "@mui//x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import "./HotelSearch.css";
import moment from "moment";
import { grey } from "@mui/material/colors";

const useStyles = makeStyles({
  formBox: {
    display: "flex",
    flexDirection: "column",
    // width: "70%",
    height: "90%",
    alignItems: "center",
    background: grey[100],
    borderRadius: "8px",
    // boxShadow: "0 1px 7px 0 rgb(0 0 0 / 40%)",
    position: "relative",
    top: "-30px",
  },
  formBoxDark: {
    display: "flex",
    flexDirection: "column",
    width: "70%",
    height: "90%",
    alignItems: "center",
    background: grey[700],
    borderRadius: "8px",
    boxShadow: "30px 30px 7px 30 rgb(0 0 0 / 40%)",
    position: "relative",
    top: "-30px",
  },
  // pickerFormat: {
  //   position: "relative",
  //   // width: "18%",
  // },
});
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

const HotelSearch = ({
  city,
  cityData,
  setCity,
  setCityData,
  guests,
  setGuests,
  checkInDate,
  setCheckInDate,
  checkOutDate,
  setCheckOutDate,
  hotelsProps,
  setHotelsProps,
  filteredHotels,
  setFilteredHotels,
  darkMode,
}) => {
  const classes = useStyles();
  const [hotels, setHotels] = useState([]);
  const [hotelOption, setHotelOption] = useState([]);
  const handleTodayDate = (date) => {
    setCheckInDate(date.$d);
  };
  const handleReturnDate = (date) => {
    setCheckOutDate(date.$d);
  };
  const handleSarch = (e) => {
    e.preventDefault();
    let data = [...hotelsProps];
    let result = data.filter((data) => data.city === city);
    console.log(data);
    // console.log(from + 'from');
    // console.log(to + 'to');
    setFilteredHotels(result);
  };
  const handleGuestChange = (e) => {
    setGuests(e.target.value);
    console.log(e.target.value);
  };
  useEffect(() => {
    // fetchData();
    fetch(
      "https://content.newtonschool.co/v1/pr/63b85bcf735f93791e09caf4/hotels"
    )
      .then((response) => response.json())
      .then((data) => {
        setHotelOption(data);

        let arr = [];
        arr = data.map((option) => {
          return option.city;
        });
        setCityData(arr);
        arr = data.map((option) => {
          return option.hotel_name;
        });
        setHotels(arr);
        // console.log(arr)
      });
  }, []);

  return (
    <React.Fragment>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box
          sx={{
            width: "100%",
            height: "260px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Paper
            className={darkMode ? classes.formBoxDark : classes.formBox}
            sx={{ width: { xs: "90%", sm: "85%", md: "85%", lg: "70%" } }}
          >
            <Box
              sx={{
                width: "100%",
                mt: "4%",
                display: "flex",
                gap: { lg: "3%", md: "3%", sm: "10%", xs: "5%" },
                padding: {
                  lg: "30px 20px",
                  md: "30px 0px",
                  sm: "20px 0px",
                  xs: "20px 0px",
                },
                flexWrap: { xs: "wrap", sm: "wrap", md: "nowrap" },
                justifyContent: { xs: "start", sm: "center", md: "start" },
              }}
            >
              <Autocomplete
                defaultValue={""}
                id="departing-city"
                getOptionLabel={(cityData) => cityData}
                options={cityData}
                sx={{
                  width: { xs: 180, sm: 250, md: 250, lg: 250 },
                  // flexBasis: '25%',
                  height: "30%",
                  "& .MuiInputBase-root": {
                    sm: { height: 57 },
                    xs: { height: 57 },
                    md: { height: 57 },
                  },
                  ml: { xs: "2%", sm: "0", md: "2%", lg: "10%" },
                }}
                value={city}
                onChange={(e, newValue) => {
                  setCity(newValue);
                }}
                isOptionEqualToValue={(option, value) => option === value}
                noOptionsText={`Departing city not available choose another route`}
                renderInput={(params) => (
                  <TextField {...params} label={"Select departing city"} />
                )}
              />
              <DesktopDatePicker
                className={classes.pickerFormat}
                label="Check-IN"
                inputFormat="DD/MM/YYYY"
                value={checkInDate}
                onChange={handleTodayDate}
                renderInput={(params) => <TextField {...params} />}
                InputProps={{
                  sx: {
                    width: { xs: 155, sm: "85%", md: "75%", lg: "90%" },
                    height: { sm: 50, xs: 57, md: 60 },
                  },
                }}
              />
              <DesktopDatePicker
                className={classes.pickerFormat}
                label="Check-OUT"
                inputFormat="DD/MM/YYYY"
                value={checkOutDate}
                onChange={handleReturnDate}
                renderInput={(params) => <TextField {...params} />}
                // disabled={active ? true : false}
                // onClick={handleDisable}
                InputProps={{
                  sx: {
                    width: { xs: 185, sm: "85%", md: "75%", lg: "90%" },
                    height: { sm: 50, xs: 57, md: 60 },

                    ml: { xs: "2%", sm: "0", md: "0%", lg: "0%" },
                  },
                }}
              />
              <FormControl
                sx={{
                  width: { xs: 160, sm: 250, md: 250, lg: 250 },
                }}
              >
                <InputLabel id="demo-simple-select-helper-label">
                  No. of Guests
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  label="No. of Guests"
                  name="Guests"
                  value={guests}
                  onChange={handleGuestChange}
                >
                  <MenuItem value={1}>One</MenuItem>
                  <MenuItem value={2}>Two</MenuItem>
                  <MenuItem value={3}>Three</MenuItem>
                  <MenuItem value={4}>Four</MenuItem>
                  <MenuItem value={5}>Five</MenuItem>
                  <MenuItem value={6}>Six</MenuItem>
                  <MenuItem value={7}>Seven</MenuItem>
                  <MenuItem value={8}>Eight</MenuItem>
                </Select>
              </FormControl>
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
                        top: { lg: "45px", md: "58px", sm: "38px", xs: "42px" },
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

export default HotelSearch;
