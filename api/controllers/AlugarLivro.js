import { db } from "../db.js";

export const getAlugarlivro = (_, res) => {
  const q = "SELECT * FROM alugarlivro";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addAlugarlivro = (req, res) => {
  const q =
    "INSERT INTO alugarlivro ( `id_aluno`  ,`data_devolucao` , `data_alugou`,`turma_id` , `colecao_id`) VALUES(?)";

  const values = [
    req.body.id_aluno,
    req.body.data_alugou,
   
    req.body.data_devolucao,
    req.body.turma_id,
    req.body.colecao_id,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("empréstimo criado com sucesso.");
  });
};

export const updateAlugarlivro = (req, res) => {
  const q =
    "UPDATE alugarlivro SET `data_alugou` = ?, `id_aluno` = ? ,`data_devolucao` = ?  WHERE `id` = ?";

  const values = [
    req.body.data_alugou,
    req.body.id_aluno,
    req.body.data_devolucao,
    req.body.turma_id,
    req.body.colecao_id,
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json(" atualizado com sucesso.");
  });
};

export const deleteAlugarlivro = (req, res) => {
  const q = "DELETE FROM alugarlivro WHERE `idalugarlivro` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json(" deletado com sucesso.");
  });
};
