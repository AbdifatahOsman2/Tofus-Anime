import { useState,useEffect } from "react"
import axios from "axios"
import {baseURL , config } from "../services"
import { useParams, useHistory } from "react-router-dom"
import Comments from "./Comments"
function Form(props) {
    const [name, setName] = useState("")
    const [author, setAuthor] = useState("")
    const [comments, setCommnets] = useState("")
    const [rating, setRating] = useState(1)
    const params = useParams();
    const history = useHistory();
    
    useEffect(() => {

        if(params.id){
            const anime = props.anime.find((anime) => anime.id === params.id)
            if(anime) {
                setName(anime.fields.name)
                setAuthor(anime.fields.author)
                console.log(anime.fields.comments)
                const comments = anime.fields.comments.map((comment) => {
                    return comment.fields.comment
                })
                setCommnets(comments)
                setRating(anime.fields.rating)
            }
        }
    }, [params.id, props.anime])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newAnimeObject = {
            name,
            author,
            comments,
            rating,
        }
        if(params.id){
            const animeUrl = `${baseURL}/${params.id}`;
            await axios.put(animeUrl,{ fields: newAnimeObject}, config)
        }else{
            await axios.post(baseURL, { fields: newAnimeObject }, config);
        }
        props.setToggleFetch((curr) => !curr)
        history.push("/")
    }

    return (

            <form onSubmit={handleSubmit} className="form-component">
            <div className="selection-container">
            <label>
                <select className="selection" name="type">
                    <option value=""></option>
                    <option value="anime">Anime</option>
                    <option value="manga">Manga</option>
                </select>
            </label>
            </div>

            <div className="anime-input-container">
                <label className="anime-label" htmlFor="">Anime</label>
                <input className="anime-input" placeholder="Anime/Manga" type="text" value={name} autoFocus required onChange={(e => setName(e.target.value))} />            
            </div>

  

            <div className="author-input-container">
                <label className="author-label" htmlFor="">Author</label>
                <input className="author-input" placeholder="Creator of said anime/manga" type="text" value={author} required onChange={(e => setAuthor(e.target.value))} />
            </div>

            <div className="comments-input">
                <label className="comment-label" htmlFor="">Comments:</label>
                <textarea placeholder="comments" className="comment-maker" value={comments} required onChange={(e => setCommnets(e.target.value))} />
            </div>
            

            <div className="rating-input">
            <input className="input-meter" type="range" min={1} max={100} name="" id="" required value={rating} onChange={(e => setRating(e.target.valueAsNumber))} />
                <label className="rating-label" htmlFor="">{rating}/100</label>
                <button className="add-btn">ADD</button>

            </div>
            
            </form>

    )
}
export default Form