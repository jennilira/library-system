// import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// // import styled from "styled-components";
// import Form from "../components/Form";
// import Grid from "../components/Grid";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";
// // import Header from "./components/Header";
// import SideNavBar from "../components/Sidebar/SideNavBar";
// import Global from "../styles/global";



// function Public() {
//   const [users, setUsers] = useState([]);
//   const [onEdit, setOnEdit] = useState(null);

//   const getUsers = async () => {
//     try {
//       const res = await axios.get("http://localhost:8800");
//       setUsers(res?.data?.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
//     } catch (error) {
//       // toast.error(error);
//     }
//   };

//   useEffect(() => {
//     getUsers();
//   }, [setUsers]);

//   return (
//     <>
    
// <Routes >
  
// <Route path="/"    element={
//           <Form
//           users={users}
//           setUsers={setUsers}
//           onEdit={onEdit}
//           setOnEdit={setOnEdit}
//           getUsers={getUsers}
//         />
//           } /> 

    
   
   
//   </Routes>
  
//   <ToastContainer
//           autoClose={3000}
//           position={toast.POSITION.BOTTOM_LEFT}
//         /> 
   
     
//     </>
//   );
// }

// export default Public;
