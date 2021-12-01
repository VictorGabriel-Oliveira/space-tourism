import { CrewNavBar } from '../../components/CrewNavBar'
import { Header } from '../../components/Header/Header'
import './index.scss'
export const Crew = () =>{
    return (
        <div className="crew_conteiner">
            <Header/>
            <CrewNavBar/>
        </div>
    )
}