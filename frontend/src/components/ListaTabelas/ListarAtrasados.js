//um filter da se a data de hoje for maior que a data prazo

/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { toast } from "react-toastify";
import { CiSearch } from "react-icons/ci";
import "../AddLivro/AdicionarLivro.css";
import LivroAlugado from "./LivroAlugado";

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

const ContainerSearch = styled.div`
  margin-top: 40px;

  max-width: 93%;
  margin-top: 40px;
  border-radius: 5px;
`;
const Table = styled.table`
  /* width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1120px;
  margin: 20px auto;
  word-break: break-all;
  max-width:91%; */

  margin-top: 40px;
  /* position:relative; */

  max-width: 93%;

  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  align-items: center;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr`
  color: 12px;
`;

export const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

const ListarlivroAtrasados = ({
  livros,
  setLivros,
  setOnEditLivros,
  onEditLivros,
  getLivros,
  categoria,

  setalugarlivro,
  setonEditalugarlivro,

  alugarlivro,

  onEditalugarlivro,
}) => {
  const handleEdit = (item) => {
    if (item) {
      setonEditalugarlivro(item);
    }
  };

  //   const [alugarlivro, setAlugarlivro] = useState([]);
  //   const [alugarlivro, setAlugarlivro] = useState([]);

  //   useEffect(() => {
  //     fetchAlugarLivros();
  //   }, []);

  //   const fetchAlugarLivros = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:8800/getemprestimo");
  //       const emprestimo = response.data;
  //       setAlugarlivro(emprestimo)
  //       const dataprazo = response.data.data_devolucao;
  //       setdataPrazoaa(dataprazo)
  //       console.log(dataPrazoaa)
  //       console.log(dataPrazoaa)
  //       setAlugarlivro(livros);
  //     } catch (error) {
  //       console.error("Erro ao obter os dados dos livros:", error);
  //     }
  //   };

  const handleDelete = async (idalugarlivro) => {
    await axios
      .delete("http://localhost:8800/emprestimo/" + idalugarlivro)
      .then(({ data }) => {
        const newArray = alugarlivro?.filter(
          (alugarlivro) => alugarlivro.id !== idalugarlivro
        );

        setalugarlivro(newArray);
        toast.success(data);
      })
      .catch(({ data }) => toast.error(data));

    // setonEditalugarlivro(null);
  };

  // useEffect(() => {
  //   console.log(alugarlivro);
  //   console.log(alugarlivro.data_devolucao);
  // }, []);

  return (
    <div>
      <Container>
        <ContainerSearch>
          <div className="box-search">
            <table className="element">
              <tr>
                <td>
                  <input
                    type="text"
                    placeholder="Procure por livros"
                    className="search"
                  />
                </td>

                <td>
                  <CiSearch />
                </td>
              </tr>
            </table>
          </div>
        </ContainerSearch>
      </Container>
      <Container>
        <Table>
          <Thead>
            <Tr>
              <Th onlyWeb>id_aluno</Th>
              <Th onlyWeb>exemplar</Th>
              <Th onlyWeb>data que alugou</Th>
              <Th onlyWeb>data devolução</Th>
              {/* <Th onlyWeb>exemplares</Th> */}
              <Th>status</Th>
              <Th></Th>
              <Th></Th>
              {/* <Th></Th> */}
            </Tr>
          </Thead>
          <Tbody>
            {alugarlivro?.map((item, i) => (
              <LivroAlugado item={item} i={i} alugarlivro={alugarlivro} handleDelete={handleDelete} />
            ))}
          </Tbody>
        </Table>
      </Container>
    </div>
  );
};

export default ListarlivroAtrasados;
