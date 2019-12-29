import mapDynamicComponents from "../services/mapDynamicComponentes.js"
import NoteUrlEdit from "./NoteUrlEdit.jsx"


export default class NotePreivew extends React.Component {

    getComponent() {


        return mapDynamicComponents[this.props.note.type]
    }


    handleDelete = () => {
        this.props.onDeleteNote(this.props.note.id)
    }

    handlePin = () => {
        this.props.onPinNote(this.props.note.id)
    }

    onColorChange = (event) => {
        this.props.handleColorChange(this.props.note.id, event.target.value);
    }

    onDuplicateNote=()=>{
       this.props.handleDuplicate( this.props.note.id)
    }
    

    render() {
        const Cmp = this.getComponent();
    
        return (
            <React.Fragment>
                <div className='note' id={this.props.note.id} style={this.props.note.style} >
                    <div className="note-content">
                        <Cmp onMarkTodoAsDone={this.props.onMarkTodoAsDone} onEditNote={this.props.onEditNote} note={this.props.note}></Cmp>
                        <div className="note-controller">
                            <button onClick={this.handleDelete}><img className="note-controller-img" src="../../../../img/icons8-delete-bin-32.png" /></button>
                            <button onClick={this.handlePin}><img className={"note-controller-img"+"-"+this.props.note.isPinned} src="../../../../img/icons8-pin-30.png" /></button>
                            <button onClick={this.onDuplicateNote}><img className="note-controller-img" src="../../../../img/icons8-copy-150.png" /></button>
                            <div className="color-div">
                            <input className="color-input"  onChange={this.onColorChange} type="color" name="color" id="color" />
                            </div>
                          {(this.props.note.info.url) && <NoteUrlEdit note={this.props.note} handleUrlChange={this.props.handleUrlChange}></NoteUrlEdit> } 
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )

    }
}

