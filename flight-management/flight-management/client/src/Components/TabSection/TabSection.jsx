import { Box, Button, Container } from "@mui/material";
import { set } from "date-fns";
import React from "react";
import TabBox from "./TabBox";

const TabSection = ({ activeTab, setActiveTab }) => {
  return (
    <React.Fragment>
      <Box
        sx={{
          // background:'linear-gradient(to bottom,#051322,#15457c)',
          w: "100%",
          mt: { xs: "90px", lg: "64px" },
        }}
      >
        <TabBox activeTab={activeTab} setActiveTab={setActiveTab} />
      </Box>
    </React.Fragment>
  );
};

export default TabSection;
