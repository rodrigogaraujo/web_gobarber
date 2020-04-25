import React, { useCallback, useRef } from "react";
import { FiLogIn, FiMail, FiLock } from "react-icons/fi";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import * as Yup from "yup";

import getValidationErros from "../../utils/getValidationErros";
import { Container, Content, Background } from "./styles";
import Button from "../../components/button";
import Input from "../../components/input";

import logo from "../../assets/logo.svg";

const SignIn: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const handleSubmit = useCallback(async (data: object) => {
        try {
            const schema = Yup.object().shape({
                email: Yup.string()
                    .required("Digite seu email")
                    .email("Digite um email válido"),
                password: Yup.string().required("Digite sua senha"),
            });
            await schema.validate(data, {
                abortEarly: false,
            });
        } catch (err) {
            const erros = getValidationErros(err);
            formRef.current?.setErrors(erros);
        }
    }, []);
    return (
        <Container>
            <Content>
                <img src={logo} alt="GoBarber" title="GoBarber" />
                <Form onSubmit={handleSubmit} ref={formRef}>
                    <h1>Faça seu logon</h1>

                    <Input name="email" icon={FiMail} placeholder="E-mail" />
                    <Input
                        name="password"
                        icon={FiLock}
                        type="password"
                        placeholder="Senha"
                    />
                    <Button type="submit">Entrar</Button>

                    <a href="forgot">Esqueci minha senha</a>
                </Form>

                <a href="signup">
                    <FiLogIn />
                    Criar conta
                </a>
            </Content>
            <Background />
        </Container>
    );
};

export default SignIn;
