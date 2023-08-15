import { Box, Typography } from "@mui/material";
import React from "react";

const MyBiz = () => {
  return (
    <React.Fragment>
      <Box
        sx={{
          flexBasis: { xs: "30%", md: "30%", sm: "30%", lg: "20%" },
          width: { xs: "20%", sm: "20%", md: "25%", lg: "25%" },
          display: "flex",
          gap: { xs: 1, sm: 0, lg: 0, md: 0 },
          alignItems: "center",
          flexDirection: { xs: "column", sm: "row", md: "row", lg: "row" },
        }}
      >
        <Box
          component={"img"}
          src="https://promos.makemytrip.com/images/myBiz/appsignup/mybizlogodt.webp"
          sx={{
            width: { lg: "15%", sm: "35%", xs: "45%", md: "25%" },
            minHeight: { xs: "50%", lg: "auto" },
            display: "flex",
            flexBasis: { xs: "50%", sm: "20%", lg: "20%", md: "20%" },
            fontSize: "25px",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            top: { xs: 4, sm: 0, md: 0, lg: 0 },
          }}
        ></Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: { xs: 20, sm: 64, md: 64, lg: 64 },
            w: { xs: "100%", lg: "80%" },
            alignItems: { sm: "center" },
            flexBasis: { xs: "50%", sm: "80%" },
            justifyContent: { sm: "center", md: "center", lg: "start" },
            cursor: "pointer",
          }}
        >
          <Typography
            sx={{
              display: "flex",
              // justifyContent:{sm:'center',md:'center',lg:'flex-start'},
              alignItems: { sm: "end", md: "end", lg: "end" },
              height: "50%",
              width: "80%",
              // justifyItems:{lg:'flex-start'},
              textAlign: "center",
              fontSize: { xs: "10px", sm: 11, lg: "12px" },
              fontWeight: { lg: "500", xs: "300" },
              component: "p",
            }}
          >
            Introducing myBiz
          </Typography>
          <Typography
            sx={{
              height: "50%",
              fullWidth: { xs: true },
              variant: "subtitle",
              alignItems: { sm: "start", md: "start", lg: "start" },
              display: { xs: "none", sm: "flex", md: "flex", lg: "flex" },
              width: "80%",
              textAlign: {
                xs: "center",
                sm: "center",
                md: "center",
                lg: "center",
              },
              fontSize: { lg: "8.5px", sm: 9, md: 8, xs: 6 },
            }}
          >
            Business travel solution
          </Typography>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default MyBiz;
