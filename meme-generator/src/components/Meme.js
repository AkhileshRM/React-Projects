import React, { useState, useEffect } from "react";

export default function Meme() {

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1g8my4.jpg",
  });

  const [memeImage, setMemeImage] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())                   //This function is only for images from API
      .then((data) => setMemeImage(data.data.memes));
  }, []);

 const getMemeImage = () => {
  const randomno = Math.ceil(Math.random() * memeImage.length)
  const url = memeImage[randomno].url                     //This is to get images
  setMeme(prevMeme => ({
    ...prevMeme,
    randomImage : url
  }))
 }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMeme((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <form className="form-container">
        <label className="top-label">
          Top text
          <input
            className="input-box"
            type="text"
            name="topText"
            placeholder="Enter Top Text"
            value={meme.topText}
            onChange={handleChange}
          ></input>
        </label>
        <label className="bottom-label">
          Bottom text
          <input
            className="input-box"
            type="text"
            name="bottomText"
            placeholder="Enter Bottom Text"
            value={meme.bottomText}
            onChange={handleChange}
          ></input>
        </label>
      </form>
      <button className="get-meme" onClick={getMemeImage}>
        Get a new meme image 🖼
      </button>
      <div className="meme-container">
        <div className="image-with-text">
          <img className="meme-image" src={meme.randomImage} alt="Meme" />
          <h2 className="top">{meme.topText}</h2>
          <h2 className="bottom">{meme.bottomText}</h2>
        </div>
      </div>
    </>
  );
}
