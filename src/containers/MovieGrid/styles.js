import styled, { css } from "styled-components";
import tokens from "@tokens";
import { mediaQuery } from "@styles";

const { colors, sizes, fontFamilys } = tokens;
const { breakpoints } = sizes;

export const MovieWrapper = styled.main`
    margin-top:56px;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 25px;
    grid-row-gap:48px;
    margin-top:48px;

    ${mediaQuery(breakpoints.laptop, css`
        grid-template-columns: repeat(3, 1fr);
    `)}

    ${mediaQuery(breakpoints.tablet, css`
        grid-template-columns: repeat(2, 1fr);
    `)}

    ${mediaQuery(breakpoints.mobile, css`
        grid-template-columns: 1fr;
    `)}
`;

export const Title = styled.h1`
    font-family: ${fontFamilys.montserrat};
    font-size: ${sizes.font.titles.xl};
    color: ${colors.base.white};
    font-weight: bold;

    ${mediaQuery(breakpoints.tablet, `
        font-size: ${sizes.font.titles.md};
    `)}
`;