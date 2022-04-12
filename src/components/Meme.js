import React, { useState } from 'react'
import memesData from './memesData'

export default function Meme() {
    //const [memeImg, setMemeImg] = React.useState("https://i.imgflip.com/2d3al6.jpg")

    const [meme, setMeme] = React.useState({
        topText: "Take",
        bottomText: "my money",
        randomImg: "https://i.imgflip.com/39t1o.jpg"
    })

    const [allMemeImg, setAllMemeImg] = React.useState(memesData)

    function getMemeImage() {
        const memesArray = allMemeImg.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImg: url
        }))
    }

    function handleChange(event) {
        const { name, value } = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <div>
            <div className='form'>
                <input type="text" className='form-input' placeholder='top text' name='topText' value={meme.topText} onChange={handleChange} />
                <input type="text" className='form-input' placeholder='bottom text' name='bottomText' value={meme.bottomText} onChange={handleChange} />
                <button className='form-button' onClick={getMemeImage}>Get a new meme image</button>
            </div>
            <div className='meme'>
                <img src={meme.randomImg} alt="" className='meme-img' />
                <h2 className='meme-text top'>{meme.topText}</h2>
                <h2 className='meme-text bottom'>{meme.bottomText}</h2>
            </div>
            <div className='credits'>
                Made by  
                <a href="https://github.com/saboujid"> <b>Saboujid</b>  </a>
            </div>
        </div>
    )
}
