import { Link } from "react-router-dom"

function Nav() {
    return(
        <div>
            <nav className="nav-bar">
                <Link to="/">Home</Link>
                <Link to="/new">Add</Link>
                <Link to="/more">More Anime</Link>
            </nav>
        </div>
    )
}

export default Nav