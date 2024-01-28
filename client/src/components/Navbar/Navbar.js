import React from 'react'
import {Link,withRouter} from 'react-router-dom'
import '../StyleSheet/Navbar.css'
const Navbar = ({history}) =>{
    const logout = () =>{
        localStorage.removeItem('token')
        localStorage.removeItem('profile')
        history.push('/login')
    }
    return(
        <>
        <nav class="navbar bg-dark">
      <h1>
        <Link to="/"><i class="fas fa-code"></i> Twitter</Link>
      </h1>
      <ul>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><button  onClick={logout}>Logout</button></li>
      </ul>
    </nav>
        </>
    )
}
export default withRouter(Navbar)
