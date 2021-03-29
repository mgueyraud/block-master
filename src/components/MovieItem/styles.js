import styled, { keyframes } from "styled-components";
import tokens from "@tokens";

const { colors } = tokens;

const animationSkeleton = keyframes`
  0% {
    background-color: ${colors.base.black};
  }
  
  70% {
    background-color: ${colors.primary};
  }

  100% {
    background-color: ${colors.base.black};
  }
`;

export const MovieArticle = styled.article`
    height:330px;
    position: relative;
    background-color:${colors.secondary};
    animation: ${animationSkeleton} 1.5s infinite ease-out;
    border-radius:8px;
    cursor:pointer;

    & img{
        border-radius:8px;  
        height:100%;
        max-width:100%;
        width:100%;
        object-fit: cover;
    }
`;