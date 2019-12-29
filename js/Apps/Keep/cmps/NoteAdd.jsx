


export default class NoteAdd extends React.Component {

    state = {
        newNote: '',
        noteType: 'NoteText'
    }

    onSetTypeChange = (noteType) => {
        if (window.innerWidth<870) this.toggleMenu()
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
                text = 'Enter Location...'
                break;
            default:
                break;

        }
        document.getElementById('addnew').placeholder = text
    }

    onHandleSubmit = (ev) => {
        ev.preventDefault()
        // if (window.innerWidth<870) this.toggleMenu()
        this.props.onAddNote(this.state.newNote, this.state.noteType)
        this.setState({newNote:''})
        document.getElementById('addnew').value = ''
    }

    handleChange = (ev) => {
        
        this.setState({ newNote: ev.target.value })

    }

    toggleMenu=()=>{
        document.querySelector('.note-add-buttons-container').classList.toggle('menu-open');
    }


    

    render() {

        return (
            <React.Fragment>
                <div className="note-add-container">
                    <form className="form-container" action="" onSubmit={this.onHandleSubmit}  >
                    <button id="menu-btn" type="button" className="menu-btn" onClick={this.toggleMenu}>☰</button>
                        <input className="note-add-input" id="addnew" type="text" placeholder="What's on your mind..." onChange={this.handleChange} />
                        <div className="note-add-buttons-container">
                            <button type="button" className="note-button" onClick={() => this.onSetTypeChange('NoteImg')}> <img className="note-button-img" src="../../../../img/icons8-image-50.png" /> </button>
                            <button type="button" className="note-button" onClick={() => this.onSetTypeChange('NoteTodos')}><img className="note-button-img" src="../../../../img/icon.png" /></button>
                            <button type="button" className="note-button" onClick={() => this.onSetTypeChange('NoteText')}><img className="note-button-img" src="../../../../img/icons8-text-50.png" /></button>
                            <button type="button" className="note-button" onClick={() => this.onSetTypeChange('NoteVideo')}><img className="note-button-img" src="../../../../img\icons8-play-button-50.png" /></button>
                            <button type="button" className="note-button" onClick={() => this.onSetTypeChange('NoteAudio')}><img className="note-button-img" src="../../../../img\icons8-audio-52.png" /></button>
                            <button type="button" className="note-button" onClick={() => this.onSetTypeChange('NoteMap')}><img className="note-button-img" src="../../../../img\icons8-map-64.png" /></button>
                            <button className="note-button" type="submit"  onClick={this.onHandleSubmit} ><img className="note-button-img" src="../../../../img\enter.png" /></button>
                        </div>
                    </form>
                </div>
            </React.Fragment>

        )

    }


}
