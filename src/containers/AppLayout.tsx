import React from "react";
import { Box } from "native-base";
import AppHeader from "./AppHeader";

const AppLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Box
        padding={2}
        justifyContent="flex-start"
        alignItems="center"
        height="100%"
        width="100%"
      >
        {children}
      </Box>
    </>
  );
};

export default AppLayout;
