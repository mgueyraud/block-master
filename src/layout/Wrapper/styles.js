import styled from "styled-components";
import tokens from "@tokens";

const { sizes: { layout } } = tokens;

export const MaxWrapper = styled.div`
    max-width: ${layout.maxWidth};
    margin: 0 auto;
`;