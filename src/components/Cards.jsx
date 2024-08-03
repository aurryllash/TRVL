import React, { useEffect, useRef, useState } from 'react'
import CardItem from './CardItem'
import './Cards.css'
// import data from '../../data.json'

function Cards() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/images')
            .then(res => res.json())
            .then(res => {
                setData(res)
                console.log(res)
            }) 
            .catch(error => console.log(error))

    }, [])

  return (
    <div className='cards'>
        <h1>Check out these EPIC Destinations!</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    {data.slice(0, 2).map((item, index) => (
                        <CardItem
                        key={ index }
                        src={ item.src }
                        text={ item.text }
                        label={ item.label }
                        path={ item.path }
                        />
                    )
                    )}
                </ul>
                <ul className="cards__items">
                    {data.slice(2).map((item, index) => (
                        <CardItem
                        key={ index }
                        src={ item.src }
                        text={ item.text }
                        label={ item.label }
                        path={ item.path }
                        />
                    )
                    )}
                </ul>  
            </div>
        </div>
    </div>
  )
}

export default Cards