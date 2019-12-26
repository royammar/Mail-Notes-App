import EmailPreview from "./EmailPreview.jsx"

// const { Link } = ReactRouterDOM
export default class EmailList extends React.Component {
   
   
    countReadEmails = () => {
        let readEmails = this.props.emails.filter(email => !email.isRead)
        return readEmails.length
    }


    render() {
        return (
            <React.Fragment>
                 <div>UnRead Emails: {this.countReadEmails()}</div>
                
                {/* <div className="email-list">{this.props.emails.map((email, i) => <EmailPreview email={email} key={i}></EmailPreview>)}</div> */}
                <div className="email-list">{this.props.emails.map((email, i) => <EmailPreview onFavoriteMark={this.props.onFavoriteMark} onChangeMark={this.props.onChangeMark} onDelete={this.props.onDelete} updateEmails={this.props.updateEmails} email={email} key={i}></EmailPreview>)} </div>
                </React.Fragment>)
 
  
}

}
