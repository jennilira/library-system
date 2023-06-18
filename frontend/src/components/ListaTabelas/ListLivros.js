/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { toast } from "react-toastify";
import { CiSearch } from "react-icons/ci";
import '../AddLivro/AdicionarLivro.css'

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

const ListLivros = ({
  livros,
  setLivros,
  setOnEditLivros,
  onEditLivros,
  getLivros,
  categoria,
}) => {
  const handleEdit = (item) => {
    if (item) {
      setOnEditLivros(item);
    }
  };

  const handleDelete = async (id) => {
    await axios
      .delete("http://localhost:8800/livros/" + id)
      .then(({ data }) => {
        const newArray = livros?.filter((livro) => livro.id !== id);

        setLivros(newArray);
        toast.success(data);
      })
      .catch(({ data }) => toast.error(data));

    setOnEditLivros(null);
  };

  //   useEffect(() => {
  //     console.log(livros);
  //   }, [livros]);

  return (
    <div>
      <Container>
      <ContainerSearch>

        <div className="box-search">
       <table className="element">
       <tr>
        <td>
          <input type="text" placeholder="Procure por livros" className="search"/>
        </td>

        <td>
        <CiSearch/>
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
              <Th>Nome</Th>
              <Th>ano de lançamento</Th>
           
              <Th onlyWeb> categoria</Th>
              <Th onlyWeb>autor</Th>
              <Th onlyWeb>editora</Th>
              <Th></Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {livros?.map((item, i) => (
              <Tr key={i}>
                <Td width="30%">{item?.name}</Td>
                <Td width="20%">{item?.ano_de_lancamento}</Td>
              
                <Td width="7%">{item?.id_categoria}</Td>
                
                <Td width="30%">{item?.autor}</Td>
                <Td width="30%">{item?.editora}</Td>

                <Td alignCenter width="9%">
                  <FiEdit size="20" onClick={() => handleEdit(item)} />
                </Td>
                <Td alignCenter width="9%">
                  <RiDeleteBin6Line
                    size="20"
                    onClick={() => handleDelete(item.id)}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Container>
    </div>
  );
};

export default ListLivros;
