const { NavLink } = ReactRouterDOM
export default function NavBar(props) {

    function setActiveFolder(folder){
        const curFolder=props.folder
        if(folder===curFolder) return 'active-folder'
        return 'email-nav-btn'
        

    }

    return <nav className="email-nav">
        
            {/* <li><NavLink activeClassName="active" to='/emails' >Emails</NavLink></li>             */}
        <NavLink activeClassName="active" to='/newmail' ><div className="sideNavBar"><button className="email-nav-btn">Compose</button></div></NavLink>
        
            
        <button className={setActiveFolder('inbox')} onClick={()=>props.setFolder('inbox')}>Inbox</button>               
               
        <button className={setActiveFolder('starred')} onClick={()=>props.setFolder('starred')}>Starred</button>
        <button className={setActiveFolder('sent')} onClick={()=>props.setFolder('sent')}>Sent</button>    
        <button className={setActiveFolder('deleted')} onClick={()=>props.setFolder('deleted')}>Deleted</button>    
        
    </nav>
}