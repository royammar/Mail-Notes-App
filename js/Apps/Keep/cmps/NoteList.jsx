import NotePreview from "./NotePreview.jsx";
const { Link } = ReactRouterDOM

export default class NoteList extends React.Component {
    state = {
        newNote: '',
        noteType: 'NoteText'
    }

    onSetTypeChange = (noteType) => {
        this.setState({ noteType }, this.updatePlaceHolder)

    }

    updatePlaceHolder = () => {
        let text = ''
        switch (this.state.noteType) {
            case 'NoteImg':
                text = 'Enter image URL...'
                break;
            case 'NoteTodos':
                text = 'Enter new todo...'
                break;
            case 'NoteText':
                text = 'Enter new note...'
                break;
            default:
                break;

        }
        document.getElementById('addnew').placeholder = text
    }

    onHandleSubmit=(ev)=>{
    ev.preventDefault()
   
    this.props.onAddNote(this.state.newNote,this.state.noteType)

    }

    handleChange=(ev)=>{
        this.setState({ newNote: ev.target.value  })

    }

    render() {
        return <div >
            <div>
                <form action="">
                    <input id="addnew" type="text" placeholder="add new" onChange={this.handleChange} />
                    <button onClick={() => this.onSetTypeChange('NoteImg')}>Image</button>
                    <button onClick={() => this.onSetTypeChange('NoteTodos')}>Todo</button>
                    <button onClick={() => this.onSetTypeChange('NoteText')}>Text</button>
                    <button onClick={this.onHandleSubmit}>submit</button>
                </form>
            </div>
            <div className="Notes-container">
                {this.props.notes.map((note, i) => <Link to={`/notes/${note.id}`} key={note.id} > <NotePreview key={i} note={note} onSelectNote={this.props.onSelectNote}></NotePreview></Link>)}
            </div >
        </div>
    }
}