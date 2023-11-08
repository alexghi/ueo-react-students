import React, { useEffect, useState } from 'react';
import './App.css';

const ImageCard = ({ title, url, explanation, date }) => {
  return (
    <div>
      <h1>{title}</h1>
      <img src={url} alt="" />
      <p>{explanation}</p>
      <p>{date}</p>
    </div>
  );
};


function App() {
  const NewsCard = ({}) => {
    return (
      <div>
        {newsData.map((article) => (
          <div>
            <h1>{article.title}</h1>
            <img src={article.urlToImage} />
            <span>{article.description}</span>
            <p>{article.publishedAt}</p>
          </div>
        ))}
      </div>
    )
  }
  const [data, setData] = useState(null);
  const [newsData, setNewsData] = useState(null);
  const [search, setSearch] = useState('');
  const [date, setDate] = useState('');
  const searchKeyWord = search;

  const seeThePicture = () => {
    const fetchString = 'https://api.nasa.gov/planetary/apod/?api_key='
    const secondFetchString = '6gxAGmqFz1rY9CfdOXPEa8wWjThdIqXscWUtjih7'
    const dateFetchString = '&date=' + date.toString()
    const finalFetchString = fetchString + secondFetchString + dateFetchString
    fetch(finalFetchString)
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        console.log(result);
      })
      .catch((error) => console.log('error', error));
  }

  const getNews = () => {
    const fetchString = 'https://newsapi.org/v2/everything?q='
    const secondFetchString = '&apiKey=757f4f3f90564e0e8398aa1f43eef827'
    const finalFetchString = fetchString + searchKeyWord + secondFetchString
    if (search != '') {
      fetch(finalFetchString)
        .then((response) => response.json())
        .then((result) => {
          setNewsData(result.articles);
          console.log(result);
        })
        .catch((error) => console.log('error', error));
    }
    else alert('Please enter a search keyword')
  }

  return (
    <div>
      <div>
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
        <button onClick={getNews} >Search</button>
      </div>

      <div>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        <button onClick={seeThePicture}>See the picture</button>
      </div>


      {data ? (
        <div>
          <ImageCard
            title={data.title}
            url={data.url}
            explanation={data.explanation}
            date={data.date}
          />
        </div>
      ) : (
        <p>Loading...</p>
      )}

      {newsData ? (
        <NewsCard newsData={newsData}/>
      ) : (
        <p>Loading...</p>
      )
      }
    </div >
  );
}


export default App;
