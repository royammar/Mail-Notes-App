import EmailPreview from "./EmailPreview.jsx"

export default class EmailList extends React.Component {

    countReadEmails = () => {
        let readEmails = this.props.emails.filter(email => !email.isRead)
        return readEmails.length
    }

    


    render() {
        return (
            <React.Fragment>
                <div>UnRead Emails: {this.countReadEmails()}</div>
                <div className="sideNavBar"><button>Compose</button></div>                
                <div className="email-list">{this.props.emails.sort((email1,email2)=>email1.isRead-email2.isRead).map((email, i) => <EmailPreview email={email} key={i}></EmailPreview>)}</div>
            </React.Fragment>
        )
    }


}