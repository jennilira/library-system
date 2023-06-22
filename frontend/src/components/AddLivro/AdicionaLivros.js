import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactInputDateMask from 'react-input-date-mask';
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
  padding-left: 4px;
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

const CadastrarLivros = ({
  getLivros,
  onEditLivros,
  setOnEditLivros,
  livros,
  setLivros,
}) => {
  const ref = useRef();

  const data = new Date();
  const dataFormatada = (data, "dd/MM/yyyy");

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

    console.log(data);
    getCategorias();
  }, []);

  useEffect(() => {
    if (onEditLivros) {
      const livro = ref.current;
      if (livro) {
        livro.name.value = onEditLivros?.name;
        const ano = new Date(onEditLivros?.ano_de_lancamento);
        // livro.ano_de_lancamento.value = `${ano.getFullYear()}-${ano.getMonth() + 1}-${ano.getDate()}`;
        livro.ano_de_lancamento.value = onEditLivros?.ano_de_lancamento;
        // const filterca = (jenni) => {
        //   return options?.filter((item, i) => {
        //     return item?.id === jenni;
        //   });
        // };
        // livro.id_categoria.value = filterca(
        //   onEditLivros?.id_categoria
        // )[0]?.name;
        livro.autor.value = onEditLivros?.autor;
        livro.editora.value = onEditLivros?.editora;
        livro.volume.value = onEditLivros?.volume;
        livro.qtde.value = onEditLivros?.qtde;
        livro.cdd.value = onEditLivros?.cdd;
      }
    }
  }, [onEditLivros, options]);
  ///editar/update  duas tabelas ,livro e colecao

  const [idcategory, setIdCategory] = useState(null);
  const [categorySelect, setCategorySelect] = useState(null);
  const [error, seterros] = useState("");
  const [mascara, setmascara] = useState("");

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

  useEffect(() => {
    console.log(error);
   
    // Lógica a ser executada em caso de erro na consulta
   
 
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const livro = ref.current;

    if (
      !livro?.name?.value ||
      !livro?.ano_de_lancamento?.value ||
      !livro?.autor?.value ||
      !livro?.volume?.value ||
      !livro?.qtde?.value ||
      !livro?.cdd?.value ||
      !livro?.editora?.value
    ) {
      return toast.warn("Preencha todos os campos!");
    }



    if (onEditLivros) {

 
      // const response = await axios.get(`http://localhost:8800/getLivros/${livro.id}`);
      // const livros = response.data;
      // //tenho que pegar o id que esta sendo editado?::
      // console.log(livros)
      // for (const livro of livros) {
      //   const response2 = await axios.get(`http://localhost:8800/getcolecao`);
      //   const colecao = response2.data;
      
      //   const registrosFiltrados = colecao.filter((item) => item.livro_id === livro.id);
      // console.log(registrosFiltrados)
      //   for (const registro of registrosFiltrados) {
      //     await axios.put(`http://localhost:8800/colecao/${registro.id}`, {
      //       // Coloque aqui as propriedades que deseja atualizar na tabela colecao
      //       livro_id: livro.id,
      //       status: "disponível",
      //     });
      //   }
      // }
      

      const livroResponse = await axios
        .put("http://localhost:8800/livros/" + onEditLivros?.id, {
          name: livro?.name?.value,
          ano_de_lancamento: livro?.ano_de_lancamento?.value,
        
          // ano_de_lancamento: new Date(livro?.ano_de_lancamento?.value),

          editora: livro?.editora?.value,
          // id_categoria: idcategory,
          autor: livro?.autor?.value,
          cdd: livro?.cdd?.value,
          volume: livro?.volume?.value,
          // qtde: livro?.qtde?.value,

          // qtde: livro?.qtde?.value,
        })
//       
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data) &&   toast.error("Ocorreu um erro ao cadastrar o livro.")) ;
      
      console.log(error);
    } else {
      try {
        const livroResponse = await axios.post(
          "http://localhost:8800/addLivros",
          {
            name: livro?.name?.value,
            ano_de_lancamento: livro?.ano_de_lancamento?.value,
            // ano_de_lancamento: new Date(livro?.ano_de_lancamento?.value),
            editora: livro?.editora?.value,
            cdd: livro?.cdd?.value,

            autor: livro?.autor?.value,
            volume: livro?.volume?.value,
            qtde: livro?.qtde?.value,
          }
        );

        if (livroResponse.status === 200) {
          const quantidadeExemplares = parseInt(livro?.qtde?.value);

          const exemplarPromises = [];

          const response = await axios.get("http://localhost:8800/getLivros");
          const livrosAtualizados = response.data;

          const livrosOrdenados = livrosAtualizados.sort((a, b) => b.id - a.id);
          const ultimoLivroAdicionado = livrosOrdenados[0];
          const livroId = ultimoLivroAdicionado.id;

          for (let i = 0; i < quantidadeExemplares; i++) {
            exemplarPromises.push(
              axios.post("http://localhost:8800/addcolecao", {
                // livro_id: livroResponse.data.id,
                livro_id: livroId,
                status: "disponível",
              })
            );
          }

          // Executar todas as chamadas de API em paralelo
          const exemplarResponses = await Promise.all(exemplarPromises);

          // Verificar se todos os exemplares foram inseridos com sucesso
          const exemplaresInseridos = exemplarResponses.every(
            (response) => response.status === 200
          );

          if (exemplaresInseridos) {
            livro.name.value = "";
            livro.ano_de_lancamento.value = "";
            livro.cdd.value = "";
            livro.autor.value = "";
            livro.volume.value = "";
            livro.editora.value = "";
            livro.qtde.value = "";

            setOnEditLivros(null);
            getLivros();
            toast.success("Livro cadastrado com sucesso!");
          } else {
            toast.error("Erro ao cadastrar exemplares.");
          }
        }
      } catch (error) {
        toast.error("Ocorreu um erro ao cadastrar o livro.");
      }
    }

    // else {
    //   toast.error("Erro ao cadastrar livro.");
    // }
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
            <Input
              name="ano_de_lancamento"
              value={mascara}
              onChange={(e) => setmascara(e.target.value)}
              mask='dd/mm/yyyy' 
            />

            
          </InputArea>

       

          <InputArea>
            <Label> Autor</Label>
            <Input name="autor" />
          </InputArea>
          <InputArea>
            <Label> Editora </Label>
            <Input name="editora" />
          </InputArea>
          <InputArea>
            <Label> volume do livro </Label>
            <Input name="volume" />
          </InputArea>
          <InputArea>
            <Label> quantidade de exemplares </Label>
            <Input name="qtde" type="number" min="1" />
          </InputArea>
          <InputArea>
            <Label> cdd / categoria </Label>
            <Input name="cdd" type="text" />
          </InputArea>
          {/* 
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
          </div> */}

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
