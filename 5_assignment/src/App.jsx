/* eslint-disable react/prop-types */
import { useState, useCallback, useRef, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

const NewsCards = ({ status, totalResults, articles }) => {
  return (
    <div style={{}}>
      <Carousel data-bs-theme="dark" style={{ padding: "20px" }}>
        {articles.map((article) => (
          <Carousel.Item
            key={article.title}
            style={{ padding: "30px" }}
          >
            <h3 style={{ padding: "80px" }}>{article.title}</h3>
            <p style={{ paddingRight: "50px", paddingLeft: "50px" }}>{article.description}</p>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

function App() {
  const [msg, setMsg] = useState("");
  const inputReference = useRef(null);

  const [news, setNews] = useState(null);

  //console.log(inputReference?.current?.value + " din App()");

  const onInputChange = useCallback(
    (event) => {
      setMsg(event.target.value);
    },
    [setMsg]
  );

  const getNews = useCallback(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=" +
        msg +
        "&apiKey=0b5bc78f150c4c31ac967f68c35fc5ee"
    )
      .then((response) => response.json())
      .then((resultAsJson) => setNews(resultAsJson))
      .catch((error) => console.log("error", error));
  }, [msg, setNews]);

  return (
    <div
      style={{
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "50px",
      }}
    >
      <input ref={inputReference} value={msg} onChange={onInputChange} />

      <div
        style={{
          padding: "30px",
        }}
      ></div>
      <button onClick={getNews}>Get News</button>
      {news ? <NewsCards {...news}></NewsCards> : <div></div>}
    </div>
  );
}

export default App;
