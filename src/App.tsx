import ButtonComponent from "./components/Button/Button";
import CardComponent from "./components/Card/Card";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";

export const App = () => {
  const getMovie = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/76343",
        {
          params: {
            api_key: API_KEY,
          },
        }
      );

      console.log(response.data.title);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <CardComponent>
      <ButtonComponent />
    </CardComponent>
  );
};
