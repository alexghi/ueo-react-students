import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import './App.css';

const ImageCard = ({ article }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Card.Text>
          {article.description}
        </Card.Text>
        <Card.Footer>{article.url}</Card.Footer>
      </Card.Body>
    </Card>
  );
}

const Loading = () => {
  return <div>
    loading
  </div>
}

function App() {
  const [data, setData] = useState(null);
  const [loading ,setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    setLoading(true);
    fetch(`https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=f3905468ecbe4cf88e26358f2103b223`)
      .then(response => response.json())
      .then(resultAsJson => {
        console.log(resultAsJson);
        setData(resultAsJson);
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <div>
        <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <button onClick={handleSearch}>Search</button>
      </div>
      {loading ? <Loading/ > : null}
      {data && data.articles.length ? data.articles.map(article => {
        return <ImageCard key={article.url} article={article} />
      }) : null}
    </>
  );
}

export default App;