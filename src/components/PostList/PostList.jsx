import classes from  "./PostList.module.css" // use .module.css to ensure the styles are containerized
import Post from "../Posts/Post"
import NewPost from "../NewPost/NewPost"
import {useState} from 'react';
import Modal from "../Modal/Modal"


function PostList({donePosting, modalIsVisibleState}){

    const [posts, setPosts] = useState([]);

    const addPost = async(postData) => {
        // How to handle when new state depends on existing state
        setPosts((existingPosts)=>[postData, ...existingPosts]); // add the new post and spread the existing psots
    }

    return (
        <>
            {modalIsVisibleState && 
            <Modal onClose={donePosting}>
                {/* pass this function into the prop so we can use it in the other component */}
                <NewPost 
                    buttonCloseModal={donePosting}
                    addPost={addPost}
                />
            </Modal> }





             {posts.length > 0 && (
                <ul className={classes.posts}>  
                {posts.map((post) => 
                // key should be unique
                    <Post key={post.body} author={post.author} body={post.body}/>
                )}
                </ul>
            )}

             {posts.length == 0 && (
                <div style={{textAlign: 'center', color:'white'}}>
                    <h2>There are no posts yet!</h2>
                    <p>Why don't you start adding some?</p>
                </div>

             )}   






        </>

    )
}


// default export in js
export default PostList;