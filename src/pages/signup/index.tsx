import React, { useCallback, useRef } from "react";
import { FiUser, FiArrowLeft, FiMail, FiLock } from "react-icons/fi";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import * as Yup from "yup";

import getValidationErros from "../../utils/getValidationErros";
import { Container, Content, Background } from "./styles";
import Button from "../../components/button";
import Input from "../../components/input";

import logo from "../../assets/logo.svg";

const SignUp: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    const handleSubmit = useCallback(async (data: object) => {
        try {
            formRef.current?.setErrors({});
            const schema = Yup.object().shape({
                name: Yup.string().required("Nome obrigatório"),
                email: Yup.string()
                    .required("Email obrigatório")
                    .email("Digite um email válido"),
                password: Yup.string().min(6, "No minimo 6 digitos"),
            });

            await schema.validate(data, {
                abortEarly: false,
            });
        } catch (err) {
            const errros = getValidationErros(err);
            formRef.current?.setErrors(errros);
        }
    }, []);
    return (
        <Container>
            <Background />
            <Content>
                <img src={logo} alt="GoBarber" title="GoBarber" />
                <Form ref={formRef} onSubmit={handleSubmit}>
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
