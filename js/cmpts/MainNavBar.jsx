const { NavLink } = ReactRouterDOM
export default function MainNavBar(props) {
    return <nav id='cssmenu'>
        <ul>
            <li>
                <NavLink activeClassName="active" to='/emails' >MailApp</NavLink>
            </li>
            <li>
                <NavLink activeClassName="active" to='/keep' >Notes</NavLink>
            </li>
        </ul>
    </nav>
}