import "./App.css";
import { useEffect, useState } from "react";
import Image from "./components/Image";
import arrowIcon from "./assets/previous.png";

function App() {
  const [images, setImages] = useState(undefined);
  const [index, setIndex] = useState(4);
  const apiKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

  useEffect(() => {
    fetch("https://api.unsplash.com/search/photos?page=1&query=spacex", {
      headers: {
        Authorization: `Client-ID ${apiKey}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setImages(data.results));
  }, [apiKey]);

  const getRandomNumber = () => {
    setIndex(Math.floor(Math.random() * images.length));
  };

  return (
    <div className="app">
      {images !== undefined && (
        <Image
          img={images[index].urls.small}
          userName={images[index].user.username}
          userLink={images[index].user.portfolio_url}
        />
      )}
      <div className="buttons">
        <img
          alt="leftArrow"
          src={arrowIcon}
          className="arrowLeft button"
          onClick={() => setIndex(index === 0 ? images.length - 1 : index - 1)}
        />
        <button className="button centerButton" onClick={getRandomNumber}>
          Suprise me
        </button>
        <img
          alt="rightArrow"
          src={arrowIcon}
          className="arrowRight button"
          onClick={() => setIndex(index === images.length - 1 ? 0 : index + 1)}
        />
      </div>
      <p className="flaticon">
        Icons made by{" "}
        <a href="https://icon54.com/" title="Pixel perfect">
          Pixel perfect
        </a>{" "}
        and{" "}
        <a href="https://www.freepik.com" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </p>
    </div>
  );
}

export default App;
