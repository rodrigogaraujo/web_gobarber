import styled from "styled-components";
import { shade } from "polished";

import backgroundImg from "../../assets/sign-in-background.png";

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

        h1 {
            margin-bottom: 24px;
        }

        input {
            width: 100%;
            background: #232129;
            border: solid 2px #232129;
            border-radius: 10px;
            padding: 16px;
            color: #f4ede8;

            &::placeholder {
                color: #666360;
            }

            & + input {
                margin-top: 8px;
            }
        }

        button {
            width: 100%;
            height: 56px;
            margin-top: 16px;
            padding: 16px 0;
            background: #ff9000;
            border: 0;
            border-radius: 10px;
            transition: background-color 0.2s;
            font-weight: 500;

            &:hover {
                background: ${shade(0.2, "#ff9000")};
            }
        }

        a {
            display: block;
            margin-top: 24px;
            color: #f4ede8;
            text-decoration: none;
            transition: color 0.2s;

            &:hover {
                color: ${shade(0.2, "#f4ede8")};
            }
        }
    }

    > a {
        display: block;
        color: #ff9000;
        text-decoration: none;
        display: flex;
        align-items: center;
        transition: color 0.2s;

        svg {
            margin-right: 16px;
        }

        &:hover {
            color: ${shade(0.2, "#ff9000")};
        }
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center;
    background-size: cover;
`;
