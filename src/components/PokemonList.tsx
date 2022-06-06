import React, { useState,useEffect } from 'react'
import { Detail } from '../App';

interface Props{
    name: string;
    id: number;
    image: string;
    abilities: {
      ability: string;
      name: string;
    }[]|undefined;
    viewDetail: Detail;
    setDetail: React.Dispatch<React.SetStateAction<Detail>>
}
const PokemonList:React.FC<Props> = (props) => {
    const{name,id,image,abilities,viewDetail,setDetail}=props;
    const [isSelected,setSelected]= useState(false)
    useEffect(() =>{
      setSelected(id===viewDetail.id)
    },[viewDetail])
  return (
    <div className="">
        <section className="pokemon-list-container">
          {isSelected?<div className="pokemon-item-selected">
            <img src={image} alt="pokemon"/>
            <div className="detail-skill">
              <p className="detail-ability">Abilities: 
                {abilities?.map((ab:any) =>{
                    return (
                      <p>{ab.ability.name}</p>
                    )
                })}
              </p>
            </div>
          </div>:<div className="pokemon-item">
             <p className="pokemon-name">{name}</p>
             <img src={image} alt="pokemon"/>
          </div>}
           
            
            
        </section>
    </div>
  )
}

export default PokemonList