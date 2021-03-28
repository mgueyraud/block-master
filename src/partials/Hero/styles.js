import styled from "styled-components";
import tokens from "@tokens";

const { colors } = tokens;

export const HeroWrapper = styled.div`
`;

export const Carousel = styled.div`
    position:relative;
    display:flex;

    & > *:not(:first-child){
        margin-left:24px;
    }
`;

export const Paginate = styled.ul`
    margin: 0 auto;
    display:flex;
    justify-content: center;
    margin-top:24px;

    & li{
        width:12px;
        height:12px;
        border-radius:50%;
        background-color: ${colors.base.cadetBlue};
    }

    & li.active{
        background-color: ${colors.base.white};
    }

    & li:not(:first-child){
        margin-left:16px;
    }
`;
