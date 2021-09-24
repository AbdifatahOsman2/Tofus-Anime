import axios from "axios"
import { baseURL, config } from "../services"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import Comments from "./Comments"
function Anime(props) {
    const { name, author, rating } = props.anime.fields
    const comments = props.anime.fields.comments

    console.log(comments)

    const handleDelete = async () => {
        const Url = `${baseURL}/${props.anime.id}`
        await axios.delete(Url, config);
        props.setToggleFetch((curr) => !curr)
    }

    return (
        <div className="anime-container">
        <div className="anime">
            <h2 className="name-cont">{name}</h2>
            <h3 className="author-cont">{author}</h3>
            <p className="rating-cont">{rating}/10</p>
           <div className="comments-container"> {
                comments.map((comment) => (
                    <p className="comment">{comment.fields.comment}</p>
                ))}
            </div>

            <button className="delete-btn" onClick={handleDelete}>Delete</button>
            <Link className="edit-link" to={`/edit/${props.anime.id}`}>
                <button className="edit-btn">Edit</button>
            </Link>
            <Link className="add-comment-link" to={`/comment/${props.anime.id}`}>
                    <button className="add-comment">Add Comment</button>
            </Link>
        </div>
        </div>
    )
}

export default Anime;