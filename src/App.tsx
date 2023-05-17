import ButtonComponent from "./components/Button/Button";
import CardComponent from "./components/Card/Card";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import zIndex from "@mui/material/styles/zIndex";

export const App = () => {
  const [movie, setMovie] = useState({
    title: "",
    overview: "",
    poster_path: "",
  });

  const getMovie = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/76344",
        {
          params: {
            api_key: "0e4a5cbfa905cc6eac86c934a7763c23",
          },
        }
      );

      console.log(response.data);

      setMovie(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      Movie title: <span id="movie-title">{movie.title}</span>
      <br></br>
    </div>
    // <CardComponent>
    //   <ButtonComponent />
    // </CardComponent>
  );
};
