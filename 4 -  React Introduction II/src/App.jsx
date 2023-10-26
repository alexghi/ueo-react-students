import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const CarPhoto = (props) => {
  const { photo } = props

  return <img
    style={{
      objectFit: 'contain'
    }}
    height={150}
    src={photo}>

  </img>
}

const Title = (props) => {
  const { title } = props
  return <h2 id={title}>{title}</h2>
}

const Description = (props) => {
  const { text } = props
  return <p style={{ color: '#ccc' }}>{text}</p>
}

const CarTile = (props) => {
  const { description, photo, brand } = props

  return <div className={'container'}>
    <CarPhoto photo={photo} />
    <Title title={brand} />
    <Description text={description} />

  </div>
}


const cars = [
  {
    brand: "Toyota",
    description: "The Toyota Camry is a reliable and fuel-efficient sedan.",
    photo: "https://scene7.toyota.eu/is/image/toyotaeurope/toyota-camry-2021-gallery-04-full_tcm-10-2203478?wid=1280&fit=fit,1&ts=1651157703495&resMode=sharp2&op_usm=1.75,0.3,2,0"
  },
  {
    brand: "Honda",
    description: "The Honda Civic is known for its sporty design and great handling.",
    photo: "https://honda.ro/images/cars.jpg"
  },
  {
    brand: "Ford",
    description: "The Ford F-150 is a popular pickup truck with excellent towing capacity.",
    photo: "https://www.ford.ro/content/dam/guxeu/nextgen/cx740s/reveal/ford-eu-cx740s-homepage-NextGen_Desktop-21x9-2160x925-bb.jpg.renditions.original.png"
  },
];

function App() {
  return <div>
    {cars.map((car, index ) => {
      return <CarTile
        key={index}
        brand={car.brand}
        description={car.description}
        photo={car.photo}
      />
    })}
  </div>

}

export default App
