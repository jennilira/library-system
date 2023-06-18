import axios from "axios";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

const Title = styled.h2`
  text-align: center;
  color: #228b22;
`;

const Container = styled.div`
  width: 90%;

  /* max-width: 800px; */
  /* margin-top: 20px; */
  display: flex;

  flex-direction: column;
  /* margin-left:300px; */
  /* padding:200px;
  gap: 10px; */
  display: flex;
  align-items: center;
  padding-left: 70px;
  /* box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,  esse daqui comente*/ 
    /* rgba(0, 0, 0, 0.3) 0px 1px 3px -1px; */
  width: 93%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap-reverse;
  /* flex-direction: row-reverse; */
`;
// const Containerup = styled.form`
// margin-top:30px;
// `;
const FormContainer = styled.form`
  /* position:relative; */

  /* margin-top:30px; */
  /* max-width:40%; */
  width: 400px;

  background-color: #fff;
  padding: 20px;
  /* box-shadow: 0px 0px 5px #ccc;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  border-radius: 5px;
  align-items: center;
`;

const InputArea = styled.div`
  flex-direction: column;
  padding: 0 10px;
`;

const Input = styled.input`
  width: 120px;
  /* padding: 0 10px; */
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
  width: 100%;
`;

const Label = styled.label`
  width: 100%;
  /* padding: 0 10px; */
`;

const Button = styled.button`
  margin-top: 30px;
  padding: 10px;
  width: 100px;
  cursor: pointer;

  border-radius: 30px;
  border: none;
  background-color: #228b22;
  color: white;
  height: 40px;
`;

const Login = ({ getUsers, onEdit, setOnEdit }) => {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const user = ref.current;

      user.nome.value = onEdit.nome;
      user.email.value = onEdit.email;
      user.fone.value = onEdit.fone;
      user.data_nascimento.value = onEdit.data_nascimento;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = ref.current;

    if (
      !user.nome.value ||
      !user.email.value ||
      !user.fone.value ||
      !user.data_nascimento.value
    ) {
      return toast.warn("Preencha todos os campos!");
    }

    if (onEdit) {
      await axios
        .put("http://localhost:8800/" + onEdit.id, {
          nome: user.nome.value,
          email: user.email.value,
          fone: user.fone.value,
          data_nascimento: user.data_nascimento.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:8800", {
          nome: user.nome.value,
          email: user.email.value,
          senha: user.fone.value,
          data_nascimento: user.data_nascimento.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }

   
    user.email.value = "";
   
    user.senha.value = "";

    setOnEdit(null);
    getUsers();
  };

  return (
    // eslint-disable-next-line react/style-prop-object
    <div className="margin-top">
      <Container>
        <FormContainer ref={ref} onSubmit={handleSubmit} className="">
          <Title>
       
            <p>Seja bem vindo(a) </p>
          </Title>

          <div className="nav-brand">
          
            <img
              src={require("../../assets/img/Brasao.png")}
              alt=" "
              className="logo"
            />
          </div>

          
          <InputArea>
            <Label>email</Label>
            <Input name="email" type="email" />
          </InputArea>


          <InputArea className="mb-3">
            <Label>senha</Label>
            <Input name="senha" />
          </InputArea>
          <Button type="submit">entrar</Button>
        </FormContainer>
      </Container>
    </div>
  );
};

export default Login;
