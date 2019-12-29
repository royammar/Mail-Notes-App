import KeepService from '../services/keepService.js'
import NoteList from '../cmps/NoteList.jsx'
import Filter from '../cmps/Filter.jsx'
import NoteAdd from '../cmps/NoteAdd.jsx'
import keepService from '../services/keepService.js'


export default class KeepApp extends React.Component {

    state = {
        notes: [],
        filterBy: null,
        selectedNote: null
    }

    componentDidMount() {
        this.loadNotes();
    }

    loadNotes = () => {
        KeepService.getNotesTorender(this.state.filterBy).then(notes => {
            this.setState({ notes })
        })

    }

    onAddNote = (newNote, noteType) => {
        KeepService.createNote(newNote, noteType).then(res => this.loadNotes())
    }

    onSetFilter = (filterBy) => {
        this.setState({filterBy} , this.loadNotes);

    }

    onMarkTodoAsDone = (noteId, todoIdx) => {
        KeepService.toggleTodo(noteId, todoIdx).then(res => this.loadNotes())
    }



    onEditNote = (noteId, value, Item, Idx) => {
        console.log(noteId, value, Item, Idx);
        
        keepService.editNote(noteId, value, Item, Idx).then(notes => this.setState({ notes })
        )
    }


    onDeleteNote = (noteId) => {
        KeepService.DeleteNote(noteId).then(res => this.loadNotes())
    }

    onPinNote = (noteId) => {
        KeepService.pinNote(noteId).then(res => this.loadNotes())

    }

    handleColorChange = (noteId, color) => {

        KeepService.ChangeColor(noteId, color).then(res => this.loadNotes())

    }


    handleUrlChange = (noteId, url) => {
        KeepService.setUrlNote(noteId,url).then(res => this.loadNotes())
    }


    handleDuplicate=(noteId)=>{

        keepService.duplicateNote(noteId)
        .then(res => this.loadNotes())
    }

    render() {

        return (
            <React.Fragment>
                <NoteAdd onAddNote={this.onAddNote}></NoteAdd>
                <Filter onSetFilter={this.onSetFilter}></Filter>
                <NoteList onMarkTodoAsDone={this.onMarkTodoAsDone} notes={this.state.notes}
                    onHandleSelect={this.onHandleSelect}
                    onDeleteNote={this.onDeleteNote} onEditNote={this.onEditNote}
                    onPinNote={this.onPinNote} handleColorChange={this.handleColorChange}
                    handleUrlChange={this.handleUrlChange} handleDuplicate={this.handleDuplicate} ></NoteList>
            </React.Fragment>
        )

    }

}

