import BookDetails from '../cmps/BookDetails.jsx'
import BookService from "../services/bookService.js";
export default class BookPage extends React.Component {

    state = {
        book: null
    }

    componentDidMount() {
        this.loadBook()

    }

    componentDidUpdate(prevProps) {
        
        if (prevProps.match.params.id
            !== this.props.match.params.id) {
            this.loadBook()
        }
    }

    loadBook() {
        BookService.getBookById(this.props.match.params.id).then(book => this.setState({ book }))
    }

    onBackClick = () => {
        this.props.history.push('/books')
    }

    onAddReview = (review) => {
        console.log(review);

        BookService.addReview(review, this.state.book.id)
            .then(book => <li> {this.setState({ book })}</li>)
    }

    onHandleDelete = (review) => {

        BookService.deleteReview(this.state.book.id, review).then(book => this.loadBook())
    }

    handlechangeBook=(diff)=>{

        BookService.changePage(diff,this.state.book.id).then(bookIdShow=>this.props.history.push(`/books/${bookIdShow}`))
        
    }


    render() {
        return  <React.Fragment>
             <BookDetails book={this.state.book} onBackClick={this.onBackClick} onAddReview={this.onAddReview} onHandleDelete={this.onHandleDelete} ></BookDetails>
                <button onClick={()=>this.handlechangeBook(1)}>next</button>
                <button onClick={()=>this.handlechangeBook(-1)}>previous</button>
             </React.Fragment>
    }           

}




