import React, { useContext, useRef } from "react";
import MoviesList from "./MoviesList";
import { movieContext } from "../App";
const MoviesForm = () => {
  const propsContext = useContext(movieContext);
  const nameRef = useRef<HTMLInputElement>(null);
  const ratingRef = useRef<HTMLInputElement>(null);
  const durationRef = useRef<HTMLInputElement>(null);
  const movieAdded = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (
      nameRef.current !== null &&
      ratingRef.current !== null &&
      durationRef.current !== null
    ) {
      let name = nameRef.current.value;
      let rating = ratingRef.current.value;
      let duration = durationRef.current.value;
      if (name == "" && rating == "" && duration == "") {
        alert(" please fill all the field");
      } else {
        let hr;
        let min_hr = duration.charAt(duration.length - 1);
        if (
          (Number(rating) > 0 && Number(rating) <= 100 && min_hr == "m") ||
          min_hr == "h"
        ) {
          if (min_hr === "m") {
            let time = duration.slice(0, -1);
            hr = parseInt(time) / 60;
            min_hr = "h";
          }
          if (min_hr === "h") {
            let time = duration.slice(0, -1);
            hr = time;
          }
          let str = hr + min_hr;
          let obj = {
            name: name,
            rating: rating,
            duration: str,
          };
          console.log(obj);
          let temp = propsContext.moviesArr;
          temp.push(obj);
          if (propsContext.setMoviesarr !== null) {
            propsContext.setMoviesarr([...temp]);
            nameRef.current.value = " ";
            ratingRef.current.value = " ";
            durationRef.current.value = " ";
          }
        } else {
          alert(
            "Please enter the rating value between 0 t0 100 and also enter the duration format 20m or 20h"
          );
        }
      }
    }
  };
  return (
    <div className="container-fluid mt-3 d-flex justify-content-between">
      <div className="col-4 m-auto mt-4 border p-4 mb-4 shadow rounded">
        <h3 className="text-center">Add Movies</h3>
        <form onSubmit={movieAdded}>
          <div className="mb-3">
            <label className="form-label">Movie Name</label>
            <input type="text" className="form-control" ref={nameRef} />
          </div>
          <div className="mb-3">
            <label className="form-label">Rating</label>
            <input type="number" className="form-control" ref={ratingRef} />
          </div>
          <div className="mb-3">
            <label className="form-label">Duration</label>
            <input type="text" className="form-control" ref={durationRef} />
          </div>
          <button type="submit" className="btn btn-primary">
            Add Movies
          </button>
        </form>
      </div>
      <MoviesList />
    </div>
  );
};

export default MoviesForm;
