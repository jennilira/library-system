/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { FiMinusCircle } from "react-icons/fi";
import { IoAddCircleOutline } from "react-icons/io5";
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

const AddColecao = ({
  livros,
  setLivros,
  setOnEditLivros,
  onEditLivros,
  getLivros,
  categoria,

  colecaoLivro,
  setcolecaoLivro,
  onEditcolecaoLivro,
  setOnEditcolecaoLivro,
  getColecaoLivro,
}) => {
  const handleEdit = (item) => {
    if (item) {
      setOnEditLivros(item);
    }
  };



  const [count, setCount] = useState(0);
  const [colecaopeloidLivro, setcolecaopeloidLivro] = useState([]);


  const getColecaoBylivroid = async () => {
    try {
      const response = await axios.get("http://localhost:8800/getColecaoBylivroid");
      setcolecaopeloidLivro(response?.data?.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
  const colecaobyidlivro = response?.data
  console.log(colecaobyidlivro)
    } catch (error) {
      // toast.error(error);
    }

  };



  const incrementCount = ( colecaoId) => {


    // const response =  axios.get("http://localhost:8800/getcolecao");
    // const livrosAtualizados = response.data;
    setCount(count + 1);
    const livroId = 11
    // Chamada à API para adicionar o valor
    axios.post("http://localhost:8800/addcolecao", {
        // livro_id: livroResponse.data.id,
        
        livro_id: livroId,
        status: "disponível",
      }, { valor: count + 1, colecaoId })

    
      .then(response => {
        console.log('Valor adicionado com sucesso!');
      })
      .catch(error => {
        console.error('Erro ao adicionar o valor:', error);
      });
  };

  const decrementCount = ( colecaoId) => {
    setCount(count - 1);
    // Chamada à API para excluir o valor
    axios.delete('http://localhost:8800/colecao/' + colecaoLivro.id_colecao , { data: { valor: count - 1 } })
      .then(response => {
        console.log('Valor excluído com sucesso!');
      })
      .catch(error => {
        console.error('Erro ao excluir o valor:', error);
      });
  };
console.log(colecaoLivro)

//   const handleDelete = async (id) => {
//     await axios
//       .delete("http://localhost:8800/colecao/" + id)
//       .then(({ data }) => {
//         const newArray = colecaoLivro?.filter((colecaoLivro) => colecaoLivro.id !== id);
// //isso ta errado 
//         setLivros(newArray);
//         toast.success(data);
//       })
//       .catch(({ data }) => toast.error(data));

//     setOnEditLivros(null);
//   };

    useEffect(() => {
      console.log(colecaoLivro);
      console.log(getColecaoLivro);
      console.log(livros);
    }, []);

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
         
           
              <Th onlyWeb> cdd/categoria</Th>
            
            
              <Th onlyWeb>volume</Th>
              {/* <Th onlyWeb>exemplares</Th> */}
              <Th></Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {colecaoLivro?.map((item, i) => (
              <Tr key={i}>
                {/* <Td width="">{item?.name}</Td>            
                <Td width="">{item?.cdd}</Td>
                <Td width="">{item?.volume}</Td> */}
                <Td width=""> <p>Valor atual: {count}</p></Td>
                <Td width="">{item?.livro_id}</Td>
                <Td width="">{item?.status}</Td>
                {/* <Td width="30%">{item?.qtde}</Td> */}

                <Td alignCenter width="9%">
                  <IoAddCircleOutline size="28" onClick={() => handleEdit(item)} />
                </Td>
                <Td alignCenter width="9%">
                  <FiMinusCircle
                    size="28"
                    // onClick={() => handleDelete()}
                  />
                </Td>
                <Td>
                <button onClick={() => incrementCount(item.id)}>Adicionar</button>
      <button onClick={() => decrementCount(item.id)}>Diminuir</button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Container>
    </div>
  );
};

export default AddColecao;
