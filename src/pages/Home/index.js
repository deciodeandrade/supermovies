import { useEffect, useState } from "react";
import api from '../../services/api'

function Home(){
  const [filmes, setFilmes] = useState([]);

  useEffect(()=>{

    async function loadFilmes() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "f484545381bf56f35b5dbb918b89825b",
          language: "pt-BR",
          page: 1
        },
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNDg0NTQ1MzgxYmY1NmYzNWI1ZGJiOTE4Yjg5ODI1YiIsInN1YiI6IjY0YjYxMzc5MGU0ZmM4NTE5ZGQyYTA5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Xc_89xRQiPflqCCSpZt0T7UXhevgyChZhbL5Wwf5T5A'
        }
      })

      console.log(response);

    }

    loadFilmes();

  }, [])

  return(
    <div>
      <h1>Bem vindo a Home</h1>
    </div>
  )
}

export default Home;