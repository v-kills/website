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
                  <li>Home</li>
                  <li>About</li>
                  <li>Search</li>
                  <li>
                    <a href="#">Tech</a>
                  </li>
                  <li>
                    <a href="#">Travel</a>
                  </li><li>
                    <a href="#">Gallery</a>
                  </li>
                </ul>
              </div>
                        
        </div>
    </nav>
    );
}