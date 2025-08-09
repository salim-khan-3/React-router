import { useLoaderData } from "react-router-dom"
import { Card } from "../components/UI/Card";

export const Movie = () => {
    const moviesData = useLoaderData();
    console.log(moviesData);
    return (
        <>
            <ul>
                           {
            moviesData.Search.map((currMovies)=>{
                return <Card key={currMovies.imdbID} currMovie={currMovies}/>
            } )
           }
            </ul>
        </>
    )
}