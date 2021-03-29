import styled, { css } from "styled-components";
import tokens from "@tokens";
import { mediaQuery } from "@styles";

const { colors, fontFamilys, sizes } = tokens;
const { breakpoints } = sizes;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 0;

    ${mediaQuery(breakpoints.laptop, css`
        flex-direction:column;
    `)}
`;

export const Anchor = styled.a`
    text-decoration:underline;
    font-family: ${fontFamilys.inter};
    font-size: ${sizes.font.body.sm};
    line-height: 19px;
    color: white;

    ${mediaQuery(breakpoints.laptop, css`
        display:none;
    `)}

    ${props => props.active && css`
        text-decoration:underline;
        color: ${colors.primary}
    `}
`;