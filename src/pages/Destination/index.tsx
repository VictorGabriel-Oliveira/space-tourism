import './index.scss'
import { useParams } from "react-router-dom";
import { Header } from '../../components/Header/Header';
import {DestinationNavBar} from '../../components/DestinationNavBar/index'

import MOON from '../../assets/destination/image-moon.png'
import MoonWebp from '../../assets/destination/image-moon.webp'
import Mars from '../../assets/destination/image-mars.png'
import Europa from '../../assets/destination/image-europa.png'
import Titan from '../../assets/destination/image-titan.png'
import { useEffect, useState } from 'react';

type destinationType = {
    img:string,
    title:string,
    about:string,
    time:string,
    distance:string
}
const destinations = {
    Moon:{
            img:MOON,
            title:'MOON',
            about:` See our planet as you’ve never seen it before. A
            perfect relaxing trip away to help regain 
            perspective and come back refreshed. While 
            you’re there, take in some history by visiting the
            Luna 2 and Apollo 11 landing sites.`,
            time:'3 DAYS',
            distance:'384,400 KM'
        },
    Mars:{
        img:Mars,
        title:'MARS',
        about:`Don’t forget to pack your hiking boots. You’ll need
        them to tackle Olympus Mons, the tallest planetary
        mountain in our solar system. It’s two and a half 
        times the size of Everest!`,
        time:'9 MONTHS',
        distance:'225 MIL. KM'
    },
    Europa:{
        img:Europa,
        title:'EUROPA',
        about:`
        The smallest of the four Galilean moons orbiting
        Jupiter, Europa is a winter lover’s dream.
        With an icy surface, it’s perfect for a bit of ice skating, 
        curling, hockey, or simple relaxation in your snug 
        wintery cabin.`,
        time:'3 years',
        distance:'628 MIL. km'

    },
    Titan:{
        img:Titan,
        title:'TITAN',
        about:`The only moon known to have a dense atmosphere 
        other than Earth, Titan is a home away from home 
        (just a few hundred degrees colder!). As a bonus, 
        you get striking views of the Rings of Saturn.`,
        distance:'1.6 BIL. km',
        time:'7 years'
    }
}
export const Destination = () => {
    const params = useParams() 
    const destination = params.name || ''
    const [currentDestination,setCurrentDestination] =useState(destinations.Moon)
    useEffect(()=>{
        if (destination === 'moon'){
            setCurrentDestination(destinations.Moon)
        }
        if(destination === 'mars'){
            setCurrentDestination(destinations.Mars)

        }
        if(destination === 'europa'){
            setCurrentDestination(destinations.Europa)
        }
        if(destination === 'titan' ){
            setCurrentDestination(destinations.Titan)
        }
    },[destination])

    
    
    return(

        <div className="destination_conteiner">
            <Header/>
            <div className="pick_your_destination">
                <strong>01</strong>
                <p>Pick your destinatio</p>
            </div>
            <div className="image_conteiner">
                <img  src={currentDestination.img} alt="" />
            </div>
            <DestinationNavBar/>
            <div className="destination_content">
                <h1 className="title">
                    {currentDestination.title}
                </h1>
                <p className="about">
                   {currentDestination.about}
                </p>
            </div>
            <hr/>

            <div className="destine_info">
                <p>
                    AVG. DISTANCE
                </p>
                <h3>
                    {currentDestination.distance}
                </h3>
            </div>
            <div className="destine_info">
                <p>
                    AVG. DISTANCE
                </p>
                <h3>
                    {currentDestination.time} 
                </h3>
            </div>
        </div>
    )
    
}

