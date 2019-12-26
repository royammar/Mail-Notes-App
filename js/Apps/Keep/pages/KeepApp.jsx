import KeepService from '../services/keepService.js'
import NoteList from '../cmps/NoteList.jsx'
import Filter from  '../cmps/Filter.jsx'
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
        KeepService.getNotesTorender().then(notes => {
            this.setState({ notes })
        })

    }

    goBack = () => {
        console.log('back');

    }

    onAddNote = (newNote,noteType) => {
        KeepService.createNote(newNote,noteType).then(res=>this.loadNotes())
    }

    onSetFilter=()=>{
        console.log('filter');
        
    }

    onMarkTodoAsDone=(noteId,todoIdx)=>{
        KeepService.toggleTodo(noteId,todoIdx).then(res=>this.loadNotes())
    }



    onEditNote=(noteId,value,Item,Idx)=>{
        console.log(noteId,value,Item,Idx)
        keepService.editNote(noteId,value,Item,Idx).then(notes=>this.setState({ notes })
        )
    }



   
    onHandleSelect=()=>{
        document.getElementById(this.props.note.id).contentEditable == "true"  
        console.log(document.getElementById(this.props.note.id));
    }


    onDeleteNote=(noteId)=>{
        KeepService.DeleteNote(noteId).then(res=>this.loadNotes())
    }
    render() {

        // if (!this.state.notes) return <div className="loading">Loading...</div>
        return (
            <React.Fragment>
                <NoteAdd onAddNote={this.onAddNote}></NoteAdd>  
                <NoteList onMarkTodoAsDone={this.onMarkTodoAsDone}  notes={this.state.notes}  goBack={this.goBack} onHandleSelect={this.onHandleSelect} onDeleteNote={this.onDeleteNote} onEditNote={this.onEditNote} ></NoteList>
                {/* <Filter filterBy={this.state.filterBy} onSetFilter={this.onSetFilter}></Filter> */}
            </React.Fragment>
        )

    }

}

