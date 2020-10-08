import React from "react";
import { BaseStyles, theme } from "rimble-ui";
import { ThemeProvider } from "styled-components";

const withThemeProvider = (Component) => (props) => {
  return (
    <ThemeProvider theme={theme}>
      <BaseStyles>
        <Component {...props} />
      </BaseStyles>
    </ThemeProvider>
  );
};

export default withThemeProvider;
