import React, { useRef, useState } from "react";
import axios from "axios";
import NavMenu from "@/components/NavMenu";
const Movie = () => {
  const [data, setdata] = useState({});
  const input = useRef();
  const URL = `https://www.omdbapi.com/?apikey=4e3c16a0&t=`;
  const clickHandler = () => {
    axios
      .get(`${URL}${input.current.value}`)
      .then((response) => setdata(response.data));
  };
  
  return (
    <div>
        <NavMenu/>
      <input type="text" ref={input} className="border-slate-700 border" />
      <button className="outline" onClick={clickHandler}>
        CLICK
      </button>
      <div className="m-5">
        <img src={data.Poster} alt={data.Title} className="block mx-auto" />
        <p>Title : {data.Title}</p>
        <p>Language : {data.Language}</p>
        <p>Director : {data.Director}</p>
        <p>IMDB : {data.imdbRating}</p>
        <p>ACTORS : {data.Actors}</p>
        <p>YEAR : {data.Year}</p>
      </div>
    </div>
  );
};

export default Movie;
