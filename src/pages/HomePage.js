import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
      navigate("/login");
      
  };
    return (
        <header className="header">

        <div className="text-box">
          <h1 className="heading-primary">
            <span className="heading-primary-main">Veronica Killingsworth</span>
            <span className="heading-primary-sub">Design Engineer</span>
          </h1>
          <button onClick={handleLogin} className="btn btn-white btn-animated">
                    Login
                </button>
        </div>
      </header>
    
    );
}
export default HomePage; 