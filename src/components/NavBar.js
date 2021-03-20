function NavBar( {show, toggle}) {
  
    
    return(
        <nav className="container">
            <div>
                <h1>MY TASKS APP</h1>
            </div>
            <button onClick={toggle}>{ show ? "CLOSE" : "ADD" }</button>
        </nav>
    )
    }
    
    export default NavBar;