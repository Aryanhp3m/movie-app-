import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { NavLink,useNavigate } from "react-router-dom";

function Header({searchQuery, setSearchQuery}) {
    // const isLoggedIn = false;
    const appName = 'Movie App';
    const {theme, toggleTheme} = useContext(ThemeContext)

    const navigate = useNavigate();
    const isLoggedIn = Boolean(localStorage.getItem("token"));

function handleLogout() {
  localStorage.removeItem("token");
  navigate("/login");
}
  
    return (
      <>
        <header className="header">
          <h1>{appName}</h1>
  
          <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/favourites">Favourites</NavLink>
          </nav>
  
          <input type='text'
          placeholder='search movies'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
      />
  
          {/* <p>2 + 2 = {2 + 2}</p> */}
  
          <button onClick={handleLogout}>
          {isLoggedIn ? "Logout" : "Login"}
         </button>

          <button onClick={toggleTheme}>
           Switch to {theme === 'light' ? 'dark' : 'light'} theme
           </button>
         </header>
      </>
    );
  }
  
  export default Header;