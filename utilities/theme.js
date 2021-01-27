import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
        powderWhite: "white",
        strong: "#abb338", //a767c7, da5882, abb338 989f35
        lightBlue: "#AFDBD2",
        onyx: "#36313D"
    },
    fontFamilies: {
        default: "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Helvetica,ヒラギノ角ゴ Pro W3,Hiragino Kaku Gothic Pro,メイリオ,Meiryo,ＭＳ Ｐゴシック,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
        informal: "cursive"
    },
    fontSizes: {
        small: "14px",
        medium: "16px",
        large: "18px"
    },
    navbarHeight: "85px",
    productHeaderHeight: "65px",

    mediaQueries: {
        up: breakpoint => `@media (min-width: calc(${breakpoint} + 0.02px))`,
        down: breakpoint => `@media (max-width: ${breakpoint})`,
    },
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