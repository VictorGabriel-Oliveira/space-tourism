import Logo from '../../assets/shared/logo.svg'
import NavBar from '../../assets/shared/icon-hamburger.svg'
import Close from '../../assets/shared/icon-close.svg'
import './header.scss'
import { useState } from 'react'
import { Link ,useLocation} from 'react-router-dom'
export const Header = () =>{
    const [menusState, setMenuState] = useState(false)
    function handleOpenCloseMenuh (){
        setMenuState(!menusState)
    }
    const locationName = useLocation().pathname

    
    return(
        <div className="header_conteiner">
            <div className="logo">
                <img src={Logo}alt="Logo" />
            </div>
            <div className="navBar">
                <img src={NavBar} alt="" onClick={handleOpenCloseMenuh} />
            </div>
            <hr/>
            <ul className="menu" style={{display:`${menusState ? 'flex' : 'none'}`}}>
                    <img  className="close" src={Close} alt="" onClick={handleOpenCloseMenuh}/>
                    <li className={`${locationName === '/' ? 'active' : '' }`} key="HOME">
                        <strong>00</strong>
                        <Link to="/">HOME</Link>
                        
                    </li>
                    <li className={`${locationName === '/destination' ? 'active' : '' }`} key="DESTINATION">
                        <strong>01</strong>
                        
                        <Link to="/destination/moon">DESTINATION</Link>
                    </li>
                    <li className={`${locationName === '/crew' ? 'active' : '' }`} key="CREW">
                        <strong>02</strong>
                        
                        <Link to="/crew/douglas-hurlei">CREW</Link>
                    </li>
                    <li className={`${locationName === '/technology' ? 'active' : '' }`} key="TECHNOLOGY">
                        <strong>03</strong>
                        
                        <Link to="/technology">TECHNOLOGY</Link>
                    </li>
                </ul>
        </div>
    )
}