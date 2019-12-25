
import bookService from "../services/bookService.js";
import eventBusService from "../services/eventBusService.js";
export default class AddNewBook extends React.Component {


    state = {
        book: '',
        bookList:[]

    }
    onSearchBook = (ev) => {
        ev.preventDefault()
        bookService.getBook(this.state.book).then(result => {
            this.setState({bookList:result.data.items})
        }  )
               
    }


    onChangeInput = (ev) => {
        this.setState({book: ev.target.value })
    }



    renderList=()=>{
        
    return this.state.bookList.map((book,i)=> <li key={i}> {book.volumeInfo.title } <button onClick={()=>this.onAddBook(book)}>+</button> </li>)
        
    }

    onAddBook=(book)=>{
        bookService.addNewBook(book)
        .then(this.props.history.push('/books'))
        .then(book=>eventBusService.emit('toggleModal',book))
     
    }

    render() {
        return (
            <div>search for Book name
          <input type="text" name="name" placeholder="Book Name" onChange={this.onChangeInput} />
                <button value={this.state.book} onClick={this.onSearchBook}>Search</button>
          <ul> {this.state.bookList && this.renderList()}</ul>
            </div>)
    }
}