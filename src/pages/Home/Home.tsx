import {Fragment} from 'react'
import { Button } from "../../components/ButtonCircle/Button"
import { Header } from "../../components/Header/Header"
import './home.scss'
export const Home = () => {
    return (
        <div className="home_conteiner">
            <Header/>
            <div className="home">
                <div className="home_content">
                    <p>SO, YOU WANT TO TRAVEL TO</p>
                    <h1>SPACE</h1>
                    <strong>
                    Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
                    </strong>
                </div>
                <Button/>
            </div>
            
        </div>
    )
}