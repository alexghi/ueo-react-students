import Card from 'react-bootstrap/Card';
import { useCallback, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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

  // on demand
  const getPictures = useCallback(() => {
    setLoading(true)
    fetch("https://api.nasa.gov/planetary/apod?api_key=AICI_PUNETI_KEY_UL_VOSTRU&start_date=2023-10-10")
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
  }, [setData, setLoading, setError])

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
    <>
    <button onClick={getPictures}>get pictures</button>
      {loading ? <Loading/ > : null}
      {data && data.length ? data.map(apod => {
        return <ImageCard {...apod} />
      }) : null}
    </>
  )
}

export default App;
