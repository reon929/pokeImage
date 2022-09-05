import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { stringify } from 'querystring'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [pokeImageUrl, setPokeImageUrl] = useState("");

  const fetchPokeImage = async() => {
    const min = 5 ;
    const max = 500 ;
    const num = Math.floor( Math.random() * (max + 1 - min) ) + min ;
    const url = "https://pokeapi.co/api/v2/pokemon/" + num;
    const res = await fetch(url);
    const result = await res.json();
    // console.log(result.sprites.back_default);
    return result.sprites.back_default;
  };

  const handleClick = async () => {
    const pokeImage = await fetchPokeImage();
    setPokeImageUrl(pokeImage);
  }

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "40vh",
    }}>
      <h1>poke画像アプリ</h1>
      <img
        src={pokeImageUrl}
        width="100"
        height="auto"
      />
      {/* <button>今日のポケモン</button> */}
      <button onClick={handleClick}>今日のポケモン</button>
    </div>
  )
}

export default Home
