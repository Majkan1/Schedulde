import {Link} from 'react-router-dom'
import '../App.css'

export function HomePage(){
    return (
        <div className = "Main-page-div">
            <p className = "Main-page-invitation">Hej tutaj możesz stworzyć swój plan zajęć</p>
            <Link to = "/builder" className = "Main-page-button">Wejdź</Link>
        </div>
    )
}