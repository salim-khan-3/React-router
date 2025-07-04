import { NavLink } from "react-router-dom"

export const Header = () =>{

    const getNavLinkStyle = ({isActive}) =>{
        return{
            color: isActive? "green": "pink"
        }
    }

    return (
        <>
            <header className="section-navbar">
                <section className="top-text">
                    <div className="head">
                        <div className="head-text">
                            Lorem ipsum dolor sit amet consectetur.
                        </div>
                        <div className="sign_in_up">
                            <NavLink to="#">SIGN IN</NavLink>
                            <NavLink to="#">SIGN UP</NavLink>
                        </div>
                    </div>
                </section>


                <div className="container">
                    <div className="navbar-brand">
                        <NavLink to="index" className="index">
                           Md salim
                        </NavLink>
                    </div>

                    <nav className="navbar">
                    <ul>
                        <li className="nav-link"><NavLink to="/" className={({isActive})=>isActive? "nav-link active": "nav-link"}>Home</NavLink></li>
                        <li className="nav-link"><NavLink to="/about" style={({isActive})=>{
                            return{
                               color: isActive? "blue": "red"
                            }
                        }}>About</NavLink></li>
                        <li className="nav-link"><NavLink to="/movie" style={getNavLinkStyle}>Movie</NavLink></li>
                        <li className="nav-link"><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </nav>
                </div>

            </header>
        </>
    )
}