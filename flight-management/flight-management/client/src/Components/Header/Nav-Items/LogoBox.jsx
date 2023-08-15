import { Box } from "@mui/system";
import React from "react";
import logo from "../../Header/logo.png";

const LogoBox = () => {
  return (
    <React.Fragment>
      <Box
        sx={{
          width: { xs: "15%", sm: "20%", md: "15%", lg: "15%" },
          display: "flex",
          justifyContent: { sm: "center", md: "center", lg: "center" },
          alignItems: "center",
          cursor: "pointer",
          flexBasis: { sm: "15%", md: "20%", lg: "15%" },
        }}
      >
        <Box
          component={"img"}
          sx={{
            width: { xs: "100%", sm: "80%", md: "50%", lg: "38%" },
          }}
          src={logo}
        />
      </Box>
    </React.Fragment>
  );
};

export default LogoBox;
