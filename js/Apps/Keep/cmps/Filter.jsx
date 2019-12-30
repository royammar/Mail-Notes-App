export default class Filter extends React.Component {
    state = {
        filterBy: {
            name: '',
            NoteType: 'Note'
        }
    }
    changeInput = (ev) => {
        const field = ev.target.name;
        const value = ev.target.value;
        this.setState(prevState => ({ filterBy: { ...prevState.filterBy, [field]: value } }))
    }

    onFilterClick = () => {        
        
        this.props.onSetFilter(this.state.filterBy)
    }

    render() {
        return <div className="note-search-container">
            <div className="note-search-controller-container">
            <input className="note-search-input" type="text" placeholder="Search" value={this.state.filterBy.name}
                onChange={this.changeInput} name="name"></input>
                <select className="note-search-select" onChange={this.changeInput} name="NoteType">
                <option value="Note">All</option>
                <option value="NoteText">Text</option>
                <option value="NoteTodos">Todos</option>
                <option value="NoteImg">Image</option>
                <option value="NoteVideo">Video</option>
                <option value="NoteAudio">Audio</option>
            </select>
            <button className="note-search-button" onClick={this.onFilterClick}><img className="note-search-img" src="./img/icons8-search-48.png" /></button>
            </div>
        </div>
    }
}