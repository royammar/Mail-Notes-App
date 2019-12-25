
import BooksList from '../cmps/BooksList.jsx'
import Filter from '../cmps/Filter.jsx';
import BookService from "../services/bookService.js";
export default class BookApp extends React.Component {


    state = {
        books: [],
        selectedBook: '',
        filterBy: {
            priceFrom: '',
            priceTo: Infinity,
            name: ''
        }
    }


    componentDidMount() {
        this.loadBooks()
    }


    loadBooks = () => {
        
        BookService.getBookstoRender(this.state.filterBy).then(books=> this.setState({ books}))
 
    }

    onSetFilter = (filterBy) => {
        this.setState(prevState => ({ filterBy: {...prevState.filterBy ,  ...filterBy} }), this.loadBooks);
      
    }

    onSelectBook = (book) => {

        this.setState({ selectedBook: book })


    }

    removeSelected = () => {
        this.setState({ selectedBook: null })

    }



    render() {
        return (
            <section>
                <h1>Amazonas BookStore</h1>
                    <div className="container">
                        <Filter filterBy={this.state.filterBy} onSetFilter={this.onSetFilter}></Filter>
                        <BooksList  books={this.state.books} onSelectBook={this.onSelectBook} ></BooksList>
                    </div>
                
            </section>
        )
    }
}