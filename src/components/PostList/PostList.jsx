import classes from  "./PostList.module.css" // use .module.css to ensure the styles are containerized
import Post from "../Posts/Post"
import NewPost from "../../routes/NewPost/NewPost"
import {useState, useEffect} from 'react';
import Modal from "../Modal/Modal"
import api from "../../util/api"


function PostList(){
    const serverLoc = `${api.host}/posts`
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);

    // only excuted once when the component is loaded
    useEffect(() => {

        const retrievePosts = async() => {
            setIsLoading(true);
            const results = await fetch(serverLoc);
            if (!results.ok){
                setHasError(true);
            }
            const jsonResults = await results.json();
            setPosts(jsonResults.posts);
            setIsLoading(false);
        }

        retrievePosts();

    }, []) // the empty array means there are no deps and it will never be rendered again





    const addPost = async(postData) => {

        fetch(serverLoc, {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-type': 'application/json'
            }
        });
        // How to handle when new state depends on existing state
        setPosts((existingPosts)=>[postData, ...existingPosts]); // add the new post and spread the existing psots
    }







    return (
        <>

             {!isLoading && !hasError && posts.length > 0 && (
                <ul className={classes.posts}>  
                {posts.map((post) => 
                // key should be unique
                    <Post key={post.body} author={post.author} body={post.body}/>
                )}
                </ul>
            )}
             {!isLoading && !hasError && posts.length == 0 && (
                <div style={{textAlign: 'center', color:'white'}}>
                    <h2>There are no posts yet!</h2>
                    <p>Why don't you start adding some?</p>
                </div>

             )}   

             {isLoading && !hasError &&  (
                <p>Some loading screen here</p>
             )}

             {!isLoading && hasError && (
                <p>Some error message here</p>
             )}

        </>
    )
}

// default export in js
export default PostList;