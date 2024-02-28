import classes from "./NewPost.module.css"




function NewPost({textAreaDataEntered, authorNameEntered, buttonCloseModal}){

return (
<form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
                                              {/* Get the state from the other component */}
        <textarea id="body" required rows={3} onChange={textAreaDataEntered}/>
      </p>

      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={authorNameEntered}/>
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={buttonCloseModal}>Cancel</button>
        <button >Submit</button>
      </p>
    </form>

)


}


export default NewPost;