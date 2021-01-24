import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
        powderWhite: "white",
        strong: "#e60023",
        lightBlue: "#AFDBD2",
        onyx: "#36313D"
    },
    fonts: ["sans-serif", "Roboto"],
    fontSizes: {
        small: "1em",
        medium: "2em",
        large: "3em"
    },
    navbarHeight: "85px",
    productHeaderHeight: "65px",

    up: breakpoint => `@media (min-width: calc(${breakpoint} + 0.02px))`,
    down: breakpoint => `@media (max-width: ${breakpoint})`,

    breakpoints: {
        xs: "0",
        sm: "576px",
        md: "768",
        lg: "992px",
        xl: "1200px",
    },
};

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme