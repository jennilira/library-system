import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// import styled from "styled-components";
import Form from "./components/ADD-antigo/Form";
import Grid from "./components/ADD-antigo/Grid";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
// import Header from "./components/Header";
import SideNavBar from "./components/Sidebar/SideNavBar";
import Global from "./styles/global";
import Login from "../src/pages/Login/Login";
import FormAdmin from "./pages/RegistroAdm/Addadmin";
// import CadastrarLivros from "./components/Formfilter";

import CadastrarLivros from "./components/AddLivro/AdicionaLivros";
import Categorias from "./components/Categorias/Categorias";
import Categoria from "./components/Categorias/Categorias";
import Principal from "./components/AlugarLivro/Principal";
import ListLivros from "./components/ListaTabelas/ListLivros";
import ListCategoria from "./components/ListaTabelas/listarCategorias";
import AddAdmin from "./pages/RegistroAdm/Addadmin";
import AddColecao from "./components/addcolecao/addcolecao";
import Listarlivrosalugados from "./components/ListaTabelas/Listarlivrosalugado";
import ListarlivroAtrasados from "./components/ListaTabelas/ListarAtrasados";

// import api from "../../api"

// import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const [alugarlivro, setalugarlivro] = useState([]);
  const [onEditalugarlivro, setOnEditalugarlivro] = useState(null);

  const [colecaoLivro, setcolecaoLivro] = useState([]);
  const [onEditcolecaoLivro, setOnEditcolecaoLivro] = useState(null);

  const [Admin, setAdmin] = useState([]);
  const [onEditAdmin, setOnEditAdmin] = useState(null);

  const [categoria, setcategoria] = useState([]);
  const [onEditcategoria, setOnEditcategoria] = useState(null);

  const [livros, setLivros] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [onEditLivros, setOnEditLivros] = useState(null);

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8800/add");
      setUsers(res?.data?.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      // toast.error(error);
    }
  };

  const getColecaoLivro = async () => {
    try {
      const res = await axios.get("http://localhost:8800/getcolecao");
      console.log(res?.data)
      setcolecaoLivro(res?.data);
    } catch (error) {
      // toast.error(error);
    }
  };

 
  const getAdmin = async () => {
    try {
      const res = await axios.get("http://localhost:8800");
      setAdmin(res?.data?.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      // toast.error(error);
    }
  };

  useEffect(() => {
    getAdmin();
    getColecaoLivro()
  }, []);

  //livros uu
  const getLivros = async () => {
    try {
      const res = await axios.get("http://localhost:8800/getlivros");
      setLivros(res?.data?.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      // toast.error(error);
    }
  };

  useEffect(() => {
    getLivros();
  }, []);


  const getLivroalugado = async () => {
    try {
      const res = await axios.get("http://localhost:8800/getemprestimo");
      setalugarlivro(res?.data);
    } catch (error) {
      // toast.error(error);
    }
  };
  useEffect(() => {
    getLivroalugado();
  }, []);


  const getCategoria = async () => {
    try {
      const res = await axios.get("http://localhost:8800/getcatego");
      setcategoria(res?.data?.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      // toast.error(error);
    }
  };

  useEffect(() => {
    getCategoria();
  }, []);

  return (
    <>
      <SideNavBar />
      <Routes>
        <Route
          path="/add"
          element={
            <Form
              users={users}
              setUsers={setUsers}
              onEdit={onEdit}
              setOnEdit={setOnEdit}
              getUsers={getUsers}
            />
          }
        />

        {/* </Route> */}
        {/* <Route path='/' component={Home} />
      <Route path='/dashboard' component={Product} />
      <Route path='/category/:catNumber' component={Category} />
      <Route path='/cart' component={Cart} /> */}

        <Route
          path="/adm"
          element={
            <AddAdmin
              Admin={Admin}
              setAdmin={setAdmin}
              onEdit={onEdit}
              setOnEditAdmin={setOnEditAdmin}
              getAdmin={getAdmin}
            />
          }
        />
        <Route
          path="/addlivro"
          element={
            <CadastrarLivros
              colecaoLivro={colecaoLivro}
              livros={livros}
              setLivros={setLivros}
              onEditLivros={onEditLivros}
              setOnEditLivros={setOnEditLivros}
              getLivros={getLivros}


             
              setcolecaoLivro={setcolecaoLivro}
              onEditcolecaoLivro={onEditcolecaoLivro}
              setOnEditcolecaoLivro={setOnEditcolecaoLivro}
              getColecaoLivro={getColecaoLivro}
            />
          }
        />
        <Route
          path="/categoria"
          element={
            <Categoria
              categoria={categoria}
              setcategoria={setcategoria}
              onEditcategoria={onEditcategoria}
              setOnEditcategoria={setOnEditcategoria}
              getCategoria={getCategoria}
            />
          }
        />
        <Route
          path="/"
          element={
            <Principal
              categoria={categoria}
              setcategoria={setcategoria}
              onEditcategoria={onEditcategoria}
              setOnEditcategoria={setOnEditcategoria}
              getCategoria={getCategoria}
              colecaoLivro={colecaoLivro}
            />
          }
        />
        <Route
          path="/exemplares"
          element={
            <AddColecao
              colecaoLivro={colecaoLivro}
              setcolecaoLivro={setcolecaoLivro}
              onEditcolecaoLivro={onEditcolecaoLivro}
              setOnEditcolecaoLivro={setOnEditcolecaoLivro}
              getColecaoLivro={getColecaoLivro}
              livros={livros}
              setLivros={setLivros}
              onEditLivros={onEditLivros}
              setOnEditLivros={setOnEditLivros}
              getLivros={getLivros}
            />
          }
        />

        <Route
          path="/livros"
          element={
            <ListLivros
              setOnEditLivros={setOnEditLivros}
              livros={livros}
              setLivros={setLivros}
            />
          }
        />
        {/* <Route
          path="/livrosalugados"
          element={
            <Listarlivrosalugados
            setalugarlivro={setalugarlivro}
              
            
            alugarlivro={alugarlivro}

              onEditalugarlivro={onEditalugarlivro}
              setonEditalugarlivro={onEditalugarlivro}
              
            />
          }
        /> */}
        <Route
          path="/livroatrasados"
          element={
            <ListarlivroAtrasados
            setalugarlivro={setalugarlivro}
              
            
            alugarlivro={alugarlivro}

              onEditalugarlivro={onEditalugarlivro}
              setonEditalugarlivro={onEditalugarlivro}
              
            />
          }
        />
      </Routes>

      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />

      <Global />
    </>
  );
}

export default App;
