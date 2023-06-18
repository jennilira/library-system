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





//aqui estao todas as rotas 

export default router;
