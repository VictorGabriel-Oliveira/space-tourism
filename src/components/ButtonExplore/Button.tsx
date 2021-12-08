import './button.scss' 
import {Link} from 'react-router-dom'
export const Button = () => {
    return (
        <button className="Button">
            <Link className='link' to="/destination/moon">Explore</Link>
        </button>
    )
}