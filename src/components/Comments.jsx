import { useState,useEffect } from "react"
import axios from "axios"
import {commentURL , config } from "../services"
import { useParams } from "react-router"

export default function Comments(props) {
    const comments = props.anime
    console.log(comments)
    const [comment, setComment] =useState('');
    const params = useParams()

    const handleComment = async () => {
        const newComment = {
            tofusAnime: [params.id],
            comment: comment
        }
        const resp = await axios.post(commentURL, {fields: newComment}, config)
    }
    
    return(
        <div className="comment-component">
        <h1>This is the comment component</h1>
        <textarea value={comment} onChange={(e) => setComment(e.target.value)} ></textarea>
        <button onClick={handleComment}>Add Comment</button>
        </div>
    )
}