const { NavLink,Link } = ReactRouterDOM
export default function NavBar(props) {
    return <nav className="email-nav">
        <ul>
            {/* <li><NavLink activeClassName="active" to='/emails' >Emails</NavLink></li>             */}
            <li><NavLink activeClassName="active" to='/newmail' ><div className="sideNavBar"><button>Compose</button></div></NavLink></li>
        </ul>
        <button onClick={()=>props.setFolder('starred')}>Starred</button>
        <button onClick={()=>props.setFolder('inbox')}>Inbox</button>    
        
    </nav>
}