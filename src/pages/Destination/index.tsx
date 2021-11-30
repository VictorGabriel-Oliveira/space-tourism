import './index.scss'
import { useParams } from "react-router-dom";
import { Header } from '../../components/Header/Header';
import {DestinationNavBar} from '../../components/DestinationNavBar/index'

import MOON from '../../assets/destination/image-moon.png'
import MoonWebp from '../../assets/destination/image-moon.webp'
import Mars from '../../assets/destination/image-mars.png'
import Europa from '../../assets/destination/image-europa.png'
import Titan from '../../assets/destination/image-Titan.png'
import { useEffect, useState } from 'react';

type Params = {
    name:string
}
export const Destination = () => {
    const params = useParams() 
    const destination = params.name || ''
    const [currentDestination,setCurrentDestinatios] = useState({})
    useEffect(()=>{
        setCurrentDestinatios(destination)
    },[params])

    
    
    return(

        <div className="destination_conteiner">
            <Header/>
            <div className="pick_your_destination">
                <strong>01</strong>
                <p>Pick your destinatio</p>
            </div>
            <div className="image_conteiner">
                <img  src={MOON} alt="" />
            </div>
            <DestinationNavBar/>
            <div className="destination_content">
                <h1 className="title">
                    MOON
                </h1>
                <p className="about">
                See our planet as you’ve never seen it before. A
                 perfect relaxing trip away to help regain 
                 perspective and come back refreshed. While 
                 you’re there, take in some history by visiting the
                  Luna 2 and Apollo 11 landing sites.
                </p>
            </div>
            <hr/>

            <div className="destine_info">
                <p>
                    AVG. DISTANCE
                </p>
                <h3>
                    384,400 km
                </h3>
            </div>
            <div className="destine_info">
                <p>
                    AVG. DISTANCE
                </p>
                <h3>
                    3 days
                </h3>
            </div>
        </div>
    )
    
}

