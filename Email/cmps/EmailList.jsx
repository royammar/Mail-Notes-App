import EmailPreview from "./EmailPreview.jsx"

export default class EmailList extends React.Component {


    render() {
        return (
            <React.Fragment>
                <div className="sideNavBar"><button>Compose</button></div>
                <div className="email-list">{this.props.emails.map((email, i) => <EmailPreview email={email} key={i}></EmailPreview>)}</div>
            </React.Fragment>
        )
    }


}