import styled, { css } from "styled-components";
import tokens from "@tokens";
import { mediaQuery } from "@styles";

const { sizes: { layout, breakpoints } } = tokens;

export const MaxWrapper = styled.div`
    max-width: ${layout.maxWidth};
    margin: 0 auto;

    ${mediaQuery(breakpoints.laptop, css`
        padding: 0 20px;
    `)}
`;