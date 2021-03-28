import styled, { css } from "styled-components";
import tokens from "@tokens";

const { colors, sizes, fontFamilys } = tokens;

export const Button = styled.button`
    background-color: ${colors.primary};
    border-radius:8px;
    border:none;
    display:flex;
    align-items: center;
    padding: 10px 24px;
    height:100%;

    ${props => props.secondary && css`
        background-color: ${colors.secondary};
        border: 1px solid ${colors.primary};
        color: ${colors.primary};
    `}

    ${props => props.borderlessLeft && css`
        border-radius: 0;
        border-top-right-radius:8px;
        border-bottom-right-radius:8px;
    `}

    & img{
        width: ${sizes.icons.default.width};
        height: ${sizes.icons.default.height};
    }

    & span{
        font-size: ${sizes.font.cta};
        padding-left: 8px;
        font-family: ${fontFamilys.montserrat};
        font-weight: bold;
        text-transform: uppercase;
    }
`;