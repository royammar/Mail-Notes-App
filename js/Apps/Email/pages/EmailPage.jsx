const { Link } = ReactRouterDOM
import emailService from "../services/emailService.js";
export default class EmailPage extends React.Component {

    state = {
        email: null,

    }

    componentDidMount() {
        emailService.changeEmailToRead(this.props.match.params.id)
            .then(res => this.loadEmail())


    }
    componentDidUpdate(prevProps) {

        if (prevProps.match.params.id
            !== this.props.match.params.id) {
            this.loadEmail()
        }
    }
    componentWillUnmount() {
        console.log('email details unMount')
    }

    loadEmail() {
        emailService.getEmailById(this.props.match.params.id)
            .then(email => this.setState({ email }))
    }


    onDelete = (id) => {
        emailService.deleteEmail(id).then(res => this.setState({ email: null })).then(res => this.props.history.push('/emails'))

    }

    onReply = (id) => {
        this.setState({ isReply: true })

    }

    render() {
        return (this.state.email && <React.Fragment>
            <div className="reademail">
                <div className="reademail-subject">
                    {this.state.email.subject}
                    <span>
                        <Link to={'/newmail/' + this.state.email.id} email={this.state.email}>
                            <button onClick={this.onReply}><i className="fas fa-reply"></i></button>
                        </Link>
                        <button onClick={() => this.onDelete(this.state.email.id)} className="delete btn"><i className="fas fa-trash-alt"></i></button>
                    </span>
                </div>
                <div className="from">{this.state.email.body}</div>


            </div>

        </React.Fragment>)
    }

}




