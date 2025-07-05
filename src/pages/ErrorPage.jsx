import { useNavigate,useRouteError } from "react-router-dom";
export const ErrorPage = ()=>{


    const error = useRouteError();
    const navigate = useNavigate();

    const handleGoBack = () =>{
        navigate(-1)
    }

    if(error.status === 404){
        return(
            <section className="error-section">
                <div className="error-text">
                    <figure>
                        <img src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif" alt="404 page" />
                    </figure>
                    <div className="text-center">
                        <p>
                            The page you were looking for could not be found
                        </p>
                        <p>
                            ... back to the previous page
                        </p>
                    </div>
                </div>

                {/* <NavLink to="/">
                    back to the home page
                </NavLink> */}

                <button className="btn" onClick={handleGoBack}>Go Back</button>
            </section>
        );
    }
    console.log(error);

    return <h1>the page you are looking does not exist.</h1>
    
}