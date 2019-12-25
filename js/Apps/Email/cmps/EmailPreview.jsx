const { Link } = ReactRouterDOM
import emailService from '../services/emailService.js'
export default class EmailPreview extends React.Component {
    handleChange = () => {
        emailService.changeReadState(this.props.id)
    }

    render() {
        return (<div className="emails-container">
            <span><input onChange={this.handleChange} type="checkbox" /></span>
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