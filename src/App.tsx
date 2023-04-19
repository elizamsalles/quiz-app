import viteLogo from "/vite.svg";
import { Button } from "@mui/material";
import CardComponent from "./components/Card/Card";
import "./App.css";

export const App = () => {
  return (
    <CardComponent>
      <Button>Primary</Button>
      <Button disabled>Disabled</Button>
      <Button href="#text-buttons">Link</Button>
    </CardComponent>
  );
};
