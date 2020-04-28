import React, { useCallback, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiUser, FiArrowLeft, FiMail, FiLock } from "react-icons/fi";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import * as Yup from "yup";

import api from "../../services/api";
import { useToast } from "../../hooks/Toast";

import getValidationErros from "../../utils/getValidationErros";
import { Container, Content, Background, ContentAnimation } from "./styles";
import Button from "../../components/Button";
import Input from "../../components/Input";

import logo from "../../assets/logo.svg";

interface SignUpFormData {
    name: string;
    email: string;
    password: string;
}

const SignUp: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const { addToast } = useToast();
    const history = useHistory();

    const handleSubmit = useCallback(
        async (data: SignUpFormData) => {
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

                await api.post("/users", data);
                history.push("/");

                addToast({
                    type: "success",
                    title: "Cadastro realizado",
                    description: "Você já pode fazer logon em seu GoBarber",
                });
            } catch (err) {
                if (err instanceof Yup.ValidationError) {
                    const erros = getValidationErros(err);
                    formRef.current?.setErrors(erros);
                    return;
                }

                addToast({
                    type: "error",
                    title: "Erro ao cadastrar",
                    description:
                        "Ocorreu um erro ao fazer o seu cadastro, tente novamente",
                });
            }
        },
        [addToast, history],
    );
    return (
        <Container>
            <Background />
            <Content>
                <ContentAnimation>
                    <img src={logo} alt="GoBarber" title="GoBarber" />
                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <h1>Faça seu cadastro</h1>

                        <Input name="name" icon={FiUser} placeholder="Nome" />
                        <Input
                            name="email"
                            icon={FiMail}
                            placeholder="E-mail"
                        />
                        <Input
                            name="password"
                            icon={FiLock}
                            type="password"
                            placeholder="Senha"
                        />
                        <Button type="submit">Cadastrar</Button>
                    </Form>
                    <Link to="/">
                        <FiArrowLeft size={20} />
                        Voltar para o logon
                    </Link>
                </ContentAnimation>
            </Content>
        </Container>
    );
};

export default SignUp;
