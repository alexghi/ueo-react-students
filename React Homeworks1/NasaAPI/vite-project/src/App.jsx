import React, { useCallback, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './App.css';

const Loading = () => <div>Loading...</div>;

const NewsCard = ({ title, description, url }) => (
  <div>
    <h2>{title}</h2>
    <p>{description}</p>
    <a href={url} target="_blank" rel="noopener noreferrer">
      Citește mai mult
    </a>
  </div>
);

const ImageCard = ({ title, url, explanation, date }) => (
  <div>
    <h1>{title}</h1>
    <img src={url} alt="" />
    <p>{explanation}</p>
    <p>{date}</p>
  </div>
);

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
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

  const fetchData = (url, onSuccess) => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then(onSuccess)
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  const getPictures = useCallback(() => {
    const formattedDate = selectedDate.toISOString().split('T')[0];
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=hnOile1yg0t3ZgCffFNMr1aWEberqD6BnHYMPot9&date=${formattedDate}`;

    fetchData(apiUrl, (resultAsJson) => {
      setData(resultAsJson);
    });
  }, [selectedDate]);

  const handleSearch = () => {
    const apiUrl = `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=8c6b4b8a7a87445d867f4de8aa873372`;

    fetchData(apiUrl, (resultAsJson) => {
      setData(resultAsJson);
    });
  };

  return (
    <>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Caută știri</button>
      <button onClick={getPictures}>Primeste poza</button>
      <button onClick={handlePrevious}>Anterior</button>
      <DatePicker selected={selectedDate} onChange={handleDateChange} />
      <button onClick={handleNext}>Urmatoarea</button>

      {loading && <Loading />}
      {data && data.articles && (
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
      )}

      {data && <ImageCard {...data} />}
    </>
  );
};

export default App;