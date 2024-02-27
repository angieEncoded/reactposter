import classes from  "./Post.module.css" // use .module.css to ensure the styles are containerized

function Post(props){

    return (
        // js elements are usually camelCase in react
    <li className={classes.post}>
        <p className={classes.author}>{props.author}</p>
        <p className={classes.text}>{props.body}</p>
    </li>
    )

}



// default export in js
export default Post;