import { Box } from "@mui/material";
import styled from "styled-components";

const Text = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: var(--purple);
  margin-right: 82px;
  margin-top: 15px;
`;

const FirstButton = styled.button`
  width: 400px;
  height: 56px;
  background: #ffffff;
  border: 2px solid rgba(96, 102, 208, 0.7);
  border-radius: 12px;
  margin-left: 32px;
  margin-bottom: 31px;
  margin-top: 136px;
  cursor: pointer;
`;

const Button = styled.button`
  width: 400px;
  height: 56px;
  background: #ffffff;
  border: 2px solid rgba(96, 102, 208, 0.7);
  border-radius: 12px;
  margin-left: 32px;
  margin-bottom: 31px;
  cursor: pointer;
`;

const list = [
  { nome: "Vietnam", key: "A" },
  { nome: "Malasya", key: "B" },
  { nome: "Sweden", key: "C" },
  { nome: "Austria", key: "D" },
  { nome: "Australia", key: "E" },
];

const ButtonComponent = () => {
  return (
    <Box>
      {list.map((pais) => {
        return (
          <Button key={pais.key}>
            <Text>{pais.nome}</Text>
          </Button>
        );
      })}
    </Box>
  );
};

// 1. Pergunta (pode ter uma foto) => Alternativas -> apenas 1 CORRETA

/*
TODO: pensar em uma ESTRUTURA DE DADOS para acomodar essa situacao
*/

export default ButtonComponent;
