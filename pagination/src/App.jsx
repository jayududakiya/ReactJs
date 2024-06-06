import React,{useEffect, useState} from 'react'
import Post from './Components/Post'
import Pagination from './Components/Pagination'

function App() {

  const [post,setPost] = useState([])

  const [currentPage , setCurrentPage]=useState(1)
  const [postPerPage , setPostPerPage]=useState(6)

  useEffect(() => {
    const getData = async () => {
      const rep =  await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await rep.json();
      setPost(data)
    }
    getData();
  },[])

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;

  const CurrentPosts = post.slice(firstPostIndex , lastPostIndex);

  return (
    <div className='w-[90%] mx-auto pt-10'>
      <Post post={CurrentPosts} />
      <Pagination totalPost={post.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
    </div>
  )
}

export default App
