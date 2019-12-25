import EmailPreview from "./EmailPreview.jsx"

const { Link } = ReactRouterDOM
export default class EmailList extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className="sideNavBar"><Link to="/newmail"><button>Compose</button></Link></div>
                <div className="email-list">{this.props.emails.map((email, i) => <EmailPreview email={email} key={i}></EmailPreview>)}</div>
            </React.Fragment>
        )
    }

}

