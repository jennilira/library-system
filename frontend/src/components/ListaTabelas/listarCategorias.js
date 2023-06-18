import React from "react";
import axios from "axios";
import styled from "styled-components";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";


const Container = styled.div`
  width: 90%;
 
   /* max-width: 800px; */
  /* margin-top: 20px; */
  display: flex;
  
  flex-direction: column;
/* margin-left:300px; */
/* padding:200px;
  gap: 10px; */
  padding-left:70px;

  width: 93%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap-reverse;
    /* flex-direction: row-reverse; */
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


  max-width:93%;
 
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
align-items: center;
  
`;

export const Thead = styled.thead`



`;

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

const ListCategoria = ({ categoria, setcategoria, setOnEditcategoria }) => {
  const handleEdit = (item) => {
    setOnEditcategoria(item);
    
  };

  const handleDelete = async (id) => {
    await axios
      .delete("http://localhost:8800/catego/" + id)
      .then(({ data }) => {
        const newArray = categoria.filter((user) => user.id !== id);

        setcategoria(newArray);
        toast.success(data);
      })
      .catch(({ data }) => toast.error(data));

      setOnEditcategoria(null);
  };

  return (
    <Container>
    <Table>
      <Thead>
        <Tr>
          <Th>Nome</Th>
          <Th>cdd</Th>
        
          <Th></Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {categoria.map((item, i) => (
          <Tr key={i}>
            <Td width="30%">{item?.name}</Td>
            <Td width="30%">{item?.cdd}</Td>
            
            <Td alignCenter width="5%">
              <FaEdit onClick={() => handleEdit(item)} />
            </Td>
            <Td alignCenter width="5%">
              <FaTrash onClick={() => handleDelete(item.id)} />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
    </Container>
  );
};

export default ListCategoria;
