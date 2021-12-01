import { CrewNavBar } from '../../components/CrewNavBar'
import { Header } from '../../components/Header/Header'
import './index.scss'
import DouglasAvatar from '../../assets/crew/image-douglas-hurley.png'
export const Crew = () =>{
    return (
        <div className="crew_conteiner">
            <Header/>
            <div className="meet_your_crew" >
                <strong>02</strong>
                <p>meet your crew</p>
            </div>
            <div className="image_conteiner">
                <img src={DouglasAvatar} alt="" />
                <hr/>
            </div>
            <CrewNavBar/>
            <div className="professional_content">
                <p>COMMANDER</p>
                <h3>Douglas Hurley</h3>
                <strong>
                Douglas Gerald Hurley is an American engineer,
                former Marine Corps pilot and former NASA 
                astronaut. He launched into space for the third 
                time as commander of Crew Dragon Demo-2.
                </strong>
            </div>
        </div>
    )
}