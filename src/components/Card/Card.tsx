import styled from "styled-components";

interface IProps {
  // ReactNode: componente em React
  children: React.ReactNode;
}

const Card = styled.div`
  position: absolute;
  width: 464px;
  height: 515px;
  left: 488px;
  top: 252px;
  background: #ffffff;
  border-radius: 24px;
`;

const CardComponent = (props: IProps) => {
  // Precisa usar o children pra renderizar o conteúdo
  return <Card>{props.children}</Card>;
};

export default CardComponent;
