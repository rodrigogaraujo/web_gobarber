import styled, { css } from "styled-components";

interface ContainerProps {
    isFilled: boolean;
    isFocused: boolean;
}

export const Container = styled.div<ContainerProps>`
    width: 100%;
    padding: 16px;
    background: #232129;
    border: solid 2px #232129;
    border-radius: 10px;
    color: #666360;

    display: flex;
    align-items: center;

    ${(props) =>
        props.isFocused &&
        css`
            border: solid 2px #ff9000;
            color: #ff9000;
        `}
    ${(props) =>
        props.isFilled &&
        css`
            color: #ff9000;
        `}

    > svg {
        margin-right: 16px;
    }

    input {
        flex: 1;
        background: transparent;
        border: 0;
        color: #f4ede8;

        &::placeholder {
            color: #666360;
        }
    }

    & + div {
        margin-top: 8px;
    }
`;
