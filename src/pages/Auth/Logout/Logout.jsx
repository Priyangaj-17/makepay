import React from "react";
import { ThemeProvider } from "styled-components";
import { Button } from "../../../components/Styles/buttons/Button.styles";
import ButtonContainer from "../../../components/Styles/buttons/ButtonContainer";
import InputContainer from "../../../components/Styles/inputs/InputContainer";

Button.defaultProps = {
  theme: {
    main: "#BF4F74",
  },
};

const theme = {
  main: "lightgreen",
};

const theme2 = {
  main: "red",
};

const Logout = () => {
  return (
    <>
      <ButtonContainer>Normal</ButtonContainer>
      <ThemeProvider theme={theme}>
        <ButtonContainer>Themed</ButtonContainer>
      </ThemeProvider>
      <ThemeProvider theme={theme2}>
        <ButtonContainer>Second Themed</ButtonContainer>
      </ThemeProvider>
      <InputContainer type="text" placeholder="Enter your name" />
      <InputContainer type="password" placeholder="Enter password" />
    </>
  );
};

export default Logout;
