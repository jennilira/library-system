import axios from "axios";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";


const Title = styled.h2`
  text-align: center;
  color: #228b22;
`;

const Container = styled.div`
  /* width: 90%; */

  /* max-width: 800px; */
  /* margin-top: 20px; */
  display: flex;

  flex-direction: column;
 
  /* padding:200px;
  gap: 10px; */
  display: flex;
  align-items: center;
  padding-left: 70px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  /* width: 93%; */
  padding-left: 210px;
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
  width: 97%;

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
// addAdmin, deleteAdmin, getAdmin, updateAdmin 
const AddAdmin = ({ getAdmin, onEditAdmin, setOnEditAdmin }) => {
  const ref = useRef();

  useEffect(() => {
    if (onEditAdmin) {
      const Admin = ref.current;

    
      Admin.email.value = onEditAdmin.email;
      Admin.senha.value = onEditAdmin.senha;
    }
    
  }, [onEditAdmin]);

  const handleSubmit1 = async (e) => {
    e.preventDefault();

    const Admin = ref.current;

    if (
    
      !Admin.email.value ||
      !Admin.senha.value
    ) {
      return toast.warn("Preencha todos os campos!");
    }

    if (onEditAdmin) {
      await axios
        .put("http://localhost:8800/adm" + onEditAdmin.id, {
     
          email: Admin.email.value,
        
          senha: Admin.senha.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:8800/addadm", {
            email: Admin.email.value,
        
            senha: Admin.senha.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }

 
    Admin.email.value = "";
    Admin.senha.value = "";

    setOnEditAdmin(null);
    getAdmin();
  };

  return (
    // eslint-disable-next-line react/style-prop-object
    <div className="margin-top">
      <Container>
        <FormContainer ref={ref} onSubmit={handleSubmit1} className="">
          <Title>
       
            <p>Adicionar Administrador  </p>
          </Title>

          {/* <div className="nav-brand">
          
            <img
              src={require("../img/Brasao.png")}
              alt=" "
              className="logo"
            />
          </div> */}

          
          <InputArea>
            <Label>email</Label>
            <Input name="email" type="email" />
          </InputArea>


          <InputArea className="mb-3">
            <Label>senha</Label>
            <Input name="senha" />
          </InputArea>
          <Button type="submit">SALVAR</Button>
        </FormContainer>
      </Container>
    </div>
  );
};

export default AddAdmin;
