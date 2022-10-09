import { Link } from "react-router-dom";
const Navbar=()=>{
    return(
        <div className="navbar">
            <div className="container">
                <nav className="navbar_nav">
                    <h3 className="navbar_brand">
                        <Link to="/">
                            <i className="fas fa-video"></i> Tv Show Link
                        </Link>
                    </h3>
                    <ul className="nav_links">
                        <li className="link_links">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="link_links">
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            
        </div>
    )
}
export default Navbar;