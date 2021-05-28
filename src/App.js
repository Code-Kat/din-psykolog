import "./App.css";
import react, { useEffect, useState } from "react";
import Image from "./components/Image";

function App() {
  const [images, setImages] = useState([]);
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
  return (
    <div className="app">
      {images !== [] && (
        <Image
          img={images[index].urls.small}
          userName={images[index].user.username}
          userLink={images[index].user.portfolio_url}
        />
      )}
    </div>
  );
}

export default App;
