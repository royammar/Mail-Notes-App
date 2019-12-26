export default function NoteImg(props) {
    return (<div className="noteImg" style={props.note.style}>
        <span>{props.note.title}</span>
        <div>
        <img  contenteditable="true"  src={props.note.info.url} height="200"/>
        </div>
    </div>

    )
}

