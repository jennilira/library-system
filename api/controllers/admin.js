import { db } from "../db.js";

export const getAdmin = (_, res) => {
  const q = "SELECT * FROM adm_bib";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

//esse get usrs ele lista entende 


//essa abaixo é de login 
// export const CompareAdmin = (req, res) => {
//     const q = ("SELECT * FROM adm_bib WHERE email = ?  AND senha = ? ",
//      [email,senha],
    
//     (err,res) => {
//        if(err){
//             res.send(err)
//        }
//       else{
//         return res.status(200).json("Adm  criado com sucesso.");
//       }
//     } );


// // export const CompareAdmin = (req, res) => {
// //     const q = ("SELECT * FROM adm_bib WHERE email = ? ", [email],
    
// //     (err,res) => {
// //        if(err){
// //             res.send(err)
// //        }
// //        if(res.legth === 0){
// //         const q = ( "SELECT * FROM adm_bib WHERE email = ? ")
// //        }
// //     } );
   

//     const values = [
       
//         req.body.email,
//         req.body.senha,
       
//       ];
    
//       db.query(q, [values], (err) => {
//         if (err) return res.json(err);
    
//         return res.status(200).json("Usuário criado com sucesso.");
//       });
  
   
//   };


export const addAdmin = (req, res) => {
  const q =
    "INSERT INTO adm_bib ( `email`, `senha`) VALUES(?)";

  const values = [
  
    req.body.email,
    req.body.senha,
   
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("admin criado com sucesso.");
  });
};

export const updateAdmin = (req, res) => {
  const q =
    "UPDATE adm_bib SET `email` = ?, `senha` = ?  WHERE `id` = ?";

  const values = [
    req.body.email,
    req.body.senha,
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário atualizado com sucesso.");
  });
};

export const deleteAdmin = (req, res) => {
  const q = "DELETE FROM adm_bib WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário deletado com sucesso.");
  });
};
