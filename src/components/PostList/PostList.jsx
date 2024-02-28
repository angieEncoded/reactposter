import classes from  "./PostList.module.css" // use .module.css to ensure the styles are containerized
import Post from "../Posts/Post"
import NewPost from "../NewPost/NewPost"
import {useState} from 'react';
import Modal from "../Modal/Modal"


function PostList({donePosting, modalIsVisibleState}){

    const [textAreaState, settextAreaState] = useState('');
    const [authorState, setAuthorState] = useState('');


    // Keep track of changes in the textarea
    const changeBodyHandler = async(event) => {
        settextAreaState(event.target.value);
    }

    const setAuthorName = async(event) => {
        setAuthorState(event.target.value)
    }

    return (
        <>
            {modalIsVisibleState && 
            <Modal onClose={donePosting}>
                {/* pass this function into the prop so we can use it in the other component */}
                <NewPost 
                    textAreaDataEntered={changeBodyHandler} 
                    authorNameEntered={setAuthorName}
                    buttonCloseModal={donePosting}

                />
            </Modal> }


            <ul className={classes.posts}>    
                <Post author={authorState} body={textAreaState}/>
                <Post author="Shuttle" body="Shakey is an ass hole"/>
                <Post author="Sasha" body="Both my sisters are idiots"/>
            </ul>
        </>

    )
}


// default export in js
export default PostList;