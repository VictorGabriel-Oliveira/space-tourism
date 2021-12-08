import './index.scss'

import { Header } from '../../components/Header/Header';
import {DestinationNavBar} from '../../components/DestinationNavBar/index'

import MOON from '../../assets/destination/image-moon.png'
import MoonWebp from '../../assets/destination/image-moon.webp'
import Mars from '../../assets/destination/image-mars.png'
import Europa from '../../assets/destination/image-europa.png'
import Titan from '../../assets/destination/image-titan.png'

import { getCurrentPage } from '../../hook/getCurrentPage';
import { pageInfoTypes } from '../../types/pageInfoType';


const destinations : pageInfoTypes[] = [
    {
            img:MOON,
            title:'MOON',
            description:` See our planet as you’ve never seen it before. A
            perfect relaxing trip away to help regain 
            perspective and come back refreshed. While 
            you’re there, take in some history by visiting the
            Luna 2 and Apollo 11 landing sites.`,
            timeOfTravelend:'3 DAYS',
            distance:'384,400 KM'
        },
    {
        img:Mars,
        title:'MARS',
        description:`Don’t forget to pack your hiking boots. You’ll need
        them to tackle Olympus Mons, the tallest planetary
        mountain in our solar system. It’s two and a half 
        times the size of Everest!`,
        timeOfTravelend:'9 MONTHS',
        distance:'225 MIL. KM'
    },
    {
        img:Europa,
        title:'EUROPA',
        description:`
        The smallest of the four Galilean moons orbiting
        Jupiter, Europa is a winter lover’s dream.
        With an icy surface, it’s perfect for a bit of ice skating, 
        curling, hockey, or simple relaxation in your snug 
        wintery cabin.`,
        timeOfTravelend:'3 years',
        distance:'628 MIL. km'

    },
    {
        img:Titan,
        title:'TITAN',
        description:`The only moon known to have a dense atmosphere 
        other than Earth, Titan is a home away from home 
        (just a few hundred degrees colder!). As a bonus, 
        you get striking views of the Rings of Saturn.`,
        distance:'1.6 BIL. km',
        timeOfTravelend:'7 years'
    }
]
export const Destination = () => {
    const currentDestination=  getCurrentPage(destinations)
    
    
    return(

        <div className="destination_conteiner">
            <Header/>
            <div className="first_content">
                <div className="pick_your_destination">
                    <strong>01</strong>
                    <p>Pick your destination</p>
                </div>
                <div className="image_conteiner">
                    <img  src={currentDestination?.img} alt="" />
                </div>
            </div>
            
            
            <div className="second_content">
                <DestinationNavBar/>
                <div className="destination_content">
                    <h1 className="title">
                        {currentDestination?.title}
                    </h1>
                    <p className="about">
                    {currentDestination?.description}
                    </p>
                </div>
                <hr/>
                <div className="destine_content">
                    <div className="destine_info">
                        <p>
                            AVG. DISTANCE
                        </p>
                        <h3>
                            {currentDestination?.distance}
                        </h3>
                    </div>
                    <div className="destine_info">
                        <p>
                            AVG. DISTANCE
                        </p>
                        <h3>
                            {currentDestination?.timeOfTravelend} 
                        </h3>
                    </div>
                </div>
            </div>
            
           
        </div>
    )
    
}

