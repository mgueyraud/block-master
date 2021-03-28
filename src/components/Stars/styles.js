import styled from "styled-components";
import tokens from "@tokens";

const { colors, sizes, fontFamilys } = tokens;

export const Pill = styled.div`
    position:absolute;
    border-bottom-right-radius: 200px;
    border-top-right-radius: 200px;
    border-top:3px solid ${colors.primary};
    border-right:3px solid ${colors.primary};
    border-bottom:3px solid ${colors.primary};
    top:24px;
    left:0;
    width:114px;
    height:64px;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color: rgba(0,0,0,0.64);

    & img{
        width:${sizes.icons.default.width};
        height:${sizes.icons.default.height};
    }

    & span{
        font-family:${fontFamilys.montserrat};
        font-size:${sizes.font.titles.sm};
        color: ${colors.base.white};
        font-weight:bold;
        display:inline-block;
        margin-left:8px;
    }
`;