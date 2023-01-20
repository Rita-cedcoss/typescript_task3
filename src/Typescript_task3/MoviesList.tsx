import React, { useContext, useEffect, useRef, useState } from "react";
import { movieContext } from "../App";
import { movies } from "./typesFile";
const MoviesList = () => {
  const contextProps = useContext(movieContext);
  const [searchMatchArr, setSearcharr] = useState<movies[]>(
    contextProps.moviesArr
  );
  const [display, setDisplay] = useState<boolean>(true);
  const searchRef = useRef<HTMLInputElement>(null);
  //for search Item
  const searchItem = () => {
    if (searchRef.current !== null) {
      contextProps.searchArr = [];
      let inpValue = searchRef.current.value;
      if (inpValue.length > 1) {
        let flag: boolean = false;
        contextProps.moviesArr.map((item) => {
          if (
            item.name.slice(0, inpValue.length).toUpperCase() ==
            inpValue.toUpperCase()
          ) {
            flag = true;
            contextProps.searchArr.push(item);
          }
        });
        if (flag) {
          console.log("true");
          setDisplay(flag);
        } else {
          console.log("false");
          setDisplay(flag);
        }
      }
      if (inpValue.length == 0) {
        setDisplay(true);
      }
      if (contextProps.setSearcharr !== null) {
        contextProps.setSearcharr(contextProps.searchArr);
      }
    }
  };
  // for rendering after search
  useEffect(() => {
    if (contextProps.searchArr.length > 0) {
      setSearcharr([...contextProps.searchArr]);
    } else {
      setSearcharr(contextProps.moviesArr);
    }
  }, [contextProps]);
  return (
    <div className="col-4  border rounded p-2  m-auto shadow">
      {/* input for search */}
      <div className="input-group mb-3 p-2 ">
        <input
          type="text"
          ref={searchRef}
          className="form-control"
          placeholder="Search Movie Name"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={searchItem}
        />
        <span className="input-group-text" id="basic-addon2">
          Search
        </span>
      </div>
      {/* list display */}
      {display ? (
        <>
          {searchMatchArr
            .sort((a, b) => {
              return parseFloat(b.duration) - parseFloat(a.duration);
            })
            .map((item) => {
              return (
                <div className=" border-bottom d-flex justify-content-between  mt-4  ps-3 pe-3">
                  <div>
                    <h4>{item.name}</h4>
                    <p>{item.rating}/100</p>
                  </div>
                  <div>
                    <p>{item.duration}</p>
                  </div>
                </div>
              );
            })}
        </>
      ) : (
        <p className="fs-3 text-danger pt-4">Resul Not Found</p>
      )}
    </div>
  );
};

export default MoviesList;
