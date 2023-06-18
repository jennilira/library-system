import { db } from "../db.js";

export const getCatego = (_, res) => {
  const q = "SELECT * FROM categorias ";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

//catego = categoria
//categoria_id no alug livro referenciar..
//mudar os negocios

export const addCatego = (req, res) => {
  const q =
    "INSERT INTO categorias(`name`,  `cdd`) VALUES(?)";

  const values = [
    req.body.name,
    req.body.cdd,
   
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("categoria criada com sucesso.");
  });
};

export const updateCatego = (req, res) => {
  const q =
    "UPDATE categorias SET `name` = ?, `cdd` = ?  WHERE `id` = ?";

  const values = [
    req.body.name,
    req.body.cdd,
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("categorias atualizada com sucesso.");
  });
};

export const deleteCatego = (req, res) => {
  const q = "DELETE FROM categorias WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("categoria deletada com sucesso.");
  });
};
