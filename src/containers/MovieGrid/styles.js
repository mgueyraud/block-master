import styled from "styled-components";
import tokens from "@tokens";

const { colors, sizes, fontFamilys } = tokens;

export const MovieWrapper = styled.main`
    margin-top:56px;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 25px;
    grid-row-gap:48px;
    margin-top:48px;
`;

export const Title = styled.h1`
    font-family: ${fontFamilys.montserrat};
    font-size: ${sizes.font.titles.xl};
    color: ${colors.base.white};
    font-weight: bold;
`;