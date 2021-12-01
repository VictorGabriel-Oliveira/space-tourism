import './App.scss'
import {
    BrowserRouter as Router, 
    Routes,
    Route,
    useParams

    
  } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import {Crew} from './pages/Crew/index'
import {Destination} from './pages/Destination/index'
import { Technology } from './pages/Technology/index'
export const App = () =>{
  return(
    <div className="app">
        <Router>
          <Routes>
             
              <Route path="/home"/>
              <Route path="/crew/:name" element={<Crew/>}/>
              <Route path="/destination/:name" element={ <Destination/> }/>
              <Route path="/technology" element={ <Technology/> }/>
              <Route path="/"  element={<Home/>}/>
          </Routes>
      </Router>
    </div>
   
    
  )
}
