import { useEffect, useState } from "react"

function Likes({lengthOfLikesArray,postId}){

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

    return(<>
        <p>{numOfLikes} Likes</p>
        <button onClick={() => like(postId)}>Like</button>
        </>)

}
export {Likes}