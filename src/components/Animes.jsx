import axios from "axios"
import {baseURL, config} from "../services"
import {Link} from "react-router-dom"

function Anime(props) {
   const {name, author, rating, comments} = props.anime.fields

    const handleDelete = async () => {
        const Url = `${baseURL}/${props.anime.id}`
        await axios.delete(Url, config);
        props.setToggleFetch((curr) => !curr)
    }
    return (
        <div className="anime">
        <h2 className="name-cont">{name}</h2>
        <h3 className="author-cont">{author}</h3>
        <p className="rating-cont">{rating}/10</p>
        <p className="comments-cont">{comments}</p>
        <button className="delete-btn" onClick={handleDelete}>Delete</button>
        <Link className="edit-link" to={`/edit/${props.anime.id}`}>
            <button className="edit-btn">Add</button>
        </Link>
        </div>
    )
}

export default Anime;