import './index.scss'
import { Routes, Route, useParams } from "react-router-dom";
import { Header } from '../../components/Header/Header';

export const Destination = () => {
    const params = useParams()
    console.log(params.name)
    return(

        <div className="destination_conteiner">
            <Header/>
        </div>
    )
    
}

