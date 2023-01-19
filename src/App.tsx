import React, { createContext, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import MoviesForm from "./Typescript_task3/MoviesForm";
// import MoviesList from "./Typescript_task3/MoviesList";
// import movies from './Typescript_task3/typesFile'
import { movies } from "./Typescript_task3/typesFile";


type contextProps={
  moviesArr:movies[],
  setMoviesarr:React.Dispatch<React.SetStateAction<movies[]>>|null
  searchArr:movies[],
  setSearcharr:React.Dispatch<React.SetStateAction<movies[]>>|null
}
export const movieContext=createContext<contextProps>({
  moviesArr:[],setMoviesarr:null,searchArr:[],setSearcharr:null
})
function App() {
 
  const [moviesArr,setMoviesarr]=useState<movies[]>([]);
  const[searchArr,setSearcharr]=useState<movies[]>([]);
  return (
    <>
    <movieContext.Provider value={{moviesArr,setMoviesarr,searchArr,setSearcharr}}>
    <MoviesForm />
    </movieContext.Provider>
  
      
    </>
  );
}

export default App;
