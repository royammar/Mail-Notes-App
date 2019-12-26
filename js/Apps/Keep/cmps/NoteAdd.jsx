


export default class NoteAdd extends React.Component {

    state = {
        newNote: '',
        noteType: 'NoteText'
    }

    onSetTypeChange = (noteType) => {
        this.setState({ noteType }, this.updatePlaceHolder)

    }
    
    componentDidMount() {

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
            case 'NoteVideo':
                text = 'Enter Video URL...'
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

        return (
            <React.Fragment>
           <div>
                <form action="">
                    <input id="addnew" type="text" placeholder="add new" onChange={this.handleChange} />
                    <button onClick={() => this.onSetTypeChange('NoteImg')}>Image</button>
                    <button onClick={() => this.onSetTypeChange('NoteTodos')}>Todo</button>
                    <button onClick={() => this.onSetTypeChange('NoteText')}>Text</button>
                    <button onClick={() => this.onSetTypeChange('NoteVideo')}>Video</button>
                    <button onClick={this.onHandleSubmit}>submit</button>
                </form>
            </div>
            </React.Fragment>
        )

    }
}