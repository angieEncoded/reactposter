import classes from  "./PostList.module.css" // use .module.css to ensure the styles are containerized
import Post from "../Posts/Post"
import NewPost from "../NewPost/NewPost"
import {useState} from 'react';
import Modal from "../Modal/Modal"


function PostList({donePosting, modalIsVisibleState}){

    return (
        <>
            {modalIsVisibleState && 
            <Modal onClose={donePosting}>
                {/* pass this function into the prop so we can use it in the other component */}
                <NewPost 
                    buttonCloseModal={donePosting}
                />
            </Modal> }


            <ul className={classes.posts}>   


            </ul>
        </>

    )
}


// default export in js
export default PostList;