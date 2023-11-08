/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useCallback } from 'react';
import Card from 'react-bootstrap/Card';

const ImageCard = ({ date, explanation, title, url }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{explanation}</Card.Text>
        <Card.Footer>{date}</Card.Footer>
      </Card.Body>
    </Card>
  );
}

const Loading = () => {
  return <div>loading...</div>
}

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  const getPictureOfTheDay = useCallback((specifiedDate) => {
    setLoading(true);
   
    fetch(`https://api.nasa.gov/planetary/apod?api_key=7BYIIKvMT4tEj9Kctx75Ye6fy0GPQSPkY7YdZxXq&date=${specifiedDate}`)
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
  }, [setData, setLoading, setError]);

  useEffect(() => {
    getPictureOfTheDay(date);
  }, [getPictureOfTheDay, date]);

  const handlePreviousDay = () => {
    const currentDate = new Date(date);
    currentDate.setDate(currentDate.getDate() - 1);
    setDate(currentDate.toISOString().split('T')[0]);
  };

  const handleNextDay = () => {
    const currentDate = new Date(date);
    currentDate.setDate(currentDate.getDate() + 1);
    setDate(currentDate.toISOString().split('T')[0]);
  };

  return (
    <div>
      <div>
        <button onClick={handlePreviousDay}>Previous Day Photo</button>
        <button onClick={handleNextDay}>Next Day Photo</button>
      </div>
      {loading ? <Loading /> : null}
      {data ? <ImageCard {...data} /> : null}
    </div>
  );
}

export default App;