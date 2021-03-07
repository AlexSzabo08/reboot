import React,{useState, useEffect} from 'react'

import '../css/Nav.css'
import Logo from '../img/logo.png'

export default function Nav(props) {
    const [user, setuser] = useState('')

    useEffect(() => {
        return async () => {
            let username = props.profile.getUsername()
            setuser(username) 
        }
    }, [])
    return (
        <nav>
            <img src={ Logo } height='100px'/>
            <div>{user}</div>
        </nav>
    )
}
