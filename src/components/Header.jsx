function Header({searchQuery, setSearchQuery}) {
    const isLoggedIn = false;
    const appName = 'Movie App';
  
    return (
      <>
        <header className="header">
          <h1>{appName}</h1>
  
          <nav>
            <a href="/">Home</a>
            <a href="/movies">Movies</a>
          </nav>
  
          <input type='text'
          placeholder='search movies'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
      />
  
          {/* <p>2 + 2 = {2 + 2}</p> */}
  
          <span>{isLoggedIn ? 'Welcome!' : 'Login'}</span>
        </header>
      </>
    );
  }
  
  export default Header;