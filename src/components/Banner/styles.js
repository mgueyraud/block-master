import styled from "styled-components";
import { mediaQuery } from "@styles";
import tokens from "@tokens";

const { sizes: { breakpoints } } = tokens;

export const Banner = styled.div`
    position:relative;
    height: 310px;

    &>img{
        max-width:100%;
        width: 100%;
        height:100%;
        object-fit:cover;
        border-radius:8px;
    }
`;

export const Buttons = styled.div`
    display:flex;
    position:absolute;
    left:23px;
    bottom:32px;

    ${mediaQuery(breakpoints.tablet, `
        flex-direction:column;
    `)}

    & > *:not(:first-child){
        margin-left:16px;

        ${mediaQuery(breakpoints.tablet, `
            margin-left:0px;
            margin-top:16px;
        `)}
    }
`;

