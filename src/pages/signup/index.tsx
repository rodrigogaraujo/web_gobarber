import React from "react";
import { FiUser, FiArrowLeft, FiMail, FiLock } from "react-icons/fi";
import { Form } from "@unform/web";

import { Container, Content, Background } from "./styles";
import Button from "../../components/button";
import Input from "../../components/input";

import logo from "../../assets/logo.svg";

const SignUp: React.FC = () => {
    function handleSubmit(data: object): void {
        console.log(data);
    }
    return (
        <Container>
            <Background />
            <Content>
                <img src={logo} alt="GoBarber" title="GoBarber" />
                <Form onSubmit={handleSubmit}>
                    <h1>Faça seu cadastro</h1>

                    <Input name="name" icon={FiUser} placeholder="Nome" />
                    <Input name="email" icon={FiMail} placeholder="E-mail" />
                    <Input
                        name="password"
                        icon={FiLock}
                        type="password"
                        placeholder="Senha"
                    />
                    <Button type="submit">Cadastrar</Button>
                </Form>
                <a href="forgot">
                    <FiArrowLeft size={20} />
                    Voltar para o logon
                </a>
            </Content>
        </Container>
    );
};

export default SignUp;
