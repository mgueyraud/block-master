import styled, { css } from "styled-components";
import tokens from "@tokens";

const { colors, fontFamilys, sizes } = tokens;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 0;
`;

export const Anchor = styled.a`
    text-decoration:underline;
    font-family: ${fontFamilys.inter};
    font-size: ${sizes.font.body.sm};
    line-height: 19px;
    color: white;

    ${props => props.active && css`
        text-decoration:underline;
        color: ${colors.primary}
    `}
`;