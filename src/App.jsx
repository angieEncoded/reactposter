import PostList from "./components/PostList/PostList"
import Header from "./components/Header/Header"
import {useState} from 'react';


function App() {


  const [modalIsVisibleState, setModalIsVisible] = useState(false);

  const hideModal = async() => {
    setModalIsVisible(false);
  }
  const showModal = async() => {
    setModalIsVisible(true);
  }

  return (
    // React fragment
    <>
    <Header newPostButtonClicked={showModal}></Header>
    <PostList modalIsVisibleState={modalIsVisibleState} donePosting={hideModal}></PostList>
    </>
  )
}

export default App;
