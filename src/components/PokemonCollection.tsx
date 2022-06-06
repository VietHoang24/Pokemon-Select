import React from 'react'
import { Pokemon,Pokemon_detail } from '../interface';
import PokemonList from './PokemonList';
import './pokemon.css'
import { Detail } from '../App';
interface Props {
  pokemons: Pokemon_detail[];
  viewDetail: Detail;
  setDetail: React.Dispatch<React.SetStateAction<Detail>>
}
const PokemonCollection:React.FC<Props>  = (props) => {
    const{pokemons, viewDetail,setDetail} = props
    const selectPokemon=(id:number) => {
      setDetail({id:id,isOpen: false})
    }
  return (
    <div>
        <section className="section-container">
          {
            props.pokemons.map(pokemon=>{
              return(
                <div className="" onClick={() => selectPokemon(pokemon.id)}>
                  <PokemonList 
                     key={pokemon.id}
                     name={pokemon.name}
                     id={pokemon.id}
                     image={pokemon.sprites.front_default}
                     abilities={pokemon.abilities}
                     viewDetail={viewDetail}
                     setDetail={setDetail}
                  />
                </div>
              )
            })
          }
        </section>
    </div>
  )
}

export default PokemonCollection