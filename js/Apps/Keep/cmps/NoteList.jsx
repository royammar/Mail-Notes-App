import NotePreview from "./NotePreview.jsx";
const { Link } = ReactRouterDOM

export default class NoteList extends React.Component {
  
 




    render() {
        return <div >
            <div className="Notes-container">
                {this.props.notes.map((note, i) => <NotePreview onMarkTodoAsDone={this.props.onMarkTodoAsDone}  onDeleteNote={this.props.onDeleteNote} key={i} note={note} onEditNote={this.props.onEditNote}  ></NotePreview>)}
            </div >
        </div>
    }
}