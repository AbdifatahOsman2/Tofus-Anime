import { Link } from "react-router-dom"

function Nav() {
    return(
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/new">Create Form</Link>
            </nav>
        </div>
    )
}

export default Nav