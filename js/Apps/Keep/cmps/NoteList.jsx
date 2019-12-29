import NotePreview from "./NotePreview.jsx";
const { Link } = ReactRouterDOM

export default class NoteList extends React.Component {






    render() {
        return <div >
            <div className="Notes-container" >
                {this.props.notes.map((note, i) => <NotePreview key={i} note={note} onMarkTodoAsDone={this.props.onMarkTodoAsDone}
                    onDeleteNote={this.props.onDeleteNote} onPinNote={this.props.onPinNote}
                    onEditNote={this.props.onEditNote}
                    handleColorChange={this.props.handleColorChange} handleUrlChange={this.props.handleUrlChange} 
                    handleDuplicate={this.props.handleDuplicate}
                    ></NotePreview>)}

            </div >
        </div>
    }
}