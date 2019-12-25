
import LongTxt from '../cmps/LongTxt.jsx'
import BookService from "../services/bookService.js";
import ReviewAdd from './ReviewAdd.jsx';
export default class BookDetails extends React.Component {


    getPageCountCategory = () => {
        if (this.props.book.pageCount > 500) return 'Long reading'
        else if (this.props.book.pageCount > 200 && this.props.book.pageCount <= 500) return 'Decent Reading'
        else if (this.props.book.pageCount <= 200) return 'Light Reading'
    }

    getPublishedCategory = () => {
        if (this.props.book.publishedDate > 10) return 'Veteran Book'
        else if (this.props.book.publishedDate < 1) return 'New!'


    }

    getClassName = () => {
        return (this.props.book.listPrice.amount > 150) ? 'Red' :
            (this.props.book.listPrice.amount < 20) ? 'Green' : ''
    }

    renderAuthors() {
        return <ul>
            {this.props.book.authors.map((author, i) => <li key={i}>{author}</li>)}
        </ul>
    }


    getReviewsToRender = () => {

        return this.props.book.review.map((review, i) => <div key={review.text}>{i + 1}.{review.text} <a className="delete" onClick={() => this.props.onHandleDelete(review)}>X</a> </div>)
    }

 

    render() {
        const { book } = this.props
        return (
            <div>{
                book &&
                <ul className="book-details">
                    <div>
                        {book.listPrice.isOnSale && <div className="sale">On Sale!!!</div>}
                        <h3>Title: {book.title}</h3>
                        <img src={book.thumbnail} height="300" />
                        <li className={this.getClassName()}>Price:{book.listPrice.amount}</li>
                        <li>Id: {book.id}</li>
                        <li>Subtitle: {book.subtitle}</li>
                        <li>Authors: {this.renderAuthors()}</li>
                        <li>Published Date: {book.publishedDate} - {this.getPublishedCategory()}</li>
                        <li>Page Count: {book.pageCount} - {this.getPageCountCategory()}</li>
                        <li>Language {book.language}</li>
                        <li><LongTxt key="LongTxt" text={book.description} shortLength={50} />
                        </li>
                    </div>
                    <div className="reviews">
                        <div>Add Review<ReviewAdd book={book} onAddReview={this.props.onAddReview} /> </div>
                        <div>{book.review && <ul> Reviews: {this.getReviewsToRender()}</ul>}</div>
                    </div>
                </ul>}
                <button onClick={this.props.onBackClick}>Back</button>

            </div>
        )
    }


}