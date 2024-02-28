import classes from "./NewPost.module.css"
import {useState} from 'react';

function NewPost({buttonCloseModal}){

  const [textAreaState, settextAreaState] = useState('');
  const [authorState, setAuthorState] = useState('');

  // Keep track of changes in the textarea
  const changeBodyHandler = async(event) => {
      settextAreaState(event.target.value);
  }

  const setAuthorName = async(event) => {
      setAuthorState(event.target.value)
  }

  const submitForm = async(event) => {
    event.preventDefault();
    const postData = {
      body: textAreaState, // add from the state slices
      author: authorState
    }
    console.log(postData)
    buttonCloseModal(); // shut the modal
  }

return (
<form className={classes.form} onSubmit={submitForm}>
      <p>
        <label htmlFor="body">Text</label>
                                              {/* Get the state from the other component */}
        <textarea id="body" required rows={3} onChange={changeBodyHandler}/>
      </p>

      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={setAuthorName}/>
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={buttonCloseModal}>Cancel</button>
        <button >Submit</button>
      </p>
    </form>

)


}


export default NewPost;