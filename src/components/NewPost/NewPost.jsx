import classes from "./NewPost.module.css"




function NewPost(props){

return (
<form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
                                              {/* Get the state from the other component */}
        <textarea id="body" required rows={3} onChange={props.textAreaDataEntered}/>
      </p>

      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={props.authorNameEntered}/>
      </p>
    </form>

)


}


export default NewPost;