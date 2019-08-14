import React, { useState, useEffect } from 'react';
import Type from './Type';
import placeholder from './pokeball.png';
import { LazyImage } from "react-lazy-images";

function typesArray(types) {
  return types.slice().sort((a, b) => (a.slot > b.slot) ? 1 : ((b.slot > a.slot) ? -1 : 0))
}

function capitalize(val) {
  if (!val) return ''
  val = val.toString()
  return val.charAt(0).toUpperCase() + val.slice(1)
}

function Pokemon({pokeId}) {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeId}`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setPokemonData(data)
      })
      .catch(err => console.error(err))
  });

  if (pokemonData) {
    return (
      <div className="w-1/6 p-8">
        <div className="whitespace-no-wrap text-center">
          (#{pokemonData.id}) <span className="font-bold">{capitalize(pokemonData.name)}</span>
        </div>
        <div className="mx-auto w-full">
          <LazyImage
            className="w-full"
            alt={pokemonData.name}
            src={pokemonData.sprites.front_default}
            placeholder={({ imageProps, ref }) => (
              <img ref={ref} src={placeholder} alt={imageProps.alt} />
            )}
            actual={({ imageProps }) => <img alt={imageProps.alt} {...imageProps} />}
          />
        </div>
        <div className="flex">
          {typesArray(pokemonData.types).map(({type}) => {
            return <Type key={type.name} type={type} />
          })}
        </div>
      </div>
    )
  } else {
    return (<></>)
  }
}

export default Pokemon;
