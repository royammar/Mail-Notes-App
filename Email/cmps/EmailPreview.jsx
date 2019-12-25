const { Link } = ReactRouterDOM
export default class EmailPreview extends React.Component {
    render() {
        return (<div className="emails-container">
            <Link to={`/emails/${this.props.email.id}`} key={this.props.email.id} >
                <div  className="mail-preview unRead">
                    <span className={this.props.email.isRead ? "read" : "unRead"}> Subject:{this.props.email.subject}</span>
                    <div> body:{this.props.email.body}</div>
                    <span> Sent At:{this.props.email.sentAt}</span>
                </div>
            </Link>
        </div>
        )
    }



}