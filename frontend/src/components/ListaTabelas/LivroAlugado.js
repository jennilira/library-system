import React, { useEffect, useState } from "react";
import { Td, Tr } from "./ListLivros";
import { RiDeleteBin6Line } from "react-icons/ri";

function LivroAlugado({ item, i, alugarlivro, handleDelete }) {
  const [dataPrazo, setdataPrazoa] = useState(null);

  const verificarAtraso = () => {
    const dataAtual = new Date();
    const prazo = new Date(item?.data_devolucao);

console.log(dataAtual, prazo)

    if (dataAtual > prazo) {
      setdataPrazoa("Atrasado");
    } else {
      setdataPrazoa("Em dia");
    }
  };

  useEffect(() => {
    verificarAtraso();
  }, [alugarlivro]);

  const DATE_OPTIONS = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const data_alug = new Date(item?.data_alugou).toLocaleDateString(
    "pt-BR",
    DATE_OPTIONS
  );
  const data_devolucao = new Date(item?.data_devolucao).toLocaleDateString(
    "pt-BR",
    DATE_OPTIONS
  );

  return (
    <Tr key={i}>
      <Td width="">{item?.id_aluno}</Td>
      <Td width="">{item?.colecao_id}</Td>

      <Td width="">{data_alug}</Td>
      <Td width="">{data_devolucao}</Td>
      <Td>{dataPrazo}</Td>
      {/* <Td width="30%">{item?.qtde}</Td> */}

      {/* <Td alignCenter width="9%">
                  <FiEdit size="20" onClick={() => handleEdit(item)} />
                </Td> */}
      {/* <Td alignCenter width="9%">
        <RiDeleteBin6Line
          size="20"
          onClick={() => handleDelete(item.idalugarlivro)}
        />
      </Td> */}
    </Tr>
  );
}

export default LivroAlugado;
