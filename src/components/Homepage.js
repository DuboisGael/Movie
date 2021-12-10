import Nav from "./Nav";
import axios from 'axios';
import { useEffect, useState } from "react";
import Movie from "./Movie";
import React from 'react';
import Trending from "./Trending";
function Home(){
  
    const [data, setData]=useState([]);
    useEffect(()=>{
        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=47fae463820cf95a65aad6491a78ce07")
        .then((res)=>{setData(res.data.results)})
    },[]);

    return (
        <div className="homepage">
          <Nav />
          <Movie datas={data}/>
          <Trending datas={data}/>
        </div>
    )
};
export default Home;
