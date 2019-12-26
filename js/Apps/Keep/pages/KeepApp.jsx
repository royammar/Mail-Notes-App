import KeepService from '../services/keepService.js'
import NoteList from '../cmps/NoteList.jsx'
import Filter from  '../cmps/Filter.jsx'


export default class KeepApp extends React.Component {

    state = {
        notes: [],
        filterBy: null,
        selectedNote: ''
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
        
        console.log(newNote,noteType);

    }

    onSetFilter=()=>{
        console.log('filter');
        
    }


    onSelectNote = (note) => {

        // this.setState({ selectedBook: book })
        console.log('selected:', note);
        

    }

    render() {

        // if (!this.state.notes) return <div className="loading">Loading...</div>
        return (
            <React.Fragment>
                <NoteList notes={this.state.notes} onAddNote={this.onAddNote} goBack={this.goBack} onSelectNote={this.onSelectNote}></NoteList>
                {/* <Filter filterBy={this.state.filterBy} onSetFilter={this.onSetFilter}></Filter> */}
            </React.Fragment>
        )

    }

}