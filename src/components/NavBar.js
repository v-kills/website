import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    <a href="index.html">
                        <img src="/Ginkgo-.ico" className="sm-image" alt="logo" />
                    </a>
                </div>
                <div className="main-menu">
                    <ul>
                        <li>
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link to={"/about"}>About</Link>
                        </li>
                        <li>
                            <Link to={"/search"}>Search</Link>
                        </li>
                        {/* Uncomment if needed */}
                        {/* <li>
                            <a href="#">Tech</a>
                        </li>
                        <li>
                            <a href="#">Travel</a>
                        </li>
                        <li>
                            <a href="#">Gallery</a>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
