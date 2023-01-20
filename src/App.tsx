import React, { createContext, useState } from "react";
import "./App.css";
import MoviesForm from "./Typescript_task3/MoviesForm";
import { movies } from "./Typescript_task3/typesFile";
import { ErrorBoundary } from "react-error-boundary";
import Errorboundary from "./Typescript_task3/Errorboundary";

type contextProps = {
  moviesArr: movies[];
  setMoviesarr: React.Dispatch<React.SetStateAction<movies[]>> | null;
  searchArr: movies[];
  setSearcharr: React.Dispatch<React.SetStateAction<movies[]>> | null;
};
export const movieContext = createContext<contextProps>({
  moviesArr: [],
  setMoviesarr: null,
  searchArr: [],
  setSearcharr: null,
});
function App() {
  const [moviesArr, setMoviesarr] = useState<movies[]>([
    { name: "Iron Man", rating: "12", duration: "15h" },
    { name: "Avtar", rating: "6", duration: "27h" },
    { name: "Avenger", rating: "53", duration: "18h" },
  ]);
  const [searchArr, setSearcharr] = useState<movies[]>([]);
  return (
    <>
      <movieContext.Provider
        value={{
          moviesArr,
          setMoviesarr,
          searchArr,
          setSearcharr,
        }}
      >
        <ErrorBoundary FallbackComponent={Errorboundary}>
          <MoviesForm />
        </ErrorBoundary>
      </movieContext.Provider>
    </>
  );
}

export default App;
