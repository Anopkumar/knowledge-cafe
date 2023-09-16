
import { useState } from 'react'
import './App.css'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'
import Blogs from './components/Header/blog/Blogs'


function App() {
  const [bookmarks , setBookmarks] = useState([])
  const handleBookmark = blog =>{
   const newBookmark =[...bookmarks , blog ]
   setBookmarks(newBookmark )
  }


  return (
    <>
    <Header></Header>

    <div className='md:flex   max-w-5xl mx-auto'>
    <Blogs handleBookmark={handleBookmark} ></Blogs>
    <Bookmarks bookmarks={bookmarks} ></Bookmarks>
    </div>
    
     
     
     
     
    </>
  )
}

export default App
