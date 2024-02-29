import PostList from "../components/PostList/PostList"
import { Outlet } from "react-router-dom";


function Posts() {



  return (
    <>
    <Outlet></Outlet>
    <main>
      <PostList />
    </main>

    </>
  )
}

export default Posts;
