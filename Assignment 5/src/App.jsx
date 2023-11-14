// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Componenta pentru secțiunea de știri
const NewsSection = () => {
  const [query, setQuery] = useState(''); // Stocarea valorii din input-ul de căutare
  const [news, setNews] = useState([]); // Stocarea știrilor obținute

// Funcția de căutare a știrilor
  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${query}&apiKey=SWka1zO2Y4y7nOZ6CuhsZaxtkPRnmNIxSP3tAGq6`
      );
      setNews(response.data.articles);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {news.map((article, index) => (
          <li key={index}>{article.title}</li>
        ))}
      </ul>
    </div>
  );
};

// Componenta pentru secțiunea NASA Picture of the Day (POD)
const NasaPODSection = () => {
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [pod, setPOD] = useState({});

// Funcția pentru dată anterioară
  const handlePrevious = () => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() - 1);
    setDate(newDate.toISOString().slice(0, 10));
  };

// Funcția pentru dată următoare
  const handleNext = () => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + 1);
    setDate(newDate.toISOString().slice(0, 10));
  };

  useEffect(() => {
    const formattedDate = date; // Data formatată pentru utilizare în apelul API
    axios
      .get(`https://api.nasa.gov/planetary/apod?date=${formattedDate}&api_key=SWka1zO2Y4y7nOZ6CuhsZaxtkPRnmNIxSP3tAGq6`)
      .then((response) => setPOD(response.data)) // Setarea datelor primite de la API
      .catch((error) => console.error(error));
  }, [date]); // Apelul API se realizează la fiecare schimbare a datei

  return (
    <div>
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <div>
        <h3>{pod.title}</h3>
        <img src={pod.url} alt={pod.title} style={{ maxWidth: '100%' }} />
        <p>{pod.explanation}</p>
      </div>
    </div>
  );
};

// Componenta principală a aplicației
const App = () => {
  return (
    <div>
      <NewsSection /> 
      <NasaPODSection />
    </div>
  );
};

export default App;