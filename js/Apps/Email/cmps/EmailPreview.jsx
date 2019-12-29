const { Link } = ReactRouterDOM





export default class EmailPreview extends React.Component {

    onHandleDelete = (id,folder) => {
        this.props.onDelete(id,folder)

        // .then(res => this.setState({ book: null }))

    }

    onHandleMark = (id) => {

        this.props.onChangeMark(id)
    }

    onFavoriteClick = (id) => {
        this.props.onFavoriteMark(id)
    }

    formatDate(date) {

        const options = { hour: '2-digit', minute: '2-digit' }
        const formatedDate = new Date(date)
        const today = new Date()
        const isTheSameDate=this.datesAreOnSameDay(formatedDate,today)        
        if (!isTheSameDate) return formatedDate.toLocaleDateString();
        else return formatedDate.toLocaleTimeString([], options)


    }

    datesAreOnSameDay = (first, second) => {
        return first.getFullYear() === second.getFullYear() &&
            first.getMonth() === second.getMonth() &&
            first.getDate() === second.getDate();

    }

    formatPreviewText=()=>{
        const suject=this.props.email.subject
        const body=this.props.email.body
        const mailPreview=(suject+' | '+body)
        return (mailPreview.length>50)?mailPreview.substring(0,50)+'...':mailPreview
    }




    render() {
        
        return (<div className="email-container">
            <Link className="email-link" to={`/emails/${this.props.email.id}`} key={this.props.email.id} >
                <div className="mail-preview">
                    <span className="preview-side" >Yael</span>                                      
                    <div className={this.props.email.isRead ? "read" : "unRead"}>{this.formatPreviewText()}</div>
                    <span className="preview-side"> {this.formatDate(this.props.email.sentAt)}</span>

                </div>
            </Link>
            <span className="email-actions">
                <button onClick={() => this.onHandleDelete(this.props.email.id,this.props.folder)} className="delete btn"><i className="fas fa-trash-alt"></i></button>
                <button className="mark-read btn" onClick={() => this.onHandleMark(this.props.email.id)}>{this.props.email.isRead ? <i className="fas fa-envelope-open-text"></i> : <i className="fa fa-envelope"></i>}</button>
                <button className="favorite btn" onClick={() => this.onFavoriteClick(this.props.email.id)}>{this.props.email.isFavorite ? <i className="fas fa-star"></i> : <i className="far fa-star"></i>}</button>
            </span>
        </div>
        )
    }
}