import { Outlet, Navigate } from "react-router-dom";

function AuthLayout() {
  const token = localStorage.getItem("token");

  if (token) {
    return <Navigate to="/" replace />;
  }

  return (
    <main className="auth-layout">
      <Outlet />
    </main>
  );
}

export default AuthLayout;