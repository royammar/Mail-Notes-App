const { Link } = ReactRouterDOM
export default class EmailPreview extends React.Component {
    render( ){
        return (<div className="emails-container">
        <Link to={`/emails/${this.props.email.id}`} key={this.props.email.id} >{this.props.email.subject} </Link>
        </div>
        )
    }



}