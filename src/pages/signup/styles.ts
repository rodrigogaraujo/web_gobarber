import styled from "styled-components";
import { shade } from "polished";

import backgroundImg from "../../assets/sign-up-background.png";

export const Container = styled.div`
    align-items: stretch;
    display: flex;
    height: 100vh;
`;

export const Content = styled.div`
    width: 100%;
    max-width: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    form {
        margin: 80px 0;
        max-width: 340px;
        text-align: center;
        width: 100%;
        h1 {
            margin-bottom: 24px;
        }
    }

    > a {
        display: block;
        color: #f4ede8;
        text-decoration: none;
        display: flex;
        align-items: center;
        transition: color 0.2s;

        &:hover {
            color: ${shade(0.2, "#f4ede8")};
        }
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center;
    background-size: cover;
`;
