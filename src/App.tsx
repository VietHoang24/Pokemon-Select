import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import PokemonCollection from './components/PokemonCollection';
import { Pokemon } from './interface';
interface Pokemons{
  name: string;
  url: string;
}
export interface Detail{
  id: number;
  isOpen: boolean;
}
const App=()=> {
  const[pokemons,setPokemon]=useState<Pokemon[]>([]);
  const[nextUrl, setNextUrl]=useState<string>("https://pokeapi.co/api/v2/pokemon?limit=10&offset=10")
  const [loadMore, setLoadMore]=useState<boolean>(true)
  const [loading,setLoading]= useState<boolean>(true)

  const[viewDetail,setDetail]=useState({
      id: 0,
      isOpen: false,
  })

  useEffect(()=>{
    const getPokemon= async ()=>{
      setLoading(true);
      const res= await axios.get(nextUrl)
      
      res.data.results.forEach(async(pokemon:Pokemons)=>{
        const poke= await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        setPokemon((p)=>[...p,poke.data])
      
      })
      setNextUrl(res.data.next)
      setLoading(false);
    }
    getPokemon();
  },[loadMore])
  
  const handleLoadMore=() => {
    setLoadMore(!loadMore)
  }
  return (
    <div className="App">
        <div className="container">
          <header className="pokemon-header">Pokemon</header>
          <PokemonCollection pokemons={pokemons} 
          setDetail={setDetail}
          viewDetail={viewDetail}/>
          <div className="btn">
            <button type="button" onClick={handleLoadMore}>
              {loading?<p>Loading...</p>: <p>Load more</p>}
            </button>
          </div>
        </div>
    </div>
  );
}

export default App;
