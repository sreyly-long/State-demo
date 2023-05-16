import { Link, NavLink } from "react-router-dom";

export function Navbar(){
    return (
        <header className="sticky-top">
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <NavLink to={"/"} 
                    className={({isActive}) => isActive ? "navbar-brand text-decoration-none active" : "navbar-brand text-decoration-none"}
                >Home</NavLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <NavLink 
                        to={"/products"}    
                        className={({isActive}) => isActive ? "navbar-brand text-decoration-none active" : "navbar-brand text-decoration-none"}
                        aria-current="page" >
                            Products
                    </NavLink>
                   
                    <NavLink 
                        to={"/news"}    
                        className={({isActive}) => isActive ? "navbar-brand text-decoration-none active" : "navbar-brand text-decoration-none"}
                        aria-current="page" >
                            IT News
                    </NavLink>

                    <NavLink 
                        to={"/category"}    
                        className={({isActive}) => isActive ? "navbar-brand text-decoration-none active" : "navbar-brand text-decoration-none"}
                        aria-current="page" >
                            Category
                    </NavLink>

                    <NavLink 
                        to={"/signin"}
                        className={({isActive}) => isActive ? "navbar-brand text-decoration-none active" : "navbar-brand text-decoration-none"}
                        aria-current="page"
                    >
                        Sign in
                    </NavLink>
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
        </header>
    )
}