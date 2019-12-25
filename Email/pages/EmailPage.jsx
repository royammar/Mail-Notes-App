// import BookDetails from '../cmps/BookDetails.jsx'
import emailService from "../services/emailService";
export default class BookPage extends React.Component {

    state = {
        book: null
    }

    componentDidMount() {
        this.loadEmail()

    }

    componentDidUpdate(prevProps) {

        if (prevProps.match.params.id
            !== this.props.match.params.id) {
            this.loadEmail()
        }
    }

    loadEmail() {
        emailService.getEmailById(this.props.match.params.id).then(email => this.setState({ email }))
        // BookService.getBookById(this.props.match.params.id).then(book => this.setState({ book }))
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


    render() {
        return <React.Fragment>
            <div>{this.state.email.subject}</div>

            {/* <button onClick={()=>this.handlechangeBook(1)}>next</button>
                <button onClick={()=>this.handlechangeBook(-1)}>previous</button> */}
        </React.Fragment>
    }

}




