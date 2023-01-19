import React, { useContext, useEffect, useRef, useState } from "react";
import { movieContext } from "../App";
import { movies } from "./typesFile";
const MoviesList = () => {
    const contextProps=useContext(movieContext);
    // let searchMatchArr:movies[]=[];
    const [searchMatchArr,setSearcharr]=useState<movies[]>([])
    const searchRef=useRef<HTMLInputElement>(null)
    // console.log(searchArr);
    const searchItem=()=>{
        if(searchRef.current!==null)
        {
            let inpValue=searchRef.current.value;
            if(inpValue.length>1)
            {
                for(let i=0;i<contextProps.moviesArr.length;i++){
                    if(contextProps.moviesArr[i].name.slice(0,inpValue.length).toUpperCase()===inpValue.toUpperCase()){
                       console.log(contextProps.moviesArr[i]);
                       contextProps.searchArr.push(contextProps.moviesArr[i]);
                       
                    }
                }
                if(contextProps.setSearcharr!=null){
                    contextProps.setSearcharr([...contextProps.searchArr]);
                }
                
            }
        }
     }
     useEffect(()=>{
       if(contextProps.searchArr.length>0){
        setSearcharr(contextProps.searchArr);
       }
       if(contextProps.moviesArr.length>0)
       {
         setSearcharr(contextProps.moviesArr);
       }
     },[contextProps])

  return (
    <div className="col-4  border rounded p-2  m-auto shadow">
      <div className="input-group mb-3 p-2 ">
        <input
          type="text"
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
      {contextProps.moviesArr.map((item)=>{
        console.log(item)
        return(
         <div className=" border-bottom d-flex justify-content-between  mt-4  ps-3 pe-3">
         <div>
           <h4>{item.name}</h4>
           <p>{item.rating}/100</p>
         </div>
         <div>
           <p>{item.duration}</p>
         </div>
       </div>
       )
      })}
     
    </div>
  );
};

export default MoviesList;
