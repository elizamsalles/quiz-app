import ButtonComponent from "./components/Button/Button";
import CardComponent from "./components/Card/Card";
import "./App.css";

export const App = () => {
  /* Componentes SEM children: */
  return (
    <CardComponent>
      <ButtonComponent />
    </CardComponent>
  );
};
