const { NavLink } = ReactRouterDOM
export default function NavBar(props) {
    return <nav className="email-nav">
        
            {/* <li><NavLink activeClassName="active" to='/emails' >Emails</NavLink></li>             */}
            <NavLink activeClassName="active" to='/newmail' ><div className="sideNavBar"><button className="email-nav-btn">Compose</button></div></NavLink>
        
        <button className="email-nav-btn" onClick={()=>props.setFolder('starred')}>Starred</button>
        <button className="email-nav-btn" onClick={()=>props.setFolder('inbox')}>Inbox</button>    
        <button className="email-nav-btn" onClick={()=>props.setFolder('sent')}>Sent</button>    
        <button className="email-nav-btn" onClick={()=>props.setFolder('deleted')}>deleted</button>    
        
    </nav>
}