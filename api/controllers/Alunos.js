import { db } from "../db.js";

export const getAlunos = (_, res) => {
  const q = "SELECT * FROM tb_jmf_discente";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};


export const addAlunos = (req, res) => {
  const q =
    "INSERT INTO tb_jmf_discente ( `name`, `ano_de_lancamento`  ,`editora` ,`id_categoria`,`autor`) VALUES(?)";

  const values = [
  
    req.body.name,
    req.body.ano_de_lancamento,
 
    req.body.editora,
    req.body.id_categoria,
    req.body.autor,
   
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("livro criado com sucesso.");
  });
};

export const updateAlunos = (req, res) => {
  const q =
    "UPDATE livro SET `name` = ?, `ano_de_lancamento` = ? ,`editora` = ?,`id_categoria` = ? ,`autor` = ?   WHERE `id` = ?";

  const values = [
    req.body.name,
    req.body.ano_de_lancamento,
  
    req.body.editora,
    req.body.id_categoria,
    req.body.autor,
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("livro atualizado com sucesso.");
  });
};

export const deleteAlunos = (req, res) => {
  const q = "DELETE FROM livro WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("livro deletado com sucesso.");
  });
};
