import styled from "styled-components";

export const Banner = styled.div`
    position:relative;
    height: 310px;
`;

export const Buttons = styled.div`
    display:flex;
    position:absolute;
    left:23px;
    bottom:32px;

    & > *:not(:first-child){
        margin-left:16px;
    }
`;

