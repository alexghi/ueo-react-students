import React, { useCallback, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
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

const NewsCard = ({ title, description, url }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">Citește mai mult</a>
    </div>
  );
};

const Loading = () => {
  return <div>loading</div>;
};

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date()); 

  const handleDateChange = (date) => {
    setSelectedDate(date);
    getPictures(date);
  };
  
  const handlePrevious = () => {
    const previousDate = new Date(selectedDate);
    previousDate.setDate(selectedDate.getDate() - 1);
    setSelectedDate(previousDate);
    getPictures(previousDate);
  };
  
  const handleNext = () => {
    const nextDate = new Date(selectedDate);
    nextDate.setDate(selectedDate.getDate() + 1);
    setSelectedDate(nextDate);
    getPictures(nextDate);
  };

  const getPictures = useCallback(() => {
    setLoading(true);
    const formattedDate = selectedDate.toISOString().split('T')[0]; 
    fetch(`https://api.nasa.gov/planetary/apod?api_key=hnOile1yg0t3ZgCffFNMr1aWEberqD6BnHYMPot9&date=${formattedDate}`)
      .then(response => response.json())
      .then(resultAsJson => {
        setData(resultAsJson);
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [selectedDate]);

  const handleSearch = () => {
    setLoading(true);
    fetch(`https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=8c6b4b8a7a87445d867f4de8aa873372`)
      .then(response => response.json())
      .then(resultAsJson => {
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
      <input
        type="text"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Caută știri</button>
      <button onClick={getPictures}>get pictures</button>
      <button onClick={handlePrevious}>Previous</button>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
      />
       <button onClick={handleNext}>Next</button>

      {loading ? <Loading /> : null}
      {data && data.articles ? (
        <div>
          <h1>Rezultate știri: {searchQuery}</h1>
          {data.articles.map((article, index) => (
            <NewsCard
              key={index}
              title={article.title}
              description={article.description}
              url={article.url}
            />
          ))}
        </div>
      ) : null}

      {loading ? <Loading /> : null}
      {data ? <ImageCard {...data} /> : null}
    </>
  );
}

export default App;