import './index.scss'
import {useLocation,Link} from 'react-router-dom'
export const DestinationNavBar = () => {
    const pathName = useLocation().pathname

    console.log(pathName)
    return(
        <div className="destination_navBar">
            <Link className={`link ${pathName === '/destination/moon'? 'active' : ''}`} to="/destination/moon">MOON</Link>
            <Link className={`link ${pathName === '/destination/mars'? 'active' : ''}`} to="/destination/mars">MARS</Link>
            <Link className={`link ${pathName === '/destination/europa'? 'active' : ''}`} to="/destination/europa">EUROPA</Link>
            <Link className={`link ${pathName === '/destination/titan'? 'active' : ''}`} to="/destination/titan">TITAN</Link>
        </div>
    )
}