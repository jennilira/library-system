import { db } from "../db.js";

export const getTurmas = (_, res) => {
  const q = "SELECT * FROM tb_jmf_turma ";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

