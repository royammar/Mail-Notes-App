

export default class NoteText extends React.Component {

    handleChange = (ev) => {

        this.props.onEditNote(this.props.note.id,ev.target.value,ev.target.name);
    }

    render() {
        return (<div  >
            <textarea  rows="10" cols="35" type="text"  name="txt" className="notes-textarea text-box notes-input"
                onChange={() => this.handleChange(event)} value={this.props.note.info.txt}></textarea>
        </div>)
    }
}

