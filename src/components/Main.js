import React, { useState } from 'react';
// import logo from '../images/logo.png'
import memeData from '../memesData'


const c = console.log.bind(console)


export default function Main() {
    // meme state
    const [allMemeImages, setAllMemeImages] = useState(memeData.data.memes)
    const [meme, setMeme] = useState({ randomImage:'https://i.imgflip.com/16iyn1.jpg', topText: '', bottomText: '', })

    // getRandomImage
    function getRandomImage() {
        // const memeArr = memeData.data.memes;
        const memeImg = allMemeImages[Math.floor(Math.random() * allMemeImages.length)]
        c(memeImg.url)
        return setMeme((prevMeme) => {
            return { ...prevMeme, randomImage: memeImg.url }
        })
    }
    // //////
function handleChange(e) {
    const {name, value}=e.target
    setMeme((prevMeme)=>{
        return{
            ...prevMeme, [name]:value
        }
    })
}

React.useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes")
    .then(res=>res.json())
    .then(data=> setAllMemeImages(data.data.memes) )
    c(allMemeImages)
},[])


    return (
        <main className="grid-col">
            <div className='form'>
                <div className="input-container flex ">
                    <input type="text" placeholder='Top text' name="topText" value={meme.topText} onChange={handleChange}/>
                    <input type="text" placeholder='Bottom text' name="bottomText" value={meme.bottomText}onChange={handleChange} />
                </div>
                <button onClick={getRandomImage} className="btn">Get a new meme image</button>
            </div>

            <div className="meme">
                <img src={meme.randomImage} alt="" />
                <h2 className="meme-text top ">{meme.topText}</h2>
                <h2 className="meme-text bottom ">{meme.bottomText}</h2>
            </div>

        </main>
    )
}
