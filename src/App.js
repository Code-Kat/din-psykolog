import "./App.css";
import react, { useEffect, useState } from "react";

function App() {
  //const [images, setImages] = useState([]);
  const apiKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

  useEffect(() => {
    fetch("https://api.unsplash.com/search/collections?page=1&query=spacex", {
      headers: {
        Authorization: `Client-ID ${apiKey}`,
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, [apiKey]);
  return <div className="app">hi</div>;
}

export default App;
