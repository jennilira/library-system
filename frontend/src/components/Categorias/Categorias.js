import axios from "axios";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
// import "./Sidebar/SideNavBar.css";
import ListCategoria from "../ListaTabelas/listarCategorias";
const Title = styled.h2`
  text-align: center;
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
  padding-left: 70px;

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
  max-width: 91%;

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

const Categoria = ({
  getCategoria,
  onEditcategoria,
  setOnEditcategoria,
  setcategoria,
  categoria,
}) => {
  const ref = useRef();

  //Em vez disso, use useEffect. A função passada useEffectserá executada após a renderização ser confirmada na tela.

  useEffect(() => {
    if (onEditcategoria) {
      const user = ref.current;

      user.name.value = onEditcategoria.name;
      user.cdd.value = onEditcategoria.cdd;
    }
  }, [onEditcategoria]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //handleSubmit é uma funçao que nas palavras mais simples ,ela segura as informaçoes do form

    const user = ref.current;

    if (!user.name.value || !user.cdd.value) {
      return toast.warn("Preencha todos os campos!");
    }

    if (onEditcategoria) {
      await axios
        .put("http://localhost:8800/catego/" + onEditcategoria.id, {
          name: user.name.value,
          cdd: user.cdd.value,
          //  aqui  edit dela
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:8800/addcatego", {
          //aqui é o add a categoria
          name: user.name.value,
          cdd: user.cdd.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }

    user.name.value = "";
    user.cdd.value = "";

    setOnEditcategoria(null);
    getCategoria();
  };

  return (
    // eslint-disable-next-line react/style-prop-object

    <div className="margin-top">
      <Container>
        <FormContainer ref={ref} onSubmit={handleSubmit} className="">
          <Title> adicionar categoria</Title>

          <InputArea className="mb-3">
            <Label>Nome da categoria</Label>
            <Input name="name" />
          </InputArea>
          <InputArea>
            <Label> cdd</Label>
            <Input name="cdd" />
          </InputArea>

          <Button type="submit">SALVAR</Button>
        </FormContainer>
      </Container>

      <div>
        <ListCategoria
          categoria={categoria}
          setcategoria={setcategoria}
          onEditcategoria={onEditcategoria}
          setOnEditcategoria={setOnEditcategoria}
          getCategoria={getCategoria}
        />
      </div>
    </div>
  );
};

export default Categoria;
