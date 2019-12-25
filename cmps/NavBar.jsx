const { NavLink } = ReactRouterDOM
export default function NavBar(props) {
    return <nav id='cssmenu'>
        <ul >
            <li><NavLink activeClassName="active" to='/' >Home</NavLink></li>
            <li><NavLink activeClassName="active" to='/about'>About</NavLink></li>
            <li><NavLink activeClassName="active" to='/books' >Book List</NavLink></li>
            <li><NavLink activeClassName="active" to='/AddNewBook' >Add New Book</NavLink></li>
        </ul>
    </nav>
}