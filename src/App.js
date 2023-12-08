import React from "react";
import { ThemeProvider } from "styled-components";

import theme from "./config/theme/themeVariables";
import GlobalStyles from "./config/theme/global.styled";

import Header from "./component/Header";
import HeaderBanner from "./component/HeaderBanner";
import TrustedCompanies from "./component/TrustedCompanies";
import CloudSoftware from "./component/CloudSoftware";
import Testimonials from "./component/Testimonials";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <HeaderBanner />
      <TrustedCompanies />
      <CloudSoftware />
      <Testimonials />
    </ThemeProvider>
  );
}
export default App;
