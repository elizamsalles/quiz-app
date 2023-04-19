interface IProps {}
import styled from "styled-components";

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
  return <Card />;
};

export default CardComponent;
