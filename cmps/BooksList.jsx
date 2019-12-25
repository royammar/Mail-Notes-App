import BookPreview from "./BookPreview.jsx";
const { Link } = ReactRouterDOM


export default function BookList(props) {
    return <div className="books-container">
        {props.books.map((book, i) => <Link to={`/books/${book.id}`} key={book.id} > <BookPreview key={i} book={book} onSelectBook={props.onSelectBook}></BookPreview></Link>)}
    </div >
}