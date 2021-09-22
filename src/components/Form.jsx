import { useState,useEffect } from "react"
import axios from "axios"
import {baseURL , config } from "../services"
import { useParams } from "react-router-dom"
function Form(props) {
    const [name, setName] = useState("")
    const [author, setAuthor] = useState("")
    const [comments, setCommnets] = useState("")
    const [rating, setRating] = useState(1)
    const params = useParams();


    useEffect(() => {
        if(params.id){
            const anime = props.anime.find((anime) => anime.id === params.id)
            if(anime) {
                setName(anime.fields.name)
                setAuthor(anime.fields.author)
                setCommnets(anime.fields.comments)
                setRating(anime.fields.rating)
            }
        }
    }, [params.id, props.anime])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newAnimeObject = {
            name,
            author,
            rating,
        }
        if(params.id){
            const animeUrl = `${baseURL}/${params.id}`;
            await axios.put(animeUrl,{ fields: newAnimeObject}, config)
        }else{
            await axios.post(baseURL, { fields: newAnimeObject }, config);
            props.setToggleFetch((curr) => !curr)
        }
    }

    return (

            <form onSubmit={handleSubmit} className="form-component">
            <div className="anime-input">
                <label htmlFor="">Anime:</label>
                <input type="text" value={name} autoFocus required onChange={(e => setName(e.target.value))} />            
            </div>

            <div className="author-input">
                <label htmlFor="">Creator:</label>
                <input type="text" value={author} required onChange={(e => setAuthor(e.target.value))} />
            </div>

            <div className="comments-input">
                <label htmlFor="">Comments:</label>
                <input className="comment-maker" type="text" value={comments} required onChange={(e => setCommnets(e.target.value))} />
            </div>

            <div className="rating-input">
                <label htmlFor="">Rating:{rating}/10</label>
                <input className="input-meter" type="range" min={1} max={10} name="" id="" required value={rating} onChange={(e => setRating(e.target.valueAsNumber))} />
                <button className="add-btn">ADD</button>
            </div>
                <submit></submit>
            </form>

    )
}
export default Form