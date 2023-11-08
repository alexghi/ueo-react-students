import Card from 'react-bootstrap/Card';
import { useCallback, useEffect, useState } from 'react'
import './App.css'

const ImageCard = ({ date, explanation,  title, url }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {explanation}
        </Card.Text>
        <Card.Footer>{date}</Card.Footer>
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
  const [data, setData] = useState(null)
  const [loading ,setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [date, setDate] = useState("2023-10-10")

  // on demand
  const getPictures = useCallback(() => {
    setLoading(true)
    fetch(`https://api.nasa.gov/planetary/apod?api_key=zH7MvCCR15Zb8hJRtdZsQvI3vD9WJGwjeedUk6ys&date=${date}`)
      .then(response => response.json())
      .then(resultAsJson => {
        console.log(resultAsJson)
        setData(resultAsJson)
      })
      .catch(err => {
        setError(err)
      })
      .finally(() => {
        setLoading(false)
      })
      ;
  }, [setData, setLoading, setError, date])

  //  la primul mount
  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=zH7MvCCR15Zb8hJRtdZsQvI3vD9WJGwjeedUk6ys&date=${date}`)
      .then(response => response.json())
      .then(resultAsJson => {
        setData(resultAsJson)
      })
      .catch(err => {
        setError(err)
      });
  }, [date])

  const handleNext = () => {
    const nextDate = new Date(date)
    nextDate.setDate(nextDate.getDate() + 1)
    setDate(nextDate.toISOString().split('T')[0])
  }

  const handlePrevious = () => {
    const previousDate = new Date(date)
    previousDate.setDate(previousDate.getDate() - 1)
    setDate(previousDate.toISOString().split('T')[0])
  }

  return (
    <>
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
      <button onClick={getPictures}>Get pictures</button>
      {loading ? <Loading/ > : null}
      {data ? <ImageCard {...data} /> : null}
    </>
  )
}

export default App;