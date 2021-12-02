import { CrewNavBar } from '../../components/CrewNavBar'
import { Header } from '../../components/Header/Header'
import './index.scss'
import DouglasAvatar from '../../assets/crew/image-douglas-hurley.png'
import MarkAvatar from '../../assets/crew/image-mark-shuttleworth.png'
import VictorAvatar from '../../assets/crew/image-victor-glover.png'
import AnoushehAvatar from '../../assets/crew/image-anousheh-ansari.png'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
const professionals = {
    DouglasHurley:{
        img:DouglasAvatar,
        name:'Douglas Hurley',
        ocupation:'COMMANDER',
        about: `Douglas Gerald Hurley is an American engineer,
        former Marine Corps pilot and former NASA 
        astronaut. He launched into space for the third 
        time as commander of Crew Dragon Demo-2.`
    },
    MarkShuttleworth:{
        img:MarkAvatar,
        name:'MARK SHUTTLEWORTH',
        ocupation:'Mission Specialist',
        about: `Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.`
    },
    VictorGlover:{
        img:VictorAvatar,
        name:'Victor Glover',
        ocupation:'PILOT',
        about:'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. '
    },
    AnoushehAnsari:{
        img:AnoushehAvatar,
        name:'Anousheh Ansari',
        ocupation:'Flight Engineer',
        about:'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. '
    }

}
export const Crew = () =>{
    const params = useParams() 
    const destination = params.name || ''
    const [currentDestination,setCurrentDestination] =useState(professionals.DouglasHurley)
    useEffect(()=>{
        if (destination === 'douglas-hurley'){
            setCurrentDestination(professionals.DouglasHurley)
        }
        if(destination === 'mark-shuttleworth'){
            setCurrentDestination(professionals.MarkShuttleworth)

        }
        if(destination === 'victor-glover'){
            setCurrentDestination(professionals.VictorGlover)
        }
        if(destination === 'anousheh-ansari' ){
            setCurrentDestination(professionals.AnoushehAnsari)
        }
    },[destination])
    return (
        <div className="crew_conteiner">
            <Header/>
            <div className="meet_your_crew" >
                <strong>02</strong>
                <p>meet your crew</p>
            </div>
            <div className="image_conteiner">
                <img src={currentDestination.img} alt="" />
                <hr/>
            </div>
            <CrewNavBar/>
            <div className="professional_content">
                <p>{currentDestination.ocupation}</p>
                <h3>{currentDestination.name}</h3>
                <strong>
                    {currentDestination.about}
                </strong>
            </div>
        </div>
    )
}