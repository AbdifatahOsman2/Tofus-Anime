import { Link } from "react-router-dom"

function Nav() {
    return (
        <div>
            <nav className="nav-bar">
                <Link to="/">Home</Link>
                <Link className="add-button" to="/new">+</Link>
                <Link to="/more">More</Link>
            </nav>
        </div>
    )
}

export default Nav