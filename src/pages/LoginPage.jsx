
import { useNavigate } from "react-router-dom";

function LoginPage () {


      const navigate = useNavigate();

      function handleLogin(event) {
         event.preventDefault();
    
      const email = event.target.email.value;
      const password = event.target.password.value;
    
      if (email === "admin@example.com" && password === "admin123") {
        localStorage.setItem("token", "logged-in");
        navigate("/");
      } else {
        alert("Invalid email or password");
      }
   }

   return (
      <div className="login-page">
      <form className="login-card" onSubmit={handleLogin}>
        <h2>Login</h2>
    
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required />
    
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" required />
    
        <button type="submit">Login</button>
      </form>
    </div>

   )
}

export default LoginPage;