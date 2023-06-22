import axios from "axios";
import React, { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import "../Sidebar/SideNavBar.css";
import "../AddLivro/AdicionarLivro.css";
const Title = styled.h2`
  text-align: center;
`;

const Container = styled.div`
  width: 90%;
  position: relative;

  /* max-width: 800px; */
  /* margin-top: 20px; */
  display: flex;

  flex-direction: column;
  /* margin-left:300px; */
  /* padding:200px;
  gap: 10px; */
  padding-left: 70px;

  width: 93%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap-reverse;
  /* flex-direction: row-reverse; */
`;
// const Containerup = styled.form`
// margin-top:30px;
// `;
const FormContainer = styled.form`
  /* position:relative; */

  /* margin-top:30px; */
  max-width: 91%;

  background-color: #fff;
  padding: 20px;
  /* box-shadow: 0px 0px 5px #ccc;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  position: relative;

  border-radius: 5px;
  align-items: center;
`;

const InputArea = styled.div`
  flex-direction: column;
  padding: 0 10px;
`;

const Input = styled.input`
  width: 120px;
  /* padding: 0 10px; */
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
  width: 100%;
`;

const Label = styled.label`
  width: 100%;
  /* padding: 0 10px; */
`;

// const Select = styled.button`

//   border-radius: 5px;
// `;
// const Option = styled.button`
//   width: 100%;
// `;

const Button = styled.button`
  margin-top: 30px;
  padding: 10px;
  width: 100px;
  cursor: pointer;

  border-radius: 30px;
  border: none;
  background-color: #228b22;
  color: white;
  height: 40px;
`;

//aquiiiiiiiiiii
//{ getCategorias, onEdit, setOnEdit }

const CadastrarLivros = ({
  getLivros,
  onEditLivros,
  setOnEditLivros,
  colecaoLivro,
  setcolecaoLivro,
  onEditcolecaoLivro,
  setOnEditcolecaoLivro,
  getColecaoLivro,
}) => {
  const ref = useRef(); //negocio do form

  // setLivros={setLivros}
  // onEditLivros={onEditLivros}
  // setOnEditLivros={setOnEditLivros}
  // getLivros={getLivros}

  // useEffect(() => {
  //   const getCategorias = async () => {
  //     try {
  //       const res = await axios.get("http://localhost:8800/getsala");
  //       setOptions(res?.data?.sort((a, b) => (a.name > b.name ? 1 : -1)));
  //     } catch (error) {
  //       // toast.error(error);
  //     }
  //   };
  //   getCategorias();
  // }, []);
  //

  const [turmaData, setTurmaData] = useState([]);
  const [erros, setEroos] = useState("");
  const [idColecao, setIdColecao] = useState(null);

  useEffect(() => {
    const getTurmas = async () => {
      try {
        const res = await axios.get("http://localhost:8800/turmas");
        // setTurmaData([])
        setTurmaData(res?.data?.sort((a, b) => (a.name > b.name ? 1 : -1)));
        // console.log(turmaData);
        // console.log(turmaData);
      } catch (error) {
        // toast.error(error);
        // setEroos(res)
      }
    };

    getTurmas();
  }, []);

  const [livros, setLivros] = useState([]);

  useEffect(() => {
    //mude as coisas pra  pegar o livro
    const getLivros = async () => {
      try {
        const res = await axios.get("http://localhost:8800/getlivros");
        setLivros(res?.data?.sort((a, b) => (a.name > b.name ? 1 : -1)));
      } catch (error) {
        // toast.error(error);
      }
    };

    getLivros();
  }, []);

  const onOptionChangeHandler = (event) => {
    console.log("User Selected Value - ", event.target.value);
  };
  const [selectedAluno, setSelectedAluno] = useState("");
  useEffect(() => {
    if (onEditcolecaoLivro) {
      const livro = ref.current;
    }
  }, [onEditcolecaoLivro]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emprestimo = ref.current;

    const turmaSelecionada = selectedTurma;

    const formData = {
      id_aluno: selectedAluno,
      data_alugou: emprestimo.data_alugou.value,
      data_devolucao: emprestimo.data_devolucao.value,
      colecao_id: idColecao,
      turma_id: turmaSelecionada,
    };
    // if (
    //   !emprestimo ||
    //   !emprestimo.id_aluno ||
    //   !emprestimo.data_alugou ||
    //   !emprestimo.data_devolucao ||
    //   !emprestimo.colecao_id ||
    //   !emprestimo.turma_id
    // ) {
    //   return toast.warn("Preencha todos os campos!");
    // }
    if (onEditcolecaoLivro) {
      await axios
        .put("http://localhost:8800/" + onEditcolecaoLivro.id, {
          // id_aluno: emprestimo.id_aluno.value,
          // data_alugou: emprestimo.data_alugou.value,
          // data_devolucao: emprestimo.data_devolucao.value,
          // colecao_id: emprestimo.colecao_id.value,
          // turma_id: emprestimo.turma_id.value,
          id_aluno: emprestimo.selectedAluno,
          data_alugou: new Date(),
          data_devolucao: emprestimo.data_devolucao.value,
          colecao_id: emprestimo.idColecao,
          turma_id: emprestimo.turmaSelecionada,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      const response = await axios.post(
        "http://localhost:8800/addemprestimo",
        formData
      );
      toast.success(response.data);
      if (response.status === 200) {
        const { data } = response;
        // toast.success(data);

        emprestimo.id_aluno = "";
        emprestimo.data_devolucao.value = "";
        emprestimo.turma_id = "";
        emprestimo.colecao_id = "";

        // const id_colecaoAtualizado = data.id_colecao;
        // setIdColecao(id_colecaoAtualizado);
        // console.log("ID da coleção atualizado:", id_colecaoAtualizado);
      } else {
        toast.error("Ocorreu um erro ao adicionar o empréstimo.");
      }
      // .then(({ data }) => toast.success(data))
      // .catch(({ data }) => toast.error(data));
      console.log(response);
    }

    // emprestimo.id_aluno = "";
    // emprestimo.data_alugou.value = "";
    // emprestimo.data_devolucao.value = "";
    // emprestimo.turma_id = "";
    // emprestimo.colecao_id = "";

    // setOnEditcolecaoLivro(null);
    // getLivros();
  };

  const [inputSearch, setInputSearch] = useState("");
  const [modalSearch, setModalSearch] = useState(false);

  const [selectedTurma, setSelectedTurma] = useState("");
  const [filteredAlunoData, setFilteredAlunoData] = useState([]);

  // const [alunos, setAlunos] = useState([]);
  const searchLivros = useMemo(() => {
    return livros?.filter((livro, i) => {
      return livro?.name?.toLowerCase()?.includes(inputSearch?.toLowerCase());
    });
  }, [livros, inputSearch]);

  const handleTurmaChange = async (e) => {
    const turmaSelecionada = e.target.value;
    console.log("Turma selecionada:", turmaSelecionada);

    setSelectedTurma(turmaSelecionada); // Atualiza a turma selecionada no estado
    try {
      const response = await axios.get("http://localhost:8800/getalunos");
      const alunos = response.data;
      console.log(response.data);

      if (turmaSelecionada) {
        const filtered = alunos.filter(
          (aluno) => aluno.discente_idTurma.toString() === turmaSelecionada
        );
        console.log("Alunos filtrados:", filtered);

        setFilteredAlunoData(filtered);
      } else {
        setFilteredAlunoData([]);
      }
    } catch (error) {
      console.error(error);
      // Lida com erros de requisição, se necessário
    }
  };

  // const handleAlunoSelecionadoChange = (e) => {
  //   const alunoSelecionado = e.target.value;
  //   console.log("Aluno selecionado:", alunoSelecionado);
  //   console.log( alunoSelecionado);

  //   setSelectedAluno(alunoSelecionado);
  //   console.log(selectedAluno)

  // };



  const handleAlunoSelecionadoChange = (alunoSelecionado) => {
    console.log("Aluno selecionado:", alunoSelecionado);

    setSelectedAluno(alunoSelecionado);
    console.log(selectedAluno);
  };

  useEffect(() => {
    console.log("Aluno selecionado mesmo:", selectedAluno);
    console.log("Aluno selecionado coleçao:", idColecao);
    
  }, [selectedAluno]);

  const filtroLivro = (livroId) => {
    if (colecaoLivro?.length > 0) {
      const colecaoFiltrada = colecaoLivro?.filter(
        (s) => s?.livro_id === livroId
      );

      const livroSelecionado = colecaoFiltrada[0];
      setIdColecao(livroSelecionado?.id_colecao);
      setModalSearch(false);
    }
  };

  return (
    <div className="margin-top">
      <Container>
        <FormContainer ref={ref} onSubmit={handleSubmit} className="">
          <Title>Empréstimo de livro </Title>

          <InputArea className="area-livro-add mb-3">
            <Label>Nome do livro </Label>
            <Input
              onChange={(e) => {
                setModalSearch(true);
                setInputSearch(e.target.value);
              }}
              value={inputSearch}
              name="nome"
            />
            {modalSearch ? (
              <div className="modal-area-livro-search">
                {searchLivros?.map((livro, i) => (
                  <option
                    onClick={() => {
                      setInputSearch(livro?.name);
                      filtroLivro(livro?.id);
                      setModalSearch(false);
                    }}
                  >
                    {livro?.name} - volume: {livro?.volume}
                  </option>
                ))}
              </div>
            ) : (
              ""
            )}
          </InputArea>

          <InputArea>
            <Label> data de hoje </Label>
            <Input type="text" name="data_alugou" />
          </InputArea>
          <InputArea>
            <Label> data prazo </Label>
            <Input type="text" name="data_devolucao" />
          </InputArea>

          <InputArea>
            <Label> Selecionar Turma </Label>
            <InputArea></InputArea>
            <select value={selectedTurma} onChange={handleTurmaChange}>
              <option value="">Selecione uma turma</option>
              {turmaData?.map((turma) => (
                <option key={turma?.turma_id} value={turma?.turma_id}>
                  {/* {console.log(turma)} */}
                  {turma?.turma_nome} - {turma?.turma_serie}
                </option>
              ))}
            </select>
          </InputArea>

          <InputArea>
            <Label> Selecionar Aluno </Label>
            <InputArea></InputArea>
            <select
              onChange={(e) => handleAlunoSelecionadoChange(e.target.value)}
            >
              <option value="">Selecione um aluno</option>
              {filteredAlunoData.map((aluno) => (
                <option key={aluno.id_aluno} value={aluno.id_aluno}>
                  {aluno.discente_nome}
                </option>
              ))}
            </select>
          </InputArea>

          <Button type="submit">SALVAR</Button>
        </FormContainer>
      </Container>
    </div>
  );
};

export default CadastrarLivros;
