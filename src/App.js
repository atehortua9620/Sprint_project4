import './Styles/App.css';
import Home from  './Pages/HomeImg'
import { useEffect, useState } from 'react';
import { getData } from './Services/Operaciones';


function App() {

  const [posts, setPosts] = useState([]);

  

  useEffect(async ()=>{
    const newPost = await getData("Posts")
    setPosts(newPost)
   

  },[]);


  return (
    <div className="App">
      
       <Home/> 

      {posts.map((post)=> (<div><h1>{post.Autor}</h1> <p>{post.Contenido}</p></div> ))}

  
    </div>
  );
}

export default App;
