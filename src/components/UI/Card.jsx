export const Card = ({currMovie}) =>{
    const { Poster, imdbID } = currMovie;
    return (
        <>
            <li>
                <div className="main-container">
                    <div className="poster-container">
                        <img src={Poster} alt={imdbID} />
                    </div>
                    <div className="ticket-container">
                        <div className="ticket-content">
                            <button className="ticket-buy-btn">
                                Watch Now
                            </button>
                        </div>
                    </div>
                </div>
            </li>
        </>
    )
}