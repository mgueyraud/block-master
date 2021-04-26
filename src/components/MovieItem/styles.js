import styled, { css, keyframes } from "styled-components";
import tokens from "@tokens";

const { colors, sizes } = tokens;

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
    ${props => props.hasImage && css`
      animation: ${animationSkeleton} 1.5s infinite ease-out;
    `}
    background-color: ${colors.base.cadetBlue};
    border-radius:8px;
    cursor:pointer;
    position:relative;

    & p{
      position:absolute;
      top:50%;
      left:50%;
      transform: translate(-50%, -50%);
      font-size: ${sizes.font.titles.sm};
      text-align:center;
    }

    & img{
        border-radius:8px;  
        height:100%;
        max-width:100%;
        width:100%;
        object-fit: cover;
    }
`;