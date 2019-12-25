
import emailService from "../services/emailService.js";
export default class EmailPage extends React.Component {

    state = {
        email: null
    }

    componentDidMount() {
        emailService.changeEmailToRead(this.props.match.params.id)
        .then(res=>this.loadEmail())
        // this.loadEmail()
        
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

    // onBackClick = () => {
    //     this.props.history.push('/books')
    // }

    // onAddReview = (review) => {
    //     console.log(review);

    //     BookService.addReview(review, this.state.book.id)
    //         .then(book => <li> {this.setState({ book })}</li>)
    // }

    // onHandleDelete = (review) => {

    //     BookService.deleteReview(this.state.book.id, review).then(book => this.loadBook())
    // }

    // handlechangeBook=(diff)=>{

    //     BookService.changePage(diff,this.state.book.id).then(bookIdShow=>this.props.history.push(`/books/${bookIdShow}`))

    // }
    onDelete=(id)=>{        
        emailService.deleteEmail(id).then(res=>this.setState({book:null})).then(res=>this.props.history.push('/emails'))

    }


    render() {
        return ( this.state.email && <React.Fragment>
            <div className="reademail">
               <div className="reademail-subject">{this.state.email.subject}
               <button onClick={()=>this.onDelete(this.state.email.id)} className="delete btn">Delete</button>               
               </div>
               <div>Yael</div>
               <div className="from">{this.state.email.body}</div>
            </div>
            {/* <button onClick={()=>this.handlechangeBook(1)}>next</button>
                <button onClick={()=>this.handlechangeBook(-1)}>previous</button> */}
        </React.Fragment> )
    }

}




