


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
                text = 'Enter comma seperated todos...'
                break;
            case 'NoteText':
                text = 'Enter new note...'
                break;
            case 'NoteVideo':
                text = 'Enter Video URL...'
                break;
            case 'NoteAudio':
                text = 'Enter Audio URL...'
                break;
            case 'NoteMap':
                console.log('aasdasdsf');
                text = 'Enter Location...'
                break;
            default:
                break;

        }
        document.getElementById('addnew').placeholder = text
    }

    onHandleSubmit = (ev) => {
        ev.preventDefault()
        this.props.onAddNote(this.state.newNote, this.state.noteType)
        // this.setState({newNote:''})
    }

    handleChange = (ev) => {

        this.setState({ newNote: ev.target.value })

    }



    render() {

        return (
            <React.Fragment>
                <div className="note-add-container">
                    <form className="form-container" action=""  >
                        <input className="note-add-input" id="addnew" type="text" placeholder="What's on your mind..." onChange={this.handleChange} />
                        <div className="note-add-buttons-container">
                            <button className="note-button" onClick={() => this.onSetTypeChange('NoteImg')}> <img className="note-button-img" src="../../../../img/icons8-image-50.png" /> </button>
                            <button className="note-button" onClick={() => this.onSetTypeChange('NoteTodos')}><img className="note-button-img" src="../../../../img/icon.png" /></button>
                            <button className="note-button" onClick={() => this.onSetTypeChange('NoteText')}><img className="note-button-img" src="../../../../img/icons8-text-50.png" /></button>
                            <button className="note-button" onClick={() => this.onSetTypeChange('NoteVideo')}><img className="note-button-img" src="../../../../img\icons8-play-button-50.png" /></button>
                            <button className="note-button" onClick={() => this.onSetTypeChange('NoteAudio')}><img className="note-button-img" src="../../../../img\icons8-audio-52.png" /></button>
                            <button className="note-button" onClick={() => this.onSetTypeChange('NoteMap')}><img className="note-button-img" src="../../../../img\icons8-map-64.png" /></button>
                            <button className="note-button" type="submit" onClick={this.onHandleSubmit} ><img className="note-button-img" src="../../../../img\enter.png" /></button>
                        </div>
                    </form>
                </div>
            </React.Fragment>

        )

    }


}
