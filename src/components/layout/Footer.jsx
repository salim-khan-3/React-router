import { FaFacebook} from "react-icons/fa";
import { FaGithub, FaYoutube  } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const Footer = () =>{
    return (
        <>
            <footer>
                <div className="social-container">

                    <div className="logo">
                        <h1>Footer Logo</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, quos.</p>
                        <div className="social-icon">
                            <FaFacebook />
                            <FaGithub />
                            <FaYoutube />
                        </div>
                    </div>

                    <div className="shopping-link">
                        <h2>SHOPPING</h2>
                        <ul>
                            <li>
                                <NavLink to="#" className="footer-link">computer store</NavLink>
                            </li>
                            <li>
                                <NavLink to="#" className="footer-link">computer store</NavLink>
                            </li>
                            <li>
                                <NavLink to="#" className="footer-link">computer store</NavLink>
                            </li>
                            <li>
                                <NavLink to="#" className="footer-link">computer store</NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="experience">
                        <h2>EXPERIENCE</h2>

                        <ul>
                            <li>
                                <NavLink to="#" className="footer-link">Contact us</NavLink>
                            </li>
                            <li>
                                <NavLink to="#" className="footer-link">payment method</NavLink>
                            </li>
                            <li>
                                <NavLink to="#" className="footer-link">Delivery</NavLink>
                            </li>
                            <li>
                                <NavLink to="#" className="footer-link">Return and Exchange</NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="news-filter">
                        <h2>NEWSFILTER</h2>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi minus deleniti ullam!</p>

                        <input type="email" name="email" id="email" />
                    </div>

                </div>
                <div className="writer">
                    <p>code written by md salim islam</p>
                </div>
            </footer>
        </>
    )
}