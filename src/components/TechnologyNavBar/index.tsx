import { Link , useParams} from "react-router-dom"
import './index.scss'
export const ThechnologyNavBar = () =>{
    const pathName = useParams().name
    return (
        <div className="navBar_conteiner">
            <Link className={`link ${pathName === 'launch-vehicle'? 'active' : ''}`} to='/technology/launch-vehicle'>1</Link>
            <Link className={`link ${pathName === 'space-port'? 'active' : ''}`} to='/technology/space-port'>2</Link>
            <Link className={`link ${pathName === 'space-capsule'? 'active' : ''}`} to='/technology/space-capsule'>3</Link>

        </div>
    )
}