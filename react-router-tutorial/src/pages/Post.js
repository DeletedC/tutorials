import { useParams } from "react-router"

const Post = () => {
    
    const { id } = useParams();
    
    return (
        <h1>
           Id is = {id} 
        </h1>
    )
}

export default Post
