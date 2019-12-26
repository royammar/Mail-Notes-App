const { Link } = ReactRouterDOM





export default class EmailPreview extends React.Component {
    
    onHandleDelete = (id) => {
        this.props.onDelete(id)
        
        // .then(res => this.setState({ book: null }))

    }

    onHandleMark=(id)=>{
        
        this.props.onChangeMark(id)
    }

    onFavoriteClick=(id)=>{        
        this.props.onFavoriteMark(id)
    }  



    render() {
        return (<div className="emails-container">
            <button onClick={() => this.onHandleDelete(this.props.email.id)} className="delete btn"><i className="fas fa-trash-alt"></i></button>
            <button className="mark-read btn" onClick={()=>this.onHandleMark(this.props.email.id)}>{this.props.email.isRead ? <i className="fas fa-envelope-open-text"></i> : <i className="fa fa-envelope"></i>}</button>
            <button className="favorite btn" onClick={()=>this.onFavoriteClick(this.props.email.id)}>{this.props.email.isFavorite ? <i className="fas fa-star"></i> : <i className="far fa-star"></i>}</button>
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