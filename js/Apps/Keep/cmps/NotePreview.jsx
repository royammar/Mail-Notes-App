import mapDynamicComponents from "../services/mapDynamicComponentes.js"

export default class NotePreivew extends React.Component {


    componentDidMount() {
   

    }
    getComponent() {


        return mapDynamicComponents[this.props.note.type]
    }


    handleDelete=()=>{
        this.props.onDeleteNote(this.props.note.id)
    }

    render() {
        const Cmp = this.getComponent();
        
        return (
            <React.Fragment>
                <div className='note' id={this.props.note.id} >
                    <button  onClick={this.handleDelete}>X</button>
                    <Cmp onMarkTodoAsDone={this.props.onMarkTodoAsDone} onEditNote={this.props.onEditNote}   note={this.props.note}></Cmp>
                </div>
            </React.Fragment>
        )

    }
}