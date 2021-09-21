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
        <h2>{name}</h2>
        <h3>{author}</h3>
        <h4>{rating}/10</h4>
        <p>{comments}</p>
        <button onClick={handleDelete}>Delete</button>
        <Link to={`/edit/${props.anime.id}`}>
            <button>Edit</button>
        </Link>
        </div>
    )
}

export default Anime;