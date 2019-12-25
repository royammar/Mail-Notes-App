const { NavLink } = ReactRouterDOM
export default function NavBar(props) {
    return <nav id='cssmenu'>
        <ul>
            <li><NavLink activeClassName="active" to='/emails' >Emails</NavLink></li>            
            <li><NavLink activeClassName="active" to='/newmail' >New Mail</NavLink></li>
        </ul>
    </nav>
}