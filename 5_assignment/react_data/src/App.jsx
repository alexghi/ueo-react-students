/* eslint-disable no-unused-vars */
import Card from "react-bootstrap/Card";
import { useCallback, useState } from "react";

// eslint-disable-next-line react/prop-types
const ImageCard = ({ date, explanation, title, url }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{explanation}</Card.Text>
        <Card.Footer>{date}</Card.Footer>
      </Card.Body>
    </Card>
  );
};

const Loading = () => {
  return <div>loading...</div>;
};

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");

  //on demand
  const getPictures = useCallback(() => {
    setLoading(true);
    fetch(
      `https://newsapi.org/v2/everything?q=${query}&apiKey=5a8a497290a64629a709c61020dc87de`
    )
      .then((response) => response.json())
      .then((resultAsJson) => {
        console.log(resultAsJson);
        setData(resultAsJson);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [query, setData, setLoading, setError]);

  //  la primul mount
  // useEffect(() => {
  //   fetch("https://api.nasa.gov/planetary/apod?api_key=AICI_PUNETI_KEY_UL_VOSTRU&start_date=2023-10-10")
  //     .then(response => response.json())
  //     .then(resultAsJson => {
  //       setData(resultAsJson)
  //     })
  //     .catch(err => {
  //       setError(err)
  //     });
  // }, [])

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={getPictures}>Show pictures</button>
      {loading ? <Loading /> : null}
      {data && data.articles && data.articles.length > 0
        ? data.articles.map((article, index) => (
            <ImageCard
              key={index}
              date={article.publishedAt}
              explanation={article.description}
              title={article.title}
              url={article.urlToImage}
            />
          ))
        : null}
    </div>
  );
}

export default App;
