const { Link } = ReactRouterDOM
import emailService from '../services/emailService.js'


// import 'font-awesome/css/font-awesome.min.css'

export default class EmailPreview extends React.Component {
    handleClick = () => {
        let updatedEmails = emailService.changeReadState(this.props.email.id)
        updatedEmails.then(emails => this.props.updateEmails())
    }

    // handleChange=()=>{
    //     this.props.changeReadState(this.props.email.id)
    // }



    render() {
        return (<div className="emails-container">
            <button className="mark-read btn" onClick={this.handleClick}>{this.props.email.isRead ? <i className="fa fa-envelope-open"></i> : <i className="fa fa-envelope"></i>}</button>
            <Link to={`/emails/${this.props.email.id}`} key={this.props.email.id} >
                <div className="mail-preview unRead">
                    <span className={this.props.email.isRead ? "read" : "unRead"}> Subject:{this.props.email.subject}</span>
                    <div> body:{this.props.email.body}</div>
                    <span> Sent At:{this.props.email.sentAt}</span>
                </div>
            </Link>
        </div>
        )
    }
}