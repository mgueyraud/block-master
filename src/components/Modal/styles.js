import styled, { css } from "styled-components";
import tokens from "@tokens";
import { MovieItem } from "@components";
import { mediaQuery } from "@styles";

const { colors, sizes, fontFamilys } = tokens;

export const ModalWrapper = styled.div`
    position: fixed;
    background-color: ${colors.base.cinder};
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    display:flex;
    align-items:center;
    justify-content:center;

    ${mediaQuery(sizes.breakpoints.laptop, css`
        overflow: auto;
        align-items:flex-start;
    `)}
`;

export const ModalContainer = styled.div`
    display:flex;
    max-width: ${sizes.layout.maxWidth};
    width: 100%;
    margin: 0 auto;
    position:relative;

    ${mediaQuery(sizes.breakpoints.laptop, css`
        padding: 0 20px;
        flex-direction:column;
        margin: 50px 0;
    `)}
`;

export const RotatedMovieItem = styled(MovieItem)`
    transform: rotate(-45deg) skew(20deg, 10deg);
    width: 282px;
    margin-left:150px;

    ${mediaQuery(sizes.breakpoints.laptop, css`
        transform: unset;
        margin: 0 auto;
    `)}
`;

export const CloseIcon = styled.img`
    position: absolute;
    right:0;
    top:-100px;

    ${mediaQuery(sizes.breakpoints.laptop, css`
        right:10px;
        top:-20px;
    `)}
`;


export const ModalDescription = styled.div`
    max-width:565px;
    margin-left: auto;

    ${mediaQuery(sizes.breakpoints.laptop, css`
        margin: 10px 0 0 0;
    `)}

    & h1{
        font-family: ${fontFamilys.montserrat};
        font-weight: bold;
        font-size: ${sizes.font.titles.xl};

        ${mediaQuery(sizes.breakpoints.laptop, `
            font-size: ${sizes.font.titles.md};
        `)}
    }

    & p{
        margin-top:15px;
        font-family: ${fontFamilys.montserrat};
        font-size: ${sizes.font.body.md};
        line-height:27px;
    }

    .info{
        color: ${colors.base.cadetBlue};

        & > span:not(:first-child)::before{
            content: "·";
            margin: 0 10px;
            font-size: 20px;
        }
    }

    .cta{
       display:flex;
       margin-top: 20px;

       ${mediaQuery(sizes.breakpoints.laptop, css`
            flex-direction:column;
        `)}

       & > button:last-child{
            margin-left:10px;

            ${mediaQuery(sizes.breakpoints.laptop, css`
                margin: 10px 0 0 0;
            `)}
       } 
    }
`;