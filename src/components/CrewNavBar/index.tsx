import { useParams,Link } from 'react-router-dom'
import './index.scss'

export const CrewNavBar = () =>{
    const pathName = useParams().name
    console.log(pathName)
    return(
        <div className="CrewNavBar_conteiner">
            <Link className={`link ${pathName === 'douglas-hurlei'? 'active' : ''}`}  to="/crew/douglas-hurlei">  </Link>
            <Link className={`link ${pathName === 'mark-shuttleworth'? 'active' : ''}`}  to="/crew/mark-shuttleworth"></Link>
            <Link className={`link ${pathName === 'victor-glover'? 'active' : ''}`}  to="/crew/victor-glover"></Link>
            <Link className={`link ${pathName === 'anousheh-ansari'? 'active' : ''}`}  to="/crew/anousheh-ansari"></Link>
        </div>
    )
}