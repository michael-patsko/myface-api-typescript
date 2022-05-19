import { useEffect, useState } from "react";
import "./LikesAndDislikes.scss";

function LikesAndDislikes({lengthOfDislikesArray, lengthOfLikesArray,postId}){

    const [numOfLikes, setNumOfLikes] = useState(lengthOfLikesArray);

    function like(postId){
        fetch(`http://localhost:3001/posts/${postId}/like`,
        {
            method: "POST"
        })
        .then((response) => {
            if (response.status === 200){
                setNumOfLikes(numOfLikes+1)
            }
        })
    }

    const [numOfDislikes, setNumOfDislikes] = useState(lengthOfDislikesArray);

    function dislike(postId){
        fetch(`http://localhost:3001/posts/${postId}/dislike`,
        {
            method: "POST"
        })
        .then((response) => {
            if (response.status === 200){
                setNumOfDislikes(numOfDislikes+1)
            }
        })
    }

    return(<div className="like-dislike-text">
        <b>{numOfLikes}</b> Likes
        <button className = "like-button" onClick={() => like(postId)}>Like👍</button>
        <b>{numOfDislikes}</b> Dislikes
        <button className = "dislike-button" onClick={() => dislike(postId)}>Dislike👎</button>
        </div>)

}
export {LikesAndDislikes};