import { db } from "../db.js";

export const getLivrocolecao = (_, res) => {
  const q = "SELECT * FROM livrocolecao";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const getLivroEColecao = (_, res) => {
  const q = "SELECT livros.id, livro.name, livro.ano_de_lancamento, livro.editora, livro.autor, livro.volume, livro.qtde, livro.cdd, livrocolecao.id_colecao, livrocolecao.status FROM livro INNER JOIN livrocolecao ON livro.id = livrocolecao.livro_id ";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};
export const getLivroEColecaoByid = (req, res) => {
  const q = " SELECT * FROM livrocolecao WHERE `id_colecao` = ?";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};


export const getColecaoBylivroid = (req, res) => {
  const q = " SELECT * FROM livrocolecao WHERE `livro_id` = ?";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const putLivroEColecao = (_, res) => {
  const q = "SELECT livros.id, livros.name, livros.ano_de_lancamento, livros.editora, livros.autor, livros.volume, livros.qtde, livros.cdd, livrocolecao.id_colecao, livrocolecao.status FROM livros INNER JOIN livrocolecao ON livros.id = livrocolecao.livro_id ";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};


export const addLivrocolecao = (req, res) => {
  const q =
    "INSERT INTO livrocolecao ( `livro_id`, `status`  ) VALUES(?)";

  const values = [
  
    req.body.livro_id,
    req.body.status,
   
   
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json(" criado com sucesso.");
  });
};

export const updateLivrocolecao = (req, res) => {
  const q =
    "UPDATE livrocolecao SET `livro_id` = ?, `status` = ?  WHERE `id` = ?";

  const values = [
    req.body.livro_id,
    req.body.status,
   
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json(" atualizado com sucesso.");
  });
};

export const deleteLivrocolecao = (req, res) => {
  const q = "DELETE FROM livrocolecao WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json(" deletado com sucesso.");
  });
};
