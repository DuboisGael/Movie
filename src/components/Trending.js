import Carousel from 'react-elastic-carousel';

const Trending = (props) =>{

    function slider(){
        const data_trending = props.datas;

        return data_trending.map(movie=>{
            return(
               
            <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt="poster"/>
               
            )
        }
    )}

    return(
         <div className='trending'>
                         <Carousel
                children={slider()}
                pagination={false}
                showArrows={false}
                breakPoints={[{"width": 100}]}                        
                 enableAutoPlay={true}
            />
         </div>
    )
}

export default Trending;