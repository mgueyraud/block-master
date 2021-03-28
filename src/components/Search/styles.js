import styled, { css } from "styled-components";
import tokens from "@tokens";

const { colors, sizes, fontFamilys } = tokens;

export const Input = styled.input`
    background-color: ${colors.white};
    padding: 11px 12px;
    border: 1px solid ${colors.primary};
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    flex:1;

    &::placeholder{
        color:${colors.base.cadetBlue};
        font-family:${fontFamilys.inter};
        line-height:22px;
    }
`;

export const InputWrapper = styled.div`
    display:flex;
    max-width:600px;
    width:100%;
`;
