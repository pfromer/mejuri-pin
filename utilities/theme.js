import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
        main: "#abb338",
        lightest: "white",
        light: "#e8e8e8",
        dark: "black",
        custom: "#2a2828"
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
    fontWeights: {
        light: "100",
        medium: "500",
        heavy: "700"
    },
    borderRadius: {
        softest: "4px",
        standard: "12px",
        heavy: "20px",
        heaviest: "24px"
    },
    navbarHeight: "85px",
    mediaQueries: {
        up: breakpoint => `@media (min-width: calc(${breakpoint} + 0.02px))`,
        down: breakpoint => `@media (max-width: ${breakpoint})`,
    },
    breakpoints: {
        xs: "0",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
    },
};

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme