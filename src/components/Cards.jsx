import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out these EPIC Destinations!</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem
                    src='./public/img-9.jpg'
                    text='Eplore the hidden waterfall deep inside the Amazon jungle'
                    label='Advanture'
                    path='/services' 
                    />
                    <CardItem
                    src='./public/img-1.jpg'
                    text='Dive into the crystal-clear waters of the Great Barrier Reef and explore its vibrant marine life.'
                    label='Advanture'
                    path='/services' 
                    />
                </ul>
                <ul className="cards__items">
                    <CardItem
                    src='./public/img-2.jpg'
                    text='Kayak through the serene fjords of Norway and marvel at the towering cliffs and waterfalls.'
                    label='Advanture'
                    path='/services' 
                    />
                    <CardItem
                    src='./public/img-3.jpg'
                    text='Embark on a thrilling trek to discover the majestic peaks of the Himalayas.'
                    label='Advanture'
                    path='/services' 
                    />
                    <CardItem
                    src='./public/img-4.jpg'
                    text='Roam the wild savannas of Africa on a safari and encounter the Big Five in their natural habitat.'
                    label='Advanture'
                    path='/services' 
                    />
                </ul>
                
            </div>
        </div>
    </div>
  )
}

export default Cards