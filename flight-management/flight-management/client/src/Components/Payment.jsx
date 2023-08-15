import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Collapse,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui//x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Confetti from "react-confetti/dist/Confetti";
import axios from 'axios';

const makeThisStyle = makeStyles({
  picker: {
    width: "45%",
  },
});

const Payment = ({ payment, handlePaymentClose }) => {
  const classes = makeThisStyle();
  const [paymentMode, setPaymentMode] = useState("");
  const [paymentExpiry, setpaymentExpiry] = useState("1 july");
  const [firstName,setFirstName]=useState("");
  const [lastName,setLastName]=useState("");
  const [email,setEmail]=useState("");
  const [paymentName,setpaymentName]=useState("");
  const [paymentNumber,setpaymentNumber]=useState("");
  //   const { register, handleSubmit, control } = useForm();
  const onAgree = (data) => console.log(data);
  const [showPassword, setShowPassword] = React.useState(false);
  const [openAlert, setOpenAlert] = React.useState(false);
  const [password, setPassword] = useState("");
  const [formData, setFormData] = useState({});
  
  const payloadData = {
    password:password,
    paymentMode:paymentMode,
    paymentExpiry:paymentExpiry,
    firstName:firstName,
    lastName:lastName,
    email:email,
    paymentName:paymentName,
    paymentNumber:paymentNumber
  };

  console.log(formData)
  const handleButtonClick = () => {
    // Make the POST request on button click
    
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePaymentModeChange = (event) => {
    setPaymentMode(event.target.value);
  };

  const handlepaymentExpiryChange = (date) => {
    // setpaymentExpiry(date);
  };
  //   const onSubmit = (data) => console.log(data)
  const closeAlert = () => {
    setTimeout(() => {
      setOpenAlert(false);
      handlePaymentClose();
    }, 1500);
  };
  const handlePaynow = () => {
    // handleSubmit()
    setFormData(payloadData)
    setOpenAlert(true);
    axios.post('./payment', formData)
      .then(response => {
        console.log('Response:', response.data);
      })
      .catch(error => {
        if (error.response) {
          // The request was made, but the server responded with an error status code
          console.error('Server Error:', error.response.data);
        } else if (error.request) {
          // The request was made but no response was received
          console.error('No response from server:', error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error('Error:', error.message);
        }
      });
    closeAlert();
  };
  return (
    <React.Fragment>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {/* <form onSubmit={handleSubmit(onSubmit)}> */}
        <Dialog
          open={payment}
          onClose={handlePaymentClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          classes={classes.paper}
        >
          <DialogTitle id="alert-dialog-title">
            <Collapse in={openAlert}>
              <Alert severity="success">
                <AlertTitle>
                  <strong>Booked</strong>
                </AlertTitle>
                Tickets are booked, Happy Journey —{" "}
                <strong>Payment Done</strong>
              </Alert>
            </Collapse>
            <Typography
              variant="h4"
              fontSize={"22px"}
              textTransform="uppercase"
              fontWeight={"600"}
              textAlign="center"
            >
              Payment Form
            </Typography>
          </DialogTitle>
          <DialogContent>
            <Paper
              sx={{
                width: "500px",
                height: "500px",
                padding: "20px 30px",
                display: "flex",
                flexDirection: "column",
                gap: "3%",
              }}
            >
              <Box sx={{ width: "100%", gap: "5%" }} display="flex">
                <TextField
                  name="firstName"
                  width="45%"
                  required
                  label="First Name"
                  placeholder="Enter first name"
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <TextField
                  width="45%"
                  label="Last Name"
                  placeholder="Enter last name"
                  name="lastName"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Box>

              <Box sx={{ width: "100%", gap: "5%" }} display="flex">
                <TextField
                  label="Email"
                  name="email"
                  //   inputRef={register}
                  type={"email"}
                  placeholder="Enter your E-mail"
                  sx={{ width: "75%", gap: "5%" }}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Box>

              <Box sx={{ width: "100%" }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-helper-label">
                    Payment Mode
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    label="Payment Mode"
                    name="Payment Mode"
                    sx={{ width: "35%" }}
                    value={paymentMode}
                    onChange={handlePaymentModeChange}
                  >
                    <MenuItem value="debit-card">Debit Card</MenuItem>
                    <MenuItem value="credit-card">Credit Card</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                }}
              >
                {paymentMode !== "" ? (
                  
                    <React.Fragment>
                      <TextField
                        label="Card holder name"
                        name="cardHolderName"
                        //   inputRef={register}
                        placeholder="Enter card holder name"
                        sx={{ width: "75%" }}
                        onChange={(e) => setpaymentName(e.target.value)}
                      />
                      <TextField
                        label="Card number"
                        name="paymentNumber"
                        //   inputRef={register}
                        type={"text"}
                        placeholder="Enter card number"
                        sx={{ width: "75%" }}
                        onChange={(e) => setpaymentNumber(e.target.value)}
                      />
                      <Box
                        sx={{
                          display: "flex",
                          gap: "5%",
                          width: "100%",
                        }}
                      >
                        <DesktopDatePicker
                          className={classes.picker}
                          label="Card Expiry Date"
                          name="paymentExpiryDate"
                          inputFormat="DD/MM/YYYY"
                          //   inputRef={register}
                          value={paymentExpiry}
                          onChange={handlepaymentExpiryChange}
                          renderInput={(params) => <TextField {...params} />}
                        />
                        <FormControl
                          sx={{ m: 0, width: "25%" }}
                          variant="outlined"
                        >
                          <InputLabel htmlFor="outlined-adornment-password">
                            CVV2
                          </InputLabel>
                          <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? "text" : "password"}
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            // inputRef={register}
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
                                  onMouseDown={handleMouseDownPassword}
                                  edge="end"
                                >
                                  {showPassword ? (
                                    <VisibilityOff />
                                  ) : (
                                    <Visibility />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            }
                            label="CVV"
                          />
                        </FormControl>
                      </Box>
                    </React.Fragment>
                  ) : (
                  ""
                )}
              </Box>
            </Paper>
          </DialogContent>
          <DialogActions>
            <Button onClick={handlePaymentClose} variant="outlined">
              Cancel
            </Button>
            <Button onClick={handlePaynow} autoFocus variant="contained">
              Pay Now
            </Button>
          </DialogActions>
        </Dialog>
        {/* </form> */}
      </LocalizationProvider>
    </React.Fragment>
  );
};

export default Payment;
