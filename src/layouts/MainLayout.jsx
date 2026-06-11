import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function MainLayout({ searchQuery, setSearchQuery }) {
  return (
    <>
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;