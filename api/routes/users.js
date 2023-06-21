import express from "express";
import {
  addUser,
  deleteUser,
  getUsers,
  updateUser,
} from "../controllers/user.js";

import {
  addAdmin,
  deleteAdmin,
  getAdmin,
  updateAdmin,
} from "../controllers/admin.js";
import { addCatego, deleteCatego, getCatego, updateCatego } from "../controllers/categoriaLivro.js";
import { addLivros, deleteLivros, getLivros, updateLivros } from "../controllers/livros.js";
import { getTurmas } from "../controllers/Turma.js";
import { addAlunos, deleteAlunos, getAlunos, updateAlunos } from "../controllers/Alunos.js";
import { addAlugarlivro, deleteAlugarlivro, getAlugarlivro, updateAlugarlivro } from "../controllers/AlugarLivro.js";
import { addLivrocolecao, deleteLivrocolecao, getLivroEColecao, getLivrocolecao, updateLivrocolecao } from "../controllers/colecaoLivro.js";
const router = express.Router();

router.get("/getadm", getAdmin);

router.post("/addadm", addAdmin);

router.put("/adm/:id", updateAdmin);

router.delete("/adm/:id", deleteAdmin);

//admin

router.get("/add", getUsers);

router.post("/adduser", addUser);

router.put("/:id", updateUser);

router.delete("/dele/:id", deleteUser);


//categorias
router.get("/getcatego", getCatego);
//sao essasrotas que fazem o get 

router.post("/addcatego", addCatego);

router.put("/catego/:id", updateCatego);

router.delete("/catego/:id", deleteCatego);


//livros
router.get("/getlivros", getLivros);

router.post("/addlivros", addLivros);

router.put("/livros/:id", updateLivros);

router.delete("/livros/:id", deleteLivros);


//turmas
router.get("/turmas", getTurmas);

//Alunos

router.get("/getalunos", getAlunos);
router.post("/addAlunos", addAlunos);

router.put("/alunos/:id", updateAlunos);

router.delete("/alunos/:id", deleteAlunos);


//emprestimo / alugarlivro

router.get("/getemprestimo", getAlugarlivro);
router.post("/addemprestimo", addAlugarlivro);
router.put("/emprestimo/:id", updateAlugarlivro);
router.delete("/emprestimo/:id", deleteAlugarlivro);



//exemplar /Livrocolecao
router.get("/getcolecao", getLivrocolecao);
router.post("/addcolecao", addLivrocolecao);
router.put("/colecao/:id", updateLivrocolecao);
router.delete("/colecao/:id", deleteLivrocolecao);
router.put("/putLivroEColecao/:id", putLivroEColecao);
router.get("/getLivroEColecao/:id", getLivroEColecao);

//aqui estao todas as rotas 

export default router;
