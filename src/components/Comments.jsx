import { useState, } from "react"
import axios from "axios"
import { commentURL, config } from "../services"
import { useParams, useHistory } from "react-router"

export default function Comments(props) {
    const comments = props.anime
    console.log(comments)
    const [comment, setComment] = useState('');
    const params = useParams()
    const history = useHistory()

    const handleComment = async () => {
        const newComment = {
            tofusAnime: [params.id],
            comment: comment
        }
        const resp = await axios.post(commentURL, { fields: newComment }, config)
        props.setToggleFetch((toggle) => !toggle)
        history.push('/')
    }

    return (
        <div className="comment-component">
            <h1>Add A comment!</h1>
            <textarea placeholder="comment-name" rows="5" value={comment} onChange={(e) => setComment(e.target.value)} ></textarea>
            <input placeholder="name" />
            <button onClick={handleComment}>Add Comment</button>
        </div>
    )
}