import { CrewNavBar } from '../../components/CrewNavBar'
import { Header } from '../../components/Header/Header'
import './index.scss'
import DouglasAvatarWebp from '../../assets/crew/image-douglas-hurley.webp'
import DouglasAvatar from '../../assets/crew/image-douglas-hurley.webp'
import MarkAvatar from '../../assets/crew/image-mark-shuttleworth.webp'
import VictorAvatar from '../../assets/crew/image-victor-glover.webp'
import AnoushehAvatar from '../../assets/crew/image-anousheh-ansari.webp'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import { getCurrentPage } from '../../hook/getCurrentPage'
import { pageInfoTypes } from '../../types/pageInfoType'
const professionals: pageInfoTypes[] = [
    {
        img:DouglasAvatar,
        title:'Douglas Hurley',
        subtitle:'COMMANDER',
        description: `Douglas Gerald Hurley is an American engineer,
        former Marine Corps pilot and former NASA 
        astronaut. He launched into space for the third 
        time as commander of Crew Dragon Demo-2.`
    },
   {
        img:MarkAvatar,
        title:'MARK SHUTTLEWORTH',
        subtitle:'Mission Specialist',
        description: `Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.`
    },
   {
        img:VictorAvatar,
        title:'Victor Glover',
        subtitle:'PILOT',
        description:'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. '
    },
    {
        img:AnoushehAvatar,
        title:'Anousheh Ansari',
        subtitle:'Flight Engineer',
        description:'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. '
    }

]
export const Crew = () =>{
    const currenteProficionals =  getCurrentPage(professionals)
    return (
        <div className="crew_conteiner">
            <Header/>
            <div className="meet_your_crew" >
                <strong>02</strong>
                <p>meet your crew</p>
            </div>
            <div className="image_conteiner">
                <img src={currenteProficionals?.img} alt="" />
                
                <hr/>
            </div>
            <CrewNavBar/>
            <div className="professional_content">
                <p>{currenteProficionals?.subtitle}</p>
                <h3>{currenteProficionals?.title}</h3>
                <strong>
                    {currenteProficionals?.description}
                </strong>
            </div>
        </div>
    )
}