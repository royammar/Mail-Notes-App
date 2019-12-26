

export default class NoteText extends React.Component {

    handleChange = (ev) => {

        this.props.onEditNote(this.props.note.id,ev.target.value,ev.target.name);
    }

    render() {
        return (<div>
            <input type="text"  name="txt" className="text-box"
                onChange={() => this.handleChange(event)} value={this.props.note.info.txt}></input>
        </div>)
    }
}

