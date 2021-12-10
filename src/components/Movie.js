// carte separee
// data arrive ici par props
const Movie = (props) =>{

    const data_movie = props.datas[Math.floor(Math.random()*20)];
  
    
    if(!data_movie){
        return(
            <h2>Loading</h2>
        )
    }else{
        return(  
            <div className="pic_spotlight">
            <img src={`https://image.tmdb.org/t/p/w300/${data_movie.poster_path}`} alt="poster"/>
            <p>Movie Spotlight</p>
            <h3>{data_movie.title}</h3>
            </div>
        )
    }
}

export default Movie;