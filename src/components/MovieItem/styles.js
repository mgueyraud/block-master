import styled, { keyframes } from "styled-components";
import tokens from "@tokens";

const { colors } = tokens;

const animationSkeleton = keyframes`
  0% {
    background-position: -100px
  }
  
  40%, 100% {
    background-position: 300px
  }
`;

export const MovieArticle = styled.article`
    height:330px;
    position: relative;
    
    background-image: linear-gradient(90deg, ${colors.secondary} 0px, ${colors.primary} 80px, ${colors.secondary} 160px); 
    background-size: 600px;
    animation: ${animationSkeleton} 2s infinite ease-out;

    & img{
        border-radius:8px;  
        height:100%;
        max-width:100%;
    }
`;