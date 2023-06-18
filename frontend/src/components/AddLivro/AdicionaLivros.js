import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import axios from "axios";
import React, { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";

import "../Sidebar/SideNavBar.css";
import "./AdicionarLivro.css";
import ListLivros from "../ListaTabelas/ListLivros";
const Title = styled.h2`
  text-align: center;
`;

const Container = styled.div`
  width: 90%;
  position: relative;

  /* max-width: 800px; */
  /* margin-top: 20px; */
  display: flex;

  flex-direction: column;
  /* margin-left:300px; */
  /* padding:200px;
  gap: 10px; */
  padding-left: 70px;
  /* box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px; */
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
  box-shadow: 0px 0px 5px #ccc;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  position: relative;

  border-radius: 5px;
  align-items: center;
`;

const InputArea = styled.div`
  flex-direction: column;
  padding: 0 10px;

`;

const Input = styled.input`
  /* width: 120px; */
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

// const Select = styled.button`

//   border-radius: 5px;
// `;
// const Option = styled.button`
//   width: 100%;
// `;

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

//aquiiiiiiiiiii
//{ getCategorias, onEdit, setOnEdit }

const CadastrarLivros = ({ getLivros, onEditLivros, setOnEditLivros ,livros ,setLivros}) => {
  const ref = useRef();

  const [options, setOptions] = useState([]);

  useEffect(() => {
    const getCategorias = async () => {
      try {
        const res = await axios.get("http://localhost:8800/getcatego");
        setOptions(res?.data?.sort((a, b) => (a.name > b.name ? 1 : -1)));
      } catch (error) {
        // toast.error(error);
      }
    };
    getCategorias();
  }, []);

 

  useEffect(() => {
    if (onEditLivros) {
      const livro = ref.current;
      //é  aqui tipo descobtit onde esta passando dar cosole...nunca na funçao .......apaga onde esta dando erro,faz um filter seila
      if (livro) {
        livro.name.value = onEditLivros?.name;
        livro.ano_de_lancamento.value = onEditLivros?.ano_de_lancamento;
        
        const filterca = (jenni) => {
          return options?.filter((item, i) => {
            return item?.id === jenni;
          });
        };
        livro.id_categoria.value = filterca(
          onEditLivros?.id_categoria
        )[0]?.name;
        livro.autor.value = onEditLivros?.autor;
        livro.editor.value = onEditLivros?.editora;
      }
    }
  }, [onEditLivros ,options]);

  const [idcategory, setIdCategory] = useState(null);
  const [categorySelect, setCategorySelect] = useState(null);
  const [error, seterros] = useState('');

  const onOptionChangeHandler = (event) => {
    setCategorySelect(event.target.value);
  };

  useEffect(() => {
    if (categorySelect) {
      const filterca = (a) => {
        return options?.filter((item, i) => {
          return item?.name
            ?.toLowerCase()
            .includes(categorySelect?.toLowerCase());
        });
      };
      setIdCategory(filterca()[0]?.id);

    }
  }, [categorySelect, options]);

useEffect (() => {
  console.log(error)
},[])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const livro = ref.current;

    if (
      !livro?.name?.value ||
      !livro?.ano_de_lancamento?.value ||
   
      !livro?.id_categoria?.value ||
      !livro?.autor?.value
    ) {
      return toast.warn("Preencha todos os campos!");
    }
    //tinha que validar, if isso etc...
    if (onEditLivros) {
      if (idcategory) {
        await axios
          .put("http://localhost:8800/livros" + onEditLivros?.id, {
            name: livro?.name?.value,
            ano_de_lancamento: livro?.ano_de_lancamento?.value,
          
            editora: livro?.editor?.value,
            id_categoria: idcategory,
            autor: livro?.autor?.value,
          })
          .then(({ data }) => toast.success(data))
          .catch(({ data }) => toast.error(data));
      }
    } else {
      console.log(idcategory);
      if (idcategory) {
        await axios
          .post("http://localhost:8800/addLivros", {
           
            name: livro?.name?.value,
            ano_de_lancamento: livro?.ano_de_lancamento?.value,
          
            editora: livro?.editor?.value,
            id_categoria: idcategory,
            autor: livro?.autor?.value,
          })
          .then(({ data }) => {
            livro.name.value = "";
            livro.ano_de_lancamento.value = "";
           
            livro.id_categoria.value = "";
            livro.autor.value = "";

            setOnEditLivros(null);
            getLivros();
            toast.success(data);
          })
          .catch(({ data }) => toast.error(data));
          
          // if (error.response && error.response.data) {
          //   // toast.error(error.response.data);
          //   seterros(error.response.data); 
          //   console.log(error.response.data)
          //   // Defina o estado 'erros' com o valor 'error.response.data' se for a estrutura correta
          // } else {
          //   toast.error("Erro ao processar a requisição."); // Ou defina uma mensagem de erro genérica caso não haja 'error.response.data'
          //   console.log(error.response.data)
          //   seterros(error.response.data); 
          // }
        
      }
    }
  };

  return (
    // eslint-disable-next-line react/style-prop-object
    <div className="margin-top">

     
      <Container>
        <FormContainer ref={ref} onSubmit={handleSubmit} className="">
          <Title> cadastrar livro</Title>

          <InputArea className="area-livro-add mb-3">
            <Label>Nome do livro </Label>
            <Input type="text" name="name" />
          </InputArea>

          <InputArea>
            <Label>ano de lançamento</Label>
            <Input type="date" name="ano_de_lancamento" />
          </InputArea>

          <InputArea>
            <Label> Autor</Label>
            <Input name="autor" />
          </InputArea>
          <InputArea>
            <Label> Editora </Label>
            <Input name="editor" />
          </InputArea>

          

          <div className="InputArea">
            <Label> Selecione Categoria</Label>

            <select
              onChange={onOptionChangeHandler}
              className="form"
              name="id_categoria"
            >
              <option>Selecione opção</option>
              {options?.length > 0
                ? options?.map((item, i) =>
                    item?.name ? <option>{item?.name}</option> : ""
                  )
                : ""}
            </select>
          </div>

          <Button type="submit">SALVAR</Button>
        </FormContainer>
      </Container>


      <div>
      <ListLivros
              setOnEditLivros={setOnEditLivros}
              livros={livros}
              setLivros={setLivros}
            />
      </div>
    
    </div>
  );
};

export default CadastrarLivros;
//
