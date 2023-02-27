import React from "react";

export default function Meme() {

    const [meme, setMeme] = React.useState(
        {
            topText: "",
            botText: "",
            imgUrl: "https://i.imgflip.com/3si4.jpg"
        }
    )

    const [memeData, setMemeData] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setMemeData(data.data.memes))
    }, [])


    function generate() {
        const id = Math.floor(Math.random() * memeData.length);
        let newUrl = memeData[id].url
        setMeme(prev => {
            return (
                {
                    ...prev,
                    imgUrl: newUrl
                }
            )
        })
    }

    function handleChange(event) {
        const { name, value } = event.target
        setMeme(prev => {
            return (
                {
                    ...prev,
                    [name]: value
                }
            )
        })
    }



    return (
        <div>
            <div className="Meme-form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form"
                    name="botText"
                    value={meme.botText}
                    onChange={handleChange}

                />

                <button onClick={generate}>Get a new meme image  🖼</button>
            </div>
            <div className="Meme">
                <img src={meme.imgUrl} className="Meme-img" />
                <h2 className="meme-top">{meme.topText}</h2>
                <h2 className="meme-bot">{meme.botText}</h2>
            </div>
        </div>
    )
}