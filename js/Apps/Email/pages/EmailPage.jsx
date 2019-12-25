
import emailService from "../services/emailService.js";
export default class EmailPage extends React.Component {

    state = {
        email: null
    }

    componentDidMount() {
        emailService.changeEmailToRead(this.props.match.params.id)
            .then(res => this.loadEmail())
            console.log(this.state.email);

    }
    componentDidUpdate(prevProps) {

        if (prevProps.match.params.id
            !== this.props.match.params.id) {
            this.loadEmail()
        }
    }

    loadEmail() {
        emailService.getEmailById(this.props.match.params.id)
            .then(email => this.setState({ email }))

    }


    onDelete = (id) => {
        emailService.deleteEmail(id).then(res => this.setState({ book: null })).then(res => this.props.history.push('/emails'))

    }

    render() {
        return (this.state.email && <React.Fragment>
            <div className="reademail">
                <div className="reademail-subject">{this.state.email.subject}
                    <button onClick={() => this.onDelete(this.state.email.id)} className="delete btn">Delete</button>
                </div>
                <div className="from">{this.state.email.body}</div>
            </div>

        </React.Fragment>)
    }

}




