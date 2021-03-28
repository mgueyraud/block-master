import styled, { keyframes } from "styled-components";
import tokens from "@tokens";

const { colors } = tokens;

const animation = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const Ring = styled.div`
    display: block;
    margin: 130px auto 80px;
    position: relative;
    width: 80px;
    height: 80px;

    & div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 64px;
        height: 64px;
        margin: 8px;
        border: 5px solid ${colors.primary};
        border-radius: 50%;
        animation: ${animation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: ${colors.primary} transparent transparent transparent;
    }

    &>div:nth-child(1) {
        animation-delay: -0.45s;
    }
    &>div:nth-child(2) {
        animation-delay: -0.3s;
    }
    &>div:nth-child(3) {
        animation-delay: -0.15s;
    }
`;