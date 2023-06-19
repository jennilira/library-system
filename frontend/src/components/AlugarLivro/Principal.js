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

const CadastrarLivros = (getLivros, onEditLivros, setOnEditLivros) => {
  const ref = useRef();

  const [options, setOptions] = useState([]);

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
  useEffect(() => {
    const getTurmas = async () => {
      try {
        const res = await axios.get("http://localhost:8800/turmas");
        // setTurmaData([])
        setTurmaData(res?.data?.sort((a, b) => (a.name > b.name ? 1 : -1)));
        console.log(turmaData);
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
        console.log(livros);
      } catch (error) {
        // toast.error(error);
      }
    };
    getLivros();
  }, []);

  const onOptionChangeHandler = (event) => {
    console.log("User Selected Value - ", event.target.value);
  };

  //useEffect para fazer o cadastro do livro
  useEffect(() => {
    if (onEditLivros) {
      const livro = ref.current;
    }
  }, [onEditLivros]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const livro = ref.current;

    if (
      !livro.name.value ||
      !livro.ano_de_lancamento.value ||
      !livro.quan_copias.value ||
      !livro.editora.value ||
      !livro.id_categoria.value
    ) {
      return toast.warn("Preencha todos os campos!");
    }

    if (onEditLivros) {
      await axios
        .put("http://localhost:8800/" + onEditLivros.id, {
          name: livro.name.value,
          ano_de_lancamento: livro.ano_de_lancamento.value,
          quan_copias: livro.quan_copias.value,
          editora: livro.editora.value,
          id_categoria: livro.id_categoria.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:8800/addlivros", {
          name: livro.name.value,
          ano_de_lancamento: livro.ano_de_lancamento.value,
          quan_copias: livro.quan_copias.value,
          editora: livro.editora.value,
          id_categoria: livro.id_categoria.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }

    livro.name.value = "";
    livro.ano_de_lancamento.value = "";
    livro.quan_copias.value = "";
    livro.editora.value = "";
    livro.id_categoria.value = "";

    setOnEditLivros(null);
    getLivros();
  };

  const [inputSearch, setInputSearch] = useState("");
  const [modalSearch, setModalSearch] = useState(false);

  const [selectedTurma, setSelectedTurma] = useState("");
  const [filteredAlunoData, setFilteredAlunoData] = useState([]);

  const searchLivros = useMemo(() => {
    return livros?.filter((livro, i) => {
      return livro?.name?.toLowerCase()?.includes(inputSearch?.toLowerCase());
    });
  }, [livros, inputSearch]);

  

  const handleTurmaChange = (e) => {
    const turmaSelecionada = e.target.value;

    // Filtra os alunos com base na turma selecionada
    const filtered = turmaData.filter(item => item.turma_id === turmaSelecionada);
    setFilteredAlunoData(filtered);

    setSelectedTurma(turmaSelecionada); // Atualiza a turma selecionada no estado
  };

  return (
    // eslint-disable-next-line react/style-prop-object
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
                      setModalSearch(false);
                    }}
                  >
                    {livro?.name}
                  </option>
                ))}
                {/* i = index ou seja posiçao */}
              </div>
            ) : (
              ""
            )}
          </InputArea>

          <InputArea>
            <Label> data de hoje </Label>
            <Input type="date" name="data_prazo" />
          </InputArea>
          <InputArea>
            <Label> data prazo </Label>
            <Input type="date" name="data_prazo" />
          </InputArea>
          <InputArea>
            <Label> Turma </Label>
            <select
              value={selectedTurma}
              onChange={handleTurmaChange}
            >
              <option value="">Selecione uma turma</option>
              {turmaData?.map((turma) => (
                <option key={turma?.turma_id} value={turma?.turma_idCurso}>
                  {console.log(turma)}
                  {turma?.turma_nome} - {turma?.turma_serie}
                </option>
              ))}
            </select>
            {/* <button onClick={handleFilter}>Filtrar</button> */}

            <ul>
        {filteredAlunoData.map(aluno => (
          <li key={aluno.id_aluno}>{aluno.nome_aluno}</li>
        ))}
      </ul>
          </InputArea>

          <InputArea>
            <Label> nome </Label>
            <Input for="for" type="text" name="nome_aluno" />
          </InputArea>

          {/* <div className="InputArea">
            <Label> Selecione status</Label>
            <select onChange={onOptionChangeHandler} className="form">
              <option>Please choose one option</option>
              {options?.length > 0
                ? options?.map((item, i) => <option>{item?.name}</option>)
                : ""}
            </select>
          </div> */}

          <Button type="submit">SALVAR</Button>
        </FormContainer>
      </Container>
    </div>
  );
};

//bem preciso  um filter
export default CadastrarLivros;
//filtro de aluno == turma selecionada
